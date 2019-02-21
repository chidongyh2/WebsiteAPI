using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.Constants;
using Microsoft.EntityFrameworkCore;
namespace GHM.Website.Infrastructure.Repository
{
    public class MenuRepository : RepositoryBase, IMenuRepository
    {
        private readonly IRepository<Menu> _menuRepository;
        public MenuRepository(IDbContext context) : base(context)
        {
            _menuRepository = Context.GetRepository<Menu>();
        }

        public Task<List<MenuViewModel>> Search(string tenantId, string keyword, bool? isActive, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Menu, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<Menu>().Where(spec)
                .Select(x => new MenuViewModel
                {
                    Id = x.Id,
                    Name = x.Name,
                    Description = x.Description,
                    Icon = x.Icon,
                    EffectType = x.EffectType,
                    Order = x.Order,
                    IsActive = x.IsActive,
                    Position = x.Position,
                }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

        }

        public async Task<int> Insert(Menu menu)
        {
            _menuRepository.Create(menu);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Menu menu)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string menuId)
        {
            var info = await GetInfo(menuId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string menuId)
        {
            var info = await GetInfo(menuId);
            if (info == null)
                return -1;

            _menuRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<Menu> GetInfo(string menuId, bool isReadonly = false)
        {
            return await _menuRepository.GetAsync(isReadonly, x => x.Id == menuId);
        }

        public async Task<Menu> GetInfo(string tenantId, string menuId, bool isReadonly = false)
        {
            return await _menuRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == menuId);
        }

        public async Task<Menu> GetInfoByPosition(string tenantId, Position position, bool isReadonly = true)
        {
            var listMenu = await _menuRepository.GetsAsync(isReadonly, x => x.TenantId == tenantId && x.IsActive && !x.IsDelete && x.Position == position);
            return listMenu.FirstOrDefault();
        }

        public async Task<bool> CheckExistsByName(string tenantId, string name)
        {
            name = name.Trim();
            return await _menuRepository.ExistAsync(x => !x.IsDelete &&
                 x.TenantId == tenantId && x.Name.Equals(name));
        }
    }
}
