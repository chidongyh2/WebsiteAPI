using Microsoft.AspNetCore.Mvc;

namespace GHM.Web.ThaiThinhMedic.Controllers
{
    public class CategoryController : BaseController
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}
