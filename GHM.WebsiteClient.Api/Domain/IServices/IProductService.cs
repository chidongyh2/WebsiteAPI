using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface IProductService
    {
        Task<List<ProductCategorySearchViewModel>> ProductCategorySearch(string tenantId, string languageId, string seoLink, bool? isHot, bool? isHomePage, int top = 20);

        Task<List<ProductSearchViewModel>> ProductSearch(string tenantId, string languageId, string categorySeoLink, bool? isHot, bool? isHomePage, int top = 20);
    }
}
