using System;
using GHM.Infrastructure.MongoDb;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;
using MongoDB.Bson.Serialization.Attributes;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models
{
    public class PromotionVoucher : Entity<string>
    {
        /// <summary>
        /// Mã chương trình khuyến mại.
        /// </summary>
        public string PromotionId { get; set; }

        /// <summary>
        /// Mã đối tượng được áp dụng chương trình khuyến mại (Được phép null nếu mã khuyến mại được áp dụng luôn trong trương chình giảm giá)
        /// </summary>
        public string PromotionSubjectId { get; set; }

        /// <summary>
        /// Mã giảm giá gửi cho khách hàng để áp dụng
        /// </summary>
        public string Code { get; set; }

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
        /// Mã người sử dụng.
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// Tên người sử dụng.
        /// </summary>
        public string FullName { get; set; }

        /// <summary>
        /// Email người sử dụng.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Số điện thoại người sử dụng.
        /// </summary>
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Thời gian sử dụng
        /// </summary>
        //[BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime? UsedTime { get; set; }

        /// <summary>
        /// Mã người tạo.
        /// </summary>
        public string CreatorId { get; set; }

        /// <summary>
        /// Tên người tạo.
        /// </summary>
        public string CreatorFullName { get; set; }

        //[BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime? FromDate { get; set; }

        //[BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime? ToDate { get; set; }

        public string UnsignName { get; set; }
    }
}
