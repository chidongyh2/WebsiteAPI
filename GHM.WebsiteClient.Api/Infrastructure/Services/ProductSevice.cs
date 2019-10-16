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

        public async Task<SearchResult<ProductSearchViewModel>> ProductSearchByCategory(string tenantId, string languageId, string categorySeoLink, bool? isHot, bool? isHomePage, int page = 1, int pageSize = 20)
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

        public async Task<SearchResult<ProductSearchViewModel>> ProductSearch(string tenantId, string languageId,
            string keyword, bool? isHot, bool? isHomePage, string seoLink, int page = 1, int pageSize = 20)
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
                    param.Add("@Keyword", keyword);
                    param.Add("@SeoLink", seoLink);
                    param.Add("@Page", page);
                    param.Add("@PageSize", pageSize);
                    param.Add("@TotalRows", DbType.Int32, direction: ParameterDirection.Output);

                    var items = await con.QueryAsync<ProductSearchViewModel>("[dbo].[sp_Product_Search]", param, commandType: CommandType.StoredProcedure);
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

        public async Task<SearchResult<ProductWidthCategoryViewModel>> ProductSearchByParentCategory(string tenantId, string languageId,
            bool? isHot, bool? isHomePage, int productCategoryParentId)
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
                    param.Add("@ProductCategoryParentId", productCategoryParentId);

                    var items = await con.QueryAsync<ProductWidthCategoryViewModel>("[dbo].[sp_Product_GetByProductCategoryParentId]", param, commandType: CommandType.StoredProcedure);
                    var result = new SearchResult<ProductWidthCategoryViewModel>
                    {
                        Items = items.ToList(),
                    };

                    return result;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "sp_Product_GetByProductCategoryParentId ProductService Error.");
                return null;
            }
        }

        public async Task<SearchResult<ProductImageViewModel>> ProductImageSearchByProductId(string tenantId, string productId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@TenantId", tenantId);
                    param.Add("@ProductId", productId);

                    var items = await con.QueryAsync<ProductImageViewModel>("[dbo].[sp_ProductImage_GetByProductId]", param, commandType: CommandType.StoredProcedure);
                    var result = new SearchResult<ProductImageViewModel>
                    {
                        Items = items.ToList()
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

        public async Task<SearchResult<ProductValueViewModel>> ProductAttributeValueGetByProductId(string tenantId, string languageId, string productId)
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
                    param.Add("@ProductId", productId);

                    var items = await con.QueryAsync<ProductValueViewModel>("[dbo].[sp_ProductAttributeValue_GetByProductId]", param, commandType: CommandType.StoredProcedure);
                    var result = new SearchResult<ProductValueViewModel>
                    {
                        Items = items.ToList()
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

        public async Task<SearchResult<ProductCategoryViewModel>> ProductCategoryGetByProductId(string tenantId, string languageId, string productId)
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
                    param.Add("@ProductId", productId);

                    var items = await con.QueryAsync<ProductCategoryViewModel>("[dbo].[sp_ProductCategory_GetByProductId]", param, commandType: CommandType.StoredProcedure);
                    var result = new SearchResult<ProductCategoryViewModel>
                    {
                        Items = items.ToList()
                    };

                    return result;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "sp_ProductCategory_GetByProductId ProductService Error.");
                return null;
            }
        }

        public async Task<ProductSearchViewModel> ProductGetDetail(string tenantId, string languageId,
            string productId, string seoLink)
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
                    param.Add("@ProductId", productId);
                    param.Add("@SeoLink", seoLink);

                    var items = await con.QueryAsync<ProductSearchViewModel>("[dbo].[sp_Product_GetDetail]", param, commandType: CommandType.StoredProcedure);

                    return items.FirstOrDefault();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "sp_Product_GetDetail ProductService Error.");
                return null;
            }
        }

        public async Task<ProductCategorySearchViewModel> ProductCategoryGetDetail(string tenantId, string languageId,
           string seoLink, int? categotyId)
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
                    param.Add("@CategoryId", categotyId);
                    param.Add("@SeoLink", seoLink);

                    var items = await con.QueryAsync<ProductCategorySearchViewModel>("[dbo].[sp_ProductCategory_GetDetail]", param, commandType: CommandType.StoredProcedure);

                    return items.FirstOrDefault();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "sp_ProductCategory_GetDetail ProductService Error.");
                return null;
            }
        }

        public async Task<int> OrderInsert(string id, string tenantId, string languageId, string fullName,
            string phoneNumber, string email, string address, string note, string sessionId, string jsonProduct)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(_connectionString))
                {
                    if (con.State == ConnectionState.Closed)
                        await con.OpenAsync();

                    DynamicParameters param = new DynamicParameters();
                    param.Add("@Id", id);
                    param.Add("@TenantId", tenantId);
                    param.Add("@languageId", languageId);
                    param.Add("@FullName", fullName);
                    param.Add("@PhoneNumber", phoneNumber);
                    param.Add("@Email", email);
                    param.Add("@Address", address);
                    param.Add("@Note", note);
                    param.Add("@SessionId", sessionId);
                    param.Add("@JsonProduct", jsonProduct);
                    
                    var result = con.Query<int>("[dbo].[sp_Order_Insert]", param, commandType: CommandType.StoredProcedure).FirstOrDefault();

                    return result;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[dbo].[sp_Order_Insert] InsertAsync OrderInsert Error.");
                return -1;
            }
        }

        public async Task<SearchResult<ProductSearchViewModel>> ProductGetByAttributeValueId(string tenantId, string languageId,
            string attributeValueName, string attributeName, int page = 1, int pageSize = 20)
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
                    param.Add("@AttributeValueName", attributeValueName);
                    param.Add("@AttributeName", attributeName);
                    param.Add("@Page", page);
                    param.Add("@PageSize", pageSize);
                    param.Add("@TotalRows", DbType.Int32, direction: ParameterDirection.Output);

                    var items = await con.QueryAsync<ProductSearchViewModel>("[dbo].[sp_Proudct_GetByAttributeId]", param, commandType: CommandType.StoredProcedure);
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
                _logger.LogError(ex, "sp_Proudct_GetByAttributeId ProductService Error.");
                return null;
            }
        }
    }
}
