using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ModelMetas
{
    public class SocialNetworkMeta
    {
        public string ConcurrencyStamp { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Url { get; set; }
        public bool IsActive { get; set; }
        public int Order { get; set; }
        public string Icon { get; set; }
    }
}
