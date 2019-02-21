using GHM.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models
{
    public class Faq : EntityBase<string>
    {
        public string Question { get; set; }
        public string Answer { get; set; }
        public string CreatorId { get; set; }
        public string CreatorName { get; set; }
        public bool IsDelete { get; set; }
        public bool IsActive { get; set; }

        public Faq()
        {
            CreateTime = System.DateTime.Now;
        }
    }
}
