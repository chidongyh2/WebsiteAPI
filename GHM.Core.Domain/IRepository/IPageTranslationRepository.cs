using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Models;

namespace GHM.Core.Domain.IRepository
{
    public interface IPageTranslationRepository
    {
        Task<int> Insert(PageTranslation pageTranslation);
        Task<int> Update(PageTranslation pageTranslation);
        Task<int> DeleteByPagesId(int pageId);
        Task<PageTranslation> GetInfo(int pageId, string languageId, bool isReadOnly = false);
        Task<List<PageTranslation>> GetByPageId(int pageId);
        Task<List<PageTranslationSearchViewModel>> SearchByPageId(int pageId);
        Task<bool> CheckExists(int pageId, string languageId, string name);
    }
}
