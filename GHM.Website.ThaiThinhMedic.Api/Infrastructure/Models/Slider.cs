using GHM.Infrastructure.Models;
using GHM.Infrastructure.MongoDb;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models
{
    public class Slider : EntityBase<string>
    {
        public string Name { get; set; }
        public string UnsignName { get; set; }
        public string Description { get; set; }
        public string CreatorId { get; set; }
        public string CreatorName { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public SliderType Type { get; set; } // Loại slider: 0: Slider trang chủ.  1: Popup trang chủ
                                             //        public List<SliderItem> SliderItems { get; set; }

        public Slider()
        {
            IsDelete = false;
        }
    }

    public class SliderItem : Entity<string>
    {
        public int SliderId { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
    }
}
