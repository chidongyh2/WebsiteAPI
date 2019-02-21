using System;

namespace GHM.Website.Event.Domain.Models
{
    public class EventTranslation
    {
        /// <summary>
        /// Mã sự kiện.
        /// </summary>
        public string EventId { get; set; }

        /// <summary>
        /// Mã ngôn ngữ.
        /// </summary>
        public string LanguageId { get; set; }

        /// <summary>
        /// Tên sự kiện.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Mô tả sự kiện.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Tên không dấu.
        /// </summary>
        public string UnsignName { get; set; }

        /// <summary>
        /// Nội dung sự kiện.
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// Seo link sự kiện.
        /// </summary>
        public string SeoLink { get; set; }

        /// <summary>
        /// MetaTitle.
        /// </summary>
        public string MetaTitle { get; set; }

        /// <summary>
        /// MetaDescription.
        /// </summary>
        public string MetaDescription { get; set; }

        public string Address { get; set; }

        public Event Event { get; set; }
    }
}
