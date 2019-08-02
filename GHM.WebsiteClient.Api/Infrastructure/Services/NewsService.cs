using Dapper;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.Resources;
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
    public class NewsService : INewsService
    {
        private readonly string _connectionString;
        private readonly ILogger<NewsService> _logger;
        public NewsService(string connectionString, ILogger<NewsService> logger)
        {
            _connectionString = connectionString;
            _logger = logger;
        }

        public async Task<List<NewsSearchClientViewModel>> GetListTopNewsHomePageAsync(string tenantId, string languageId, int selectTop)
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
                    var results = await con.QueryAsync<NewsSearchClientViewModel>("[dbo].[spNew_GetListTopNewsHomePage]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spNew_GetListTopNewsHomePage NewsService Error.");
                return new List<NewsSearchClientViewModel>();
            }
        }

        public async Task<List<NewsSearchClientViewModel>> GetListTopNewsHotAsync(string tenantId, string languageId, int selectTop)
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
                    var results = await con.QueryAsync<NewsSearchClientViewModel>("[dbo].[spNew_GetListTopNewsHot]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spNew_GetListTopNewsHot NewsService Error.");
                return new List<NewsSearchClientViewModel>();
            }
        }

        public async Task<List<NewsSearchClientViewModel>> GetListTopNewsNewestAsync(string tenantId, string languageId, int selectTop)
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
                    var results = await con.QueryAsync<NewsSearchClientViewModel>("[dbo].[spNew_GetListTopNewsNewest]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spNew_GetListTopNewsHot NewsService Error.");
                return new List<NewsSearchClientViewModel>();
            }
        }

        public async Task<List<NewsSearchClientViewModel>> GetNewsRelatedByParentCategoryIdAsync(string tenantId, int id, string languageId, int page, int pageSize)
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
                    param.Add("@id", id);
                    param.Add("@page", page);
                    param.Add("@pageSize", pageSize);
                    var results = await con.QueryAsync<NewsSearchClientViewModel>("[dbo].[spNew_GetNewsRelatedByParentCategoryId]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spNew_GetNewsRelatedByParentCategoryId NewsService Error.");
                return new List<NewsSearchClientViewModel>();
            }
        }

        public async Task<List<NewsSearchClientViewModel>> GetListTopNewsRelatedAsync(string tenantId, string languageId, string seoLink, int selectTop)
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
                    param.Add("@seoLink", seoLink);
                    param.Add("@selectTop", selectTop);
                    var results = await con.QueryAsync<NewsSearchClientViewModel>("[dbo].[spNew_GetListTopNewsRelated]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spNew_GetListTopNewsRelated NewsService Error.");
                return new List<NewsSearchClientViewModel>();
            }
        }

        public async Task<SearchResult<NewsSearchClientViewModel>> GetNewsByCategorySeoLinkAsync(string tenantId, string languageId, string seoLink, int page, int pageSizes)
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
                    param.Add("@seoLink", seoLink);
                    param.Add("@page", page);
                    param.Add("@pageSizes", pageSizes);

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spNew_GetNewsByCategorySeoLink]", param, commandType: CommandType.StoredProcedure))
                    {
                        return new SearchResult<NewsSearchClientViewModel>
                        {
                            TotalRows = (await multi.ReadAsync<int>()).SingleOrDefault(),
                            Items = (await multi.ReadAsync<NewsSearchClientViewModel>()).ToList()
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spNew_GetNewsByCategorySeoLink NewsService Error.");
                return new SearchResult<NewsSearchClientViewModel> { TotalRows = 0, Items = null };
            }
        }

        public async Task<List<NewsSearchClientViewModel>> GetNewsRelatedByIdAsync(string tenantId, string newsId, string languageId, int page, int pageSize)
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
                    param.Add("@newsId", newsId);
                    param.Add("@page", page);
                    param.Add("@pageSize", pageSize);
                    var results = await con.QueryAsync<NewsSearchClientViewModel>("[dbo].[spNew_GetNewsRelatedById]", param, commandType: CommandType.StoredProcedure);
                    return results.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spNew_GetNewsRelatedById NewsService Error.");
                return new List<NewsSearchClientViewModel>();
            }
        }

        public async Task<ActionResultResponse<CategoryWidthNewsViewModel>> GetNewsByCategoryIdAsync(string tenantId, string languageId, int categoryId, int page, int pageSize)
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
                    param.Add("@categoryId", categoryId);
                    param.Add("@page", page);
                    param.Add("@pageSize", pageSize);

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spNew_GetNewsByCategoryId]", param, commandType: CommandType.StoredProcedure))
                    {
                        var categoryWithNews = (await multi.ReadFirstOrDefaultAsync<CategoryWidthNewsViewModel>());
                        categoryWithNews.TotalNews = (await multi.ReadAsync<int>()).SingleOrDefault();
                        categoryWithNews.ListNews = (await multi.ReadAsync<NewsSearchClientViewModel>()).ToList();
                     
                        return new ActionResultResponse<CategoryWidthNewsViewModel>
                        {
                            Code = 1,
                            Data = categoryWithNews
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spNew_GetNewsByCategorySeoLink NewsService Error.");
                return new ActionResultResponse<CategoryWidthNewsViewModel>();
            }
        }

        public async Task<NewsClientViewModel> GetClientAsync(string tenantId, string languageId, string seoLink)
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
                    param.Add("@seoLink", seoLink);
                    return await con.QuerySingleOrDefaultAsync<NewsClientViewModel>("[dbo].[spNew_GetClient]", param, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[dbo].[spNew_GetClient] NewsService Error.");
                return null;
            }

        }

        public async Task<SearchResult<string>> GetAllNewsSeoLinkForSiteMapAsync(string tenantId, string languageId)
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
                    var results = await con.QueryAsync<string>("[dbo].[spNew_GetAllNewsSeoLinkForSiteMap]", param, commandType: CommandType.StoredProcedure);

                    return new SearchResult<string>
                    {
                        Items = results.ToList()
                    };
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spNew_GetAllNewsSeoLinkForSiteMap NewsService Error.");
                return new SearchResult<string>();
            }
        }

        public async Task<SearchResult<CategoryWidthNewsViewModel>> GetListCategoryWidthNewsAsync(string tenantId, string languageId, int selectTop, bool isHomePage)
        {
            try
            {
                List<CategoryWidthNewsViewModel> categoryWithNews;

                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@languageId", languageId);
                    param.Add("@selectTop", selectTop);

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spNew_GetListNewsHomePage]", param, commandType: CommandType.StoredProcedure))
                    {
                        categoryWithNews = (await multi.ReadAsync<CategoryWidthNewsViewModel>()).ToList();
                        var listNews = (await multi.ReadAsync<NewsSearchClientViewModel>()).ToList();
                        categoryWithNews.ForEach(x =>
                        {
                            x.ListNews = listNews.Where(n => n.CategoryId == x.CategoryId).ToList();
                        });


                        return new SearchResult<CategoryWidthNewsViewModel>
                        {
                            Code = 1,
                            Items = categoryWithNews
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spNew_GetListNewsHomePage NewsService Error.");
                return new SearchResult<CategoryWidthNewsViewModel>();
            }
        }

        public async Task<SearchResult<CategoryWidthNewsViewModel>> GetListCategoryWidthNewsAsync(string tenantId, string languageId, string seolink, int selectTop, bool isHomePage)
        {
            try
            {
                List<CategoryWidthNewsViewModel> categoryWithNews;

                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@languageId", languageId);
                    param.Add("@selectTop", selectTop);
                    param.Add("@seolink", seolink);

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spNew_GetListCategoryWidthNews]", param, commandType: CommandType.StoredProcedure))
                    {
                        categoryWithNews = (await multi.ReadAsync<CategoryWidthNewsViewModel>()).ToList();
                        var listNews = (await multi.ReadAsync<NewsSearchClientViewModel>()).ToList();
                        categoryWithNews.ForEach(x =>
                        {
                            x.ListNews = listNews.Where(n => n.CategoryId == x.CategoryId).ToList();
                        });


                        return new SearchResult<CategoryWidthNewsViewModel>
                        {
                            Code = 1,
                            Items = categoryWithNews
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spNew_GetListCategoryWidthNews NewsService Error.");
                return new SearchResult<CategoryWidthNewsViewModel>();
            }
        }

        public async Task<ActionResultResponse<CategoryWidthNewsViewModel>> GetCategoryWithNewsAsync(string tenantId, string languageId, string seoLink, int selectTop, bool isHomePage)
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
                    param.Add("@seoLink", seoLink);

                    using (var multi = await con.QueryMultipleAsync("[dbo].[spNew_GetCategoryWithNews]", param, commandType: CommandType.StoredProcedure))
                    {
                        var categoryWithNews = (await multi.ReadFirstOrDefaultAsync<CategoryWidthNewsViewModel>());
                          categoryWithNews.ListNews = (await multi.ReadAsync<NewsSearchClientViewModel>()).ToList();

                        return new ActionResultResponse<CategoryWidthNewsViewModel>
                        {
                            Code = 1,
                            Data = categoryWithNews
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spNew_GetNewsByCategorySeoLink NewsService Error.");
                return new ActionResultResponse<CategoryWidthNewsViewModel>();
            }
        }

        public async Task<NewsDetailForClientViewModel> GetDetailForClientAsync(string tenantId, string newsId, string languageId)
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
                    param.Add("@newsId", newsId);
                    return await con.QuerySingleOrDefaultAsync<NewsDetailForClientViewModel>("[dbo].[spNew_GetDetailForClient]", param, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[dbo].[spNew_GetDetailForClient] NewsService Error.");
                return null;
            }
        }

        public async Task<bool> CheckNewsExistBySeoLinkAsync(string tenantId, string seoLink, string languageId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    var sql = @"
					SELECT IIF (EXISTS (SELECT 1 FROM NewsTranslations WHERE TenantId = @TenantId AND SeoLink = @SeoLink AND LanguageId = @LanguageId AND IsDelete = 0), 1, 0)";

                    var result = await con.ExecuteScalarAsync<bool>(sql, new { TenantId = tenantId , SeoLink = seoLink , LanguageId = languageId });
                    return result;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "CheckNewsExistBySeoLinkAsync  Error.");
                return false;
            }

        }

        public async Task<int> UpdateViewNewsAsync(string tenantId, string newId, string languageId)
        {
            try
            {
                int rowAffected = 0;
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@tenantId", tenantId);
                    param.Add("@newId", newId);
                    rowAffected = await con.ExecuteAsync("[dbo].[spNew_UpdateViewNews]", param, commandType: CommandType.StoredProcedure);
                }
                return rowAffected;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "UpdateViewNewsAsync Error.");
                return -1;
            }

        }
    }
}
