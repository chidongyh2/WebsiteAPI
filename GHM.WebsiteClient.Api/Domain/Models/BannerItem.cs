using System;

namespace GHM.WebsiteClient.Api.Domain.Models
{
    public class BannerItem
    {
        public string Id { get; set; }
        public string BannerId { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public int? Order { get; set; }
        public string Alt { get; set; }
        public int? TotalClick { get; set; }
        public BannerItem()
        {
            Id = Guid.NewGuid().ToString();
            BannerId = "";
            Url = "";
            Image = "";
            TotalClick = 0;
        }
    }
}
