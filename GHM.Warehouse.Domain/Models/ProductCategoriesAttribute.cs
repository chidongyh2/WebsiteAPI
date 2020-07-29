namespace GHM.Warehouse.Domain.ModelMetas
{
    /// <summary>
    /// Model mapping với bảng trong database.
    /// </summary>

    public class ProductCategoriesAttribute
    {
        public int CategoryId { get; set; }
        public string AttributeId { get; set; }
        public string TenantId { get; set; }

        public ProductCategoriesAttribute()
        {
            CategoryId = 0;
            AttributeId = "";
        }
    }

}
