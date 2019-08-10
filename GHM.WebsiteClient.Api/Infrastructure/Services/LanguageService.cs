using Dapper;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using Microsoft.Extensions.Logging;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Infrastructure.Services
{
    public class LanguageService : ILanguageService
    {
        private readonly string _connectionString;
        private readonly ILogger<LanguageService> _logger;
        public LanguageService(string connectionString, ILogger<LanguageService> logger)
        {
            _connectionString = connectionString;
            _logger = logger;
        }

        public async Task<SearchResult<TenantLanguageViewModel>> GetLanguageSupportAsync(string tenantId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);

                    var results = await con.QueryAsync<TenantLanguageViewModel>("[dbo].[spLanguage_GetLanguageSupport]", param, commandType: CommandType.StoredProcedure);

                    return new SearchResult<TenantLanguageViewModel>
                    {
                        Items = results.ToList()
                    };
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spLanguage_GetLanguageSupport LanguageService Error.");
                return new SearchResult<TenantLanguageViewModel> { TotalRows = 0, Items = null };
            }
        }
    }
}
