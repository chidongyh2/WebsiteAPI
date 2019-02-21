using System;
using System.Collections.Generic;
using System.Text;
using GHM.Infrastructure.Models;

namespace GHM.Website.Domain.Models
{
    public class MailTempContent : EntityBase<string>
    {
        public string TenantId { get; set; }

        public string MailTempGroupId { get; set; }

        public bool IsDelete { get; set; }

        public bool IsActive { get; set; }

        public bool IsDefault { get; set; }

        public DateTime? StartTime { get; set; }

        public DateTime? EndTime { get; set; }

        public MailTempContent()
        {
            TenantId = "";
            MailTempGroupId = "";
            IsDelete = false;
            IsActive = false;
            IsDefault = false;
        }
    }
}
