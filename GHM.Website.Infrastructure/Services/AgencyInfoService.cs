﻿using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.Resources;
using GHM.Website.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Website.Infrastructure.Services
{
    public class AgencyInfoService : IAgencyInfoService
    {

        private readonly IAgencyInfoRepository _agencyInfoRepository;
        private readonly IAgencyInfoTranslationRepository _agencyInfoTranslationRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;
        public AgencyInfoService(IAgencyInfoRepository agencyInfoRepository,
          IAgencyInfoTranslationRepository agencyInfoTranslationRepository,
          IResourceService<SharedResource> sharedResourceService,
          IResourceService<GhmWebsiteResource> websiteResourceService
        )
        {
            _agencyInfoRepository = agencyInfoRepository;
            _agencyInfoTranslationRepository = agencyInfoTranslationRepository;
            _sharedResourceService = sharedResourceService;
            _websiteResourceService = websiteResourceService;

        }


        public async Task<SearchResult<AgencyInfoViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize)
        {
            var items = await _agencyInfoRepository.Search(tenantId, languageId, keyword, isActive, page, pageSize, out var totalRows);
            return new SearchResult<AgencyInfoViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvata,
          AgencyInfoMeta agencyInfoMeta)
        {
            var agencyInfoId = Guid.NewGuid().ToString();

            // Insert new AgencyInfo.
            var resultInsertAgencyInfo = await _agencyInfoRepository.Insert(new AgencyInfo
            {
                Id = agencyInfoId,
                ConcurrencyStamp = agencyInfoId,
                Email = agencyInfoMeta.Email?.Trim(),
                PhoneNumber = agencyInfoMeta.PhoneNumber?.Trim(),
                Website = agencyInfoMeta.Website?.Trim(),
                IdCard = agencyInfoMeta.IdCard?.Trim(),
                IdCardDate = agencyInfoMeta.IdCardDate,
                ProvinceId = agencyInfoMeta.ProvinceId,
                DistrictId = agencyInfoMeta.DistrictId,
                Length = agencyInfoMeta.Length,
                Width = agencyInfoMeta.Width,
                Height = agencyInfoMeta.Height,
                TotalArea = agencyInfoMeta.TotalArea,
                StartTime = agencyInfoMeta.StartTime,
                GoogleMap = agencyInfoMeta.GoogleMap?.Trim(),
                IsShow = agencyInfoMeta.IsShow,
                Order = agencyInfoMeta.Order,
                IsActive = agencyInfoMeta.IsActive,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName
            });

            if (resultInsertAgencyInfo <= 0)
                return new ActionResultResponse<string>(resultInsertAgencyInfo,
                  _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            #region insert AgencyInfo Translation.

            if (agencyInfoMeta.Translations.Count > 0)
            {
                var resultInsertTranslation = await InsertAgencyInfoTranslation();
                if (resultInsertTranslation.Code <= 0)
                    return resultInsertTranslation;
            }
            #endregion

            return new ActionResultResponse<string>(1,
              _websiteResourceService.GetString("Add new agency info successful."),
              string.Empty, agencyInfoId);


            #region Local functions

            async Task<ActionResultResponse<string>> InsertAgencyInfoTranslation()
            {

                var agencyInfoTranslations = new List<AgencyInfoTranslation>();
                foreach (var agencyInfoTranslation in agencyInfoMeta.Translations)
                {
                    // Check name exists.
                    var isNameExists = await _agencyInfoTranslationRepository.CheckExists(agencyInfoId, tenantId,
                      agencyInfoTranslation.LanguageId, agencyInfoTranslation.AgencyName);
                    if (isNameExists)
                    {
                        await RollbackInsertAgencyInfo();
                        return new ActionResultResponse<string>(-2, _websiteResourceService.GetString(
                          "Name: \"{0}\" already exists.",
                          agencyInfoTranslation.AgencyName));
                    }

                    var agencyInfoTranslationInsert = new AgencyInfoTranslation
                    {
                        TenantId = tenantId,
                        AgencyInfoId = agencyInfoId,
                        LanguageId = agencyInfoTranslation.LanguageId.Trim(),
                        AgencyName = agencyInfoTranslation.AgencyName?.Trim(),
                        FullName = agencyInfoTranslation.FullName?.Trim(),
                        UnsingName = $"{agencyInfoTranslation.AgencyName.Trim()} {agencyInfoTranslation.FullName} ".StripVietnameseChars().ToLower(),
                        IdCardAddress = agencyInfoTranslation.IdCardAddress?.Trim(),
                        Address = agencyInfoTranslation.Address?.Trim(),
                        AddressRegistered = agencyInfoTranslation.AddressRegistered?.Trim(),
                        ProvinceName = agencyInfoMeta.ProvinceName?.Trim(),
                        DistrictName = agencyInfoMeta.DistrictName?.Trim()
                    };

                    agencyInfoTranslations.Add(agencyInfoTranslationInsert);
                }

                // Insert Faq translations.
                var resultInsertTranslation = await _agencyInfoTranslationRepository.Inserts(agencyInfoTranslations);
                if (resultInsertTranslation > 0)
                    return new ActionResultResponse<string>(resultInsertAgencyInfo,
                      _websiteResourceService.GetString("Add new agency info translation successful."), string.Empty,
                      agencyInfoId);

                await RollbackInsertAgencyInfoTranslation();
                await RollbackInsertAgencyInfo();
                return new ActionResultResponse<string>(-3,
                  _websiteResourceService.GetString(
                    "Can not insert new agency info . Please contact with administrator."));
            }

            async Task RollbackInsertAgencyInfo()
            {
                await _agencyInfoRepository.ForceDelete(agencyInfoId);
            }

            async Task RollbackInsertAgencyInfoTranslation()
            {
                await _agencyInfoTranslationRepository.ForceDelete(agencyInfoId);
            }
            #endregion
        }

        public async Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvata,
          string agencyInfoId, AgencyInfoMeta agencyInfoMeta)
        {
            var info = await _agencyInfoRepository.GetInfo(agencyInfoId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Agency info does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != agencyInfoMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _websiteResourceService.GetString("The agency info already updated by other people. You can not update this agency info ."));


            info.Email = agencyInfoMeta.Email?.Trim();
            info.PhoneNumber = agencyInfoMeta.PhoneNumber?.Trim();
            info.Website = agencyInfoMeta.Website?.Trim();
            info.IdCard = agencyInfoMeta.IdCard?.Trim();
            info.IdCardDate = agencyInfoMeta.IdCardDate;
            info.ProvinceId = agencyInfoMeta.ProvinceId;
            info.DistrictId = agencyInfoMeta.DistrictId;
            info.Length = agencyInfoMeta.Length;
            info.Width = agencyInfoMeta.Width;
            info.Height = agencyInfoMeta.Height;
            info.TotalArea = agencyInfoMeta.TotalArea;
            info.StartTime = agencyInfoMeta.StartTime;
            info.GoogleMap = agencyInfoMeta.GoogleMap?.Trim();
            info.IsShow = agencyInfoMeta.IsShow;
            info.IsActive = agencyInfoMeta.IsActive;
            info.Order = agencyInfoMeta.Order;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdate = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _agencyInfoRepository.Update(info);

            //udpate translate
            foreach (var agencyInfoTranslation in agencyInfoMeta.Translations)
            {
                var isNameExists = await _agencyInfoTranslationRepository.CheckExists(info.Id, tenantId,
                  agencyInfoTranslation.LanguageId, agencyInfoTranslation.AgencyName);
                if (isNameExists)
                    return new ActionResultResponse(-5, _websiteResourceService.GetString("Name: \"{0}\" already exists.", agencyInfoTranslation.AgencyName));

                var agencyInfoTranslationInfo =
                  await _agencyInfoTranslationRepository.GetInfo(tenantId, agencyInfoTranslation.LanguageId, agencyInfoId);
                if (agencyInfoTranslationInfo != null)
                {
                    agencyInfoTranslationInfo.AgencyName = agencyInfoTranslation.AgencyName.Trim();
                    agencyInfoTranslationInfo.UnsingName = $"{agencyInfoTranslation.AgencyName.Trim()} {agencyInfoTranslation.FullName} ".StripVietnameseChars().ToLower();
                    agencyInfoTranslationInfo.FullName = agencyInfoTranslation.FullName.Trim();
                    agencyInfoTranslationInfo.IdCardAddress = agencyInfoTranslation.IdCardAddress?.Trim();
                    agencyInfoTranslationInfo.Address = agencyInfoTranslation.Address?.Trim();
                    agencyInfoTranslationInfo.AddressRegistered = agencyInfoTranslation.AddressRegistered?.Trim();
                    agencyInfoTranslationInfo.ProvinceName = agencyInfoMeta.ProvinceName?.Trim();
                    agencyInfoTranslationInfo.DistrictName = agencyInfoMeta.DistrictName?.Trim();
                    await _agencyInfoTranslationRepository.Update(agencyInfoTranslationInfo);
                }
                else
                {
                    var agencyInfoTranslationInsert = new AgencyInfoTranslation
                    {
                        TenantId = tenantId,
                        AgencyInfoId = agencyInfoId,
                        LanguageId = agencyInfoTranslation.LanguageId.Trim(),
                        UnsingName = $"{agencyInfoTranslation.AgencyName.Trim()} {agencyInfoTranslation.FullName} ".StripVietnameseChars().ToLower(),
                        AgencyName = agencyInfoTranslation.AgencyName.Trim(),
                        FullName = agencyInfoTranslation.FullName.Trim(),
                        IdCardAddress = agencyInfoTranslation.IdCardAddress?.Trim(),
                        Address = agencyInfoTranslation.Address?.Trim(),
                        AddressRegistered = agencyInfoTranslation.AddressRegistered?.Trim(),
                        ProvinceName = agencyInfoMeta.ProvinceName?.Trim(),
                        DistrictName = agencyInfoMeta.DistrictName?.Trim()
                    };
                    await _agencyInfoTranslationRepository.Insert(agencyInfoTranslationInsert);
                }
            }
            return new ActionResultResponse(1, _websiteResourceService.GetString("Update agency info successful."));
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string agencyInfoId)
        {
            var info = await _agencyInfoRepository.GetInfo(agencyInfoId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Agency info does not exists. Please try again."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var result = await _agencyInfoRepository.Delete(agencyInfoId);
            await _agencyInfoTranslationRepository.Delete(agencyInfoId);
            return new ActionResultResponse(result, _websiteResourceService.GetString("Delete agency info successful."));
        }

        public async Task<ActionResultResponse<AgencyInfoDetailViewModel>> GetDetail(string tenantId, string agencyInfoId)
        {
            var info = await _agencyInfoRepository.GetInfo(agencyInfoId);
            if (info == null)
                return new ActionResultResponse<AgencyInfoDetailViewModel>(-1, _websiteResourceService.GetString("Agency info does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<AgencyInfoDetailViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var agencyInfoTranslations = await _agencyInfoTranslationRepository.GetsAgencyInfoId(agencyInfoId);

            var agencyInfoDetail = new AgencyInfoDetailViewModel
            {
                Id = info.Id,
                Email = info.Email,
                PhoneNumber = info.PhoneNumber,
                Website = info.Website,
                IdCard = info.IdCard,
                IdCardDate = info.IdCardDate,
                ProvinceId = info.ProvinceId,
                DistrictId = info.DistrictId,
                Length = info.Length,
                Width = info.Width,
                Height = info.Height,
                TotalArea = info.TotalArea,
                StartTime = info.StartTime,
                GoogleMap = info.GoogleMap,
                Order = info.Order,
                IsShow = info.IsShow,
                IsActive = info.IsActive,
                ConcurrencyStamp = info.ConcurrencyStamp,
                CreateTime = info.CreateTime,
                LastUpdate = info.LastUpdate,
                Translations = agencyInfoTranslations.Select(x => new AgencyInfoTranslationViewModel
                {
                    LanguageId = x.LanguageId,
                    AgencyName = x.AgencyName,
                    FullName = x.FullName,
                    Address = x.Address,
                    AddressRegistered = x.AddressRegistered,
                    IdCardAddress = x.IdCardAddress,
                    ProvinceName = x.ProvinceName,
                    DistrictName = x.DistrictName,                    
                }).ToList()
            };
            return new ActionResultResponse<AgencyInfoDetailViewModel>
            {
                Code = 1,
                Data = agencyInfoDetail
            };
        }

        public async Task<ActionResultResponse> UpdateStatus(string tenantId, string lastUpdateUserId,
            string lastUpdateFullName, string lastUpdateAvata, string agencyInfoId, bool isActive)
        {
            var info = await _agencyInfoRepository.GetInfo(agencyInfoId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Agency info does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            info.IsActive = isActive;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdate = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            var result = await _agencyInfoRepository.Update(info);

            if (result < 0)
                return new ActionResultResponse(result, _websiteResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse(result, _websiteResourceService.GetString("Update agency info isActive successful."));
        }
    }
}
