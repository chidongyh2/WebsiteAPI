using GHM.Website.ThaiThinhMedical.Constants;
using System.Collections.Generic;

namespace GHM.Website.ThaiThinhMedical.ViewModels
{
    public class BranchContactSearchViewModel
    {
        public string WorkTime { get; set; }
        public string Link { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Website { get; set; }
        public string Logo { get; set; }
        public bool? IsOffice { get; set; }
        public List<BranchContactDetail> BranchContactDetails { get; set; }
    }
}
