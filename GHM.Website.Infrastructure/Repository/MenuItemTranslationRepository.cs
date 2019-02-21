using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;


namespace GHM.Website.Infrastructure.Repository
{
    public class MenuItemTranslationRepository : RepositoryBase, IMenuItemTranslationRepository
    {
        private readonly IRepository<MenuItemTranslation> _menuItemTranslation;
        public MenuItemTranslationRepository(IDbContext context) : base(context)
        {
            _menuItemTranslation = Context.GetRepository<MenuItemTranslation>();
        }

        public async Task<string> GetMenuItemGroupName(int menuItemId, string languageId)
        {
            return await _menuItemTranslation.GetAsAsync(x => x.Name, x => x.MenuItemId == menuItemId
                                                                              && x.LanguageId == languageId);
        }

        public async Task<int> Insert(MenuItemTranslation menuItemTranslation)
        {
            _menuItemTranslation.Create(menuItemTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(MenuItemTranslation menuItemTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<MenuItemTranslation> menuItemTranslations)
        {
            _menuItemTranslation.Creates(menuItemTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(int menuItemId)
        {
            var info = await _menuItemTranslation.GetsAsync(false, x => x.MenuItemId == menuItemId);
            if (info == null || !info.Any())
                return -1;

            _menuItemTranslation.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExistsByName(string menuId, int menuItemId, string tenantId, string languageId, string name)
        {
            name = name.Trim();
            return await _menuItemTranslation.ExistAsync(x => x.MenuItem.MenuId == menuId &&
                x.MenuItemId != menuItemId && x.TenantId == tenantId && x.LanguageId == languageId && x.Name == name);
        }

        public async Task<bool> CheckExistsByNamePath(string menuId, int menuItemId, string tenantId, string languageId, string namePath)
        {
            namePath = namePath.Trim();
            return await _menuItemTranslation.ExistAsync(x => x.MenuItem.MenuId == menuId &&
                x.MenuItemId != menuItemId && x.TenantId == tenantId && x.LanguageId == languageId && x.NamePath == namePath);
        }

        public async Task<MenuItemTranslation> GetInfo(int menuItemId, string languageId, bool isReadonly = false)
        {
            return await _menuItemTranslation.GetAsync(isReadonly, x => x.MenuItemId == menuItemId && x.LanguageId == languageId);
        }

        public async Task<List<MenuItemTranslationViewModel>> GetsByMenuItemId(int menuItemId)
        {
            return await _menuItemTranslation.GetsAsAsync(x => new MenuItemTranslationViewModel
            {
                Name = x.Name,
                LanguageId = x.LanguageId,
                ParentName = x.ParentName,
                NamePath = x.NamePath,
                Description = x.Description
            }, x => x.MenuItemId == menuItemId);
        }
    }
}
