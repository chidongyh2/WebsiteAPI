using System;
using System.Collections.Generic;
using System.Text;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.Models
{
    public class ConfigMailTemp
    {
        public string Id { get; set; }

        public DateTime CreateTime { get; set; }

        public string TenantId { get; set; }

        public string MailTempGroupId { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

        public bool IsDelete { get; set; }

        public ConfigMailTempType Type { get; set; }

        public string ConcurrencyStamp { get; set; }

        public ConfigMailTemp()
        {
            Id = Guid.NewGuid().ToString();
            CreateTime = DateTime.Now;
            TenantId = "";
            MailTempGroupId = "";
            IsActive = false;
            IsDelete = false;
            Type = ConfigMailTempType.NoneReceiver;
            ConcurrencyStamp = Guid.NewGuid().ToString();
        }
    }
}
