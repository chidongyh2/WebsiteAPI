namespace GHM.Warehouse.Domain.Models
{
    public class ProductAttributeValue
    {
        public string ProductAttributeId { get; set; }

        public string AttributeValueId { get; set; }

        public ProductAttribute ProductAttribute { get; set; }
    }
}
