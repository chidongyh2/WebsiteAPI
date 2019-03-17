using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.Models.ConfigViewModels;
using GHM.Core.Domain.ViewModels;

namespace GHM.Core.Domain.IRepository
{
    public interface IPageRepository
    {
        Task<bool> CheckExists(int id);

        Task<int> Insert(Page page);

        Task<int> Update(Page pageMeta);

        Task<int> UpdateIdPath(int id, string idPath);

        Task<int> UpdateIdPath(string oldIdPath, string newIdPath);

        Task<int> UpdateChildrenIdPath(string oldParentIdPath, string newParentIdPath);

        Task<List<Page>> GetListChildrenByParentIdPath(string parentIdPath, bool isReadOnly = false);

        Task<List<Page>> GetListParentByChildrenIdPath(string childrenIdPath);

        Task<int> UpdateChildCount(int id);

        Task<int> Delete(int id);

        Task<int> ForceDelete(int id);

        Task<List<PageSearchViewModel>> Search(string keyword, bool? isActive, string languageId);

        Task<List<PageSearchViewModel>> Search(string keyword, bool? isActive, string languageId, int page, int pageSize, out int totalRows);

        Task<List<T>> Search<T>(Expression<Func<Page, T>> projector, string keyword, bool? isActive, int? moduleId, int page, int pageSize, out int totalRows);

        Task<List<PageSearchActivatedViewModel>> SearchActivatedPages(string languageId, string tenantId, string keyword);

        Task<int> UpdateActive(int id, bool isActive);

        Task<Page> GetInfo(int id, bool isReadOnly = false);

        Task<List<Page>> GetInfo(List<int> ids);

        Task<List<PageGetByUserViewModel>> GetListPageByUserId(string userId);

        Task<List<PageGetByUserViewModel>> GetPagesByUserId(string tenantId, string userId, string languageId);

        Task<List<PageGetByUserViewModel>> GetAllActivePage(string languageId);
    }
}
