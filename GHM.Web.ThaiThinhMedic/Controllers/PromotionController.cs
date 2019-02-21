using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Web.ThaiThinhMedic.Controllers
{
    public class PromotionController : BaseController
    {
        private readonly IPromotionRepository _promotionRepository;
        private readonly IPromotionSubjectRepository _promotionSubjectRepository;
        private readonly IPromotionRegisterRepository _promotionRegisterRepository;

        public PromotionController(IPromotionRepository promotionRepository, IPromotionSubjectRepository promotionSubjectRepository, IPromotionRegisterRepository promotionRegisterRepository)
        {
            _promotionRepository = promotionRepository;
            _promotionSubjectRepository = promotionSubjectRepository;
            _promotionRegisterRepository = promotionRegisterRepository;
        }

        // GET: Promotion
        public async Task<ActionResult> Index(string seolink)
        {
            var promotion = await _promotionRepository.GetBySeoLink(seolink);
            if (promotion == null)
                return View();

            if (promotion.FromDate.HasValue && DateTime.Compare(promotion.FromDate.Value, DateTime.Today) > 0)
            {
                ViewBag.ErrorMessage = "Chương trình khuyến mại chưa bắt đầu. Bạn không thể đăng ký tham gia chương trình khuyến mại này.";
            }

            if (promotion.ToDate.HasValue && DateTime.Compare(promotion.ToDate.Value, DateTime.Today) < 0)
            {
                ViewBag.ErrorMessage = "Chương trình khuyến mại này đã kết thúc. Bạn không thể đăng ký tham gia chương trình khuyến mại này.";
            }

            ViewBag.PromotionSubject = await _promotionSubjectRepository.GetListSubject(promotion.Id);
            return View(promotion);
        }

        public async Task<ActionResult> Register(PromotionRegister register)
        {
            if (DateTime.Compare(register.ExaminationDate, DateTime.Today) < 0)
                return Json(-8);

            if (register.ExaminationDate.DayOfWeek == DayOfWeek.Saturday ||
                register.ExaminationDate.DayOfWeek == DayOfWeek.Sunday)
                return Json(-13);

            if (!register.Birthday.HasValue)
                return Json(-14);

            if (register.ExaminationDate.Date == DateTime.Today.Date)
            {
                var hour = DateTime.Now.Hour;
                int registerHour;
                int.TryParse(register.Time.Split(':')[0], out registerHour);

                if (registerHour - hour < 1)
                    return Json(-8);
            }

            var registerResult = await _promotionRegisterRepository.Insert(register);
            return Json(registerResult);
        }
    }
}
