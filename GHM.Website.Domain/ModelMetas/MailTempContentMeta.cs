using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ModelMetas
{
    public class MailTempContentMeta
    {
        public string Id { get; set; }

        public string MailTempGroupId { get; set; }

        public string ConcurrencyStamp { get; set; }

        public bool IsDelete { get; set; }

        public bool IsActive { get; set; }

        public bool IsDefault { get; set; }

        public DateTime? StartTime { get; set; }

        public DateTime? EndTime { get; set; }

        public List<MailTempContentTranslationMeta> MailTempContentTranslations { get; set; }
    }
}
