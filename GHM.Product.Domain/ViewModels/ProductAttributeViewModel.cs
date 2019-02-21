using System;

namespace GHM.Product.Domain.ViewModels
{
    public class ProductAttributeViewModel
    {
        public string Id { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool IsActive { get; set; }
        public bool IsRequire { get; set; }
        public bool IsMultiple { get; set; }
        public bool IsSelfContent { get; set; }
        public string LanguageId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string UnsignName { get; set; }
        public DateTime CreateTime { get; set; }
    }
}
