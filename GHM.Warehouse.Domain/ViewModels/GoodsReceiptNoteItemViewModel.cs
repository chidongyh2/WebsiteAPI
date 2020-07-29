using GHM.Warehouse.Domain.Models;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class GoodsReceiptNoteItemViewModel : GoodsReceiptNoteDetail
    {
        public string ProductName { get; set; }

        public string UnitName { get; set; }

        public string WarehouseName { get; set; }
    }
}
