using GHM.Web.ThaiThinhMedic.Utils;
using GHM.Website.Domain.IRepository.Clinic;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace GHM.Web.ThaiThinhMedic.Controllers
{
    public class WaitingController : Controller
    {
        private readonly IPatientRepository _patientRepository;
        public WaitingController(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        // GET: Waiting
        public ActionResult Index()
        {
            return View();
        }

        public async Task<ActionResult> Info(byte floor, byte area)
        {
            var waitingNotify = new PatientWaitingRepository();
            var message = waitingNotify.GetAllMessages(floor, area);
            // Phòng xét nghiệm.            
            ViewBag.Floor = floor;
            ViewBag.Area = area;

            if (floor == 4 && area == 2)
            {
                var resultTest = await _patientRepository.GetListTest();
                return View(resultTest);
            }

            var result = await _patientRepository.BaoCaoBenhNhanChoKhamSelectAll(floor, area, DateTime.Today);
            return View(result);
        }

        public async Task<ActionResult> Search(byte floor, byte area)
        {
            if (floor == 4 && area == 2)
            {
                var resultTest = await _patientRepository.GetListTest();
                return Json(resultTest);
            }

            return  Json(await _patientRepository.BaoCaoBenhNhanChoKhamSelectAll(floor, area, DateTime.Today));
        }

        public async Task<ActionResult> Info1(byte floor, byte area)
        {
            return View(await _patientRepository.BaoCaoBenhNhanChoKhamSelectAll(floor, area, DateTime.Today));
        }

        public ActionResult Music()
        {
            return View();
        }
    }
}
