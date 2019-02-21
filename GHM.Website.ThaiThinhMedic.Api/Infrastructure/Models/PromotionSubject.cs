using System;
using GHM.Infrastructure.MongoDb;
using GHM.Infrastructure.MongoDb.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models
{
    public class PromotionSubject : Entity<string>
    {
        /// <summary>
        /// Mã chương trình khuyến mại.
        /// </summary>
        public string PromotionId { get; set; }

        /// <summary>
        /// Loại hình áp dụng chương trình.
        /// </summary>
        public PromotionSubjectType Type { get; set; }

        /// <summary>
        /// Mã đối tượng áp dụng:
        /// Nếu loại hình áp dụng là dịch vụ thì subjectId sẽ là mã dịch vụ...
        /// Có thể mở rộng sau này
        /// </summary>
        public string SubjectId { get; set; }

        /// <summary>
        /// Tên đối tượng áp dụng:
        /// VD dịch vụ sẽ là tên dịch vụ. Sản phẩm sẽ là tên sản phẩm...
        /// </summary>
        public string SubjectName { get; set; }

        /// <summary>
        /// Tên subject không dấu để tìm kiếm.
        /// </summary>
        public string UnSignName { get; set; }

        /// <summary>
        /// Hình thức giảm giá:
        /// 1: Giảm theo %.
        /// 2: Giảm theo tiền mặt.
        /// </summary>
        public DiscountType DiscountType { get; set; }

        /// <summary>
        /// Chỉ số giảm. VD hình thức giảm theo phần trăm thì số sẽ được tính là %, còn giảm tiền thì con số sẽ là giá tiền được giảm.
        /// </summary>
        public decimal DiscountNumber { get; set; }

        /// <summary>
        /// Mã người tạo.
        /// </summary>
        public string CreatorId { get; set; }

        /// <summary>
        /// Tên người tạo.
        /// </summary>
        public string CreatorFullName { get; set; }

        ///// <summary>   
        ///// Khung giờ được phép áp dụng chương trình.
        ///// </summary>
        //public PromotionTimeApply[] PromotionTimeApplies { get; set; }

        /// <summary>
        /// Thời gian áp dụng từ ngày.
        /// </summary>
        public DateTime? FromDate { get; set; }

        /// <summary>
        /// Thời gian áp dụng đến ngày.
        /// </summary>
        public DateTime? ToDate { get; set; }

        /// <summary>
        /// Trạng thái xoá
        /// </summary>
        public bool IsDelete { get; set; }

        /// <summary>
        /// Giá dịch vụ hoặc sản phẩm ...
        /// </summary>
        public decimal Price { get; set; }

        public PromotionApplyTime[] PromotionApplyTimes { get; set; }

        public PromotionSubject()
        {
            Type = PromotionSubjectType.Service;
        }
    }

    public class PromotionApplyTime
    {
        /// <summary>
        /// Thời gian bắt đầu được phép sử dụng chương trình.
        /// </summary>
        public TimeObject FromTime { get; set; }

        /// <summary>
        /// Thời gian kết thúc sử dụng chương trình.
        /// </summary>
        public TimeObject ToTime { get; set; }
    }
}
