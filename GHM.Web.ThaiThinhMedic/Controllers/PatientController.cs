using GHM.Website.Domain.IRepository.Clinic;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace GHM.Web.ThaiThinhMedic.Controllers
{
    public class PatientController : BaseController
    {
        private readonly IPatientRepository _patientRepository;

        public PatientController(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        //[CustomerAuthorize]
        public ActionResult Index()
        {
            return View();
        }

        //[CustomerAuthorize]
        public ActionResult MedicalHistory()
        {
            return View();
        }

        //[CustomerAuthorize]
        public async Task<JsonResult> UpdateAccountInfomation(string userName, string oldPassword, string password)
        {
            return Json(await _patientRepository.UpdateAccountInfomation(CurrentPatient.MaBenhNhan, userName, oldPassword, password));
        }
    }
}
