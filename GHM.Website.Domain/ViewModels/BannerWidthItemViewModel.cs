using GHM.Website.Domain.Constants;
using GHM.Website.Domain.Models;
using System.Collections.Generic;

namespace GHM.Website.Domain.ViewModels
{
    public class BannerWidthItemViewModel
    {
        public BannerType Type { get; set; }
        public bool IsPopUp { get; set; }
        public string BannerId { get; set; }
        public string BannerName { get; set; }
        public Position? Position { get; set; }
        public List<BannerItem> BannerItems { get; set; }
    }
}
