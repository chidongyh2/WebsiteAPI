using System;
using System.Collections.Generic;
using System.Text;
using GHM.Infrastructure.Constants;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.ViewModels
{
    public class VideoDetailViewModel
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
        public DateTime? LastUpdateIsHomePage { get; set; }
        public List<VideoTranslationViewModel> VideoTranslations { get; set; }

    }
}
