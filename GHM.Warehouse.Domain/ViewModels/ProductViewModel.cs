using GHM.Warehouse.Domain.Constants;
using System;

namespace GHM.Warehouse.Domain.IRepository
{
    public class ProductViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string UnitId { get; set; }
        public string UnitName { get; set; }
        public int LikeCount { get; set; }
        public int CommentCount { get; set; }
        public int ViewCount { get; set; }
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
    }
}
