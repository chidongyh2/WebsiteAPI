using GHM.Infrastructure.Constants;

namespace GHM.Core.Domain.Models
{
    public class ApproverConfig
    {
        public string UserId { get; set; }

        public string UserName { get; set; }

        public string FullName { get; set; }

        public string Avatar { get; set; }
    
        public string TenantId { get; set; }

        public string UnsignName { get; set; }

        public ApproverConfigType Type { get; set; }
    }
}
