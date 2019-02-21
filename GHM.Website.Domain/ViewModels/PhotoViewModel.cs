using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
{
    public class PhotoViewModel
    {
        public string Id { get; set; }
        public string AlbumId { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public string Url { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreateTime { get; set; }

    }
}
