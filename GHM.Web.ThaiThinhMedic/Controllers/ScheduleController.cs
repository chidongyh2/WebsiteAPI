using System;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository.Clinic;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Web.ThaiThinhMedic.Controllers
{
    public class ScheduleController : BaseController
    {
        // GET: /<controller>/
        private readonly IDoctorScheduleRepository _doctorScheduleRepository;

        public ScheduleController(IDoctorScheduleRepository doctorScheduleRepository)
        {
            _doctorScheduleRepository = doctorScheduleRepository;
        }

        public ActionResult Index()
        {
            return View();
        }

        public async Task<ActionResult> Search(byte? mode, string doctorName, string shift)
        {
            DateTime date = DateTime.Today;
            if (mode.HasValue && mode.Value == 1)
            {
                date = date.AddDays(1);
            }

            if (mode.HasValue && mode.Value == 2)
            {
                date = date.AddDays(2);
            }

            return Json(await _doctorScheduleRepository.SearchDoctorSchedule(date, doctorName, shift));
        }
    }
}
