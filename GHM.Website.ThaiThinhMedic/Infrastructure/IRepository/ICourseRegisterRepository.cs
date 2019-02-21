using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.Constants;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface ICourseRegisterRepository
    {

        Task<CourseRegister> GetInfo(int id, bool isReadOnly = false);

        Task<List<CourseRegisterViewModel>> Search(string keyword, int courseId, int classId, CourseRegisterStatus? status, int page, int pageSize, out int totalRows);
    }
}
