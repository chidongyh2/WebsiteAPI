using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.AspNetCore.Html;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class MenuRepository: RepositoryBase, IMenuRepository
    {
        private readonly IRepository<Menu> _menuRepository;
        private readonly IRepository<MenuItem> _menuItemRepository;

        //public INewsRepository NewsRepository { get; set; }
        public MenuRepository(IDbContext context) : base(context)
        {
            _menuRepository = Context.GetRepository<Menu>();
            _menuItemRepository = Context.GetRepository<MenuItem>();
        }

        public async Task<List<MenuItem>> GetListMenuItemByMenuId(int menudId)
        {
            var sort = Context.Filters.CreateSort<MenuItem>(false, "Order", "IdPath");
            return await _menuItemRepository.GetsAsync(true, x => x.MenuId == menudId && x.IsActive, sort);
        }

        public bool CheckNamePathExists(string namePath)
        {
            return _menuItemRepository.Exist(x => x.NamePath.Equals(namePath) && x.IsActive);
        }

        public async Task<MenuItem> GetMenuItemByNamePath(string namePath)
        {
            return await _menuItemRepository.GetAsync(true, x => x.NamePath.Equals(namePath) && x.IsActive);
        }

        public async Task<List<Breadcrumb>> GetListMenuItemForBreadcrumb(string namePath)
        {
            return await Context.Set<MenuItem>().AsNoTracking().Where(x => namePath.Contains(x.NamePath) && x.IsActive)
                .Select(x => new Breadcrumb
                {
                    ObjectId = x.ObjectId,
                    ObjectType = x.ObjectType,
                    Name = x.Name,
                    NamePath = x.NamePath,
                    Url = x.Url,
                    IsCurrent = x.NamePath.Equals(namePath)
                }).ToListAsync();
        }
    }
}
