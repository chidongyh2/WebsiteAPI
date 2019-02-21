using System.Collections.Generic;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.ModelMetas
{
    public class SliderMeta
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public SliderType Type { get; set; } // Loại slider: 0: Slider trang chủ.  1:
        public List<SliderItem> ListSliderItem { get; set; }
    }
}
