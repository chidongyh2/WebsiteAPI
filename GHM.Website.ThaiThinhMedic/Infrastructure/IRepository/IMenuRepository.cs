using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface IMenuRepository
    {
        #region Client
        Task<List<MenuItem>> GetListMenuItemByMenuId(int menudId);

        bool CheckNamePathExists(string namePath);

        Task<MenuItem> GetMenuItemByNamePath(string namePath);

        Task<List<Breadcrumb>> GetListMenuItemForBreadcrumb(string namePath);
        #endregion
    }
}
