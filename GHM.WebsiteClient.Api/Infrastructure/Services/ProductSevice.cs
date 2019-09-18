using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.Resources;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using Microsoft.Extensions.Logging;

namespace GHM.WebsiteClient.Api.Infrastructure.Services
{
    public class ProductSevice : IProductService
    {
        private readonly string _connectionString;
        private readonly ILogger<MenuService> _logger;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;
        public ProductSevice(string connectionString, ILogger<MenuService> logger, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            _connectionString = connectionString;
            _logger = logger;
            _websiteResourceService = websiteResourceService;
        }

        public async Task<List<ProductCategorySearchViewModel>> ProductCategorySearch(string tenantId,
            string languageId, string seoLink, bool? isHot, bool? isHomePage, bool? isSolution, int top = 20)
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
                    param.Add("@IsHot", isHot);
                    param.Add("@IsSolution", isSolution);
                    param.Add("@IsHomePage", isHomePage);
                    param.Add("@SeoLink", seoLink);
                    param.Add("@Top", top);

                    var result = await con.QueryAsync<ProductCategorySearchViewModel>("[dbo].[sp_ProductCategory_GetTop]", param, commandType: CommandType.StoredProcedure);
                    return result.ToList();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "sp_ProductCategory_GetTop ProductService Error.");
                return null;
            }
        }

        public async Task<SearchResult<ProductSearchViewModel>> ProductSearch(string tenantId, string languageId, string categorySeoLink, bool? isHot, bool? isHomePage, int page = 1, int pageSize = 20)
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
                    param.Add("@IsHot", isHot);
                    param.Add("@IsHomePage", isHomePage);
                    param.Add("@CategorySeoLink", categorySeoLink);
                    param.Add("@Page", page);
                    param.Add("@PageSize", pageSize);
                    param.Add("@TotalRows", DbType.Int32, direction: ParameterDirection.Output);

                    var items = await con.QueryAsync<ProductSearchViewModel>("[dbo].[sp_Product_GetByProductCategory]", param, commandType: CommandType.StoredProcedure);
                    var result = new SearchResult<ProductSearchViewModel>
                    {
                        Items = items.ToList(),
                        TotalRows = param.Get<int>("TotalRows")
                    };

                    return result;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "sp_Product_GetByProductCategory ProductService Error.");
                return null;
            }
        }
    }
}
