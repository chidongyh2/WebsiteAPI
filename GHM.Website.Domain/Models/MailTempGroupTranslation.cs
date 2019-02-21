using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.Models
{
    /// <summary>
    /// Model mapping với bảng trong database.
    /// </summary>

    public class MailTempGroupTranslation
    {
        public string TenantId { get; set; }

        public string MailTempGroupId { get; set; }

        public string LanguageId { get; set; }

        public string Name { get; set; }

        public string UnsignName { get; set; }

        public string Description { get; set; }

        public MailTempGroupTranslation()
        {
            TenantId = "";
            MailTempGroupId = "";
            LanguageId = "";
            Name = "";
        }
    }

}
