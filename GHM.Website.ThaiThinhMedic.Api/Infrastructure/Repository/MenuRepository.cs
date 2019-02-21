using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ModelMetas;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Repository
{
    public class MenuRepository : RepositoryBase, IMenuRepository
    {
        private readonly IRepository<Menu> _menuRepository;

        public MenuRepository(IDbContext context) : base(context)
        {
            _menuRepository = Context.GetRepository<Menu>();
        }

        public async Task<ActionResultResponse> Insert(Menu menu)
        {
            _menuRepository.Create(menu);
            var result = await Context.SaveChangesAsync();

            if (result <= 0)
                return new ActionResultResponse(-1, "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");

            menu.IdPath = menu.IdPath.Replace("-1", menu.Id.ToString());
            await Context.SaveChangesAsync();
            //if (menu.ParentId.HasValue)
            //{
            //    var parentInfo = await GetInfo(menu.ParentId.Value);
            //    if (parentInfo == null)
            //        return new ActionResultResponse(-1, "Thông tin menu cha không tồn tại. Vui lòng kiểm tra lại.");

            //    menu.IdPath = $"{parentInfo.IdPath}.{menu.Id}";
            //    menu.Url = $"{parentInfo.Url}/{menu.Name.ToUrlString().ToLower()}";

            //    //await _menuRepository.Create(menu);
            //    await UpdateChildCound(parentInfo.Id);
            //}
            //else
            //{
            //    menu.IdPath = menu.Id.ToString();
            //    menu.Url = menu.Name.Trim().ToLower().ToUrlString();
            //}                

            return new ActionResultResponse(result,
                result > 0
                    ? $"Thêm mới menu \"{menu.Name}\" thành công."
                    : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với quản trị viên.");
        }

        public async Task<ActionResultResponse> Inserts(List<Menu> menus)
        {

            try
            {
                _menuRepository.Creates(menus);
                var result = await Context.SaveChangesAsync();
                if (result <= 0)
                    return new ActionResultResponse(-1, "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");

                foreach (var menu in menus)
                {
                    menu.IdPath = menu.IdPath.Replace("-1", menu.Id.ToString());
                }
                await Context.SaveChangesAsync();
                return new ActionResultResponse(result, "Thêm menu thành công.");
            }
            catch (Exception ex)
            {
                return new ActionResultResponse(-1, "Thêm menu thành công.");
            }
        }

        public async Task<ActionResultResponse> Update(MenuMeta menuMeta)
        {
            var info = await GetInfo(menuMeta.Id);
            if (info == null)
                return new ActionResultResponse(-1, $"Thông tin menu: \"{menuMeta.Name}\" không tồn tại. Vui lòng kiểm tra lại hoặc liên hệ với Quản trị viên.");

            if (info.Url != menuMeta.Url)
            {
                var isUrlExists = await CheckUrlExists(menuMeta.Id, menuMeta.Url);
                if (isUrlExists)
                    return new ActionResultResponse(-2, "Đường dẫn đã tồn tại. Vui lòng thay đổi đường dẫn. Xin cảm ơn!");
            }

            if (menuMeta.ParentId.HasValue && menuMeta.ParentId.Value == info.Id)
                return new ActionResultResponse(-3, "Menu cấp trên không được phép là menu hiện tại. Vui lòng kiểm tra lại.");

            var oldParentId = info.ParentId;
            if ((!oldParentId.HasValue && menuMeta.ParentId.HasValue) || (oldParentId.HasValue && menuMeta.ParentId.HasValue && oldParentId != menuMeta.ParentId))
            {
                var parentInfo = await GetInfo(menuMeta.ParentId.Value);
                if (parentInfo == null)
                    return new ActionResultResponse(-4, "Thông tin menu cấp trên không tồn tại. Vui lòng kiểm tra lại.");

                info.ParentId = parentInfo.Id;
                info.IdPath = $"{parentInfo.IdPath}.{info.Id}";
                info.Url = $"{parentInfo.Url}/{info.Name.ToUrlString().ToLower()}";
            }
            else if (oldParentId.HasValue && !menuMeta.ParentId.HasValue)
            {
                info.ParentId = null;
                info.IdPath = info.Id.ToString();
                info.Url = info.Name.ToUrlString().ToLower();
            }

            info.Name = menuMeta.Name.Trim();
            info.UnsignName = info.Name.StripVietnameseChars().ToUpper();
            info.Url = menuMeta.Url?.Trim();
            var result = await Context.SaveChangesAsync();
            if (result <= 0)
                return new ActionResultResponse(result, "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");

            #region Update Child Count.
            if (oldParentId.HasValue && oldParentId != menuMeta.ParentId)
                await UpdateChildCound(oldParentId.Value);

            if (menuMeta.ParentId.HasValue)
                await UpdateChildCound(menuMeta.ParentId.Value);
            #endregion
            return new ActionResultResponse(result, result > 0 ? $"Cập nhật thông tin menu: \"{info.Name}\" thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
        }

        public async Task<ActionResultResponse> Delete(int id)
        {
            var menuInfo = await GetInfo(id);
            if (menuInfo == null)
                return new ActionResultResponse(-1, "Thông tin menu cần xóa không tồn tại. Vui lòng kiểm tra lại.");

            menuInfo.IsDelete = true;
            var result = await Context.SaveChangesAsync();
            if (result > 0)
            {
                // Delete all child menu.
                await DeleteChildrenMenu(menuInfo.IdPath);
            }
            return new ActionResultResponse(result, result > 0 ? $"Xóa menu: \"{menuInfo.Name}\" thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
        }

        public async Task<ActionResultResponse> DeleteReference(int referenceId, ReferenceType referenceType)
        {
            var listReference = await _menuRepository.GetsAsync(false,
                x => x.ReferenceId == referenceId && x.ReferenceType == referenceType);
            if (listReference == null || !listReference.Any())
                return new ActionResultResponse(-1, "Không thể xóa bài viết trên menu. Vui lòng liên hệ với Quản trị viên.");

            _menuRepository.Deletes(listReference);
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? "Xóa menu thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
        }

        public async Task<Menu> GetInfo(int id, bool isReadOnly = false)
        {
            return await _menuRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete);
        }

        public async Task<bool> CheckReferenceUseInMenu(int referenceId, ReferenceType type)
        {
            return await _menuRepository.ExistAsync(x => x.ReferenceId == referenceId && x.ReferenceType == type);
        }

        public async Task<List<MenuViewModel>> Search(string keyword, bool? isActive)
        {
            Expression<Func<Menu, bool>> spec = x => !x.IsDelete;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.StripVietnameseChars().Trim().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive);

            var sort = Context.Filters.Sort<Menu, string>(x => x.IdPath);
            return await _menuRepository.GetsAsAsync(
                x => new MenuViewModel(x.Id, x.Name, x.IsActive, x.IdPath, x.Url, x.Icon, x.Order, x.ParentId,
                    x.ChildCount, x.ReferenceId, x.ReferenceType),
                spec, sort);
        }

        private async Task<bool> CheckUrlExists(int id, string url)
        {
            return await _menuRepository.ExistAsync(x => x.Id != id && x.Url.Equals(url.Trim()) && !x.IsDelete);
        }

        private async Task<long> UpdateChildCound(int id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            var childCount = await _menuRepository.CountAsync(x => x.ParentId == id && !x.IsDelete);
            info.ChildCount = childCount;
            return await Context.SaveChangesAsync();
        }

        private async Task<int> DeleteChildrenMenu(string idPath)
        {
            var listChildren =
                await _menuRepository.GetsAsync(false, x => !x.IsDelete && x.IdPath.StartsWith($"{idPath}."));
            if (listChildren == null || !listChildren.Any())
                return -1;

            foreach (var children in listChildren)
            {
                children.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }
    }
}
