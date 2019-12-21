using GHM.Website.Nelly.Constants;
using System;
using System.Collections.Generic;

namespace GHM.Website.Nelly.ViewModels
{
    public class AlbumWithItemViewModel
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string SeoLink { get; set; }
        public DateTime CreateTime { get; set; }
        public AlbumType Type { get; set; }
        public List<AlbumItemViewModel> AlbumItems { get; set; }
    }
}
