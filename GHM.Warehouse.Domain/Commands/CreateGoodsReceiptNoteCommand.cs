using System;
using System.Collections.Generic;
using System.Text;
using GHM.Warehouse.Domain.Constants;
using MediatR;

namespace GHM.Warehouse.Domain.Commands
{
    public class CreateGoodsReceiptNoteCommand : INotification
    {
        public string TenantId { get; set; }
        public string GoodsReceiptNoteId { get; set; }
        public string WarehouseId { get; set; }
        public DateTime EntryDate { get; set; }
        public InventoryCalculatorMethod InventoryCalculatorMethod { get; set; }
    }
}
