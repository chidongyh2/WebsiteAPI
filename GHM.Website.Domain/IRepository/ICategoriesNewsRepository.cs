using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface ICategoriesNewsRepository
    {
        Task<int> Insert(CategoriesNews categoriesNews);
        Task<int> Delete(string newsId, int categoryId);
        Task<int> DeleteByNewsId(string newsId);
        Task<int> Inserts(List<CategoriesNews> categoriesNews);
        Task<int> Deletes(List<CategoriesNews> categoriesNews);
        Task<bool> CheckExistsByNewsIdAndCategoryId(string newsId, int categoryId);
        Task<List<CategoriesNewsViewModel>> GetListNewsIds(string newsId, bool isReadOnly = false);
    }
}
