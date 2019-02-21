using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.Constants;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class CourseRegister : EntityBase<string>
    {
        public int CourseId { get; set; }
        public int ClassId { get; set; }
        public string UserId { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public bool IsDelete { get; set; }
        public string Note { get; set; }
        public CourseRegisterStatus Status { get; set; }

        public CourseRegister()
        {
            IsDelete = false;
            Status = CourseRegisterStatus.New;
        }
    }
}
