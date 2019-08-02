using Dapper;
using GHM.WebsiteClient.Api.Domain.IServices;
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
    public class BrandService : IBrandService
    {
        private readonly string _connectionString;
        private readonly ILogger<BrandService> _logger;
        public BrandService(string connectionString, ILogger<BrandService> logger)
        {
            _connectionString = connectionString;
            _logger = logger;
        }
        public async Task<List<BrandSearchViewModel>> SearchAsync(string tenantId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    var results = await con.QueryAsync<BrandSearchViewModel>("[dbo].[spBrand_Search]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[dbo].[spBrand_SelectAll] BrandService Error.");
                return new List<BrandSearchViewModel>();
            }

        }
    }
}
