using System;
using System.Collections.Generic;
using GHM.Infrastructure.Constants;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.ModelMetas;

namespace GHM.Website.Domain.Models
{
    public class Video
    {
        /// <summary>
        /// Mã video.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Mã nhom video.
        /// </summary>
        public string AlbumId { get; set; }

        /// <summary>
        /// Mã khách hàng.
        /// </summary>
        public string TenantId { get; set; }

        /// <summary>
        /// ảnh.
        /// </summary>
        public string Thumbnail { get; set; }

        /// <summary>
        /// link video.
        /// </summary>
        public string Url { get; set; }

        /// <summary>
        /// thứ tự sắp xếp.
        /// </summary>
        public int Order { get; set; }

        /// <summary>
        /// Loại video.
        /// </summary>
        public VideoType Type { get; set; }

        /// <summary>
        /// video id.
        /// </summary>
        public string VideoLinkId { get; set; }

        /// <summary>
        /// Kích hoạt.
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// Trạng thái xóa.
        /// </summary>
        public bool IsDelete { get; set; }

        public string ConcurrencyStamp { get; set; }

        /// <summary>
        /// Thời gian tạo.
        /// </summary>
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// Mã người tạo.
        /// </summary>
        public string CreatorId { get; set; }

        /// <summary>
        /// Tên người tạo.
        /// </summary>
        public string CreatorFullName { get; set; }

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
        /// Trạng thái hiển thị trang chủ.
        /// </summary>
        public bool? IsHomePage { get; set; }

        /// <summary>
        /// Thời gian update hiển thị trang chủ.
        /// </summary>
        public DateTime? LastUpdateIsHomePage { get; set; }
        public Video()
        {
            IsHomePage = false;
            IsDelete = false;
            IsActive = true;
            CreateTime = DateTime.Now;
       
        }

        public List<VideoTranslation> Translations { get; set; }
    }

}
