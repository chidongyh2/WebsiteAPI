using System.Collections.Generic;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.ModelMetas
{
    public class BannerMeta
    {
        public string Name { get; set; }
        public BannerType Type { get; set; }
        public string Description { get; set; }
        public DisplayType DisplayType { get; set; }
        public EffectType EffectType { get; set; }
        public Position Position { get; set; }
        public bool IsActive { get; set; }
        public bool IsPopUp { get; set; }
        public string ConcurrencyStamp { get; set; }
        public List<BannerItemMeta> BannerItems { get; set; }
    }
}
