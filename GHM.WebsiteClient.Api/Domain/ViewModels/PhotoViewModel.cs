namespace GHM.WebsiteClient.Api.Domain.ViewModels
{
    public class PhotoViewModel
    {
        public string Id { get; set; }
        public string AlbumId { get; set; }
        public string TenantId { get; set; }
        public string Url { get; set; }
        public bool IsDelete { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
    }
}
