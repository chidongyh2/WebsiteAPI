namespace GHM.Website.Event.Domain.Models
{
    public class VideoTranslation
    {
        /// <summary>
        /// Mã khách hàng.
        /// </summary>
        public string TenantId { get; set; }

        /// <summary>
        /// Mã ngôn ngữ.
        /// </summary>
        public string LanguageId { get; set; }

        /// <summary>
        /// Mã video.
        /// </summary>
        public string VideoId { get; set; }

        /// <summary>
        /// Tiêu đề.
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Mô tả.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Tên không dấu.
        /// </summary>
        public string UnsignName { get; set; }

        /// <summary>
        /// Trạng thái xóa.
        /// </summary>
        public bool IsDelete { get; set; }

        public VideoTranslation()
        {
            IsDelete = false;
        }

        public Video Video { get; set; }
    }
}
