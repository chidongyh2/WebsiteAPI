using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
{
    public class MailTempContentTranslationDetailViewModel
    {
        public string MailTempContentId { get; set; }
        public string LanguageId { get; set; }
        public string Title { get; set; }
        public string ContentMail { get; set; }
        public string Description { get; set; }
    }
}
