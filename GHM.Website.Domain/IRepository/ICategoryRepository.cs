using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface ICategoryRepository
    {
        Task<int> Insert(Category category);

        Task<int> Update(Category category);

        Task<int> UpdateCategoryIdPath(string tenantId, int id, string idPath);

        Task<int> UpdateChildrenIdPath(string oldParentIdPath, string newParentIdPath);

        Task<int> Delete(string tenantId, int id);

        Task<int> CountByParentId(int? id);

        Task<int> ForceDelete(string tenantId, int id);

        Task<Category> GetInfo(string tenantId, int id, bool isReadonly = false);

        Task<Category> GetActiveInfo(string tenantId, int id);

        Task<bool> CheckExistsById(string tenantId, int id);

        Task<List<CategoryViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize, out int totalRows);

        Task<List<CategoryViewModel>> SearchAll(string tenantId, string languageId, string keyword, bool? isActive);

        Task<List<Suggestion<int>>> Suggestions(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows);

        Task<List<CategorySearchForSelectViewModel>> SearchForSelect(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows);

        CategoryTranslationViewModel GetCategoryRelations(string tenantId, string languageId, int categoryId, int? parrentId);

        Task<List<string>> GetAllSeoLinkForSitemap(string tenantId, string languageId);

        Task<List<CategorySearchForSelectViewModel>> SearchForHomePage(string tenantId, string languageId);
    }
}
