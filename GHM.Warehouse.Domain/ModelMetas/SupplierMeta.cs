using System.Collections.Generic;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class SupplierMeta
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

        public string Address { get; set; }
                
        public string ConcurrencyStamp { get; set; }

        public List<ContactMeta> Contacts { get; set; }
    }

}
