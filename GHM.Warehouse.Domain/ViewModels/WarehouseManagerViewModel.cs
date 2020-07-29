using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class WarehouseManagerConfigViewModel
    {
        public string UserId { get; set; }
        public string WarehouseId { get; set; }
        public string FullName { get; set; }
        public string Avatar { get; set; }
        public int Permissions { get; set; }
        public DateTime CreateTime { get; set; }
        public string PhoneNumber { get; set; }

    }
}
