using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GHM.Web.ThaiThinhMedic.Controllers
{
    public class ErrorController : BaseController
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult NotFound()
        {
            return View();
        }

        public IActionResult NotHavePermission()
        {
            return View();
        }

        public IActionResult FileNotFound()
        {
            return View();
        }

        public IActionResult SomethingWrong()
        {
            return View();
        }
    }
}
