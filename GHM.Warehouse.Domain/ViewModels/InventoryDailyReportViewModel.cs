using GHM.Warehouse.Domain.Models;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class InventoryDailyReportViewModel : InventoryDailyReport
    {
        public string WarehouseName { get; set; }
        public string ProductName { get; set; }
        public string UnitName { get; set; }
    }
}
