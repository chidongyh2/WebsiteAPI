using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.Models
{
    public class FaqTranslation
    {
        public string TenantId { get; set; }
        public string LanguageId { get; set; }
        public string FaqId { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public bool IsDelete { get; set; }

        public FaqTranslation()
        {
            IsDelete = false;
        }

        public Faq Faq { get; set; }
    }
}
