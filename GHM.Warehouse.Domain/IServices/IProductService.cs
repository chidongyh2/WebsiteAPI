using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IProductService
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

        //Task<ActionResultResponse<string>> InsertProductValue(string tenantId, string productId, string creatorId, string creatorFullName, string creatorAvatar,
        //    ProductAttributeMeta productAttributeMeta);

        Task<ActionResultResponse<string>> UpdateProductValue(string tenantId, string productId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productValueId, ProductAttributeMeta productAttributeMeta);

        //Task<ActionResultResponse> DeleteProductValue(string tenantId, string productId, string productValueId);

        Task<ActionResultResponse> DeleteProductValueByAttributeId(string tenantId, string productId, string productAttributeId);

        //Task<List<ActionResultResponse<string>>> InsertListProductValue(string tenantId, string productId, string creatorId, string creatorFullName, string creatorAvatar,
        //  List<ProductAttributeMeta> listProductValueMeta);

        //Task<ActionResultResponse<string>> UpdateProductUnit(string tenantId, string productId, string creatorId, string creatorFullName, string creatorAvatar,
        //    string productUnitId, ProductListUnitMeta productListUnitMeta);

        Task<ActionResultResponse> DeleteProductUnit(string tenantId, string productId, string productUnitId);

        Task<SearchResult<ProductCategoriesAttributeViewModel>> GetProductCategoryAttributeByProductId(string tenantId, string languageId, string productId);

        Task<SearchResult<UnitSuggestionsViewModel>> GetUnitByProductId(string tenantId, string languageId, string productId, int page, int pageSize);

        Task<SearchResult<ProductUnitViewModel>> GetProductUnitByProductId(string tenantId, string productId);

        Task<ActionResultResponse> UpdateAprrove(string tenantId, string id, ApproverStatus status);

        Task<List<ProductTranslationViewModel>> GetProductTranslationById(string tenantId, string id);
    }
}
