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
    public class CoreValueService : ICoreValueService
    {
        private readonly ICoreValueRepository _coreValueRepository;
        private readonly ICoreValueTranslationRepository _coreValueTranslationRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;
        public CoreValueService(ICoreValueRepository coreValueRepository,
            ICoreValueTranslationRepository coreValueTranslationRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> websiteResourceService
        )
        {
            _coreValueRepository = coreValueRepository;
            _coreValueTranslationRepository = coreValueTranslationRepository;
            _sharedResourceService = sharedResourceService;
            _websiteResourceService = websiteResourceService;
        }

        public async Task<SearchResult<CoreValueViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize)
        {
            var items = await _coreValueRepository.Search(tenantId, languageId, keyword, isActive, page, pageSize, out var totalRows);
            return new SearchResult<CoreValueViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvata,
            CoreValueMeta coreValueMeta)
        {
            var coreValueId = Guid.NewGuid().ToString();
            // Insert new CoreValue.
            var resultInsertCoreValue = await _coreValueRepository.Insert(new CoreValue
            {
                Id = coreValueId,
                ConcurrencyStamp = coreValueId,
                IsActive = coreValueMeta.IsActive,
                Order = coreValueMeta.Order,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName
            });

            if (resultInsertCoreValue <= 0)
                return new ActionResultResponse<string>(resultInsertCoreValue,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            #region insert Translation.

            if (coreValueMeta.Translations.Count > 0)
            {
                var resultInsertTranslation = await InsertCoreValueTranslation();
                if (resultInsertTranslation.Code <= 0)
                    return resultInsertTranslation;
            }
            #endregion

            return new ActionResultResponse<string>(1,
                _websiteResourceService.GetString("Add new core value successful."),
                string.Empty, coreValueId);


            #region Local functions

            async Task<ActionResultResponse<string>> InsertCoreValueTranslation()
            {

                var coreValueTranslations = new List<CoreValueTranslation>();
                foreach (var coreValueTranslation in coreValueMeta.Translations)
                {
                    // Check name exists.
                    var isNameExists = await _coreValueTranslationRepository.CheckExists(coreValueId, tenantId,
                        coreValueTranslation.LanguageId, coreValueTranslation.Name);
                    if (isNameExists)
                    {
                        await RollbackInsertCoreValue();
                        return new ActionResultResponse<string>(-2, _websiteResourceService.GetString(
                            "Core value name: \"{0}\" already exists.",
                            coreValueTranslation.Name));
                    }

                    var coreValueTranslationInsert = new CoreValueTranslation
                    {
                        TenantId = tenantId,
                        CoreValueId = coreValueId,
                        LanguageId = coreValueTranslation.LanguageId.Trim(),
                        Name = coreValueTranslation.Name.Trim(),
                        Description = coreValueTranslation.Description?.Trim(),
                        UnsignName = coreValueTranslation.Name.StripVietnameseChars().ToUpper()
                    };

                    coreValueTranslations.Add(coreValueTranslationInsert);
                }

                // Insert translations.
                var resultInsertTranslation = await _coreValueTranslationRepository.Inserts(coreValueTranslations);
                if (resultInsertTranslation > 0)
                    return new ActionResultResponse<string>(resultInsertCoreValue,
                        _websiteResourceService.GetString("Add new core value translation successful."), string.Empty,
                        coreValueId);

                await RollbackInsertCoreValueTranslation();
                await RollbackInsertCoreValue();
                return new ActionResultResponse<string>(-3,
                    _websiteResourceService.GetString(
                        "Can not insert new core value. Please contact with administrator."));
            }

            async Task RollbackInsertCoreValue()
            {
                await _coreValueRepository.ForceDelete(coreValueId);
            }

            async Task RollbackInsertCoreValueTranslation()
            {
                await _coreValueTranslationRepository.ForceDelete(coreValueId);
            }
            #endregion
        }

        public async Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvata,
            string coreValueId, CoreValueMeta coreValueMeta)
        {
            var info = await _coreValueRepository.GetInfo(coreValueId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Core value does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != coreValueMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _websiteResourceService.GetString("The core value already updated by other people. You can not update this core value."));


            info.IsActive = coreValueMeta.IsActive;
            info.Order = coreValueMeta.Order;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdate = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _coreValueRepository.Update(info);

            //update translate
            foreach (var coreValueTranslation in coreValueMeta.Translations)
            {
                var isNameExists = await _coreValueTranslationRepository.CheckExists(info.Id, tenantId,
                    coreValueTranslation.LanguageId, coreValueTranslation.Name);
                if (isNameExists)
                    return new ActionResultResponse(-4, _websiteResourceService.GetString("Core value name: \"{0}\" already exists.", coreValueTranslation.Name));

                var coreValueTranslationInfo =
                    await _coreValueTranslationRepository.GetInfo(tenantId, coreValueTranslation.LanguageId, coreValueId);
                if (coreValueTranslationInfo != null)
                {
                    coreValueTranslationInfo.Name = coreValueTranslation.Name.Trim();
                    coreValueTranslationInfo.Description = coreValueTranslation.Description?.Trim();
                    coreValueTranslationInfo.UnsignName = coreValueTranslation.Name.StripVietnameseChars().ToUpper();
                    await _coreValueTranslationRepository.Update(coreValueTranslationInfo);
                }
                else
                {
                    var coreValueTranslationInsert = new CoreValueTranslation
                    {
                        CoreValueId = coreValueId,
                        LanguageId = coreValueTranslation.LanguageId.Trim(),
                        Name = coreValueTranslation.Name.Trim(),
                        Description = coreValueTranslation.Description?.Trim(),
                        UnsignName = coreValueTranslation.Name.StripVietnameseChars().ToUpper()
                    };
                    await _coreValueTranslationRepository.Insert(coreValueTranslationInsert);
                }
            }
            return new ActionResultResponse(1, _websiteResourceService.GetString("Update core value successful."));
        }

        public async Task<ActionResultResponse> UpdateOrder(string tenantId, string coreValueId, int order)
        {
            var info = await _coreValueRepository.GetInfo(coreValueId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Core value does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            info.Order = order;

           var result =  await _coreValueRepository.Update(info);

            return new ActionResultResponse(result, result > 0 ? _websiteResourceService.GetString("Update core value successful.")
                 : _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string coreValueId)
        {
            var info = await _coreValueRepository.GetInfo(coreValueId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Core value does not exists. Please try again."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var result = await _coreValueRepository.Delete(coreValueId);
            await _coreValueTranslationRepository.Delete(coreValueId);
            return new ActionResultResponse(result, _websiteResourceService.GetString("Delete core value successful."));
        }

        public async Task<ActionResultResponse<CoreValueDetailViewModel>> GetDetail(string tenantId, string coreValueId)
        {
            var info = await _coreValueRepository.GetInfo(coreValueId);
            if (info == null)
                return new ActionResultResponse<CoreValueDetailViewModel>(-1, _websiteResourceService.GetString("Core value does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<CoreValueDetailViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var coreValueTranslations = await _coreValueTranslationRepository.GetsCoreValueId(coreValueId);

            var coreValueDetail = new CoreValueDetailViewModel
            {
                Id = info.Id,
                IsActive = info.IsActive,
                Order = info.Order,
                ConcurrencyStamp = info.ConcurrencyStamp,
                //CreateTime = info.CreateTime,
                //LastUpdate = info.LastUpdate,
                Translations = coreValueTranslations.Select(x => new CoreValueTranslationViewModel
                {
                    LanguageId = x.LanguageId,
                    Name = x.Name,
                    Description = x.Description
                }).ToList()
            };
            return new ActionResultResponse<CoreValueDetailViewModel>
            {
                Code = 1,
                Data = coreValueDetail
            };
        }

        public async Task<List<ValueViewModel>> GetAllActivatedCoreValue(string tenantId, string languageId)
        {
            return await _coreValueRepository.GetAllActivatedCoreValue(tenantId, languageId);
        }
    }
}
