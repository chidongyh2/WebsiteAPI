using System;
using System.Collections.Generic;
using System.Text;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.ViewModels
{
    public class BannerViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public BannerType Type { get; set; }
        public string Description { get; set; }
        public DisplayType DisplayType { get; set; }
        public EffectType EffectType { get; set; }
        public bool IsActive { get; set; }
        public bool IsPopUp { get; set; }
        public string ConcurrencyStamp { get; set; }
        public Position? Position { get; set; }

        public List<BannerItem> BannerItems { get; set; }

    }
}
