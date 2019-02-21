using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
namespace GHM.Website.Domain.IRepository
{
    public interface IMenuRepository
    {
        Task<List<MenuViewModel>> Search(string tenantId, string keyword,
            bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(Menu menu);

        Task<int> Update(Menu menu);

        Task<int> Delete(string menuId);

        Task<int> ForceDelete(string menuId);

        Task<Menu> GetInfo(string menuId, bool isReadonly = false);

        Task<Menu> GetInfo(string tenantId, string menuId, bool isReadonly = false);

        Task<Menu> GetInfoByPosition(string tenantId, Position position, bool isReadonly = true);

        Task<bool> CheckExistsByName( string tenantId,  string name);
    }
}
