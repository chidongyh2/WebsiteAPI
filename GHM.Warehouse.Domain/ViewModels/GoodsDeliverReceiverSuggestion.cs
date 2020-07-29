using GHM.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class GoodsDeliverReceiverSuggestion : Suggestion<string>
    {
        public string PhoneNumber { get; set; }
    }
}
