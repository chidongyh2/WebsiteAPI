using System;
using System.ComponentModel.DataAnnotations.Schema;
using GHM.EventBus.Constants;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Models;

namespace GHM.Notifications.Api.Infrastructure.Models
{
    public class Notification
    {
        public string Id { get; set; }

        /// <summary>
        /// Mã khách hàng.
        /// </summary>
        public string TenantId { get; set; }

        /// <summary>
        /// Tiêu đề thông báo.
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Nội dung thông báo.
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// Mã người gửi.
        /// </summary>
        public string SenderId { get; set; }

        /// <summary>
        /// Họ tên người gửi.
        /// </summary>
        public string SenderFullName { get; set; }

        /// <summary>
        /// Hình đại diện người gửi.
        /// </summary>
        public string SenderAvatar { get; set; }

        /// <summary>
        /// Mã người nhận.
        /// </summary>
        public string ReceiverId { get; set; }

        /// <summary>
        /// Loại thông báo.
        /// </summary>
        public NotificationType Type { get; set; }

        /// <summary>
        /// Trạng thái đã đọc chưa.
        /// </summary>
        public bool IsRead { get; set; }

        /// <summary>
        /// Thời gian đọc thông báo.
        /// </summary>
        public DateTime? ReadTime { get; set; }

        /// <summary>
        /// Trạng thái đã hiển thị nhưng chưa đọc.
        /// </summary>
        public bool IsShow { get; set; }

        /// <summary>
        /// Đường dẫn khi click vào notification.
        /// </summary>
        public string Url { get; set; }

        /// <summary>
        /// Hình ảnh khi người dùng được tag vào 1 ảnh hoặc 1 video.
        /// </summary>
        public string Image { get; set; }

        /// <summary>
        /// Trạng thái xóa.
        /// </summary>
        public bool IsDelete { get; set; }

        public DateTime CreateTime { get; set; }

        public string ConcurrencyStamp { get; set; }

        public Notification()
        {
            CreateTime = DateTime.Now;
            ConcurrencyStamp = Guid.NewGuid().ToString();
            IsDelete = false;
            IsRead = false;
            IsShow = false;
        }
    }
}
