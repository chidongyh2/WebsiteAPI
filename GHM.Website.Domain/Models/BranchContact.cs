using GHM.Infrastructure.Models;

namespace GHM.Website.Domain.Models
{
    public class BranchContact : EntityBase<string>
    {
        public string TenantId { get; set; }
        public bool IsDelete { get; set; }
        public string WorkTime { get; set; }
        public string Link { get; set; }
        public int Order { get; set; }
        public string Website { get; set; }
        public string Logo { get; set; }
        /// <summary>
        /// Có phải là trụ sở chính
        /// </summary>
        public bool? IsOffice { get; set; }

        public BranchContact()
        {
            Link = string.Empty;
        }
    }

}
