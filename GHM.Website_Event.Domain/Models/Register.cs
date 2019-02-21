using GHM.Website.Event.Domain.Constants;
using System;
namespace GHM.Website.Event.Domain.Models
{
    public class Register
    {

        /// <summary>
        /// Mã khách hàng sự kiện.
        /// </summary>
        public string Id { get; set; }


        /// <summary>
        /// Mã sự kiện.
        /// </summary>
        public string EventId { get; set; }


        /// <summary>
        /// Ho tên khách hàng.
        /// </summary>
        public string FullName { get; set; }

        /// <summary>
        /// Ảnh đại diện người tham gia
        /// </summary>
        public string Avatar { get; set; }

        /// <summary>
        /// Số điện thoại khách hàng.
        /// </summary>
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Email khách hàng.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Địa chỉ.
        /// </summary>
        public string Address { get; set; }

        /// <summary>
        /// Ghi chú khách hàng.
        /// </summary>
        public string Note { get; set; }

        public RegisterRole? Role { get; set; }

        /// <summary>
        /// Mã khách hàng.
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// Thời gian đăng ký.
        /// </summary>
        public DateTime RegisterTime { get; set; }

        /// <summary>
        /// Thời gian tạo.
        /// </summary>
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// Mã người tạo.
        /// </summary>
        public string CreatorId { get; set; }

        /// <summary>
        /// Ho tên người tạo.
        /// </summary>
        public string CreatorFullName { get; set; }

        /// <summary>
        /// Avata người tạo.
        /// </summary>
        public string CreatorAvatar { get; set; }

        /// <summary>
        /// Là nhân viên.
        /// </summary>
        public bool IsStaff { get; set; }

        /// <summary>
        /// ConcurrencyStamp.
        /// </summary>
        public string ConcurrencyStamp { get; set; }

        /// <summary>
        /// Avata người sửa.
        /// </summary>
        public string LastUpdateAvatar { get; set; }

        /// <summary>
        /// thời gian  sửa.
        /// </summary>
        public DateTime? LastUpdate { get; set; }

        /// <summary>
        /// Mã người sửa.
        /// </summary>
        public string LastUpdateUserId { get; set; }

        /// <summary>
        /// Họ tên người sửa.
        /// </summary>
        public string LastUpdateFullName { get; set; }

        public Register()
        {
            ConcurrencyStamp = Guid.NewGuid().ToString();
            CreateTime = DateTime.Now;
            IsStaff = false;
        }
    }
}
