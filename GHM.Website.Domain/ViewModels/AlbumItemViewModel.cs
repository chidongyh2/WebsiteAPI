using GHM.Infrastructure.Constants;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
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
