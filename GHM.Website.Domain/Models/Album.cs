using GHM.Infrastructure.Models;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Domain.Models
{
    public class Album : EntityBase<string>
    {
        public string TenantId { get; set; }

        public bool IsActive { get; set; }

        public bool IsDelete { get; set; }

        public AlbumType Type { get; set; }

        public string Thumbnail { get; set; }

        public bool? IsPublic { get; set; }

        public Album()
        {
            IsActive = true;
            IsDelete = false;
            IsPublic = true;
        }
    }
}
