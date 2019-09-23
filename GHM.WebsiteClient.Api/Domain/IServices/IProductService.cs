using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface IProductService
    {
        Task<List<ProductCategorySearchViewModel>> ProductCategorySearch(string tenantId, string languageId, string seoLink, bool? isHot, bool? isHomePage, bool? isSolution, int top = 20);

        Task<SearchResult<ProductSearchViewModel>> ProductSearchByCategory(string tenantId, string languageId, string categorySeoLink, bool? isHot, bool? isHomePage, int page = 1, int pageSize = 20);

        Task<SearchResult<ProductSearchViewModel>> ProductSearch(string tenantId, string languageId, string keyword, bool? isHot, bool? isHomePage, string seoLink, int page = 1, int pageSize = 20);

        Task<SearchResult<ProductWidthCategoryViewModel>> ProductSearchByParentCategory(string tenantId, string languageId, bool? isHot, bool? isHomePage, int productCategoryParentId);

        Task<SearchResult<ProductImageViewModel>> ProductImageSearchByProductId(string tenantId, string productId);
    }
}
