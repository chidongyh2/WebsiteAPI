using GHM.WebsiteClient.Api.Domain.Constants;
using GHM.WebsiteClient.Api.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.ViewModels
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
