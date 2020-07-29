using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface IMenuItemRepository
    {
        Task<bool> CheckExists(int id);

        Task<int> Insert(MenuItem menuItem);

        Task<int> Update(MenuItem menuItem);

        Task<int> UpdateMenuItemIdPath(int id, string idPath);

        Task<int> UpdateChildCount(int id, int childCount);

        Task<int> UpdateChildrenIdPath(string oldIdPath, string newIdPath);

        Task<int> ForceDelete(int menuItemId);

        Task<MenuItem> GetInfo(int menuItemId, bool isReadOnly = false);

        Task<MenuItem> GetInfo(string menuItemIdPath, bool isReadOnly = false);

        Task<int> GetChildCount(int id);

        Task<bool> CheckExistsByMenuId(string menuId);

        Task<int> CountByParentId(int? id);

        Task<List<MenuItemSearchViewModel>> GetAllActivatedMenuItem(string tenantId, string menuId, string languageId);

        Task<List<MenuItemSearchViewModel>> GetAllActivatedMenuItemForClient(string tenantId, string menuId, string languageId);

        Task<List<MenuItemForSelectViewModel>> GetAllMenuItemForSelect(string tenantId,  string languageId, string keyword, string menuId, int page, int pageSize, out int totalRows);

        Task<List<MenuItemSearchViewModel>> SearchMenuItem(string tenantId, string languageId, string keyword, string menuId, bool? isActive, int page, int pageSize, out int totalRows);

        Task<bool> CheckExistsBySubjectId(string subjectId, SubjectType subjectType);

        Task<bool> CheckExistsBySubjectId(string tenantId, string subjectId, SubjectType subjectType, string menuId);

        Task<int> UpdateOrderAndParentId(List<MenuItemUpdate> listMenuItem);
    }
}
