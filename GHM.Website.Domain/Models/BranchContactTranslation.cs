using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.Models
{
    public class BranchContactTranslation
    {
        public string TenantId { get; set; }

        public string BranchContactId { get; set; }

        public string LanguageId { get; set; }

        public string Name { get; set; }

        public string UnsignName { get; set; }

        public string Address { get; set; }


        public BranchContactTranslation()
        {
            TenantId = "";
            BranchContactId = "";
            LanguageId = "";
            Name = "";
            UnsignName = "";
        }
    }
}
