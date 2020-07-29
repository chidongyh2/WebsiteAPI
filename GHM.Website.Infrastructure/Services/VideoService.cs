using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.Resources;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Constants;
using Microsoft.Extensions.Configuration;
namespace GHM.Website.Infrastructure.Services
{
    public class VideoService : IVideoService
    {
        private readonly IVideoRepository _videoRepository;
        private readonly IVideoTranslationRepository _videoTranslationRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;
        private readonly IConfiguration _configuration;
        public VideoService(IVideoRepository videoRepository,
            IVideoTranslationRepository videoTranslationRepository,
          IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> websiteResourceService,
            IConfiguration configuration
            )
        {
            _videoRepository = videoRepository;
            _videoTranslationRepository = videoTranslationRepository;
            _sharedResourceService = sharedResourceService;
            _websiteResourceService = websiteResourceService;
            _configuration = configuration;
        }

        public async Task<SearchResult<VideoViewModel>> Search(string tenantId, string languageId, string keyword, VideoType? type, bool? isActive, int page, int pageSize)
        {
            var items = await _videoRepository.Search(tenantId, languageId, keyword, type, isActive, page, pageSize, out var totalRows);
            return new SearchResult<VideoViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }
        public async Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvata, VideoMeta videoMeta)
        {
            var videoId = Guid.NewGuid().ToString();
            // Insert new video.
            var video = new Video
            {
                Id = videoId,
                AlbumId = videoMeta.AlbumId,
                ConcurrencyStamp = videoId,
                Thumbnail = videoMeta.Thumbnail,
                Url = videoMeta.Url,
                Order = videoMeta.Order,
                Type = videoMeta.Type,
                VideoLinkId = videoMeta.VideoLinkId,
                IsActive = videoMeta.IsActive,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName
            };

            if (videoMeta.IsHomePage.HasValue)
            {
                video.IsHomePage = videoMeta.IsHomePage.Value;
                video.LastUpdateIsHomePage = DateTime.Now;
            }

            var resultInsertVideo = await _videoRepository.Insert(video);
            if (resultInsertVideo <= 0)
                return new ActionResultResponse<string>(resultInsertVideo,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            #region insert video Translation.

            if (videoMeta.Translations.Count > 0)
            {
                var resultInsertTranslation = await InsertVideoTranslation();
                if (resultInsertTranslation.Code <= 0)
                    return resultInsertTranslation;
            }
            #endregion

            return new ActionResultResponse<string>(1,
                _websiteResourceService.GetString("Add new video successful."),
                string.Empty, videoId);


            #region Local functions

            async Task<ActionResultResponse<string>> InsertVideoTranslation()
            {
                var apiUrls = _configuration.GetApiUrl();
                if (apiUrls == null)
                    return new ActionResultResponse<string>(-5,
                        _sharedResourceService.GetString(
                            "Missing some configuration. Please contact with administrator."));

                var videoTranslations = new List<VideoTranslation>();
                var videoTags = new List<TagSubjectViewModel>();
                foreach (var videoTranslation in videoMeta.Translations)
                {
                    // Check name exists.
                    var isNameExists = await _videoTranslationRepository.CheckExists(videoId, tenantId,
                        videoTranslation.LanguageId, videoTranslation.Title);
                    if (isNameExists)
                    {
                        await RollbackInsertVideo();
                        return new ActionResultResponse<string>(-2, _websiteResourceService.GetString(
                            "Video name: \"{0}\" already exists.",
                            videoTranslation.Title));
                    }

                    var videoTranslationInsert = new VideoTranslation
                    {
                        TenantId = tenantId,
                        VideoId = videoId,
                        LanguageId = videoTranslation.LanguageId.Trim(),
                        Title = videoTranslation.Title.Trim(),
                        Description = videoTranslation.Description?.Trim(),
                        UnsignName = videoTranslation.Title.StripVietnameseChars().ToUpper()
                    };

                    videoTranslations.Add(videoTranslationInsert);

                    var videoTagInsert = new TagSubjectViewModel
                    {
                        TenantId = tenantId,
                        CreatorId = creatorId,
                        CreatorFullName = creatorFullName,
                        CreatorAvata = creatorAvata,
                        Type = TagType.Video,
                        SubjectId = videoId,
                        LanguageId = videoTranslation.LanguageId.Trim(),
                        Tags = videoTranslation.Tags
                    };
                    videoTags.Add(videoTagInsert);
                }
                var resultTag = await new HttpClientService()
                    .PostAsync<ActionResultResponse>($"{apiUrls.CoreApiUrl}/tags", videoTags);

                // Insert video translations.
                var resultInsertTranslation = await _videoTranslationRepository.Inserts(videoTranslations);
                if (resultInsertTranslation > 0)
                    return new ActionResultResponse<string>(1,
                        _websiteResourceService.GetString("Add new video translation successful."), string.Empty,
                        videoId);

                await RollbackInsertVideoTranslation();
                await RollbackInsertVideo();
                return new ActionResultResponse<string>(-3,
                    _websiteResourceService.GetString(
                        "Can not insert new video. Please contact with administrator."));


            }

            async Task RollbackInsertVideo()
            {
                await _videoRepository.ForceDelete(videoId);
            }

            async Task RollbackInsertVideoTranslation()
            {
                await _videoTranslationRepository.ForceDelete(videoId);
            }
            #endregion
        }

        public async Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvata, string videoId, VideoMeta videoMeta)
        {
            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls == null)
                return new ActionResultResponse<string>(-5,
                    _sharedResourceService.GetString(
                        "Missing some configuration. Please contact with administrator."));
            var videoTags = new List<TagSubjectViewModel>();

