using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.Models
{
    /// <summary>
    /// Model mapping với bảng trong database.
    /// </summary>

    public class ProductCategoryTranslation
    {
        public string TenantId { get; set; }

        public int ProductCategoryId { get; set; }

        public string LanguageId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string UnsignName { get; set; }

        public string ParentName { get; set; }

        public bool IsDelete { get; set; }

        public ProductCategoryTranslation()
        {
            TenantId = "";
            ProductCategoryId = 0;
            LanguageId = "";
            Name = "";
            UnsignName = "";
            IsDelete = false;
        }
    }
}
