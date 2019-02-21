using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Event.Domain.Constants;

namespace GHM.Website.Event.Domain.ViewModels
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
