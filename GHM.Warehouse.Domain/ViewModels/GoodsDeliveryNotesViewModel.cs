using System;
using GHM.Warehouse.Domain.Constants;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class GoodsDeliveryNotesViewModel
    {
        public string Id { get; set; }

        public string TenantId { get; set; }

        public string WarehouseId { get; set; }

        public string WarehouseName { get; set; }

        public DateTime DeliveryDate { get; set; }

        public string CreatorId { get; set; }

        public string CreatorFullName { get; set; }

        public string Reason { get; set; }

        public GoodsDeliveryNoteType Type { get; set; }

        public string ReceiverId { get; set; }

        public string ReceiverFullName { get; set; }

        public string ReceiverPhoneNumber { get; set; }

        public int? OfficeId { get; set; }

        public string OfficeName { get; set; }

        public string Note { get; set; }

        public string ReceptionWarehouseId { get; set; }

        public string ReceptionWarehouseName { get; set; }

        public decimal TotalAmounts { get; set; }

        public decimal TotalBeforeTaxes { get; set; }

        public decimal Taxes { get; set; }

        public string ForecatstId { get; set; }

        public string InventoryId { get; set; }

        public string DeliveryNo { get; set; }

        public int TotalItems { get; set; }

        public string ConcurrencyStamp { get; set; }

        public string SubjectId { get; set; }        
    }
}
