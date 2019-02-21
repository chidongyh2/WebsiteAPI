namespace GHM.Product.Domain.ViewModels
{
    public class ProductCategoriesAttributeViewModel
    {
        public int CategoryId { get; set; }
        public string AttributeId { get; set; }
        public string AttributeName { get; set; }
        public bool IsSelfContent { get; set; }
        public bool IsMultiple { get; set; }
    }
}
