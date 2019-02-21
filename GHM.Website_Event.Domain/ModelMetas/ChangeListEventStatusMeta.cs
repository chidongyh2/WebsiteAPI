using System.Collections.Generic;
using GHM.Website.Event.Domain.Constants;

namespace GHM.Website.Event.Domain.ModelMetas
{
  public  class ChangeListEventStatusMeta
    {
        public List<string> EventIds { get; set; }

        public ApproverStatus Status { get; set; }

        public string declineReason { get; set; }
    }
}
