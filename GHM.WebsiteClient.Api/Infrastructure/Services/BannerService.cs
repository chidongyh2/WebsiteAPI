using Dapper;
using GHM.Infrastructure.Models;
using GHM.WebsiteClient.Api.Domain.Constants;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.Models;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using Microsoft.Extensions.Logging;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Infrastructure.Services
{
    public class BannerService : IBannerService
    {
        private readonly string _connectionString;
        private readonly ILogger<BannerService> _logger;
        public BannerService(string connectionString, ILogger<BannerService> logger)
        {
            _connectionString = connectionString;
            _logger = logger;
        }

        public async Task<ActionResultResponse<BannerViewModel>> GetDetailAsync(string tenantId, string bannerId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@bannerId", bannerId);

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spBanner_GetDetail]", param, commandType: CommandType.StoredProcedure))
                    {
                        var banner = (await multi.ReadFirstOrDefaultAsync<BannerViewModel>());
                        banner.BannerItems = (await multi.ReadAsync<BannerItem>()).ToList();

                        return new ActionResultResponse<BannerViewModel>
                        {
                            Code = 1,
                            Data = banner
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spBanner_GetDetail BannerService Error.");
                return new ActionResultResponse<BannerViewModel>();
            }
        }

        public async Task<ActionResultResponse<BannerViewModel>> GetBannerItemByPositionAsync(string tenantId, Position position)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@position", position);

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spBanner_GetBannerItemByPosition]", param, commandType: CommandType.StoredProcedure))
                    {
                        var banner = (await multi.ReadFirstOrDefaultAsync<BannerViewModel>());
                        banner.BannerItems = (await multi.ReadAsync<BannerItem>()).ToList();

                        return new ActionResultResponse<BannerViewModel>
                        {
                            Code = 1,
                            Data = banner
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spBanner_GetBannerItemByPosition BannerService Error.");
                return new ActionResultResponse<BannerViewModel>();
            }
        }
    }
}
