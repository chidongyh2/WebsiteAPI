using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IServices
{
    public interface ICategoryInvolveService
    {
        Task<SearchResult<CategoryInvolveNewViewModel>> SearchNews(string tenantId, string languageId, int categoryId, int page, int pageSize);

        Task<ActionResultResponse> Insert(CategoryInvolveMeta categoryInvolveMeta);

        Task<ActionResultResponse> Update(CategoryInvolveMeta categoryInvolveMeta);

        Task<ActionResultResponse> Delete(int categoryId, int categoryInvolveId);

        Task<SearchResult<CategoryInvolveCategoryViewModel>> GetListCategoryInvolveId(string tenantId, string languageId, int categoryId, int page, int pageSize);
    }
}
