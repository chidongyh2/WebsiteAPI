using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.ThaiThinhMedic.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]    
    [Route("api/service")]
    public class PromotionSubjectController : GhmControllerBase
    {
        private readonly IPromotionSubjectRepository _promotionSubjectRepository;

        public PromotionSubjectController(IPromotionSubjectRepository promotionSubjectRepository)
        {
            _promotionSubjectRepository = promotionSubjectRepository;
        }

        [Route("insert"), ValidateModel, AcceptVerbs("POST")]
        //[CheckPermission(new[] { Permission.Insert }, PageId.WebsitePromotion)]
        public async Task<IActionResult> Insert([FromBody]List<PromotionSubject> promotionSubjects)
        {
            if (promotionSubjects.Count == 0)
            {
                return BadRequest(new ActionResultResponse(-1, "Vui lòng chọn ít nhất một dịch vụ giảm giá."));
            }

            var inValidCount = promotionSubjects.Count(x => x.DiscountNumber > 100 && x.DiscountType == DiscountType.Percent);
            if (inValidCount > 0)
            {
                return BadRequest(new ActionResultResponse(-2, "Mức giảm không được phép lớn hơn 100%."));
            }

            var isHasNoPromotionId = promotionSubjects.Any(x => string.IsNullOrEmpty(x.PromotionId));
            if (isHasNoPromotionId)
            {
                return BadRequest(new ActionResultResponse(-3, "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với quản trị viên.", "Xin lỗi"));
            }

            foreach (var promotionSubject in promotionSubjects)
            {
                promotionSubject.CreatorId = CurrentUser.Id;
                promotionSubject.CreatorFullName = CurrentUser.FullName;
            }
            var result = await _promotionSubjectRepository.Save(promotionSubjects);
            if (result.Code <= 0)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [Route("update"), ValidateModel, AcceptVerbs("POST")]
        //[CheckPermission(new[] { Permission.Update }, PageId.WebsitePromotion)]
        public async Task<IActionResult> Update([FromBody]List<PromotionSubject> promotionSubjects)
        {

            if (promotionSubjects.Count == 0)
            {
                return BadRequest(new ActionResultResponse(-1, "Vui lòng chọn ít nhất một dịch vụ giảm giá."));
            }

            var inValidCount = promotionSubjects.Count(x => x.DiscountNumber > 100 && x.DiscountType == DiscountType.Percent);
            if (inValidCount > 0)
            {
                return BadRequest(new ActionResultResponse(-2, "Mức giảm không được phép lớn hơn 100%."));
            }

            var isHasNoPromotionId = promotionSubjects.Any(x => string.IsNullOrEmpty(x.PromotionId));
            if (isHasNoPromotionId)
            {
                return BadRequest(new ActionResultResponse(-3, "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với quản trị viên.", "Xin lỗi"));
            }

            foreach (var promotionSubject in promotionSubjects)
            {
                promotionSubject.CreatorId = CurrentUser.Id;
                promotionSubject.CreatorFullName = CurrentUser.FullName;
            }
            var result = await _promotionSubjectRepository.Update(promotionSubjects);
            if (result.Code <= 0)
            {
                return BadRequest(result);
            }
            return Ok(result);
        }

        [Route("delete"), ValidateModel, AcceptVerbs("DELETE")]
        //[CheckPermission(new[] { Permission.Delete }, PageId.WebsitePromotion)]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _promotionSubjectRepository.Delete(id);
            if (result.Code <= 0)
            {
                return BadRequest(result);
            }
            return Ok(result);
        }

        [Route("search"), AcceptVerbs("GET")]
        //[CheckPermission(new[] { Permission.Update, Permission.View }, PageId.WebsitePromotion)]
        public async Task<IActionResult> Search(string promotionId)
        {
            var result = await _promotionSubjectRepository.GetListSubject(promotionId);
            return Ok(result);
        }
    }
}