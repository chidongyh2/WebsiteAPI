using System;
using System.Collections.Generic;
using System.Text;
using GHM.Infrastructure.Models;

namespace GHM.Website.Domain.Models
{
    public class MailType : EntityBase<string>
    {
        public string TenantId { get; set; }

        public string Name { get; set; }

        public bool Ssl { get; set; }

        public string Host { get; set; }

        public int Port { get; set; }

        public bool IsDelete { get; set; }

        public MailType()
        {
            Name = "";
            Ssl = false;
            Host = "";
            Port = 0;
            IsDelete = false;
        }
    }
}
