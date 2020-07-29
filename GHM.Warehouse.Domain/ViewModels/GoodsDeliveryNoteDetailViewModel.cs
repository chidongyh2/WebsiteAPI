using System;
using System.Collections.Generic;
using System.Text;
using GHM.Warehouse.Domain.Models;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class GoodsDeliveryNoteDetailViewModel : GoodsDeliveryNotesViewModel
    {        
        public string SupplierName { get; set; }

        public List<GoodsDeliveryNotesDetailSearchViewModel> GoodsDeliveryNoteDetails { get; set; }
    }
}
