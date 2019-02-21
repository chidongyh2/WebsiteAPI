using System;
using System.Net;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.ThaiThinhMedic.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class PromotionController : GhmControllerBase
    {
        private readonly IPromotionRepository _promotionRepository;

        public PromotionController(IPromotionRepository promotionRepository)
        {
            _promotionRepository = promotionRepository;
        }

        [Route("search"), AcceptVerbs("GET")]
        //[CheckPermission(new[] { Permission.View }, PageId.WebsitePromotion)]
        public async Task<IActionResult> Search(string keyword, DateTime? fromDate, DateTime? toDate, int page = 1, int pageSize = 20)
        {
            return Ok(new
            {
                items = await _promotionRepository.Search(keyword, fromDate, toDate, page, pageSize, out var totalRows),
                totalRows
            });
        }

        /// <summary>
        /// Insert new promotion object
        /// </summary>
        /// <param name="promotion"></param>
        /// <returns></returns>
        [Route("insert"), ValidateModel, AcceptVerbs("POST")]
        //[CheckPermission(new[] { Permission.Insert }, PageId.WebsitePromotion)]
        public async Task<IActionResult> Insert(Promotion promotion)
        {
            promotion.CreatorId = CurrentUser.Id;
            promotion.CreatorFullName = CurrentUser.FullName;

            var result = await _promotionRepository.Insert(promotion);
            if (!string.IsNullOrEmpty(result))
                return Ok(new
                {
                    id = result
                });

            return BadRequest(new ActionResultResponse(-1,
                "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản Trị Viên."));
        }

        /// <summary>
        /// Update existing promotion object
        /// </summary>
        /// <param name="promotion"></param>
        /// <returns></returns>
        [Route("Update"), ValidateModel, AcceptVerbs("PUT")]
        //[CheckPermission(new[] { Permission.Update }, PageId.WebsitePromotion)]
        public async Task<IActionResult> Update(Promotion promotion)
        {
            var result = await _promotionRepository.Update(promotion);
            if (result > 0)
                return Ok(new ActionResultResponse(result, $"Cập nhật chương trình khuyến mại {promotion.Name} thành công."));

            return BadRequest(new ActionResultResponse(result, "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên."));

        }

        [Route("delete"), AcceptVerbs("DELETE")]
        //[CheckPermission(new[] { Permission.Delete }, PageId.WebsitePromotion)]
        public async Task<IActionResult> Delete(string id, bool? isConfirm)
        {
            var result = await _promotionRepository.Delete(id, isConfirm);
            if (result == -1)
                return Ok(new ActionResultResponse(result, "Chương trình khuyến mại đang chạy. Bạn có chắc chắn muốn xóa chương trình này?"));

            if (result <= 0)
                return BadRequest(new ActionResultResponse(result, "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản Trị Viên."));

            return Ok(new ActionResultResponse(result, "Xóa chương trình khuyến mại thành công."));
        }

        [Route("get-detail"), AcceptVerbs("GET")]
        //[CheckPermission(new[] { Permission.Update, Permission.View }, PageId.WebsitePromotion)]
        public async Task<IActionResult> GetDetail(string id)
        {
            return Ok(await _promotionRepository.GetInfo(id));
        }
    }
}