using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.Models
{
    public class SettingTranslation
    {
        public string SettingId { get; set; }

        public string TenantId { get; set; }

        public string LanguageId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public SettingTranslation()
        {
            SettingId = "";
            TenantId = "";
            LanguageId = "";
        }
    }
}
