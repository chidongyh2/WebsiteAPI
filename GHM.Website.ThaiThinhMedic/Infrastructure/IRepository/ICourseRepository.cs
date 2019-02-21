using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface ICourseRepository
    {      
        Task<Course> GetInfo(int id, bool isReadOnly = false);

        Task<List<CourseViewModel>> Search(string keyword, bool? isActive, int page, int pageSize, out int totalRows);
    }
}
