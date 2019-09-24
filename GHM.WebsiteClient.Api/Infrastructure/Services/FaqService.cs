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

        public async Task<SearchResult<FaqViewModel>> SearchClientAsync(string tenantId, string languageId, int page, int pageSize)
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
                    param.Add("@page", page);
                    param.Add("@pageSize", pageSize);

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spFaq_GetClient]", param, commandType: CommandType.StoredProcedure))
                    {
                        return new SearchResult<FaqViewModel>
                        {
                            TotalRows = (await multi.ReadAsync<int>()).SingleOrDefault(),
                            Items = (await multi.ReadAsync<FaqViewModel>()).ToList()
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spFaq_GetClient FaqService Error.");
                return new SearchResult<FaqViewModel> { TotalRows = 0, Items = null };
            }
        }
    }
}
