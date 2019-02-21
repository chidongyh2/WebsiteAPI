using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.Constants;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels
{
    public class CourseRegisterViewModel : EntityBase<string>
    {
        public string UserId { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public CourseRegisterStatus Status { get; set; }
    }
}