            var info = await _videoRepository.GetInfo(videoId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Video does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != videoMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _websiteResourceService.GetString("The video already updated by other people. You can not update this video."));

            info.AlbumId = videoMeta.AlbumId;
            info.Thumbnail = videoMeta.Thumbnail;
            info.Url = videoMeta.Url;
            info.VideoLinkId = videoMeta.VideoLinkId;
            info.Type = videoMeta.Type;
            info.Order = videoMeta.Order;
            info.IsActive = videoMeta.IsActive;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdate = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            if (videoMeta.IsHomePage.HasValue)
            {
                info.IsHomePage = videoMeta.IsHomePage.Value;
                info.LastUpdateIsHomePage = DateTime.Now;
            }
            //udpate translate
            foreach (var videoTranslation in videoMeta.Translations)
            {
                var isNameExists = await _videoTranslationRepository.CheckExists(info.Id, tenantId,
                    videoTranslation.LanguageId, videoTranslation.Title);
                if (isNameExists)
                    return new ActionResultResponse(-4, _websiteResourceService.GetString("Video name: \"{0}\" already exists.", videoTranslation.Title));

                var videoTranslationInfo =
                    await _videoTranslationRepository.GetInfo(info.Id, videoTranslation.LanguageId);
                if (videoTranslationInfo != null)
                {
                    videoTranslationInfo.Title = videoTranslation.Title.Trim();
                    videoTranslationInfo.Description = videoTranslation.Description?.Trim();
                    videoTranslationInfo.UnsignName = videoTranslation.Title.StripVietnameseChars().ToUpper();
                    await _videoTranslationRepository.Update(videoTranslationInfo);
                }
                else
                {
                    var videoTranslationInsert = new VideoTranslation
                    {
                        VideoId = videoId,
                        LanguageId = videoTranslation.LanguageId.Trim(),
                        Title = videoTranslation.Title.Trim(),
                        Description = videoTranslation.Description?.Trim(),
                        UnsignName = videoTranslation.Title.StripVietnameseChars().ToUpper()
                    };
                    await _videoTranslationRepository.Insert(videoTranslationInsert);
                }

                var videoTagInsert = new TagSubjectViewModel
                {
                    TenantId = tenantId,
                    CreatorId = lastUpdateUserId,
                    CreatorFullName = lastUpdateFullName,
                    CreatorAvata = lastUpdateAvata,
                    Type = TagType.Video,
                    SubjectId = videoId,
                    LanguageId = videoTranslation.LanguageId.Trim(),
                    Tags = videoTranslation.Tags
                };
                videoTags.Add(videoTagInsert);
            }

