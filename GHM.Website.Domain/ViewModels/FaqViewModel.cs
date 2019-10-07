using System;

namespace GHM.Website.Domain.ViewModels
{
    public class FaqViewModel
    {
        public string Id { get; set; }
        public string FaqGroupId { get; set; }
        public int Order { get; set; }
        public bool IsActive { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
    }
}
