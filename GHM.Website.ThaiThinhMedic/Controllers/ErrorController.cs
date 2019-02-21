using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GHM.Website.ThaiThinhMedic.Controllers
{
    public class ErrorController : BaseController
    {
        // GET: /<controller>/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult NotFound()
        {
            return View();
        }

        public ActionResult NotHavePermission()
        {
            return View();
        }

        public ActionResult FileNotFound()
        {
            return View();
        }

        public ActionResult SomethingWrong()
        {
            return View();
        }
    }
}
