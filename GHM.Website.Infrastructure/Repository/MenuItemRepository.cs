using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
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
    public class MenuItemRepository : RepositoryBase, IMenuItemRepository
    {
        private readonly IRepository<MenuItem> _menuItemRepository;
        public MenuItemRepository(IDbContext context) : base(context)
        {
            _menuItemRepository = Context.GetRepository<MenuItem>();
        }

        public async Task<bool> CheckExists(int id)
        {
            return await _menuItemRepository.ExistAsync(x => x.Id == id && x.IsActive);
        }

        public async Task<int> Insert(MenuItem menuItem)
        {
            _menuItemRepository.Create(menuItem);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(MenuItem menuItem)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateMenuItemIdPath(int id, string idPath)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateChildCount(int id, int childCount)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            info.ChildCount = childCount;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateChildrenIdPath(string oldIdPath, string newIdPath)
        {
            var children = await _menuItemRepository.GetsAsync(false, x => x.IdPath.StartsWith(oldIdPath + "."));
            if (children == null || !children.Any())
                return -1;

            foreach (var menuItem in children)
            {
                menuItem.IdPath = $"{newIdPath}.{menuItem.Id}";
            }
            return await Context.SaveChangesAsync();
        }


        public async Task<int> ForceDelete(int menuItemId)
        {
            var info = await _menuItemRepository.GetsAsync(false, x => x.Id == menuItemId);
            if (info == null || !info.Any())
                return -1;

            _menuItemRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<MenuItem> GetInfo(int menuItemId, bool isReadOnly = false)
        {
            return await _menuItemRepository.GetAsync(isReadOnly, x => x.Id == menuItemId);
        }

        public async Task<MenuItem> GetInfo(string menuItemIdPath, bool isReadOnly = false)
        {
            return await _menuItemRepository.GetAsync(isReadOnly, x => x.IdPath == menuItemIdPath);
        }

        public async Task<int> GetChildCount(int id)
        {
            return await _menuItemRepository.CountAsync(x => x.ParentId == id);
        }

        public async Task<bool> CheckExistsByMenuId(string menuId)
        {
            return await _menuItemRepository.ExistAsync(x => x.MenuId == menuId);
        }

        public async Task<int> CountByParentId(int? id)
        {
            return await _menuItemRepository.CountAsync(x => x.ParentId == id );
        }

        public async Task<List<MenuItemSearchViewModel>> GetAllActivatedMenuItem(string tenantId, string menuId, string languageId)
        {
            var query = Context.Set<MenuItem>().Where(x => x.IsActive && x.TenantId == tenantId && x.MenuId == menuId)
                .Join(Context.Set<MenuItemTranslation>().Where(x => x.LanguageId == languageId), x => x.Id,
                    xt => xt.MenuItemId, (x, xt) => new MenuItemSearchViewModel
                    {
                        Id = x.Id,
                        MenuId = x.MenuId,
                        SubjectId = x.SubjectId,
                        SubjectType = x.SubjectType,
                        Icon = x.Icon,
                        Image = x.Image,
                        Url = x.Url,
                        Name = xt.Name,
                        IsActive = x.IsActive,
                        ParentId = x.ParentId,
                        IdPath = x.IdPath,
                        Order = x.Order,
                        OrderPath = x.OrderPath,
                        Level = x.Level,
                        ChildCount = x.ChildCount,
                        ParentName = xt.ParentName,
                        NamePath = xt.NamePath,
                        Description = xt.Description
                    });
            return await query
                .AsNoTracking()
                .OrderBy(c=> c.Order)
                .ToListAsync();
        }

   
        public  Task<List<MenuItemForSelectViewModel>> GetAllMenuItemForSelect(string tenantId, string languageId, string keyword, string menuId, int page, int pageSize,
            out int totalRows)
        {
            Expression<Func<MenuItem, bool>> spec = x =>  x.TenantId == tenantId && x.IsActive && x.MenuId == menuId;
            Expression<Func<MenuItemTranslation, bool>> specTranslation = x => x.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<MenuItem>().Where(spec)
                .Join(Context.Set<MenuItemTranslation>().Where(specTranslation), o => o.Id,
                    ot => ot.MenuItemId, (o, ot) => new MenuItemForSelectViewModel
                    {
                        Id = o.Id,
                        Name = ot.Name,
                    });

            totalRows = query.Count();

            return query
                .AsNoTracking()
                .OrderBy(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public  Task<List<MenuItemSearchViewModel>> SearchMenuItem(string tenantId, string languageId, string keyword, string menuId, bool? isActive, int page, int pageSize,
            out int totalRows)
        {
            Expression<Func<MenuItem, bool>> spec = x =>  x.TenantId == tenantId && x.MenuId == menuId;
            Expression<Func<MenuItemTranslation, bool>> specTranslation = x => x.LanguageId == languageId;
            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive.Value);

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<MenuItem>().Where(spec)
                .Join(Context.Set<MenuItemTranslation>().Where(specTranslation), o => o.Id, ot => ot.MenuItemId,
                    (o, ot) => new MenuItemSearchViewModel
                    {
                        Id = o.Id,
                        MenuId = o.MenuId,
                        SubjectId = o.SubjectId,
                        SubjectType = o.SubjectType,
                        Icon = o.Icon,
                        Image = o.Image,
                        Url = o.Url,
                        Name = ot.Name,
                        IsActive = o.IsActive,
                        ParentId = o.ParentId,
                        IdPath = o.IdPath,
                        Order = o.Order,
                        OrderPath = o.OrderPath,
                        Level = o.Level,
                        ChildCount = o.ChildCount,
                        ParentName = ot.ParentName,
                        NamePath = ot.NamePath
                    });

            totalRows = query.Count();
            return query
                .AsNoTracking()
                .OrderByDescending(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<bool> CheckExistsBySubjectId(string subjectId, SubjectType subjectType)
        {
            return await _menuItemRepository.ExistAsync(x => x.SubjectId == subjectId && x.SubjectType == subjectType);
        }

        public async Task<int> UpdateOrderAndParentId(List<MenuItemUpdate> listMenuItem)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExistsBySubjectId(string tenantId, string subjectId, SubjectType subjectType, string menuId)
        {
            return await _menuItemRepository.ExistAsync(x => x.TenantId == tenantId && x.SubjectId == subjectId && x.SubjectType == subjectType && x.MenuId == menuId);
        }
    }
}
