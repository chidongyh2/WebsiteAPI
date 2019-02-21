namespace GHM.Product.Domain.Models
{
    public class ProductAttributeTranslation
    {
        public string ProductAttributeId { get; set; }

        public string LanguageId { get; set; }

        public string TenantId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string UnsignName { get; set; }

        public bool IsDelete { get; set; }

        public ProductAttributeTranslation()
        {
            IsDelete = false;
        }

        public ProductAttribute ProductAttribute { get; set; }
    }
}
