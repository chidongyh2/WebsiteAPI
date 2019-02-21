using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Helpers;
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
    [Route("api/promotion-voucher")]
    public class PromotionVoucherController : GhmControllerBase
    {
        private readonly IPromotionVoucherRepository _promotionVoucherRepository;
        private readonly IPromotionRepository _promotionRepository;

        public PromotionVoucherController(IPromotionVoucherRepository promotionVoucherRepository, IPromotionRepository promotionRepository)
        {
            _promotionVoucherRepository = promotionVoucherRepository;
            _promotionRepository = promotionRepository;
        }

        [Route("search"), AcceptVerbs("GET")]
        //[CheckPermission(new[] { Permission.View }, PageId.WebsitePromotion)]
        public async Task<IActionResult> Search(string keyword, string promotionId, int page = 1, int pageSize = 20)
        {
            var items = await _promotionVoucherRepository.Search(keyword, promotionId, page, pageSize, out var totalRows);
            return Ok(new
            {
                items,
                totalRows
            });
        }

        [Route("insert"), AcceptVerbs("POST")]
        //[CheckPermission(new[] { Permission.Insert }, PageId.WebsitePromotion)]
        public async Task<IActionResult> Insert(PromotionVoucher voucher)
        {
            var isPromotionExists = await _promotionRepository.CheckAvailable(voucher.PromotionId);
            if (!isPromotionExists)
                return BadRequest(new ActionResultResponse(-1, "Thông tin chương trình khuyến mại không tồn tại. Vui lòng kiểm tra lại."));

            if (string.IsNullOrEmpty(voucher.PhoneNumber))
                return BadRequest(new ActionResultResponse(-2, "Vui lòng nhập số điện thoại người được nhận khuyến mại này."));

            if (string.IsNullOrEmpty(voucher.FullName))
                return BadRequest(new ActionResultResponse(-3, "Vui lòng nhập họ tên người dùng."));

            if (voucher.DiscountNumber > 100 && voucher.DiscountType == DiscountType.Percent)
                return BadRequest(new ActionResultResponse(-4, "Mức giảm giá không được phép lớn hơn 100%."));

            voucher.Code = Generate.GenerateRandomString(8);
            voucher.CreatorId = CurrentUser.Id;
            voucher.CreatorFullName = CurrentUser.FullName;
            var result = await _promotionVoucherRepository.Insert(voucher);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(voucher);
        }

        [Route("inserts"), AcceptVerbs("POST")]
        //[CheckPermission(new[] { Permission.Insert }, PageId.WebsitePromotion)]
        public async Task<IActionResult> Inserts(int quantity, string promotionId)
        {
            var isPromotionExists = await _promotionRepository.CheckAvailable(promotionId);
            if (!isPromotionExists)
                return BadRequest(new ActionResultResponse(-1, "Thông tin chương trình khuyến mại không tồn tại. Vui lòng kiểm tra lại."));

            var listPromotionVoucher = new List<PromotionVoucher>();
            for (var i = 0; i < quantity; i++)
            {
                listPromotionVoucher.Add(new PromotionVoucher
                {
                    PromotionId = promotionId,
                    CreatorId = CurrentUser.Id,
                    CreatorFullName = CurrentUser.FullName,
                    Code = Generate.GenerateRandomString(8)
                });
            }

            await _promotionVoucherRepository.Inserts(listPromotionVoucher);
            var items = await _promotionVoucherRepository.Search(string.Empty, promotionId, 1, 20, out var totalRows);
            return Ok(new
            {
                items,
                totalRows
            });
        }

        [Route("update"), AcceptVerbs("POST")]
        //[CheckPermission(new[] { Permission.Update }, PageId.WebsitePromotion)]
        public async Task<IActionResult> Update(PromotionVoucher voucher)
        {
            var result = await _promotionVoucherRepository.Update(voucher);
            if (result.Code <= 0)
            {
                return BadRequest(result);
            }
            return Ok(result);
        }

        [Route("delete"), AcceptVerbs("POST")]
        //[CheckPermission(new[] { Permission.Delete }, PageId.WebsitePromotion)]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _promotionVoucherRepository.Delete(id);
            if (result < 0)
            {
                return BadRequest(new ActionResultResponse(result,
                    result == -1 ? "Mã khuyến mại đã được sử dụng. Bạn không thể xóa được mã khuyến mại này."
                    : result == -2 ? "Mã khuyến mại đã được gán cho người dùng. Bạn không thể xóa mã khuyến mại này."
                            : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên."));
            }
            return Ok(new ActionResultResponse(result, "Xóa mã giảm giá thành công."));
        }
    }
}