using System;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository.Clinic;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GHM.Web.ThaiThinhMedic.Controllers
{
    public class ServiceController : BaseController
    {
        // GET: /<controller>/
        private readonly IServiceRepository _serviceRepository;
        public ServiceController(IServiceRepository serviceRepository)
        {
            _serviceRepository = serviceRepository;
        }

        // GET: Service
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<ActionResult> GetListService()
        {
            var today = DateTime.Today;
            var result = await _serviceRepository.GetServiceByDateAndByShift(today, today.AddDays(4).AddMinutes(-1));
            return Json(result);
        }
    }
}
