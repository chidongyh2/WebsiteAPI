using System;
using System.Collections.Generic;
using GHM.Warehouse.Domain.Constants;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class GoodsReceiptNoteMeta
    {
        public string WarehouseId { get; set; }

        public string SupplierId { get; set; }

        public DateTime EntryDate { get; set; }

        public string CreatorId { get; set; }

        public string CreatorFullName { get; set; }

        public string CreatorAvatar { get; set; }

        public string LastUpdateUserId { get; set; }

        public string LastUpdateFullName { get; set; }

        public string Note { get; set; }

        public string DeliverId { get; set; }

        public string DeliverFullName { get; set; }

        public string DeliverPhoneNumber { get; set; }

        public string ReceiptNo { get; set; }

        public byte? VAT { get; set; }

        public GoodsReceiptNoteType Type { get; set; }

        public string FollowId { get; set; }

        public string Follow { get; set; }

        public string InvoiceNo { get; set; }

        public DateTime? InvoiceDate { get; set; }

        public string ConcurrencyStamp { get; set; }

        public List<GoodsReceiptNoteDetailMeta> GoodsReceiptNoteDetails { get; set; }

        public byte Day { get; set; }

        public byte Month { get; set; }

        public int Year { get; set; }

        public string SubjectId { get; set; }
    }
}
