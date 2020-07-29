using System;
using System.Collections.Generic;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class WarehouseViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public string Address { get; set; }
        public List<string> ListManagerFullName { get; set; }

    }
}
