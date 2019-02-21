using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ModelMetas
{
    public class MailTempGroupMeta
    {
        public string Id { get; set; }

        public DateTime CreateTime { get; set; }

        public DateTime? LastUpdate { get; set; }

        public string ConcurrencyStamp { get; set; }

        public string TenantId { get; set; }

        public bool IsDelete { get; set; }

        public List<MailTempGroupTranslationMeta> MailTempGroupTranslations { get; set; }
    }

}
