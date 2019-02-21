using System;
using System.Collections.Generic;
using System.Text;
using GHM.Infrastructure.Models;

namespace GHM.Website.Event.Domain.Models
{
    public class Photo : EntityBase<string>
    {
        public string AlbumId { get; set; }

        public string TenantId { get; set; }

        public string Url { get; set; }

        public bool IsDelete { get; set; }

        public string Description { get; set; }

        public string Title { get; set; }

        public Photo()
        {
            IsDelete = false;
            CreateTime = DateTime.Now;
        }
    }
}
