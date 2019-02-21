namespace GHM.Website.Event.Domain.Models
{
    public class EventAlbum
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public string EventId { get; set; }
        public string AlbumId { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
    }
}
