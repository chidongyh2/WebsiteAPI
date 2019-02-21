using System.Collections.Generic;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.ViewModels
{
    public class AlbumDetailViewModel
    {
        public string Id { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public string Thumbnail { get; set; }
        public bool? IsPublic { get; set; }
        public AlbumType Type { get; set; }
        public List<AlbumTranslation> Translations { get; set; }
        public List<Photo> Photos { get; set; }
        public List<Video> Videos { get; set; }
    }
}
