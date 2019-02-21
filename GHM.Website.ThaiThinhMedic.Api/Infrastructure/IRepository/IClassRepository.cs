using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface IClassRepository
    {
        Task<ActionResultResponse> Insert(Classes classes);

        Task<ActionResultResponse> Update(Classes classes);

        Task<ActionResultResponse> Delete(int id);

        Task<Classes> GetInfo(int id, bool isReadOnly = false);

        Task<List<ClassViewModel>> Search(string keyword, int courseId, bool? isActive, int page, int pageSize, out int totalRows);
    }
}
