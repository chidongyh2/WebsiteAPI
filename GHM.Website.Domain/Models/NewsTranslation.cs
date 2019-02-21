namespace GHM.Website.Domain.Models
{
    public class NewsTranslation
    {
        /// <summary>
        /// Mã khách hàng.
        /// </summary>
        public string TenantId { get; set; }

        /// <summary>
        /// Mã tin tức.
        /// </summary>
        public string NewsId { get; set; }

        /// <summary>
        /// Mã ngôn ngữ.
        /// </summary>
        public string LanguageId { get; set; }

        /// <summary>
        /// Tiêu đề tin.
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Tiêu đề meta.
        /// </summary>
        public string MetaTitle { get; set; }

        /// <summary>
        /// Tên không dấu.
        /// </summary>
        public string UnsignName { get; set; }

        /// <summary>
        /// Mô tả.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Mô tả meta.
        /// </summary>
        public string MetaDescription { get; set; }

        /// <summary>
        /// Keyword meta.
        /// </summary>
        public string MetaKeyword { get; set; }

        /// <summary>
        /// Seo link.
        /// </summary>
        public string SeoLink { get; set; }

        /// <summary>
        /// Nội dung.
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// Trạng thái xóa.
        /// </summary>
        public bool IsDelete { get; set; }

        public NewsTranslation()
        {
            IsDelete = false;
        }
        public News News { get; set; }

    }
}
