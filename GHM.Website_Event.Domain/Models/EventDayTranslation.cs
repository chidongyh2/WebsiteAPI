using System;
namespace GHM.Website.Event.Domain.Models
{
    public class EventDayTranslation
    {
        /// <summary>
        /// Mã ngày diễn ra sự kiện.
        /// </summary>
        public string EventDayId { get; set; }

        /// <summary>
        /// Mã ngôn ngữ.
        /// </summary>
        public string LanguageId { get; set; }

        /// <summary>
        /// Tên ngày diễn ra sự kiện.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Mô tả ngày diễn ra sự kiện.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Địa chỉ ngày diễn ra sự kiện.
        /// </summary>
        public string Address { get; set; }

        public EventDay EventDay { get; set; }
    }
}
