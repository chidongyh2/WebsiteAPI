using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using Microsoft.Extensions.Logging;

namespace GHM.WebsiteClient.Api.Infrastructure.Services
{

    public class CoreService : ICoreService
    {
        private readonly string _connectionString;
        private readonly ILogger<MenuService> _logger;

        public CoreService(string connectionString, ILogger<MenuService> logger)
        {
            _connectionString = connectionString;
            _logger = logger;
        }

        public async Task<List<ObjectViewModel>> GetDistinctByProvinceId(int provinceId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@ProvinceId", provinceId);

                    var result = await con.QueryAsync<ObjectViewModel>("[dbo].[District_GetAll_ProvinceId]", param, commandType: CommandType.StoredProcedure);
                    return result.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "District_GetAll_ProvinceId CoreService Error.");
                return null;
            }
        }

        public async Task<List<ObjectViewModel>> GetProvinceByNationId(int nationId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@NationId", nationId);

                    var result = await con.QueryAsync<ObjectViewModel>("[dbo].[Province_GetAll_NationId]", param, commandType: CommandType.StoredProcedure);
                    return result.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Province_GetAll_NationId CoreService Error.");
                return null;
            }
        }
    }
}
