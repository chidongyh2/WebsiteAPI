using System;
using System.Collections.Generic;

namespace GHM.Website.Domain.ViewModels
{
    public class FaqGroupDetailViewModel
    {
        public string Id { get; set; }
        public bool IsActive { get; set; }
        public int Order { get; set; }
        public string ConcurrencyStamp { get; set; }
        public DateTime? CreateTime { get; set; }
        public DateTime? LastUpdate { get; set; }
        public List<FaqGroupTranslationViewModel> Translations { get; set; }
    }
}
