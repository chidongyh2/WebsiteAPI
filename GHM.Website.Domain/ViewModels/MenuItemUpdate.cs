namespace GHM.Website.Domain.ViewModels
{
    public class MenuItemUpdate
    {
        public int Id { get; set; }
        public int? ParentId { get; set; }
        public int Order { get; set; }
    }
}
