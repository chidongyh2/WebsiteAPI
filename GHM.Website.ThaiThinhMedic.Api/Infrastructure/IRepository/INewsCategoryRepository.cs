using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface INewsCategoryRepository
    {
        Task<long> Insert(NewsCategory newsCategory);

        Task<long> Inserts(List<NewsCategory> newsCategories);

        Task<long> Delete(int newsId, int categoryId);

        //Task<ActionResultResponse> Update(List<NewsCategory> newsCategories);

        Task<long> UpdateCategoryInfo(int id, string name, string seoLink, bool isActive);

        Task<long> DeleteByNewsId(int newsId);

        Task<long> DeleteByCategoryId(int categoryId);

        Task<List<int>> GetListCategoryIdsByNewsId(int newsId);
    }
}
