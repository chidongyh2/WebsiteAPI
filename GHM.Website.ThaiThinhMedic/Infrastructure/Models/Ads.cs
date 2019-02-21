using GHM.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class Ads : EntityBase<string>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Url { get; set; }
        public bool IsActive { get; set; }
    }
}
