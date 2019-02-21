using System;
using System.Collections.Generic;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.Models
{
    public class News
    {
        /// <summary>
        /// Mã tin tức.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Mã khách hàng.
        /// </summary>
        public string TenantId { get; set; }

        /// <summary>
        /// phục vụ udpate.
        /// </summary>
        public string ConcurrencyStamp { get; set; }

        /// <summary>
        /// Số lượng like.
        /// </summary>
        public int LikeCount { get; set; }

        /// <summary>
        /// số lượng Comment.
        /// </summary>
        public int CommentCount { get; set; }

        /// <summary>
        /// Số lượng View.
        /// </summary>
        public int ViewCount { get; set; }

        /// <summary>
        /// Thời gian tạo.
        /// </summary>
        public DateTime CreateTime { get; set; }

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
        /// Trạng thái kích hoạt.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Trạng thái xóa.
        /// </summary>
        public bool IsDelete { get; set; }

        /// <summary>
        /// Ảnh của tin tức.
        /// </summary>
        public string FeatureImage { get; set; }

        public string BannerImage { get; set; }

        /// <summary>
        /// thẻ Title của ảnh.
        /// </summary>
        public string AltImage { get; set; }

        /// <summary>
        /// Nguồn tin.
        /// </summary>
        public string Source { get; set; }

        /// <summary>
        /// Trạng thái duyệt.
        /// </summary>
        public ApproverStatus Status { get; set; }

        /// <summary>
        /// Thời gian gửi duyệt.
        /// </summary>
        public DateTime? SentTime { get; set; }

        /// <summary>
        /// Thời gian duyệt.
        /// </summary>
        public DateTime? ApprovedTime { get; set; }

        /// <summary>
        /// Mã người duyệt.
        /// </summary>
        public string ApproverUserId { get; set; }

        /// <summary>
        /// Họ tên người duyệt.
        /// </summary>
        public string ApproverFullName { get; set; }

        /// <summary>
        /// Avata người duyệt.
        /// </summary>
        public string ApproverAvatar { get; set; }

        /// <summary>
        /// Lý do không duyệt.
        /// </summary>
        public string ApproverComment { get; set; }

        /// <summary>
        /// Thời gian update.
        /// </summary>
        public DateTime? LastUpdate { get; set; }

        /// <summary>
        /// Mã người update.
        /// </summary>
        public string LastUpdateUserId { get; set; }

        /// <summary>
        /// Họ tên người update.
        /// </summary>
        public string LastUpdateFullName { get; set; }

        /// <summary>
        /// Avata người update.
        /// </summary>
        public string LastUpdateAvatar { get; set; }

        /// <summary>
        /// Trạng thái tin nổi bật.
        /// </summary>
        public bool? IsHot { get; set; }

        /// <summary>
        /// thời gian update tin nổi bật.
        /// </summary>
        public DateTime? LastUpdateIsHot { get; set; }

        /// <summary>
        /// Trạng thái hiển thị trang chủ.
        /// </summary>
        public bool? IsHomePage { get; set; }

        /// <summary>
        /// Thời gian update hiển thị trang chủ.
        /// </summary>
        public DateTime? LastUpdateIsHomePage { get; set; }

        public News()
        {
            LikeCount = 0;
            CommentCount = 0;
            ViewCount = 0;
            CreateTime = DateTime.Now;
            LastUpdate = DateTime.Now;
            IsDelete = false;
            IsActive = true;
            Status = ApproverStatus.Draft;
        }

        public List<NewsTranslation> NewsTranslations { get; set; }
    }
}
