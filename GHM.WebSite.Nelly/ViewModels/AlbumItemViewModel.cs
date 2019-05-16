using GHM.Infrastructure.Constants;

namespace GHM.Website.Nelly.ViewModels
{
    public class AlbumItemViewModel
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Thumbnail { get; set; }
        public VideoType Type { get; set; }
        public string Url { get; set; }
        public string VideoLinkId { get; set; }
    }
}
