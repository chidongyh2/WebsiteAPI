using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface ICategoryRepository
    {        
        Task<List<Category>> Search(string keyword, bool? isActive, int page, int pageSize, out long totalRows);

        Task<List<Category>> GetAll();

        Task<List<Category>> GetAllActive();

        Task<ActionResultResponse> UpdateActiveStatus(int id, bool isActive);

        Task<int> GetChildCount(int id);

        Task UpdateChildIdPath(int parentId);
    }
}
