using System.Collections.Generic;

namespace GHM.Product.Domain.ViewModels
{
    public class ProductAttributeDetailViewModel
    {
        public string Id { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool IsActive { get; set; }
        public bool IsRequire { get; set; }
        public bool IsMultiple { get; set; }
        public bool IsSelfContent { get; set; }
        public List<ProductAttributeTranslationViewModel> Translations { get; set; }
    }
}
