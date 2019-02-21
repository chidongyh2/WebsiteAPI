using System;

namespace GHM.Website.Domain.Models
{
   public class Feedback
    {
        /// <summary>
        /// Mã liên hệ.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Mã khách hàng.
        /// </summary>
        public string TenantId { get; set; }

        /// <summary>
        /// Email liên hệ.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Người liên hệ.
        /// </summary>
        public string FullName { get; set; }

        /// <summary>
        /// Số điện thoại liên hệ.
        /// </summary>
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Tiêu đề liên hệ.
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Nội dung liên hệ.
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// Tên không dấu.
        /// </summary>
        public string UnsignName { get; set; }

        /// <summary>
        /// Ngày liên hệ.
        /// </summary>
        public DateTime CreateTime { get; set; }

        public Feedback()
        {
           CreateTime = DateTime.Now;
        }
    }
}
