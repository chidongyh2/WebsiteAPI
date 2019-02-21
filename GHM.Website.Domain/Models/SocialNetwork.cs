using GHM.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.Models
{
    public class SocialNetwork : EntityBase<string>
    {
        public string TenantId { get; set; }
        public string Name { get; set; }
        public string UnsignName { get; set; }
        public string Image { get; set; }
        public string Url { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public int Order { get; set; }
        public string Icon { get; set; }
        public SocialNetwork()
        {
            TenantId = "";
            Name = "";
            Image = "";
            Url = "";
        }
    }
}
