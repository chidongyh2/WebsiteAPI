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

        public async Task<List<AgencyInfoViewModel>> AgencyInfoGetClient(string tenantId, string languageId,
            int? provinceId, int? districtId)
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

        public async Task<int> Insert(string languageId, AgencyInfoMeta agencyInfo)
        {
            try
            {

                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@Id", agencyInfo.Id);
                    param.Add("@TenantId", agencyInfo.TenantId);
                    param.Add("@LanguageId", languageId);
                    param.Add("@Email", agencyInfo.Email);
                    param.Add("@PhoneNumber", agencyInfo.PhoneNumber);
                    param.Add("@Website", agencyInfo.Website);
                    param.Add("@IdCard", agencyInfo.IdCard);
                    param.Add("@IdCardDate", agencyInfo.IdCardDate);
                    param.Add("@ProvinceId", agencyInfo.ProvinceId);
                    param.Add("@DistrictId", agencyInfo.DistrictId);
                    param.Add("@Length", agencyInfo.Length);
                    param.Add("@Width", agencyInfo.Width);
                    param.Add("@Height", agencyInfo.Height);
                    param.Add("@TotalArea", agencyInfo.TotalArea);
                    param.Add("@StartTime", agencyInfo.StartTime);
                    param.Add("@ConcurrencyStamp", agencyInfo.ConcurrencyStamp);
                    param.Add("@GoogleMap", agencyInfo.GoogleMap);
                    param.Add("@FullName", agencyInfo.FullName);
                    param.Add("@AgencyName", agencyInfo.AgencyName);
                    param.Add("@ProvinceName", agencyInfo.ProvinceName);
                    param.Add("@DistinctName", agencyInfo.DistrictName);
                    param.Add("@Address", agencyInfo.Address);
                    param.Add("@AddressRegistered", agencyInfo.AddressRegistered);
                    param.Add("@IdCardAddress", agencyInfo.IdCardAddress);

                    var result =  con.Query<int>("[dbo].[spAgencyInfos_Insert]", param, commandType: CommandType.StoredProcedure).FirstOrDefault();
                    return result;
                }               
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[dbo].[spAgencyInfos_Insert] InsertAsync AgencyInfoRepository Error.");
                return -1;
            }
        }
    }
}
