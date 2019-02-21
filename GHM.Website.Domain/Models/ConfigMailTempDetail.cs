using System;
using System.Collections.Generic;
using System.Text;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.Models
{
    public class ConfigMailTempDetail
    {
        public string Id { get; set; }

        public DateTime CreateTime { get; set; }

        public string TenantId { get; set; }

        public string ConfigMailTempId { get; set; }

        public string MailId { get; set; }

        public ConfigMailTempDetailType Type { get; set; }

        public ConfigMailTempDetail()
        {
            Id = Guid.NewGuid().ToString();
            CreateTime = DateTime.Now;
            TenantId = "";
            ConfigMailTempId = "";
            MailId = "";
            Type = ConfigMailTempDetailType.MailSender;
        }
    }
}
