using System;
using System.Collections.Generic;
using System.Text;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.ModelMetas
{
    public class ConfigMailTempMeta
    {
        public string Id { get; set; }

        public string MailTempGroupId { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

        public bool IsDelete { get; set; }

        public ConfigMailTempType Type { get; set; }

        public string ConcurrencyStamp { get; set; }

        public List<ConfigMailTempDetailMeta> ConfigMailTempDetailMetas { get; set; }

      

    }

}
