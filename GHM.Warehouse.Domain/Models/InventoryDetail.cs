using System;

namespace GHM.Warehouse.Domain.Models
{
    public class InventoryDetail
    {
        public string Id { get; set; }

        public string InventoryId { get; set; }

        public string ProductId { get; set; }

        public string LotId { get; set; }

        public string UnitId { get; set; }

        public decimal? InventoryQuantity { get; set; }

        public decimal RealQuantity { get; set; }

        public string Reason { get; set; }

        public string ConcurrencyStamp { get; set; }

        public virtual Inventory Inventory { get; set; }

        public DateTime? LastUpdate { get; set; }

        public string LastUpdateUserId { get; set; }

        public string LastUpdateFullName { get; set; }

        public decimal Price { get; set; }

        public InventoryDetail()
        {
            Id = Guid.NewGuid().ToString();
            ConcurrencyStamp = Guid.NewGuid().ToString();
        }
    }
}
