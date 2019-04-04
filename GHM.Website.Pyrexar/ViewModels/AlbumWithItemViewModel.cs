using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Website.Pyrexar.Constants;

namespace GHM.Website.Pyrexar.ViewModels
{
    public class AlbumWithItemViewModel
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string SeoLink { get; set; }
        //public DateTime CreateTime { get; set; }
        public AlbumType Type { get; set; }
        public List<AlbumItemViewModel> AlbumItems { get; set; }
    }

    public class AlbumItemViewModel
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Thumbnail { get; set; }
        public string Url { get; set; }
    }
}
