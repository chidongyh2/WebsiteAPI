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
    public class CategoryService : ICategoryService
    {
        private readonly string _connectionString;
        private readonly ILogger<CategoryService> _logger;
        public CategoryService(string connectionString, ILogger<CategoryService> logger)
        {
            _connectionString = connectionString;
            _logger = logger;
        }

        public async Task<CategoryTranslationViewModel> GetNameByCategoryIdAsync(string tenantId, string languageId, string seoLink)
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
                    return await con.QuerySingleOrDefaultAsync<CategoryTranslationViewModel>("[dbo].[spCategory_GetNameByCategoryId]", param, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[dbo].[spCategory_GetNameByCategoryId] CategoryService Error.");
                return null;
            }
        }

        public async Task<ActionResultResponse<CategoryTranslationViewModel>> GetCategoryRelationsAsync(string tenantId, string languageId, string seoLink)
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
                    return new ActionResultResponse<CategoryTranslationViewModel>
                    {
                        Data = await con.QuerySingleOrDefaultAsync<CategoryTranslationViewModel>("[dbo].[spCategory_GetCategoryRelations]", param, commandType: CommandType.StoredProcedure)
                    }; 
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[dbo].[spCategory_GetCategoryRelations] CategoryService Error.");
                return null;
            }
        }

        public async Task<SearchResult<CategorySearchForSelectViewModel>> GetCategoryHomePageAsync(string tenantId, string languageId)
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
                    var results = await con.QueryAsync<CategorySearchForSelectViewModel>("[dbo].[spCategory_SearchForHomePage]", param, commandType: CommandType.StoredProcedure);
                    return new SearchResult<CategorySearchForSelectViewModel>
                    {
                        Items = results.ToList()
                    };
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spCategory_SearchForHomePage CategoryService Error.");
                return new SearchResult<CategorySearchForSelectViewModel>();
            }
        }

        public async Task<SearchResult<string>> GetAllSeoLinkForSitemapAsync(string tenantId, string languageId)
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
                    var results = await con.QueryAsync<string>("[dbo].[spCategory_GetAllSeoLinkForSitemap]", param, commandType: CommandType.StoredProcedure);
                    return new SearchResult<string>
                    {
                        Items = results.ToList()
                    };
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "spCategory_GetAllSeoLinkForSitemap CategoryService Error.");
                return new SearchResult<string>();
            }
        }

        public async Task<bool> CheckExistForClientAsync(string tenantId, string seoLink, string languageId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    var sql = @"
					SELECT IIF (EXISTS (SELECT 1 FROM CategoryTranslations WHERE TenantId = @TenantId AND LanguageId = @LanguageId AND SeoLink = @SeoLink ), 1, 0)";

                    var result = await con.ExecuteScalarAsync<bool>(sql, new { TenantId = tenantId, LanguageId  = languageId , SeoLink  = seoLink});
                    return result;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "CheckExistForClientAsync CategoryService Error.");
                return false;
            }
        }
    }
}
