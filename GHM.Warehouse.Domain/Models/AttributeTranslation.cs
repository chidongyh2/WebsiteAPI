namespace GHM.Warehouse.Domain.Models
{
    public class AttributeTranslation
    {
        public string AttributeId { get; set; }

        public string LanguageId { get; set; }

        public string TenantId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string UnsignName { get; set; }

        public bool IsDelete { get; set; }

        public AttributeTranslation()
        {
            IsDelete = false;
        }

        public Attribute Attribute { get; set; }
    }
}
