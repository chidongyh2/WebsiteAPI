using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.Models
{
    public class AlbumTranslation
    {
        public string TenantId { get; set; }

        public string LanguageId { get; set; }

        public string AlbumId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string UnsignName { get; set; }

        public bool IsDelete { get; set; }

        public string SeoLink { get; set; }

        public string MetaTitle { get; set; }

        public string MetaDescription { get; set; }

        public AlbumTranslation()
        {
            IsDelete = false;
        }
    }
}
