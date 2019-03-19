using System;
using GHM.Warehouse.Domain.Constants;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class GoodsReceiptNoteViewModel
    {
        public string Id { get; set; }

        public string WarehouseId { get; set; }

        public string WarehouseName { get; set; }

        public string SupplierId { get; set; }

        public string SupplierName { get; set; }

        public DateTime CreateTime { get; set; }

        public DateTime EntryDate { get; set; }

        public string CreatorId { get; set; }

        public string CreatorFullName { get; set; }

        public string CreatorAvatar { get; set; }

        public string DeliverId { get; set; }

        public string DeliverFullName { get; set; }

        public string DeliverPhoneNumber { get; set; }

        public string ReceiverId { get; set; }

        public string ReceiverFullName { get; set; }

        public string ReceiptNo { get; set; }

        public decimal TotalAmounts { get; set; }

        public int TotalItems { get; set; }

        public GoodsReceiptNoteType Type { get; set; }

        public string InvoiceNo { get; set; }

        public DateTime? InvoiceDate { get; set; }

        public string Follow { get; set; }

        public string FollowId { get; set; }

        public byte Day { get; set; }

        public byte Month { get; set; }

        public int Year { get; set; }

        public decimal TotalBeforeTaxes { get; set; }

        public decimal Tax { get; set; }

        public string Note { get; set; }
    }
}
