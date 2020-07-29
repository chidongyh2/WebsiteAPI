namespace GHM.Warehouse.Domain.Models
{
    public class AttributeValueTranslation
    {
        public string AttributeValueId { get; set; }

        public string LanguageId { get; set; }

        public string TenantId { get; set; }

        public string ProductAttributeId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string UnsignName { get; set; }

        public bool IsDelete { get; set; }

        public AttributeValueTranslation()
        {
            IsDelete = false;
        }

        public AttributeValue AttributeValue { get; set; }
    }
}
