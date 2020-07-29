using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class SupplierDetailViewModel
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public bool IsActive { get; set; }

        public string Address { get; set; }
        public string Description { get; set; }
        public string ConcurrencyStamp { get; set; }

        public List<ContactSearchViewModel> Contacts;
    }
}
