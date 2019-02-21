using System.Collections.Generic;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.ModelMetas
{
  public  class ChangeListNewsStatusMeta
    {
        public List<string> NewsIds { get; set; }

        public ApproverStatus Status { get; set; }

        public string DeclineReason { get; set; }
    }
}
