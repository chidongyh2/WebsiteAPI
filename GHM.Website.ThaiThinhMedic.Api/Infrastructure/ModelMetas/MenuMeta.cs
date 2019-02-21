namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.ModelMetas
{
    public class MenuMeta
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public string Url { get; set; }
        public string Icon { get; set; }
        public int Order { get; set; }
        public int? ParentId { get; set; }
    }
}
