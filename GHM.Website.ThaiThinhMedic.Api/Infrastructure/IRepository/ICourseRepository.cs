using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ModelMetas;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface ICourseRepository
    {
        Task<ActionResultResponse<int>> Insert(Course course);

        Task<ActionResultResponse> Update(CourseMeta courseMeta);

        Task<ActionResultResponse> Delete(string id);

        Task<bool> CheckExists(string id, string name);

        Task<Course> GetInfo(string id, bool isReadOnly = false);

        Task<List<CourseViewModel>> Search(string keyword, bool? isActive, int page, int pageSize, out int totalRows);
    }
}
