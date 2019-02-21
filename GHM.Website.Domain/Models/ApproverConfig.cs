using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.Models
{
    public class ApproverConfig
    {
        public string TenantId { get; set; }

        public string UserId { get; set; }

        public string PositionId { get; set; }

        public int OfficeId { get; set; }

        public string FullName { get; set; }

        public string UnsignName { get; set; }

        public string Avatar { get; set; }
    
        public string OfficeName { get; set; }

        public string PositionName { get; set; }

        public int Type { get; set; }
    }
}
