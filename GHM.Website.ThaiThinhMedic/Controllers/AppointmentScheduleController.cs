using System;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.ModelMetas;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GHM.Website.ThaiThinhMedic.Controllers
{
    public class AppointmentScheduleController : BaseController
    {
        // GET: /<controller>/
        private readonly string[] oddTimeSlot = { "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00" };
        private readonly string[] evenTimeSlot = { "08:00", "09:00", "10:00", "11:00", "14:00", "15:30", "16:00", "18:00" };

        private readonly IAppointmentScheduleRepository _appointmentRepository;
        private readonly IServiceRepository _serviceRepository;

        public AppointmentScheduleController(IAppointmentScheduleRepository appointmentScheduleRepository, IServiceRepository serviceRepository)
        {
            _appointmentRepository = appointmentScheduleRepository;
            _serviceRepository = serviceRepository;

        }

        // GET: AppointmentSchedule
        public async Task<ActionResult> Index()
        {
            ViewBag.ListService = JsonConvert.SerializeObject(await _serviceRepository.GetServiceByDateAndByShift(DateTime.Today, DateTime.Today.AddDays(3).AddMinutes(-1)), Common.GetCalmcaseSetting());
            return View();
        }

        public async Task<ActionResult> SearchEvent(string serviceId, string doctorId)
        {
            if (string.IsNullOrEmpty(serviceId))
                return Json(-1);

            if (string.IsNullOrEmpty(doctorId))
                return Json(-2);

            var today = DateTime.Today;
            var result = await _appointmentRepository.Search(x => new AppointmentScheduleEventViewModel
            {
                Id = x.Id,
                MaBenhNhan = x.MaBenhNhan,
                GioDatHen = x.GioDatHen,
                StartTime = x.StartTime,
                EndTime = x.EndTime,
                MaDichVu = x.MaDichVu,
                MaBacSy = x.MaBacSy,
                TenBacSy = x.TenBacSy,
                IsMine = false
            }, serviceId, doctorId, today, today.AddDays(3).AddMinutes(-1));

            result.ForEach(x =>
            {
                x.IsMine = CurrentPatient != null && CurrentPatient.MaBenhNhan.Equals(x.MaBenhNhan);
            });

            return Json(result);
        }

        //[Localization]
        public async Task<JsonResult> Save(DatHenMeta datHen)
        {
            if (datHen == null)
            {
                return Json(0);
            }

            if (!ModelState.IsValid)
            {
                return Json(-1);
                //return Json(GetErrorsInModelState());
            }

            if (string.IsNullOrEmpty(datHen.DoctorId))
            {
                return Json(-12);
            }

            if (datHen.ServiceId == "DV0300")
                if (!ValidateEvenTimeSlot(datHen.Hours))
                    return Json(-9);
                else
                    if (!ValidateOddTimeSlot(datHen.Hours))
                    return Json(-9);

            // Check doctor workschedule
            var isHasWorkSchedule = await _serviceRepository.CheckDoctorHasWorkSchedule(datHen.DoctorId, datHen.ServiceId, datHen.StartTime, datHen.Shift);

            if (!isHasWorkSchedule)
                return Json(-11);

            return DateTime.Compare(datHen.StartTime, DateTime.Now.AddHours(1)) < 0
                ? Json(-2)
                : Json(await _appointmentRepository.Save(datHen, CurrentPatient != null ? CurrentPatient.MaBenhNhan : string.Empty));
        }

        //[CustomerAuthorize, HttpPost, ValidateAntiForgeryToken]
        public async Task<JsonResult> Update(DatHenMeta datHen)
        {
            return DateTime.Compare(datHen.StartTime, DateTime.Now.AddHours(1)) < 0 ? Json(-8)
                : Json(await _appointmentRepository.Update(datHen, CurrentPatient != null ? CurrentPatient.MaBenhNhan : string.Empty));
        }

        //[CustomerAuthorize]
        public JsonResult GetMyService()
        {
            return Json(_appointmentRepository.GetMyAppointmentSchedule(CurrentPatient.MaBenhNhan));
        }

        //[CustomerAuthorize, HttpPost, ValidateAntiForgeryToken]
        public async Task<JsonResult> Delete(long id)
        {
            return Json(await _appointmentRepository.Delete(id, CurrentPatient.MaBenhNhan));
        }

        public ActionResult SliderQuayThuoc()
        {
            return View();
        }

        private bool ValidateOddTimeSlot(string hour)
        {
            return oddTimeSlot.Contains(hour);
        }

        private bool ValidateEvenTimeSlot(string hour)
        {
            return evenTimeSlot.Contains(hour);
        }
    }
}
