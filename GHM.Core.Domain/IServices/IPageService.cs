using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;

namespace GHM.Core.Domain.IServices
{
    public interface IPageService
    {
        Task<ActionResultResponse> Insert(PageMeta pageMeta);

        Task<ActionResultResponse> Update(PageMeta pageMeta);

        Task<ActionResultResponse> Delete(int id);

        Task<ActionResultResponse<PageDetailViewModel>> Detail(int id);

        Task<SearchResult<PageSearchViewModel>> Search(string languageId, string keyword, bool? isActive);

        Task<List<PageSearchActivatedViewModel>> SearchActivatedPages(string languageId, string tenantId, string keyword);

        Task<List<TreeData>> GetFullPagesTree(string languageId);
    }
}
