using GHM.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models
{
    public class CourseRegisterParticipans : EntityBase<string>
    {
        public int CourseRegisterId { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
    }
}
