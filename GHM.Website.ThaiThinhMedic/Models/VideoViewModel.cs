using GHM.Website.ABC.Constants;

namespace GHM.Website.ABC.Models
{
    public class VideoViewModel
    {
        public string Id { get; set; }
        public string AlbumId { get; set; }
        public string AlbumName { get; set; }
        public string Thumbnail { get; set; }
        public string Url { get; set; }
        public int Order { get; set; }
        public VideoType Type { get; set; }
        public string VideoLinkId { get; set; }
        public bool IsActive { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
      //  public DateTime CreateTime { get; set; }
     //  public bool IsHomePage { get; set; }
      //  public DateTime LastUpdateIsHomePage { get; set; }
    }
}
