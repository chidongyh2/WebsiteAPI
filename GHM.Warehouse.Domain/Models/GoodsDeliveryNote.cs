using System;
using System.Collections.Generic;
using GHM.Warehouse.Domain.Constants;

namespace GHM.Warehouse.Domain.Models
{
    public class GoodsDeliveryNote
    {
        public string Id { get; set; }

        public string TenantId { get; set; }

        public string WarehouseId { get; set; }

        public DateTime CreateTime { get; set; }

        public string CreatorId { get; set; }

        public string CreatorFullName { get; set; }

        public string CreatorAvatar { get; set; }

        public string Reason { get; set; }

        public GoodsDeliveryNoteType Type { get; set; }

        public string ReceiverId { get; set; }

        public int? OfficeId { get; set; }

        public string OfficeName { get; set; }

        public string Note { get; set; }

        public byte Day { get; set; }

        public byte Month { get; set; }

        public int Year { get; set; }

        public decimal TotalAmounts { get; set; }

        public byte Quarter { get; set; }

        public string ForecatstId { get; set; }

        public string DeliveryNo { get; set; }

        public bool IsDelete { get; set; }

        public int TotalItems { get; set; }

        public string ConcurrencyStamp { get; set; }

        public string LastUpdateUserId { get; set; }

        public string SubjectId { get; set; }

        public string LastUpdateFullName { get; set; }

        public DateTime? LastUpdate { get; set; }

        public DateTime DeliveryDate { get; set; }

        public List<GoodsDeliveryNoteDetail> GoodsDeliveryNoteDetails { get; set; }

        public GoodsDeliveryNote()
        {
            CreateTime = DateTime.Now;
            IsDelete = false;
            ConcurrencyStamp = Guid.NewGuid().ToString();
            GoodsDeliveryNoteDetails = new List<GoodsDeliveryNoteDetail>();
        }
    }
}
