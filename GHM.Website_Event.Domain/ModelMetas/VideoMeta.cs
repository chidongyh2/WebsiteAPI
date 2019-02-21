using System.Collections.Generic;
using GHM.Infrastructure.Constants;

namespace GHM.Website.Event.Domain.ModelMetas
{
    public class VideoMeta
    {
        public string Id { get; set; }
        public string AlbumId { get; set; }
        public string Thumbnail { get; set; }
        public string Url { get; set; }
        public int Order { get; set; }
        public VideoType Type { get; set; }
        public string VideoLinkId { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool? IsHomePage { get; set; }
        public List<VideoTranslationMeta> Translations { get; set; }
      }
}
