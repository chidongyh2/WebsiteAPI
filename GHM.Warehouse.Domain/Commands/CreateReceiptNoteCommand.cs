using System.Collections.Generic;
using GHM.Warehouse.Domain.Models;
using MediatR;

namespace GHM.Warehouse.Domain.Commands
{
    public class CreateReceiptNoteCommand : INotification
    {
        public List<InventoryReport> InventoryReports { get; set; }

        public CreateReceiptNoteCommand()
        {
            InventoryReports = new List<InventoryReport>();
        }
    }
}
