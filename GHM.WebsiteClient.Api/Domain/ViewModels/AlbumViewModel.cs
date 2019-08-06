using GHM.WebsiteClient.Api.Domain.Constants;
using System;

namespace GHM.WebsiteClient.Api.Domain.ViewModels
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
