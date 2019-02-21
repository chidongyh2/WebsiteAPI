using GHM.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Product.Domain.Models
{
    /// <summary>
    /// Model mapping với bảng trong database.
    /// </summary>

    public class Unit : EntityBase<string>
    {
        public bool IsActive { get; set; }

        public bool IsDelete { get; set; }

        public string TenantId { get; set; }

        public string CreatorId { get; set; }

        public string CreatorFullName { get; set; }

        public string LastUpdateUserId { get; set; }

        public string LastUpdateFullName { get; set; }

        public Unit()
        {
            IsActive = false;
            IsDelete = false;
            TenantId = "";
            CreatorId = "";
            CreatorFullName = "";
        }
    }


}
