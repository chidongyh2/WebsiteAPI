using System.Collections.Generic;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.Repository;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GHM.Website.ThaiThinhMedic
{
    public class BaseController : Controller
    {
        // GET: /<controller>/
        //protected BenhNhan CurrentPatient => PatientRepository.CurrentUser;
        protected BenhNhan CurrentPatient;
        public BaseController()
        {
            ViewBag.MainNav = GetMainNav();
        }

        private static List<MenuItem> GetMainNav()
        {
            //var cacheManager = DependencyResolver.Current.GetService<MemoryCacheManager>();
            //if (cacheManager.IsSet(CacheParam.MainNav))
            //{
            //    return cacheManager.Get<List<MenuItem>>(CacheParam.MainNav);
            //}

            //var menuReposiroty = DependencyResolver.Current.GetService<IMenuRepository>();
            //var listMenu = Task.Run(async () => await menuReposiroty.GetListMenuItemByMenuId(1)).Result;
            //cacheManager.Set(CacheParam.MainNav, listMenu, 60);

            //return listMenu;
            return null;
        }
    }
}
