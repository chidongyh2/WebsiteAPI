using System.Collections.Generic;

namespace GHM.Customer.Domain.ViewModels
{
    public class JobDetailViewModel
    {
        public int Order { get; set; }
        public int? ParentId { get; set; }

        public bool IsActive { get; set; }

        public int ChildCount { get; set; }

        public List<JobTranslationViewModel> JobTranslations { get; set; }
    }
}
