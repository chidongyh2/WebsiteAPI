using System;
using System.Collections.Generic;

namespace GHM.Website.Domain.ViewModels
{
    public class FaqDetailViewModel
    {
        public string Id { get; set; }
        public string FaqGroupId { get; set; }
        public string Photo { get; set; }
        public int Order { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public DateTime? CreateTime { get; set; }
        public DateTime? LastUpdate { get; set; }
        public List<FaqTranslationViewModel> FaqTranslations { get; set; }
    }
}
