using System.Collections.Generic;
namespace GHM.Product.Domain.ViewModels
{
    public class ProductAttributeValueDetailViewModel
    {
        public string Id { get; set; }
        public string ProductAttributeId { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool IsActive { get; set; }
        public List<ProductAttributeValueTranslationViewModel> Translations { get; set; }
    }
}
