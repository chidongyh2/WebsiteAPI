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
 public  class FaqGroupService : IFaqGroupService
    {
        private readonly IFaqGroupRepository _faqGroupRepository;
        private readonly IFaqGroupTranslationRepository _faqGroupTranslationRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;
        public FaqGroupService(IFaqGroupRepository faqGroupRepository,
            IFaqGroupTranslationRepository faqGroupTranslationRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> websiteResourceService
        )
        {
            _faqGroupRepository = faqGroupRepository;
            _faqGroupTranslationRepository = faqGroupTranslationRepository;
            _sharedResourceService = sharedResourceService;
            _websiteResourceService = websiteResourceService;

        }


        public async Task<SearchResult<FaqGroupViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize)
        {
            var items =  _faqGroupRepository.Search(tenantId, languageId, keyword, isActive, page, pageSize, out var totalRows);
            return new SearchResult<FaqGroupViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvata,
            FaqGroupMeta faqGroupMeta)
        {
            var faqGroupId = Guid.NewGuid().ToString();
            // Insert new Faq.
            var resultInsertFaqGroup = await _faqGroupRepository.Insert(new FaqGroup
            {
                Id = faqGroupId,
                ConcurrencyStamp = faqGroupId.Trim(),
                IsActive = faqGroupMeta.IsActive,
                Order=faqGroupMeta.Order,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName
            });

            if (resultInsertFaqGroup <= 0)
                return new ActionResultResponse<string>(resultInsertFaqGroup,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            #region insert Faq Group Translation.

            if (faqGroupMeta.Translations.Count > 0)
            {
                var resultInsertTranslation = await InsertFaqGroupTranslation();
                if (resultInsertTranslation.Code <= 0)
                    return resultInsertTranslation;
            }
            #endregion

            return new ActionResultResponse<string>(1,
                _websiteResourceService.GetString("Add new Faq group successful."),
                string.Empty, faqGroupId);


            #region Local functions

            async Task<ActionResultResponse<string>> InsertFaqGroupTranslation()
            {

                var faqGroupTranslations = new List<FaqGroupTranslation>();
                foreach (var faqGroupTranslation in faqGroupMeta.Translations)
                {
                    // Check name exists.
                    var isNameExists = await _faqGroupTranslationRepository.CheckExists(faqGroupId, tenantId,
                        faqGroupTranslation.LanguageId, faqGroupTranslation.Name);
                    if (isNameExists)
                    {
                        await RollbackInsertFaqGroup();
                        return new ActionResultResponse<string>(-2, _websiteResourceService.GetString(
                            "Faq group name: \"{0}\" already exists.",
                            faqGroupTranslation.Name));
                    }

                    var FaqGroupTranslationInsert = new FaqGroupTranslation
                    {
                        TenantId = tenantId,
                        FaqGroupId = faqGroupId,
                        LanguageId = faqGroupTranslation.LanguageId.Trim(),
                        Name = faqGroupTranslation.Name.Trim(),
                        Description = faqGroupTranslation.Description?.Trim(),
                        UnsignName = faqGroupTranslation.Name.StripVietnameseChars().ToUpper()
                    };

                    faqGroupTranslations.Add(FaqGroupTranslationInsert);
                }

                // Insert Faq translations.
                var resultInsertTranslation = await _faqGroupTranslationRepository.Inserts(faqGroupTranslations);
                if (resultInsertTranslation > 0)
                    return new ActionResultResponse<string>(resultInsertFaqGroup,
                        _websiteResourceService.GetString("Add new faq group translation successful."), string.Empty,
                        faqGroupId);

                await RollbackInsertFaqGroupTranslation();
                await RollbackInsertFaqGroup();
                return new ActionResultResponse<string>(-3,
                    _websiteResourceService.GetString(
                        "Can not insert new faq group. Please contact with administrator."));
            }

            async Task RollbackInsertFaqGroup()
            {
                await _faqGroupRepository.ForceDelete(faqGroupId);
            }

            async Task RollbackInsertFaqGroupTranslation()
            {
                await _faqGroupTranslationRepository.ForceDelete(faqGroupId);
            }
            #endregion
        }

        public async Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvata,
            string faqGroupId, FaqGroupMeta faqGroupMeta)
        {
            var info = await _faqGroupRepository.GetInfo(faqGroupId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Faq group does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != faqGroupMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _websiteResourceService.GetString("The Faq group already updated by other people. You can not update this Faq group."));

            info.IsActive = faqGroupMeta.IsActive;
            info.Order = faqGroupMeta.Order;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdate = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _faqGroupRepository.Update(info);

            //udpate translate
            foreach (var faqGroupTranslation in faqGroupMeta.Translations)
            {
                var isNameExists = await _faqGroupTranslationRepository.CheckExists(info.Id, tenantId,
                    faqGroupTranslation.LanguageId, faqGroupTranslation.Name);
                if (isNameExists)
                    return new ActionResultResponse(-4, _websiteResourceService.GetString("Faq group name: \"{0}\" already exists.", faqGroupTranslation.Name));

                var FaqGroupTranslationInfo =
                    await _faqGroupTranslationRepository.GetInfo(tenantId, faqGroupTranslation.LanguageId, faqGroupId);
                if (FaqGroupTranslationInfo != null)
                {
                    FaqGroupTranslationInfo.Name = faqGroupTranslation.Name.Trim();
                    FaqGroupTranslationInfo.Description = faqGroupTranslation.Description?.Trim();
                    FaqGroupTranslationInfo.UnsignName = faqGroupTranslation.Name.StripVietnameseChars().ToUpper();
                    await _faqGroupTranslationRepository.Update(FaqGroupTranslationInfo);
                }
                else
                {
                    var faqGroupTranslationInsert = new FaqGroupTranslation
                    {
                        FaqGroupId = faqGroupId,
                        LanguageId = faqGroupTranslation.LanguageId.Trim(),
                        Name = faqGroupTranslation.Name.Trim(),
                        Description = faqGroupTranslation.Description?.Trim(),
                        UnsignName = faqGroupTranslation.Name.StripVietnameseChars().ToUpper()
                    };
                    await _faqGroupTranslationRepository.Insert(faqGroupTranslationInsert);
                }
            }
            return new ActionResultResponse(1, _websiteResourceService.GetString("Update faq group successful."));
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string FaqGroupId)
        {
            var info = await _faqGroupRepository.GetInfo(FaqGroupId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Faq group does not exists. Please try again."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var result = await _faqGroupRepository.Delete(FaqGroupId);
            await _faqGroupTranslationRepository.Delete(FaqGroupId);
            return new ActionResultResponse(result, _websiteResourceService.GetString("Delete Faq group successful."));
        }

        public async Task<ActionResultResponse<FaqGroupDetailViewModel>> GetDetail(string tenantId, string FaqGroupId)
        {
            var info = await _faqGroupRepository.GetInfo(FaqGroupId);
            if (info == null)
                return new ActionResultResponse<FaqGroupDetailViewModel>(-1, _websiteResourceService.GetString("Faq group does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<FaqGroupDetailViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var FaqGroupTranslations = await _faqGroupTranslationRepository.GetsFaqId(FaqGroupId);

            var FaqGroupDetail = new FaqGroupDetailViewModel
            {
                Id = info.Id,
                IsActive = info.IsActive,
                Order = info.Order,
                ConcurrencyStamp = info.ConcurrencyStamp.Trim(),
                CreateTime = info.CreateTime,
                LastUpdate = info.LastUpdate,
                Translations = FaqGroupTranslations.Select(x => new FaqGroupTranslationViewModel
                {
                    LanguageId = x.LanguageId,
                    Name = x.Name,
                    Description = x.Description
                }).ToList()
            };
            return new ActionResultResponse<FaqGroupDetailViewModel>
            {
                Code = 1,
                Data = FaqGroupDetail
            };
        }
    }
}
