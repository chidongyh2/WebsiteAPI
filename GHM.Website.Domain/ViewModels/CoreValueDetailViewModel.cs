using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
{
  public  class CoreValueDetailViewModel
    {
        public string Id { get; set; }
        public bool IsActive { get; set; }
        public int Order { get; set; }
        public string ConcurrencyStamp { get; set; }
        public DateTime? CreateTime { get; set; }
        public DateTime? LastUpdate { get; set; }
        public List<CoreValueTranslationViewModel> Translations { get; set; }
    }
}
