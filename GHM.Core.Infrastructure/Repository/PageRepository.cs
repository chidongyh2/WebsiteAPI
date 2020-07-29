using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.Models.ConfigViewModels;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace GHM.Core.Infrastructure.Repository
{
    public class PageRepository : RepositoryBase, IPageRepository
    {
        private readonly IRepository<Page> _pageRepository;
        public PageRepository(IDbContext context) : base(context)
        {
            _pageRepository = Context.GetRepository<Page>();
        }

        public async Task<bool> CheckExists(int id)
        {
            return await _pageRepository.ExistAsync(x => x.Id == id);
        }

        public async Task<int> Insert(Page page)
        {
            try
            {
                _pageRepository.Create(page);
                return await Context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return -1;
            }
        }

        public async Task<int> Update(Page page)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateIdPath(int id, string idPath)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            var oldIdPath = info.IdPath;
            info.IdPath = idPath;
            var result = await Context.SaveChangesAsync();
            if (result > 0 && info.ChildCount > 0)
            {
                await UpdateChildrenIdPath(oldIdPath, info.IdPath);
            }
            return result;
        }

        public async Task<int> UpdateIdPath(string oldIdPath, string newIdPath)
        {
            var pages = await _pageRepository.GetsAsync(false, x => x.IdPath.StartsWith(oldIdPath + "."));
            if (pages == null || !pages.Any())
                return -1;

            foreach (var page in pages)
            {
                page.IdPath = page.IdPath.Replace(oldIdPath, newIdPath);
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateChildrenIdPath(string oldParentIdPath, string newParentIdPath)
        {
            var childrens = await GetListChildrenByParentIdPath(oldParentIdPath);
            if (!childrens.Any())
                return -1;

            foreach (var children in childrens)
            {
                var oldIdPath = children.IdPath;
                children.IdPath = $"{newParentIdPath}.{children.Id}";
                await UpdateChildrenIdPath(oldIdPath, $"{children.IdPath}");
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<List<Page>> GetListChildrenByParentIdPath(string parentIdPath, bool isReadOnly = false)
        {
            return await _pageRepository.GetsAsync(isReadOnly, x => x.IdPath.StartsWith($"{parentIdPath}."));
        }

        public async Task<List<Page>> GetListParentByChildrenIdPath(string childrenIdPath)
        {
            return await _pageRepository.GetsAsync(true, x => childrenIdPath.Contains(x.IdPath + "."));
        }

        public async Task<int> UpdateChildCount(int id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            var childCount = await _pageRepository.CountAsync(x => x.ParentId.HasValue && x.ParentId.Value == id);
            info.ChildCount = childCount;
            var result = await Context.SaveChangesAsync();
            return result;
        }

        public async Task<int> Delete(int id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(int id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            _pageRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<PageSearchViewModel>> Search(string keyword, bool? isActive, string languageId)
        {
            Expression<Func<Page, bool>> spec = x => !x.IsDelete;
            Expression<Func<PageTranslation, bool>> specTranslation = x => x.LanguageId == languageId;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.StripVietnameseChars().ToLower();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive.Value);

            var query = Context.Set<Page>().Where(spec).Join(Context.Set<PageTranslation>().Where(specTranslation),
                    p => p.Id, pt => pt.PageId, (p, pt) => new { p, pt })
                .OrderBy(x => x.p.IdPath)
                .ThenBy(x => x.p.OrderPath)
                .Select(x => new PageSearchViewModel
                {
                    Id = x.p.Id,
                    Name = x.pt.Name,
                    Description = x.pt.Description,
                    IsActive = x.p.IsActive,
                    Url = x.p.Url,
                    ParentId = x.p.ParentId,
                    Icon = x.p.Icon,
                    OrderPath = x.p.OrderPath,
                    BgColor = x.p.BgColor,
                    IdPath = x.p.IdPath
                });
            return await query.ToListAsync();
        }

        public Task<List<PageSearchViewModel>> Search(string keyword, bool? isActive, string languageId, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Page, bool>> spec = x => !x.IsDelete;
            Expression<Func<PageTranslation, bool>> specTranslation = x => x.LanguageId == languageId;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.StripVietnameseChars().ToLower();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive.Value);

            var query = Context.Set<Page>().Where(spec).Join(Context.Set<PageTranslation>().Where(specTranslation),
                    p => p.Id, pt => pt.PageId, (p, pt) => new { p, pt })
                .OrderBy(x => x.p.IdPath)
                .ThenBy(x => x.p.OrderPath)
                .Select(x => new PageSearchViewModel
                {
                    Id = x.p.Id,
                    Name = x.pt.Name,
                    Description = x.pt.Description,
                    IsActive = x.p.IsActive,
                    Url = x.p.Url,
                    ParentId = x.p.ParentId,
                    Icon = x.p.Icon,
                    OrderPath = x.p.OrderPath,
                    BgColor = x.p.BgColor,
                    IdPath = x.p.IdPath
                });

            totalRows = query.Count();
            return query.Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<List<T>> Search<T>(Expression<Func<Page, T>> projector, string keyword, bool? isActive, int? moduleId, int page, int pageSize,
            out int totalRows)
        {
            throw new NotImplementedException();
        }

        public async Task<List<PageSearchActivatedViewModel>> SearchActivatedPages(string languageId, string tenantId, string keyword)
        {
            Expression<Func<PageTranslation, bool>> specTranslation = x => x.LanguageId == languageId;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            return await Context.Set<PageTranslation>().Where(specTranslation)
                .Join(Context.Set<TenantPage>().Where(x => x.TenantId == tenantId), pt => pt.PageId, tp => tp.PageId,
                    (pt, tp) => new PageSearchActivatedViewModel
                    {
                        Id = pt.PageId,
                        Name = pt.Name
                    }).ToListAsync();
        }

        public async Task<int> UpdateActive(int id, bool isActive)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            info.IsActive = isActive;
            return await Context.SaveChangesAsync();
        }

        public async Task<Page> GetInfo(int id, bool isReadOnly = false)
        {
            return await _pageRepository.GetAsync(isReadOnly, x => x.Id == id);
        }

        public async Task<List<Page>> GetInfo(List<int> ids)
        {
            return await _pageRepository.GetsAsync(true, x => ids.Contains(x.Id));
        }

        public async Task<List<PageGetByUserViewModel>> GetListPageByUserId(string userId)
        {
            // Get all public pages.
            //var listPublic = await _pageRepository.GetsAsAsync(x => new PageGetByUserViewModel
            //{
            //    //PageId = x.PageId,
            //    //Name = x.Name,
            //    BgColor = x.BgColor,
            //    ChildCount = x.ChildCount,
            //    Icon = x.Icon,
            //    Id = x.Id,
            //    IdPath = x.IdPath,
            //    Order = x.Order,
            //    ParentId = x.ParentId,
            //    Url = x.Url
            //}, x => x.IsActive && !x.IsDelete);

            // Get all user permission pages.
            //var listGrantedPages = Context.Set<Page>().Where(x => x.IsActive && !x.IsDelete && !x.IsPublic)
            //    .Join(Context.Set<UserPermission>().Where(x => x.UserId == userId), p => p.PageId, up => up.PageId, (p, up) =>
            //        new PageGetByUserViewModel
            //        {
            //            PageId = p.PageId,
            //            Name = p.Name,
            //            BgColor = p.BgColor,
            //            ChildCount = p.ChildCount,
            //            Icon = p.Icon,
            //            Id = p.Id,
            //            IdPath = p.IdPath,
            //            Order = p.Order,
            //            ParentId = p.ParentId,
            //            Url = p.Url
            //        });

            //return listPublic.Union(listGrantedPages).OrderBy(x => x.Order).ToList();
            return null;
        }

        public async Task<List<PageGetByUserViewModel>> GetPagesByUserId(string tenantId, string userId, string languageId)
        {
            //var query = Context.Set<IdentityUserRole<string>>().Where(x => x.UserId == userId)
            //    .Join(Context.Set<RolesPages>(), userRole => userRole.RoleId, rolePage => rolePage.RoleId,
            //        (userRole, rolePage) => rolePage.PageId)
            //    .Join(Context.Set<Page>(), pageId => pageId, page => page.Id, (pageId, page) => page)
            //    .Join(Context.Set<PageTranslation>().Where(x => x.LanguageId == languageId), page => page.Id,
            //        pageTranslation => pageTranslation.PageId
            //        , (page, pageTranslation) => new { page, pageTranslation })
            //    .OrderBy(x => x.page.IdPath)
            //    .ThenBy(x => x.page.OrderPath)
            //    .Select(x => new PageGetByUserViewModel
            //    {
            //        Id = x.page.Id,
            //        Name = x.pageTranslation.Name,
            //        Url = x.page.Url,
            //        ParentId = x.page.ParentId,
            //        IdPath = x.page.IdPath,
            //        Order = x.page.Order,
            //        OrderPath = x.page.OrderPath,
            //        Icon = x.page.Icon,
            //        BgColor = x.page.BgColor,
            //        ChildCount = x.page.ChildCount
            //    }).Distinct().AsNoTracking();
            var query = from tp in Context.Set<TenantPage>().Where(x => x.TenantId == tenantId)
                        join p in Context.Set<Page>().Where(x => x.IsActive) on tp.PageId equals p.Id
                        join pt in Context.Set<PageTranslation>().Where(x => x.LanguageId == languageId) on p.Id equals pt.PageId
                        select new PageGetByUserViewModel
                        {
                            Id = p.Id,
                            Name = pt.Name,
                            Url = p.Url,
                            ParentId = p.ParentId,
                            IdPath = p.IdPath,
                            Order = p.Order,
                            OrderPath = p.OrderPath,
                            Icon = p.Icon,
                            BgColor = p.BgColor,
                            ChildCount = p.ChildCount
                        };
        
            return await query.Distinct().AsNoTracking().ToListAsync();
        }

        public async Task<List<PageGetByUserViewModel>> GetAllActivePage(string languageId)
        {
            var query = Context.Set<Page>().Where(x => x.IsActive && !x.IsDelete)
                .Join(Context.Set<PageTranslation>().Where(x => x.LanguageId == languageId), p => p.Id,
                    pt => pt.PageId, (p, pt) => new PageGetByUserViewModel
                    {
                        Id = p.Id,
                        Name = pt.Name,
                        Url = p.Url,
                        ParentId = p.ParentId,
                        IdPath = p.IdPath,
                        Order = p.Order,
                        OrderPath = p.OrderPath,
                        Icon = p.Icon,
                        BgColor = p.BgColor,
                        ChildCount = p.ChildCount
                    });
            return await query.ToListAsync();
        }
    }
}
