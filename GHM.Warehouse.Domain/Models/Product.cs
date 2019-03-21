using System;
using System.Collections.Generic;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.ModelMetas;

namespace GHM.Warehouse.Domain.Models
{
    public class Product
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool IsDelete { get; set; }
        public bool? IsManagementByLot { get; set; }
        public string Thumbnail { get; set; }
        public DateTime CreateTime { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public string LastUpdateUserId { get; set; }
        public string LastUpdateFullName { get; set; }
        public DateTime? LastUpdateTime { get; set; }
        public int LikeCount { get; set; }
        public int CommentCount { get; set; }
        public int ViewCount { get; set; }
        public string Source { get; set; }
        public ApproverStatus Status { get; set; }
        public DateTime SentTime { get; set; }
        public DateTime? ApprovedTime { get; set; }
        public string ApproverUserId { get; set; }
        public string ApproverFullName { get; set; }
        public string ApproverAvartar { get; set; }
        public string ApproverComment { get; set; }
        public bool? IsHot { get; set; }
        public DateTime? LastUpdateHot { get; set; }
        public bool? IsHomePage { get; set; }
        public DateTime? LastUpdateHomePage { get; set; }
        public Product()
        {
            LikeCount = 0;
            CommentCount = 0;
            ViewCount = 0;
            SentTime = DateTime.Now;
            CreateTime = DateTime.Now;
            IsDelete = false;
            IsActive = true;
            ConcurrencyStamp = Guid.NewGuid().ToString();
        }

        public List<ProductTranslation> Translations { get; set; }
    }
}
