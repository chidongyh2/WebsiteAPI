using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;
namespace GHM.Website.Domain.IServices
{
    public interface IMenuService
    {
        Task<SearchResult<MenuViewModel>> Search(string tenantId,  string keyword,
            bool? isActive, int page, int pageSize);

        Task<ActionResultResponse<string>> InsertMenu(string tenantId, string creatorId, string creatorFullName, MenuMeta menuMeta);

        Task<ActionResultResponse> UpdateMenu(string tenantId, string lastUpdateUserId, string lastUpdateFullName,
            string menuId, MenuMeta menuMeta);

        Task<ActionResultResponse> DeleteMenu(string tenantId, string menuId);

        Task<ActionResultResponse<MenuDetailViewModel>> GetDetailMenu(string tenantId, string menuId);

        Task<ActionResultResponse<int>> InsertMenuItem(string tenantId, string creatorId, string creatorFullName, string menuId,MenuItemMeta menuItemMeta);

        Task<ActionResultResponse> UpdateMenuItem(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string menuId,int menuItemId, MenuItemMeta menuItemMeta);

        Task<ActionResultResponse> DeleteMenuItem(string tenantId, string menuId,int menuItemId);

        Task<ActionResultResponse<MenuItemDetailViewModel>> GetDetailMenuItem(string tenantId, string menuId,  int menuItemId);

        Task<SearchResult<MenuItemSearchViewModel>> SearchMenuItem(string tenantId, string languageId, string keyword,string menuId,
            bool? isActive, int page, int pageSize);
        
        Task<List<MenuItemForSelectViewModel>> GetMenuItemForSelect(string tenantId, string languageId, string keyword, string menuId, int page,
            int pageSize);

        Task<List<TreeData>> GetFullMenuItemTree(string tenantId, string languageId, string menuId);

        Task<ActionResultResponse> UpdateOrderAndParentId(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string menuId,
            MenuItemUpdate menuItem);

        Task<List<MenuItemSearchViewModel>> GetAllActivatedMenuItem(string tenantId, string languageId, string menuId);

        Task<List<MenuItemSearchViewModel>> GetAllActivatedMenuItemByPosition(string tenantId, string languageId, Position position);

        Task<MenuItemViewModel> GetDetailBySeoLink(string tenantId, string seoLink, string v);
    }
}
