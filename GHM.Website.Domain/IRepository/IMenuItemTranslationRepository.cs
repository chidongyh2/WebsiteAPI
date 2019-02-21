using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface IMenuItemTranslationRepository
    {
        Task<string> GetMenuItemGroupName(int menuItemId, string languageId);

        Task<int> Insert(MenuItemTranslation menuItemTranslation);

        Task<int> Update(MenuItemTranslation menuItemTranslation);

        Task<int> Inserts(List<MenuItemTranslation> menuItemTranslations);

        Task<int> ForceDelete(int menuItemId);

        Task<bool> CheckExistsByName(string menuId, int menuItemId, string tenantId, string languageId, string name);

        Task<bool> CheckExistsByNamePath(string menuId, int menuItemId, string tenantId, string languageId, string namePath);

        Task<MenuItemTranslation> GetInfo(int menuItemId, string languageId, bool isReadonly = false);

        Task<List<MenuItemTranslationViewModel>> GetsByMenuItemId(int menuItemId);
    }
}
