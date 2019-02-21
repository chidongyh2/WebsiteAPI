using GHM.Infrastructure.Constants;

namespace GHM.Core.Domain.ViewModels
{
    public class ApproverConfigSearchViewModel
    {
        public string UserId { get; set; }

        public string FullName { get; set; }

        public string UnsignName { get; set; }

        public string Avatar { get; set; }

        public string UserName { get; set; }
        public ApproverConfigType Type { get; set; }
    }
}
