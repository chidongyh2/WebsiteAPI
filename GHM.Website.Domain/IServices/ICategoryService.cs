using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IServices
{
    public interface ICategoryService
    {
        Task<ActionResultResponse> Insert(string tenantId, CategoryMeta categoryMeta);

        Task<ActionResultResponse> Update(string tenantId, int id, CategoryMeta categoryMeta);

        //Task<ActionResultResponse> UpdateOrder(string tenantId, int id, int order, int? parentId);

        Task<ActionResultResponse> Delete(string tenantId, int id);

        Task<SearchResult<TreeData>> GetsTree(string tenantId, string languageId, string keyword, bool? isActive);

        Task<ActionResultResponse<CategoryDetailViewModel>> GetDetail(string tenantId, int id);

        Task<SearchResult<CategoryViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize);

        Task<SearchResult<Suggestion<int>>> Suggestions(string tenantId, string languageId, string keyword, int page, int pageSize);

        Task<SearchResult<CategorySearchForSelectViewModel>> SearchForSelect(string tenantId, string languageId, string keyword, int page, int pageSize);

        Task<CategoryTranslationViewModel> GetNameByCategoryId(string tenantId, string languageId, string seoLink);

        Task<ActionResultResponse<CategoryTranslationViewModel>> GetCategoryRelations(string tenantId, string languageId, string seoLink);

        Task<SearchResult<string>> GetAllSeoLinkForSitemap(string tenantId, string languageId);

        Task<SearchResult<CategorySearchForSelectViewModel>> GetCategoryHomePage(string tenantId, string languageId);
    }
}
