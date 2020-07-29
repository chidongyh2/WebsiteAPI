using GHM.Warehouse.Domain.Constants;

namespace GHM.Warehouse.Domain.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class GoodsReceiptNote
    {
        [StringLength(50)]
        public string Id { get; set; }

        [StringLength(50)]
        public string TenantId { get; set; }

        [Required]
        [StringLength(50)]
        public string WarehouseId { get; set; }

        [Required]
        [StringLength(50)]
        public string SupplierId { get; set; }

        public DateTime CreateTime { get; set; }

        public DateTime EntryDate { get; set; }

        public byte Day { get; set; }

        public byte Month { get; set; }

        public int Year { get; set; }

        [Required]
        [StringLength(50)]
        public string CreatorId { get; set; }

        [Required]
        [StringLength(50)]
        public string CreatorFullName { get; set; }

        [StringLength(500)]
        public string CreatorAvatar { get; set; }

        [StringLength(500)]
        public string Note { get; set; }

        [StringLength(50)]
        public string DeliverId { get; set; }

        [StringLength(50)]
        public string ReceiverId { get; set; }

        [StringLength(50)]
        public string ReceiverFullName { get; set; }

        [StringLength(50)]
        public string ReceiptNo { get; set; }

        public decimal TotalAmounts { get; set; }

        public int TotalItems { get; set; }

        public byte? VAT { get; set; }

        public byte Quarter { get; set; }

        public GoodsReceiptNoteType Type { get; set; }

        //[StringLength(50)]
        //public string InventoryId { get; set; }

        public string FollowId { get; set; }

        [StringLength(50)]
        public string InvoiceNo { get; set; }

        public DateTime? InvoiceDate { get; set; }

        public string ConcurrencyStamp { get; set; }

        public DateTime? LastUpdate { get; set; }

        public string LastUpdateUserId { get; set; }

        public string LastUpdateFullName { get; set; }

        public decimal TotalBeforeTaxes { get; set; }

        public decimal Taxes { get; set; }

        public bool IsDelete { get; set; }

        public string SubjectId { get; set; }

        public List<GoodsReceiptNoteDetail> GoodsReceiptNoteDetails { get; set; }

        public GoodsReceiptNote()
        {
            GoodsReceiptNoteDetails = new List<GoodsReceiptNoteDetail>();
            CreateTime = DateTime.Now;
            ConcurrencyStamp = Guid.NewGuid().ToString();
        }
    }
}
