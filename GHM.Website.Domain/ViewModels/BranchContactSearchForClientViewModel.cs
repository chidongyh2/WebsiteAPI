using GHM.Website.Domain.Constants;
using GHM.Website.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
{
    public class BranchContactSearchForClientViewModel
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
