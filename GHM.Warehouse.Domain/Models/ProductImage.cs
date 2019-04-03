namespace GHM.Warehouse.Domain.Models
{
    public class ProductImage
    {
        public string Id { get; set; }
        public string ProductId { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public string TenantId { get; set; }
        public bool IsDelete { get; set; }
        public ProductImage()
        {
            IsDelete = false;
        }
    }
}
