namespace GHM.Warehouse.Domain.ViewModels
{
    public class WarehouseConfigViewModel
    {
        public string TenantId { get; set; }
        public string LanguageId { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }
        public string DisplayName { get; set; }
        public string ConcurrencyStamp { get; set; }
    }
}
