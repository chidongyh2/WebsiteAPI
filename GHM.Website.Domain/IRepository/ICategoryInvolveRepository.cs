using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface ICategoryInvolveRepository
    {
        Task<List<CategoryInvolveNewViewModel>> SearchNews(string tenantId, string languageId, int categoryId, int page, int pageSize, out int totalRows);

        Task<int> Insert(CategoryInvolve categoryInvolve);

        Task<int> Update(CategoryInvolve categoryInvolve);

        Task<int> Delete(int categoryId, int categoryInvolveId);

        Task<int> DeleteByCategoryInvolveId(int categoryId, int categoryInvolveId);

        Task<int> Inserts(List<CategoryInvolve> categoryInvolves);

        Task<int> Deletes(List<CategoryInvolve> categoryInvolves);

        Task<bool> CheckExists(int categoryId, int categoryInvolveId);

        Task<CategoryInvolve> GetInfo(int categoryId, int categoryInvolveId, bool isReadOnly = false);

        Task<List<CategoryInvolveCategoryViewModel>> GetListCategoryInvolveId(string tenantId, string languageId, int categoryId, int page, int pageSize, out int totalRows);



    }
}
