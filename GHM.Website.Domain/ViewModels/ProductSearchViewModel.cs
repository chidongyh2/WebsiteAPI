using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
{
    public class ProductSearchViewModel
    {
        public string Id { get; set; }
        public bool IsActive { get; set; }
        public bool? IsManagementByLot { get; set; }
        public string Thumbnail { get; set; }
        public string Name { get; set; }
        public string DefaultUnit { get; set; }
        public int CategoryId { get; set; }
        public List<string> CategoryNames { get; set; }
    }
}
