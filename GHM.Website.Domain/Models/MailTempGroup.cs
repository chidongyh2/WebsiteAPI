using System;
using System.Collections.Generic;
using System.Text;
using GHM.Infrastructure.Models;

namespace GHM.Website.Domain.Models
{
    /// <summary>
    /// Model mapping với bảng trong database.
    /// </summary>

    public class MailTempGroup : EntityBase<string>
    {
        public string TenantId { get; set; }

        public bool IsDelete { get; set; }

        public MailTempGroup()
        {
            TenantId = "";
            IsDelete = false;
        }
    }

}
