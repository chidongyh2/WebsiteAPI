using System;
using System.Collections.Generic;
using System.Text;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.ViewModels
{
    public class AlbumViewModel
    {
        public string Id { get; set; }
        public bool IsActive { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Thumbnail { get; set; }
        public AlbumType Type { get; set; }
        public string SeoLink { get; set; }
        public DateTime CreateTime { get; set; }
    }
}
