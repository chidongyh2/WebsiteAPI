using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class ProductCategorySearchViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string IdPath { get; set; }
        public bool IsActive { get; set; }
        public int? ParentId { get; set; }
        public int ChildCount { get; set; }
    }
}
