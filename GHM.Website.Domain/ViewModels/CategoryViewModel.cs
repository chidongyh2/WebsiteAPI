namespace GHM.Website.Domain.ViewModels
{
    public class CategoryViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? ParentId { get; set; }
        public string IdPath { get; set; }
        public bool IsActive { get; set; }
        public int Order { get; set; }
    }
}
