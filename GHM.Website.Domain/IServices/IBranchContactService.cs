using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;
using Microsoft.AspNetCore.Mvc.Razor;

namespace GHM.Website.Domain.IServices
{
    public interface IBranchContactService
    {
        Task<SearchResult<BranchContactSearchViewModel>> Search(string tenantId, string languageId, string keyword, int page, int pageSize);

        Task<SearchResult<BranchContactSearchForClientViewModel>> SearchForClient(string tenantId, string languageId);

        Task<ActionResultResponse> Insert(string tenantId, BranchContactMeta branchContactMeta);

        Task<ActionResultResponse> Update(string tenantId, string id, BranchContactMeta branchContactMeta);

        Task<ActionResultResponse> Delete(string tenantId, string id);

        Task<ActionResultResponse<BranchContactViewModel>> GetDetail(string id, string languageId);

    }
}
