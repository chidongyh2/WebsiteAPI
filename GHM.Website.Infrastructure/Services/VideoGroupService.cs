using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.Resources;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Constants;
using Microsoft.Extensions.Configuration;
namespace GHM.Website.Infrastructure.Services
{
    public class VideoGroupService : IVideoGroupService
    {
        private readonly IVideoGroupRepository _videoGroupRepository;
        private readonly IVideoGroupTranslationRepository _videoGroupTranslationRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;
        public VideoGroupService(IVideoGroupRepository videoGroupRepository,
            IVideoGroupTranslationRepository videoGroupTranslationRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> websiteResourceService
        )
        {
            _videoGroupRepository = videoGroupRepository;
            _videoGroupTranslationRepository = videoGroupTranslationRepository;
            _sharedResourceService = sharedResourceService;
            _websiteResourceService = websiteResourceService;

        }


        public async Task<SearchResult<VideoGroupViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize)
        {
            var items = await _videoGroupRepository.Search(tenantId, languageId, keyword, isActive, page, pageSize, out var totalRows);
            return new SearchResult<VideoGroupViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvata,
            VideoGroupMeta videoGroupMeta)
        {
            var videoGroupId = Guid.NewGuid().ToString();
            // Insert new video.
            var resultInsertVideoGroup = await _videoGroupRepository.Insert(new VideoGroup
            {
                Id = videoGroupId,
                ConcurrencyStamp = videoGroupId,
                IsActive = videoGroupMeta.IsActive,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName
            });

            if (resultInsertVideoGroup <= 0)
                return new ActionResultResponse<string>(resultInsertVideoGroup,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            #region insert video Group Translation.

            if (videoGroupMeta.VideoGroupTranslations.Count > 0)
            {
                var resultInsertTranslation = await InsertVideoGroupTranslation();
                if (resultInsertTranslation.Code <= 0)
                    return resultInsertTranslation;
            }
            #endregion

            return new ActionResultResponse<string>(1,
                _websiteResourceService.GetString("Add new video group successful."),
                string.Empty, videoGroupId);


            #region Local functions

            async Task<ActionResultResponse<string>> InsertVideoGroupTranslation()
            {

                var videoGroupTranslations = new List<VideoGroupTranslation>();
                foreach (var videoGroupTranslation in videoGroupMeta.VideoGroupTranslations)
                {
                    // Check name exists.
                    var isNameExists = await _videoGroupTranslationRepository.CheckExists(videoGroupId, tenantId,
                        videoGroupTranslation.LanguageId, videoGroupTranslation.Name);
                    if (isNameExists)
                    {
                        await RollbackInsertVideoGroup();
                        return new ActionResultResponse<string>(-2, _websiteResourceService.GetString(
                            "Video group name: \"{0}\" already exists.",
                            videoGroupTranslation.Name));
                    }

                    var videoGroupTranslationInsert = new VideoGroupTranslation
                    {
                        TenantId = tenantId,
                        VideoGroupId = videoGroupId,
                        LanguageId = videoGroupTranslation.LanguageId.Trim(),
                        Name = videoGroupTranslation.Name.Trim(),
                        Description = videoGroupTranslation.Description?.Trim(),
                        UnsignName = videoGroupTranslation.Name.StripVietnameseChars().ToUpper()
                    };

                    videoGroupTranslations.Add(videoGroupTranslationInsert);
                }

                // Insert video translations.
                var resultInsertTranslation = await _videoGroupTranslationRepository.Inserts(videoGroupTranslations);
                if (resultInsertTranslation > 0)
                    return new ActionResultResponse<string>(resultInsertVideoGroup,
                        _websiteResourceService.GetString("Add new video group translation successful."), string.Empty,
                        videoGroupId);

                await RollbackInsertVideoGroupTranslation();
                await RollbackInsertVideoGroup();
                return new ActionResultResponse<string>(-3,
                    _websiteResourceService.GetString(
                        "Can not insert new video group. Please contact with administrator."));
            }

            async Task RollbackInsertVideoGroup()
            {
                await _videoGroupRepository.ForceDelete(videoGroupId);
            }

            async Task RollbackInsertVideoGroupTranslation()
            {
                await _videoGroupTranslationRepository.ForceDelete(videoGroupId);
            }
            #endregion
        }

        public async Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvata,
            string videoGroupId, VideoGroupMeta videoGroupMeta)
        {
        var info = await _videoGroupRepository.GetInfo(videoGroupId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Video group does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != videoGroupMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _websiteResourceService.GetString("The video group already updated by other people. You can not update this video group."));

          
            info.IsActive = videoGroupMeta.IsActive;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdate = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _videoGroupRepository.Update(info);

            //udpate translate
            foreach (var videoGroupTranslation in videoGroupMeta.VideoGroupTranslations)
            {
                var isNameExists = await _videoGroupTranslationRepository.CheckExists(info.Id, tenantId,
                    videoGroupTranslation.LanguageId, videoGroupTranslation.Name);
                if (isNameExists)
                    return new ActionResultResponse(-4, _websiteResourceService.GetString("Video group name: \"{0}\" already exists.", videoGroupTranslation.Name));

                var videoGroupTranslationInfo =
                    await _videoGroupTranslationRepository.GetInfo(tenantId, videoGroupTranslation.LanguageId,videoGroupId);
                if (videoGroupTranslationInfo != null)
                {
                    videoGroupTranslationInfo.Name = videoGroupTranslation.Name.Trim();
                    videoGroupTranslationInfo.Description = videoGroupTranslation.Description?.Trim();
                    videoGroupTranslationInfo.UnsignName = videoGroupTranslation.Name.StripVietnameseChars().ToUpper();
                    await _videoGroupTranslationRepository.Update(videoGroupTranslationInfo);
                }
                else
                {
                    var videoGroupTranslationInsert = new VideoGroupTranslation
                    {
                        VideoGroupId = videoGroupId,
                        LanguageId = videoGroupTranslation.LanguageId.Trim(),
                        Name = videoGroupTranslation.Name.Trim(),
                        Description = videoGroupTranslation.Description?.Trim(),
                        UnsignName = videoGroupTranslation.Name.StripVietnameseChars().ToUpper()
                    };
                    await _videoGroupTranslationRepository.Insert(videoGroupTranslationInsert);
                }
            }
            return new ActionResultResponse(1, _websiteResourceService.GetString("Update video group successful."));
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string videoGroupId)
        {
            var info = await _videoGroupRepository.GetInfo(videoGroupId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Video group does not exists. Please try again."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var result = await _videoGroupRepository.Delete(videoGroupId);
            await _videoGroupTranslationRepository.Delete(videoGroupId);
            return new ActionResultResponse(result, _websiteResourceService.GetString("Delete video group successful."));
        }

        public async Task<ActionResultResponse<VideoGroupDetailViewModel>> GetDetail(string tenantId, string videoGroupId)
        {
            var info = await _videoGroupRepository.GetInfo(videoGroupId);
            if (info == null)
                return new ActionResultResponse<VideoGroupDetailViewModel>(-1, _websiteResourceService.GetString("Video group does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<VideoGroupDetailViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var videoGroupTranslations = await _videoGroupTranslationRepository.GetsVideoId(videoGroupId);

            var videoGroupDetail = new VideoGroupDetailViewModel
            {
                Id = info.Id,
                IsActive = info.IsActive,
                ConcurrencyStamp = info.ConcurrencyStamp,
                CreateTime = info.CreateTime,
                LastUpdate = info.LastUpdate,
                VideoGroupTranslations = videoGroupTranslations.Select(x => new VideoGroupTranslationViewModel
                {
                    LanguageId = x.LanguageId,
                    Name = x.Name,
                    Description = x.Description
                }).ToList()
            };
            return new ActionResultResponse<VideoGroupDetailViewModel>
            {
                Code = 1,
                Data = videoGroupDetail
            };
        }
    }
}
