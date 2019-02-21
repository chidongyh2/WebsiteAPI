using System;
using System.Collections.Generic;
using System.Text;
using GHM.Website.Event.Domain.Constants;

namespace GHM.Website.Event.Domain.ViewModels
{
    public class SubjectTagViewModel
    {
        public string TagId { get; set; }
        public string SubjectId { get; set; }
        public TagType Type { get; set; }
        public string Name { get; set; }
        public string SeoLink { get; set; }
        public string UnsignName { get; set; }
        public string LanguageId { get; set; }
        //public string TenantId { get; set; }
    }
}
