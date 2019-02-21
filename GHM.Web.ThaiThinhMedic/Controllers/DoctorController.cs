using Microsoft.AspNetCore.Mvc;

namespace GHM.Web.ThaiThinhMedic.Controllers
{
    public class DoctorController : BaseController
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Info()
        {
            return View();
        }
    }
}
