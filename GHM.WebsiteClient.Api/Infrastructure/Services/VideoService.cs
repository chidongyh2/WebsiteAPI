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
    public class VideoService : IVideoService
    {
        private readonly string _connectionString;
        private readonly ILogger<VideoService> _logger;
        public VideoService(string connectionString, ILogger<VideoService> logger)
        {
            _connectionString = connectionString;
            _logger = logger;
        }

        public async Task<ActionResultResponse<VideoViewModel>> GetDetailAsync(string tenantId, string languageId, string id)
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
                    param.Add("@Id", id);

                    return new ActionResultResponse<VideoViewModel>
                    {
                        Data = await con.QuerySingleOrDefaultAsync<VideoViewModel>("[dbo].[spVideo_GetDetail]", param, commandType: CommandType.StoredProcedure)
                    };
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spVideo_GetDetail VideoService Error.");
                return null;
            }

        }

        public async Task<List<VideoViewModel>> ListTopVideoAsync(string tenantId, string languageId, int selectTop)
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
                    param.Add("@selectTop", selectTop);
                    var results = await con.QueryAsync<VideoViewModel>("[dbo].[spVideo_ListTopVideo]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spVideo_ListTopVideo VideoService Error.");
                return new List<VideoViewModel>();
            }
        }

        public async Task<SearchResult<VideoViewModel>> ListVideoAsync(string tenantId, string languageId, string albumId, int page, int pageSize)
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
                    param.Add("@albumId", albumId);
                    param.Add("@page", page);
                    param.Add("@pageSize", pageSize);

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spVideo_ListVideo]", param, commandType: CommandType.StoredProcedure))
                    {
                        return new SearchResult<VideoViewModel>
                        {
                            TotalRows = (await multi.ReadAsync<int>()).SingleOrDefault(),
                            Items = (await multi.ReadAsync<VideoViewModel>()).ToList()
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spVideo_ListVideo VideoService Error.");
                return new SearchResult<VideoViewModel> { TotalRows = 0, Items = null };
            }
        }

        public async Task<SearchResult<VideoViewModel>> SearchAsync(string tenantId, string languageId, int page, int pageSize)
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

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spVideo_Search]", param, commandType: CommandType.StoredProcedure))
                    {
                        return new SearchResult<VideoViewModel>
                        {
                            TotalRows = (await multi.ReadAsync<int>()).SingleOrDefault(),
                            Items = (await multi.ReadAsync<VideoViewModel>()).ToList()
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spVideo_Search VideoService Error.");
                return new SearchResult<VideoViewModel> { TotalRows = 0, Items = null };
            }
        }

    }
}
