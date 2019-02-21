using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.Models
{
    public class MailTempContentTranslation
    {
        public string MailTempContentId { get; set; }

        public string TenantId { get; set; }

        public string LanguageId { get; set; }

        public string Title { get; set; }

        public string UnsignTitle { get; set; }

        public string ContentMail { get; set; }

        public string Description { get; set; }

        public MailTempContentTranslation()
        {
            MailTempContentId = "";
            TenantId = "";
            LanguageId = "";
            Title = "";
            UnsignTitle = "";
        }
    }

}