            var resultTag = await new HttpClientService()
                .PostAsync<ActionResultResponse>($"{apiUrls.CoreApiUrl}/tags", videoTags);

            return new ActionResultResponse(1, _websiteResourceService.GetString("Update video successful."));

        }

        public async Task<ActionResultResponse> Delete(string tenantId, string videoId)
        {
            var info = await _videoRepository.GetInfo(videoId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Video does not exists. Please try again."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var result = await _videoRepository.Delete(videoId);
            await _videoTranslationRepository.Delete(videoId);
            return new ActionResultResponse(result, _websiteResourceService.GetString("Delete video successful."));
        }

        public async Task<ActionResultResponse<VideoDetailViewModel>> GetDetail(string tenantId, string videoId)
        {
            var info = await _videoRepository.GetInfo(videoId);
            if (info == null)
                return new ActionResultResponse<VideoDetailViewModel>(-1, _websiteResourceService.GetString("Video does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<VideoDetailViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var apiUrls = _configuration.GetApiUrl();
            if (apiUrls == null)
                return new ActionResultResponse<VideoDetailViewModel>(-3,
                    _sharedResourceService.GetString(
                        "Missing some configuration. Please contact with administrator."));

            var resultTag = await new HttpClientService()
                .GetAsync<List<SubjectTagViewModel>>($"{apiUrls.CoreApiUrl}/tags/{tenantId}/{videoId}");


            var videoTranslations = await _videoTranslationRepository.GetsVideoId(videoId);

            var videoDetail = new VideoDetailViewModel
            {
                Id = info.Id,
                AlbumId = info.AlbumId,
                Thumbnail = info.Thumbnail,
                Url = info.Url,
                Order = info.Order,
                Type = info.Type,
                VideoLinkId = info.VideoLinkId,
                IsActive = info.IsActive,
                ConcurrencyStamp = info.ConcurrencyStamp,
                IsHomePage = info.IsHomePage,
                LastUpdateIsHomePage = info.LastUpdateIsHomePage,

                VideoTranslations = videoTranslations.Select(x => new VideoTranslationViewModel
                {
                    LanguageId = x.LanguageId,
                    Title = x.Title,
                    Description = x.Description,
                    Tags = resultTag?.Where(t => t.LanguageId == x.LanguageId).ToList()
                }).ToList()
            };
            return new ActionResultResponse<VideoDetailViewModel>
            {
                Code = 1,
                Data = videoDetail
            };
        }

        public async Task<List<VideoViewModel>> ListTopVideo(string tenantId, string languageId, int selectTop)
        {
            return await _videoRepository.ListTopVideo(tenantId, languageId, selectTop);
        }

        public async Task<SearchResult<VideoViewModel>> ListVideo(string tenantId, string languageId, string albumId, int page, int pageSize)
        {
            var items = await _videoRepository.ListVideo(tenantId, languageId, albumId, page, pageSize, out var totalRows);
            return new SearchResult<VideoViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse<VideoViewModel>> GetDetail(string tenantId, string languageId, string id)
        {
            var result = await _videoRepository.GetInfo(tenantId, languageId, id);
            return new ActionResultResponse<VideoViewModel>
            {
                Data = result,
            };
        }

        public async Task<ActionResultResponse> UpdateStatus(string tenantId, string id, bool isActive)
        {
            var info = await _videoRepository.GetInfo(tenantId, id);
            if (info == null)
                return new ActionResultResponse<VideoDetailViewModel>(-1, _websiteResourceService.GetString("Video does not exists."));

            info.IsActive = isActive;
            var result = await _videoRepository.Update(info);

            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse(result, _websiteResourceService.GetString("Update success"));
        }

        public async Task<ActionResultResponse> UpdateIsHomePage(string tenantId, string id, bool isHomePage)
        {
            var info = await _videoRepository.GetInfo(tenantId, id);
            if (info == null)
                return new ActionResultResponse<VideoDetailViewModel>(-1, _websiteResourceService.GetString("Video does not exists."));

            info.IsHomePage = isHomePage;
            var result = await _videoRepository.Update(info);

            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse(result, _websiteResourceService.GetString("Update success"));
        }
    }
}
