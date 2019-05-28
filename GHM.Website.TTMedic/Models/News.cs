using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Website.TTMedic.Models
{
    public class News
    {
        public string Id { get; set; }
        public string FeatureImage { get; set; }
        public string AltImage { get; set; }
        public string Source { get; set; }
        public bool? IsHomePage { get; set; }
        public DateTime? LastUpdateIsHomePage { get; set; }
        public string Title { get; set; }
        public string MetaTitle { get; set; }
        public string Description { get; set; }
        public string MetaDescription { get; set; }
        public string MetaKeyword { get; set; }
        public string SeoLink { get; set; }
    }
}
