using Dapper;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
using GHM.WebsiteClient.Api.Domain.Models;
using GHM.WebsiteClient.Api.Domain.Resources;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;


namespace GHM.WebsiteClient.Api.Infrastructure.Services
{
    public class AgencyInfoService : IAgencyInfoService
    {
        private readonly string _connectionString;
        private readonly ILogger<AgencyInfoService> _logger;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;
        public AgencyInfoService(string connectionString, ILogger<AgencyInfoService> logger, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            _connectionString = connectionString;
            _logger = logger;
            _websiteResourceService = websiteResourceService;
        }
        public async Task<List<AgencyInfoViewModel>> AgencyInfoGetClient(string tenantId, string languageId, string provinceId, string districtId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@TenantId", tenantId);
                    param.Add("@LanguageId", languageId);
                    param.Add("@ProvinceId", provinceId);
                    param.Add("@DistrictId", districtId);
                    var results = await con.QueryAsync<AgencyInfoViewModel>("[dbo].[spAgencyInfo_GetClient]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spAgencyInfo_GetClient AgencyInfoService Error.");
                return new List<AgencyInfoViewModel>();
            }
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, AgencyInfoMeta agencyInfoMeta)
        {
            var agencyInfoId = Guid.NewGuid().ToString();

            // Insert new AgencyInfo.
            var resultInsertAgencyInfo = await InsertAgencyInfoAsync(new AgencyInfo
            {
                Id = agencyInfoId,
                ConcurrencyStamp = agencyInfoId,
                Email = agencyInfoMeta.Email?.Trim(),
                PhoneNumber = agencyInfoMeta.PhoneNumber?.Trim(),
                Website = agencyInfoMeta.Website?.Trim(),
                IdCard = agencyInfoMeta.IdCard?.Trim(),
                IdCardDate = agencyInfoMeta.IdCardDate,
                NationalId = agencyInfoMeta.NationalId?.Trim(),
                ProvinceId = agencyInfoMeta.ProvinceId?.Trim(),
                DistrictId = agencyInfoMeta.DistrictId?.Trim(),
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
                CreatorId = string.Empty,
                CreatorFullName = string.Empty
            });


            if (resultInsertAgencyInfo <= 0)
                return new ActionResultResponse<string>(resultInsertAgencyInfo,_websiteResourceService.GetString(ErrorMessage.SomethingWentWrong));



            if (agencyInfoMeta.AgencyInfoTranslationMetas.Count > 0)
            {
                var resultInsertTranslation = await InsertAgencyInfoTranslation();
                if (resultInsertTranslation.Code <= 0)
                    return resultInsertTranslation;
            }


            return new ActionResultResponse<string>(1,_websiteResourceService.GetString("Add new agency info successful."),string.Empty, agencyInfoId);

            async Task<ActionResultResponse<string>> InsertAgencyInfoTranslation()
            {
                foreach (var agencyInfoTranslation in agencyInfoMeta.AgencyInfoTranslationMetas)
                {

                    var agencyInfoTranslationInsert = new AgencyInfoTranslation
                    {
                        TenantId = tenantId,
                        AgencyInfoId = agencyInfoId,
                        LanguageId = agencyInfoTranslation.LanguageId.Trim(),
                        Name = agencyInfoTranslation.Name.Trim(),
                        IdCardAddress = agencyInfoTranslation.IdCardAddress?.Trim(),
                        Address = agencyInfoTranslation.Address?.Trim(),
                        AddressRegistered = agencyInfoTranslation.AddressRegistered?.Trim(),
                        NationalName = agencyInfoTranslation.NationalName?.Trim(),
                        ProvinceName = agencyInfoTranslation.ProvinceName?.Trim(),
                        DistrictName = agencyInfoTranslation.DistrictName?.Trim()
                    };

                    await InsertAgencyInfoTranslationAsync(agencyInfoTranslationInsert);
                }

                return new ActionResultResponse<string>(1, _websiteResourceService.GetString("Add new agency info translation successful."),string.Empty, agencyInfoId);
            }
        }


        

