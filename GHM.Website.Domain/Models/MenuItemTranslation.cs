using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.Models
{
    public class MenuItemTranslation
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
        /// Mã MenuItem.
        /// </summary>
        public int MenuItemId { get; set; }

        /// <summary>
        /// Tên MenuItem.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Tên không dấu.
        /// </summary>
        public string UnsignName { get; set; }

        /// <summary>
        /// Tên MenuItem cha.
        /// </summary>
        public string ParentName { get; set; }

        /// <summary>
        /// NamePath.
        /// </summary>
        public string NamePath { get; set; }

        public MenuItem MenuItem { get; set; }

        public string Description { get; set; }
    }
}
