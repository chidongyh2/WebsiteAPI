using System;
using GHM.Infrastructure.MongoDb;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    /// <inheritdoc />
    /// <summary>
    /// Sử dụng cho người dùng đăng ký dịch vụ khuyến mại.    
    /// </summary>
    public class PromotionRegister : Entity<string>
    {
        /// <summary>
        /// Mã chương trình giảm giá.
        /// </summary>
        public string PromotionId { get; set; }

        /// <summary>
        /// Mã Dịch vụ áp dung hoặc sản phẩm phụ thuộc vào đối tượng PromotionSubject khi tạo chương trình khuyến mại.
        /// </summary>
        public string PromotionSubjectId { get; set; }

        /// <summary>
        /// Mã voucher giảm giá.
        /// </summary>
        public string PromotionVoucherId { get; set; }

        public string PromotionVoucherCode { get; set; }

        /// <summary>
        /// Mã người dùng. Có người dùng đã đang ký.
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// Tên người dùng.
        /// </summary>
        public string FullName { get; set; }

        /// <summary>
        /// Số điện thoại người dùng.
        /// </summary>
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Email người dùng.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Nội dung ghi chú.
        /// </summary>
        public string Note { get; set; }

        /// <summary>
        /// Thời gian đặt hẹn
        /// </summary>
        public string Time { get; set; }

        /// <summary>
        /// Ngày đến khám
        /// </summary>
        public DateTime ExaminationDate { get; set; }

        public DateTime? Birthday { get; set; }

        public bool IsDelete { get; set; }

        public PromotionRegister()
        {
            CreateTime = DateTime.Now;
        }
    }
}
