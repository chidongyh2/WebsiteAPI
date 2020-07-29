using GHM.WebsiteClient.Api.Domain.Constants;
using System;

namespace GHM.WebsiteClient.Api.Domain.ViewModels
{
    public class EventViewModel
    {
        public string Id { get; set; }

        /// <summary>
        /// Mã khách hàng.
        /// </summary>
        public string TenantId { get; set; }

        /// <summary>
        /// Trạng thái kích hoạt.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Ngày bắt đầu sự kiện.
        /// </summary>
        public DateTime? StartDate { get; set; }

        /// <summary>
        /// Ngày kết thúc sự kiện.
        /// </summary>
        public DateTime? EndDate { get; set; }

        /// <summary>
        /// ConcurrencyStamp.
        /// </summary>
        public string ConcurrencyStamp { get; set; }

        /// <summary>
        /// Trạng thái xóa.
        /// </summary>
        public bool IsDelete { get; set; }

        /// <summary>
        /// Giới hạn người đăng ký.
        /// </summary>
        public int? LimitedUsers { get; set; }

        /// <summary>
        /// Cho đăng ký quá giới hạn người tham gia.
        /// </summary>
        public bool IsAllowRegisterWhenOverload { get; set; }

        /// <summary>
        /// Giới hạn số người đi cùng.
        /// </summary>
        public int? LimitedAccompanyPersons { get; set; }

        /// <summary>
        /// Chỉ dành cho nhân viên.
        /// </summary>
        public bool StaffOnly { get; set; }

        /// <summary>
        /// Cho phép đăng ký.
        /// </summary>
        public bool IsAllowRegister { get; set; }

        /// <summary>
        /// Cho phép đăng ký người đi cùng.
        /// </summary>
        public bool IsAllowAccompanyPerson { get; set; }
        /// <summary>
        /// Ảnh đại diện.
        /// </summary>
        public string Thumbnail { get; set; }

        /// <summary>
        /// Thời gian gửi.
        /// </summary>
        public DateTime? SentTime { get; set; }

        /// <summary>
        /// Thời gian tạo.
        /// </summary>
        public DateTime? CreateTime { get; set; }
        /// <summary>
        /// Mã người tạo.
        /// </summary>
        public string CreatorId { get; set; }

        /// <summary>
        /// Họ tên người tạo.
        /// </summary>
        public string CreatorFullName { get; set; }

        /// <summary>
        /// Avata người tạo.
        /// </summary>
        public string CreatorAvatar { get; set; }

        /// <summary>
        /// Trạng thái duyệt.
        /// </summary>
        public ApproverStatus Status { get; set; }

        /// <summary>
        /// Mã người duyệt.
        /// </summary>
        public string ApproverId { get; set; }

        /// <summary>
        /// Tên người duyệt.
        /// </summary>
        public string ApproverFullName { get; set; }

        /// <summary>
        /// Avata người duyệt.
        /// </summary>
        public string ApproverAvatar { get; set; }

        /// <summary>
        /// Thời gian duyệt.
        /// </summary>
        public DateTime? ApprovedTime { get; set; }

        /// <summary>
        /// Lý do không duyệt.
        /// </summary>
        public string DeclineReason { get; set; }

        /// <summary>
        /// Thời gian chỉnh sửa.
        /// </summary>
        public DateTime? LastUpdate { get; set; }

        /// <summary>
        /// Mã người chỉnh sửa.
        /// </summary>
        public string LastUpdateUserId { get; set; }

        /// <summary>
        /// Tên ngừoi chỉnh sửa.
        /// </summary>
        public string LastUpdateFullName { get; set; }

        /// <summary>
        /// Avata người chỉnh sửa.
        /// </summary>
        public string LastUpdateAvatar { get; set; }
    }
}
