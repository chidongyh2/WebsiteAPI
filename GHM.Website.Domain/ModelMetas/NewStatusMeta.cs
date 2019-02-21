using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.ModelMetas
{
    public class NewStatusMeta
    {
        public ApproverStatus Status { get; set; }
        public string DeclineReason { get; set; }
    }
}