        private async Task<int> InsertAgencyInfoTranslationAsync(AgencyInfoTranslation agencyInfoTranslation)
        {
            try
            {
                int rowAffected = 0;
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@TenantId", agencyInfoTranslation.TenantId);
                    param.Add("@LanguageId", agencyInfoTranslation.LanguageId);
                    param.Add("@AgencyInfoId", agencyInfoTranslation.AgencyInfoId);
                    param.Add("@Name", agencyInfoTranslation.Name);
                    param.Add("@IdCardAddress", agencyInfoTranslation.IdCardAddress);
                    param.Add("@Address", agencyInfoTranslation.Address);
                    param.Add("@AddressRegistered", agencyInfoTranslation.AddressRegistered);
                    param.Add("@NationalName", agencyInfoTranslation.NationalName);
                    param.Add("@ProvinceName", agencyInfoTranslation.ProvinceName);
                    param.Add("@DistrictName", agencyInfoTranslation.DistrictName);
                    param.Add("@IsDelete", agencyInfoTranslation.IsDelete);
                    rowAffected = await con.ExecuteAsync("[dbo].[spAgencyInfoTranslation_Insert]", param, commandType: CommandType.StoredProcedure);
                }
                return rowAffected;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[dbo].[spAgencyInfoTranslation_Insert] InsertAsync AgencyInfoTranslationRepository Error.");
                return -1;
            }
        }

        private async Task<int> InsertAgencyInfoAsync(AgencyInfo agencyInfo)
        {
            try
            {
                int rowAffected = 0;
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@Id", agencyInfo.Id);
                    param.Add("@TenantId", agencyInfo.TenantId);
                    param.Add("@Email", agencyInfo.Email);
                    param.Add("@PhoneNumber", agencyInfo.PhoneNumber);
                    param.Add("@Website", agencyInfo.Website);
                    param.Add("@IdCard", agencyInfo.IdCard);
                    if (agencyInfo.IdCardDate != null && agencyInfo.IdCardDate != DateTime.MinValue)
                    {
                        param.Add("@IdCardDate", agencyInfo.IdCardDate);
                    }
                    param.Add("@NationalId", agencyInfo.NationalId);
                    param.Add("@ProvinceId", agencyInfo.ProvinceId);
                    param.Add("@DistrictId", agencyInfo.DistrictId);
                    param.Add("@Length", agencyInfo.Length);
                    param.Add("@Width", agencyInfo.Width);
                    param.Add("@Height", agencyInfo.Height);
                    param.Add("@TotalArea", agencyInfo.TotalArea);
                    if (agencyInfo.StartTime != null && agencyInfo.StartTime != DateTime.MinValue)
                    {
                        param.Add("@StartTime", agencyInfo.StartTime);
                    }
                    param.Add("@GoogleMap", agencyInfo.GoogleMap);
                    param.Add("@Order", agencyInfo.Order);
                    param.Add("@IsShow", agencyInfo.IsShow);
                    param.Add("@IsActive", agencyInfo.IsActive);
                    param.Add("@IsDelete", agencyInfo.IsDelete);
                    param.Add("@ConcurrencyStamp", agencyInfo.ConcurrencyStamp);
                    if (agencyInfo.CreateTime != null && agencyInfo.CreateTime != DateTime.MinValue)
                    {
                        param.Add("@CreateTime", agencyInfo.CreateTime);
                    }
                    param.Add("@CreatorId", agencyInfo.CreatorId);
                    param.Add("@CreatorFullName", agencyInfo.CreatorFullName);
                    if (agencyInfo.LastUpdate != null && agencyInfo.LastUpdate != DateTime.MinValue)
                    {
                        param.Add("@LastUpdate", agencyInfo.LastUpdate);
                    }
                    param.Add("@LastUpdateUserId", agencyInfo.LastUpdateUserId);
                    param.Add("@LastUpdateFullName", agencyInfo.LastUpdateFullName);
                    rowAffected = await con.ExecuteAsync("[dbo].[spAgencyInfo_Insert]", param, commandType: CommandType.StoredProcedure);
                }
                return rowAffected;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[dbo].[spAgencyInfo_Insert] InsertAsync AgencyInfoRepository Error.");
                return -1;
            }
        }


    }
}
