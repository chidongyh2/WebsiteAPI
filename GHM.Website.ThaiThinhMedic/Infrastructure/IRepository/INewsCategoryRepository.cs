using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface INewsCategoryRepository
    {
        Task<List<int>> GetListCategoryIdsByNewsId(int newsId);
    }
}
