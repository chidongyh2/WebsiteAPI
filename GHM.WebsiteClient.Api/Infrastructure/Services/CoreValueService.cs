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
    public class CoreValueService : ICoreValueService
    {
        private readonly string _connectionString;
        private readonly ILogger<CoreValueService> _logger;
        public CoreValueService(string connectionString, ILogger<CoreValueService> logger)
        {
            _connectionString = connectionString;
            _logger = logger;
        }

        public async Task<List<ValueViewModel>> GetAllActivatedCoreValueAsync(string tenantId, string languageId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@languageId", languageId);
                    var results = await con.QueryAsync<ValueViewModel>("[dbo].[spCoreValue_SelectAll]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spCoreValue_SelectAll CoreValueService Error.");
                return new List<ValueViewModel>();
            }
        }
    }
}
