using System;

namespace GHM.Customer.Domain.ViewModels
{
    public class CustomerResourceViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreateTime { get; set; }
        public bool IsActive { get; set; }
        public int Order { get; set; }
    }
}
