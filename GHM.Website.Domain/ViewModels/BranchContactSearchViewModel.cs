using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
{
    public class BranchContactSearchViewModel
    {
        public string Id { get; set; }

        public string WorkTime { get; set; }

        public string Link { get; set; }

        public int Order { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Website { get; set; }

        public string Logo { get; set; }

        public bool? IsOffice { get; set; }
    }
}
