using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.IRepository
{
    public interface ICategoryTranslationRepository
    {
        Task<int> Insert(CategoryTranslation categoryTranslation);

        Task<int> Inserts(List<CategoryTranslation> categoryTranslations);

        Task<int> Update(CategoryTranslation categoryTranslation);

        Task<int> DeleteByCategoryId(int categoryId);

        Task<CategoryTranslation> GetInfo(int categoryId, string languageId);

        Task<int> ForceDeleteByCategoryId(int categoryId);

        Task<bool> CheckExists(string teantnId, string languageId, int categoryId, string name);

        Task<bool> CheckSeoLinkExists(string tenantId, string languageId, int categoryId, string seolink);

        Task<List<CategoryTranslation>> GetByCategoryId(int categoryId);

        Task<CategoryTranslation> GetActiveInfo(string tenantId, string languageId, int categoryId);

        Task<CategoryTranslation> GetActiveBySeoLink(string tenantId, string languageId, string seoLink);
    }
}
