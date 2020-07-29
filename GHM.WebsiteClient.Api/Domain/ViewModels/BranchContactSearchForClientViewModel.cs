using GHM.WebsiteClient.Api.Domain.Models;
using System.Collections.Generic;

namespace GHM.WebsiteClient.Api.Domain.ViewModels
{
    public class BranchContactSearchForClientViewModel
    {
        public string Id { get; set; }
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
