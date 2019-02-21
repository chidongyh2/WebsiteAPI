using System.Threading.Tasks;
using GHM.Core.Domain.Models;
using GHM.Infrastructure.Models;

namespace GHM.Core.Domain.IServices
{
    public interface IPageTranslationService
    {
        Task<ActionResultResponse> Save(PageTranslation pageTranslation);
        Task<ActionResultResponse> Delete(int pageId);        
    }
}
