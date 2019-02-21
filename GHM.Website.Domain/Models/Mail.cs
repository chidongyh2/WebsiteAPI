using System;
using System.Collections.Generic;
using System.Text;
using GHM.Infrastructure.Models;

namespace GHM.Website.Domain.Models
{
    /// <summary>
    /// Model mapping với bảng trong database.
    /// </summary>

    public class Mail : EntityBase<string>
    {
        public string TenantId { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string MailTypeId { get; set; }

        public bool IsDelete { get; set; }

        public bool IsActive { get; set; }

        public string Owner { get; set; }

        public Mail()
        {
            TenantId = "";
            IsDelete = false;
            CreatorId = "";
            CreatorFullName = "";
            IsDelete = false;
            Owner = "";
        }
    }

}
