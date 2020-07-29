using System.Collections.Generic;

namespace GHM.Website.Domain.ViewModels
{
    public class FaqGroupViewModel
    {
        public string Id { get; set; }
        public int Order { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public List<FaqViewModel> ListFaq { get; set; }
    }
}
