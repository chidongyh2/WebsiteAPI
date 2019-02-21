using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.ModelMetas
{
    public class VideoMeta : EntityBase<string>
    {
        public new int? Id { get; set; }
        public string VideoId { get; set; }
        public string Url { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Thumbnail { get; set; }
        public bool IsActive { get; set; }
        public int Order { get; set; }
        public VideoType Type { get; set; }
    }
}
