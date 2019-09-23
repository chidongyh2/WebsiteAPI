using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Website.Nelly.ViewModels
{
    public class ValueViewModel
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Order { get; set; }

        public string Image { get; set; }
        public string Url { get; set; }
    }
}
