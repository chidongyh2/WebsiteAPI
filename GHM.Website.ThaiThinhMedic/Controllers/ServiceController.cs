using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Controllers
{
    public class ServiceController : Controller
    {
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