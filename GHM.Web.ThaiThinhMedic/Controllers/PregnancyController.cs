using System.Threading.Tasks;
using GHM.Website.Domain.IRepository.Clinic;
using GHM.Website.Domain.ModelMetas;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Web.ThaiThinhMedic.Controllers
{
    public class PregnancyController : BaseController
    {
        private readonly IQuaTangRepository _quaTangRepository;
        private readonly IQuaTangKhachHangRepository _quaTangKhachHangRepository;

        public PregnancyController(IQuaTangRepository quaTangRepository, IQuaTangKhachHangRepository quaTangKhachHangRepository)
        {
            _quaTangRepository = quaTangRepository;
            _quaTangKhachHangRepository = quaTangKhachHangRepository;
        }

        // GET: Pregnancy
        public async Task<ActionResult> Index()
        {
            var danhSachQuaTang = await _quaTangRepository.GetList();
            return View(danhSachQuaTang);
        }

        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Register(QuaTangKhachHangMeta register)
        {
            var result = await _quaTangKhachHangRepository.Register(register);
            return Json(result);
        }
    }
}
