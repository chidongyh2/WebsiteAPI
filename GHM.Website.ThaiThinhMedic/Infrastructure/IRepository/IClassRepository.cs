using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface IClassRepository
    {
        Task<Classes> GetInfo(int id, bool isReadOnly = false);

        Task<List<ClassViewModel>> Search(string keyword, int courseId, bool? isActive, int page, int pageSize, out int totalRows);
    }
}
