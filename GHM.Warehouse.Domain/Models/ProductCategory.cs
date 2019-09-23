using GHM.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.Models
{
    /// <summary>
    /// Model mapping với bảng trong database.
    /// </summary>

    public class ProductCategory //: EntityBase<int>
    {
        public int Id { get; set; }

        public int? ParentId { get; set; }

        public string TenantId { get; set; }

        public string IdPath { get; set; }

        public bool IsActive { get; set; }

        public bool IsDelete { get; set; }

        public bool? IsHomePage { get; set; }

        public bool? IsHot { get; set; }

        public bool? IsSolution { get; set; }

        public string Image { get; set; }

        public int Order { get; set; }

        public string OrderPath { get; set; }

        public int ChildCount { get; set; }

        public string ConcurrencyStamp { get; set; }

        public DateTime CreateTime { get; set; }

        public string CreatorId { get; set; }

        public string CreatorFullName { get; set; }

        public string LastUpdateUserId { get; set; }

        public string LastUpdateFullName { get; set; }

        public DateTime? LastUpdate { get; set; }

        public ProductCategory()
        {
            TenantId = "";
            IdPath = "";
            IsActive = false;
            IsDelete = false;
            ChildCount = 0;
            Order = 0;
            CreateTime = DateTime.Now;
            IsHot = false;
            IsHomePage = false;
            IsSolution = false;
        }
        public List<ProductCategoryTranslation> ProductCategoryTranslations { get; set; }
    }

}
