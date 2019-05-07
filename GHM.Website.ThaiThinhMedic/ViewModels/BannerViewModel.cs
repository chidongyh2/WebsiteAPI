using GHM.Website.ABC.Constants;
using System.Collections.Generic;

namespace GHM.Website.ABC.ViewModels
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

        public List<BannerItemViewModel> BannerItems { get; set; }
    }

    public class BannerItemViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string Image { get; set; }
        public int? Order { get; set; }
        public string Alt { get; set; }
        public int? TotalClick { get; set; }
        public BannerType Type { get; set; }
        public bool IsPopUp { get; set; }
        public string BannerId { get; set; }
        public string BannerName { get; set; }
    }
}
