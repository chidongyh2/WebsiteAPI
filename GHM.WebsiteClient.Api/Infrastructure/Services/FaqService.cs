using Dapper;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
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
    public class FaqService : IFaqService
    {
        private readonly string _connectionString;
        private readonly ILogger<FaqService> _logger;
        public FaqService(string connectionString, ILogger<FaqService> logger)
        {
            _connectionString = connectionString;
            _logger = logger;
        }

        public async Task<SearchResult<FaqViewModel>> FaqSearch(string tenantId, string languageId, string faqGroupId,
            string keyword, int page, int pageSize)
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
                    param.Add("@FaqGroupId", faqGroupId);
                    param.Add("@Keyword", keyword?.Trim());                    
                    param.Add("@Page", page);
                    param.Add("@PageSize", pageSize);
                    param.Add("@TotalRows", DbType.Int32, direction: ParameterDirection.Output);

                    var items = await con.QueryAsync<FaqViewModel>("[dbo].[sp_FAQ_Search]", param, commandType: CommandType.StoredProcedure);
                    var result = new SearchResult<FaqViewModel>
                    {
                        Items = items.ToList(),
                        TotalRows = param.Get<int>("TotalRows")
                    };

                    return result;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spFaq_GetClient FaqService Error.");
                return new SearchResult<FaqViewModel> { TotalRows = 0, Items = null };
            }
        }

        public async Task<SearchResult<FaqGroupViewModel>> FaqGroupSearch(string tenantId, string languageId,
            string keyword, int page, int pageSize)
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
                    param.Add("@Keyword", keyword?.Trim());
                    param.Add("@Page", page);
                    param.Add("@PageSize", pageSize);
                    param.Add("@TotalRows", DbType.Int32, direction: ParameterDirection.Output);

                    var items = await con.QueryAsync<FaqGroupViewModel>("[dbo].[sp_FAQGroup_Search]", param, commandType: CommandType.StoredProcedure);
                    var result = new SearchResult<FaqGroupViewModel>
                    {
                        Items = items.ToList(),
                        TotalRows = param.Get<int>("TotalRows")
                    };

                    return result;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spFaq_GetClient FaqService Error.");
                return new SearchResult<FaqGroupViewModel> { TotalRows = 0, Items = null };
            }
        }
    }
}
