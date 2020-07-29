using Dapper;
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
    public class SocialNetworkService : ISocialNetworkService
    {
        private readonly string _connectionString;
        private readonly ILogger<SocialNetworkService> _logger;
        public SocialNetworkService(string connectionString, ILogger<SocialNetworkService> logger)
        {
            _connectionString = connectionString;
            _logger = logger;
        }

        public async Task<List<SocialNetworkViewModel>> SearchAsync(string tenantId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    var results = await con.QueryAsync<SocialNetworkViewModel>("[dbo].[spSocialNetwork_Search]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spSocialNetwork_Search SocialNetworkService Error.");
                return new List<SocialNetworkViewModel>();
            }
        }
    }
}
