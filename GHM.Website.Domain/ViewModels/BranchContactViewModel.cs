using System.Collections.Generic;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.ViewModels
{
    public class BranchContactViewModel
    {
        public string Id { get; set; }

        public string WorkTime { get; set; }
        public string Link { get; set; }
        public int Order { get; set; }
        public string Website { get; set; }
        public string ConcurrencyStamp { get; set; }
        public string Logo { get; set; }
        public bool? IsOffice { get; set; }

        public List<BranchContactTranslation> BranchContactTranslations { get; set; }

        public List<BranchContactDetail> BranchContactDetails { get; set; }

    }

}
