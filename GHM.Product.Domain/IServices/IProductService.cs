using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Product.Domain.ModelMetas;
using GHM.Product.Domain.ViewModels;

namespace GHM.Product.Domain.IServices
{
  public  interface IProductService
    {
        Task<SearchResult<ProductSearchViewModel>> Search(string tenantId, string languageId, string keyword, int? categoryId, bool? isManagementByLot,
            bool? isActive, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvatar,
            ProductMeta productMeta);

        Task<ActionResultResponse<string>> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productId, ProductMeta productMeta);

        Task<ActionResultResponse> Delete(string tenantId, string productId);

        Task<ActionResultResponse<ProductDetailViewModel>> GetDetail(string tenantId, string productId);

        Task<SearchResult<ProductSuggestionViewModel>> Suggestion(string tenantId, string languageId, string keyword, int page, int pageSize);

        Task<ActionResultResponse> UpdateIsActive(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productId, bool isActive);

        Task<ActionResultResponse> UpdateIsManagementByLot(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productId, bool isManagementByLot);

        Task<ActionResultResponse<string>> InsertProductValue(string tenantId, string productId, string creatorId, string creatorFullName, string creatorAvatar,
            ProductValueMeta productValueMeta);

        Task<ActionResultResponse<string>> UpdateProductValue(string tenantId, string productId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productValueId, ProductValueMeta productValueMeta);

        Task<ActionResultResponse> DeleteProductValue(string tenantId, string productId, string productValueId);

        Task<ActionResultResponse> DeleteProductValueByAttributeId(string tenantId, string productId, string productAttributeId);

        Task<List<ActionResultResponse<string>>> InsertListProductValue(string tenantId, string productId, string creatorId, string creatorFullName, string creatorAvatar,
          List<ProductValueMeta>  listProductValueMeta);

        Task<ActionResultResponse<string>> InsertProductUnit(string tenantId, string productId, string creatorId, string creatorFullName, string creatorAvatar,
            ProductListUnitMeta productListUnitMeta);

        Task<ActionResultResponse<string>> UpdateProductUnit(string tenantId, string productId, string creatorId, string creatorFullName, string creatorAvatar,
            string productUnitId,   ProductListUnitMeta productListUnitMeta);

        Task<ActionResultResponse> DeleteProductUnit(string tenantId, string productId, string productUnitId);

        Task<SearchResult<ProductCategoriesAttributeViewModel>> GetProductCategoryAttributeByProductId(string tenantId, string languageId, string productId);

        Task<SearchResult<UnitSuggestionsViewModel>> GetUnitByProductId(string tenantId, string languageId, string productId, int page, int pageSize);

        Task<SearchResult<ProductUnitViewModel>> GetProductUnitByProductId(string tenantId, string productId);

        Task<ActionResultResponse> ChangeProductIsHot(string tenantId, string productId, bool isHot);

        Task<ActionResultResponse> ChangeProductIsHomePage(string tenantId, string productId, bool isHomePage);
    }
}
