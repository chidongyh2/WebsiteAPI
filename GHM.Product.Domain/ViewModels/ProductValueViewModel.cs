namespace GHM.Product.Domain.ViewModels
{
    public class ProductValueViewModel
    {
        public string Id { get; set; }
        public string ProductAttributeId { get; set; }
        public string ProductAttributeName { get; set; }
        public string ProductAttributeValueId { get; set; }
        public string ProductAttributeValueName { get; set; }
        public string Value { get; set; }
        public string LanguageId { get; set; }
        public bool IsShowClient { get; set; }
        public bool ProductAttributeIsSelfContent { get; set; }
        public bool ProductAttributeIsMultiple { get; set; }
    }
}
