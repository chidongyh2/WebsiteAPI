using System;
using System.Collections.Generic;

namespace GHM.Website.Event.Domain.Models
{
    public class EventDay
    {
        /// <summary>
        /// Mã ngày diễn ra sự kiện.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Mã  sự kiện.
        /// </summary>
        public string EventId { get; set; }

        /// <summary>
        /// Trạng thái hoạt động.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Trạng thái xóa.
        /// </summary>
        public bool IsDelete { get; set; }

        /// <summary>
        /// ConcurrencyStamp.
        /// </summary>
        public string ConcurrencyStamp { get; set; }

        /// <summary>
        /// Số lượng người đăng ký.
        /// </summary>
        public int TotalRegisters { get; set; }

        /// <summary>
        /// Số lượng người đi cùng.
        /// </summary>
        public int TotalAccompanyPersons { get; set; }

        /// <summary>
        /// Giờ bắt đầu.
        /// </summary>
        public byte? StartHour { get; set; }

        /// <summary>
        /// phút bắt đầu.
        /// </summary>
        public byte? StartMinute { get; set; }

        /// <summary>
        /// giờ kết thúc.
        /// </summary>
        public byte? EndHour { get; set; }

        /// <summary>
        /// phúc kết thúc.
        /// </summary>
        public byte? EndMinute { get; set; }

        /// <summary>
        /// Giới hạn người đăng ký.
        /// </summary>
        public int? LimitedUsers { get; set; }

        /// <summary>
        /// Chỉ dành cho nhân viên.
        /// </summary>
        public bool StaffOnly { get; set; }

        /// <summary>
        /// ngày diễn ra sự kiện.
        /// </summary>
        public DateTime EventDate { get; set; }

        /// <summary>
        /// Cho phép đăng ký người đi cùng.
        /// </summary>
        public bool? IsAllowAccompanyPerson { get; set; }

        /// <summary>
        /// Giới hạn số người đi cùng.
        /// </summary>
        public int? LimitedAccompanyPersons { get; set; }

        /// <summary>
        /// Thời gian tạo.
        /// </summary>
        public DateTime? CreateTime { get; set; }

        /// <summary>
        ///  Mã người tạo.
        /// </summary>
        public string CreatorId { get; set; }

        /// <summary>
        /// Tên người tạo.
        /// </summary>
        public string CreatorFullName { get; set; }

        /// <summary>
        /// Avata người tạo.
        /// </summary>
        public string CreatorAvatar { get; set; }

        /// <summary>
        /// Thời gian update.
        /// </summary>
        public DateTime? LastUpdate { get; set; }

        /// <summary>
        /// Mã người update.
        /// </summary>
        public string LastUpdateUserId { get; set; }

        /// <summary>
        /// Tên người update.
        /// </summary>
        public string LastUpdateFullName { get; set; }

        /// <summary>
        /// Avata người update.
        /// </summary>
        public string LastUpdateAvatar { get; set; }

        public EventDay()
        {
            ConcurrencyStamp = Guid.NewGuid().ToString();
            CreateTime = DateTime.Now;
            IsDelete = false;
            IsActive = true;
            TotalRegisters = 0;
            TotalAccompanyPersons = 0;
            StaffOnly = false;
            IsAllowAccompanyPerson = true;
        }

        public List<EventDayTranslation> EventDayTranslations { get; set; }
    }
}
