using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ModelMetas
{
    public class CategoryClientMeta
    {
        public string TenantId { get; set; }
        public string SeoLink { get; set; }
        public string LanguageId { get; set; }
        public int SelectTop { get; set; }
        public string NewsId { get; set; }
    }
}
