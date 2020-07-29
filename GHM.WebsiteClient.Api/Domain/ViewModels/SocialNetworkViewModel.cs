namespace GHM.WebsiteClient.Api.Domain.ViewModels
{
    public class SocialNetworkViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Url { get; set; }
        public bool IsActive { get; set; }
        public int Order { get; set; }
        public string Icon { get; set; }
        public string ConcurrencyStamp { get; set; }
    }
}
