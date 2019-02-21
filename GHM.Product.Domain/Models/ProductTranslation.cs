namespace GHM.Product.Domain.Models
{
    public class ProductTranslation
    {
        public string ProductId { get; set; }
        public string TenantId { get; set; }
        public string LanguageId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string UnsignName { get; set; }

        public string MetaTitle { get; set; }
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
        public bool IsDelete { get; set; }
        public ProductTranslation()
        {
            IsDelete = false;
        }

        public Products Product { get; set; }
    }
}
