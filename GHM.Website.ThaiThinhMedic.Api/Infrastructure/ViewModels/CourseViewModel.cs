using GHM.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels
{
    public class CourseViewModel : EntityBase<string>
    {
        public string Name { get; set; }        
        public string Description { get; set; }
        public string Content { get; set; }
        public bool IsActive { get; set; }
    }
}
