using System.Collections.Generic;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class GoodsReceiptNoteDetailViewModel : GoodsReceiptNoteViewModel
    {
        public string WarehouseManager { get; set; }
        public List<GoodsReceiptNoteItemViewModel> GoodsReceiptNoteDetails { get; set; }
    }
}
