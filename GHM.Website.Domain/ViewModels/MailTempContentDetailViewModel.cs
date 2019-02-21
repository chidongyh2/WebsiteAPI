using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
{
    public class MailTempContentDetailViewModel
    {
        public string Id { get; set; }
        public bool IsDelete { get; set; }
        public bool IsActive { get; set; }
        public bool IsDefault { get; set; }
        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }

        public List<MailTempContentTranslationDetailViewModel>  TempContentTranslationDetails { get; set; }
    }
}
