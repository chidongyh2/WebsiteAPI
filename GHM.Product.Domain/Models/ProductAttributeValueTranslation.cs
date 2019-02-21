namespace GHM.Product.Domain.Models
{
    public class ProductAttributeValueTranslation
    {
        public string ProductAttributeValueId { get; set; }

        public string LanguageId { get; set; }

        public string TenantId { get; set; }

        public string ProductAttributeId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string UnsignName { get; set; }

        public bool IsDelete { get; set; }

        public ProductAttributeValueTranslation()
        {
            IsDelete = false;
        }

        public ProductAttributeValue ProductAttributeValue { get; set; }
    }
}
