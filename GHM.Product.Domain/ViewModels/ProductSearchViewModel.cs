using System.Collections.Generic;

namespace GHM.Product.Domain.ViewModels
{
    public class ProductSearchViewModel
    {
        public string Id { get; set; }
        public bool IsActive { get; set; }
        public bool? IsManagementByLot { get; set; }
        public string Thumbnail { get; set; }
        public string Name { get; set; }
        public string DefaultUnit { get; set; }
        public bool? IsHot { get; set; }
        public bool? IsHomePage { get; set; }
        public List<string> CategoryNames { get; set; }
    }
}
