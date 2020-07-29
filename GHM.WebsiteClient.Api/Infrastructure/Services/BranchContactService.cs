using Dapper;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.Models;
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
    public class BranchContactService : IBranchContactService
    {
        private readonly string _connectionString;
        private readonly ILogger<BranchContactService> _logger;
        public BranchContactService(string connectionString, ILogger<BranchContactService> logger)
        {
            _connectionString = connectionString;
            _logger = logger;
        }
        public async Task<SearchResult<BranchContactSearchForClientViewModel>> SearchForClientAsync(string tenantId, string languageId)
        {
            try
            {
                List<BranchContactSearchForClientViewModel> branchContacts;
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@languageId", languageId);

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spBranchContact_SelectAll]", param, commandType: CommandType.StoredProcedure))
                    {
                        branchContacts = (await multi.ReadAsync<BranchContactSearchForClientViewModel>()).ToList();
                        var branchContactDetails = (await multi.ReadAsync<BranchContactDetail>()).ToList();
                        branchContacts.ForEach(x =>
                        {
                            x.BranchContactDetails = branchContactDetails.Where(bcd => bcd.BranchContactId == x.Id).ToList();
                        });
                        return new SearchResult<BranchContactSearchForClientViewModel>
                        {
                            Items = branchContacts
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spBranchContact_SelectAll NewsService Error.");
                return new SearchResult<BranchContactSearchForClientViewModel> { TotalRows = 0, Items = null };
            }
        }
    }
}
