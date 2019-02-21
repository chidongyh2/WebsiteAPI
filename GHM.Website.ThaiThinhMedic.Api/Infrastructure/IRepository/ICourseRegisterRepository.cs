using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface ICourseRegisterRepository
    {
        Task<ActionResultResponse> Insert(CourseRegister courseRegister);

        Task<ActionResultResponse> Update(CourseRegister courseRegister);

        Task<ActionResultResponse> Delete(int id);

        Task<bool> CheckExists(int courseId, int classId, string phoneNumber);

        Task<CourseRegister> GetInfo(int id, bool isReadOnly = false);

        Task<List<CourseRegisterViewModel>> Search(string keyword, int courseId, int classId, CourseRegisterStatus? status, int page, int pageSize, out int totalRows);
    }
}
