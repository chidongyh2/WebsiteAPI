using GHM.Core.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.ModelMetas;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;

namespace GHM.Core.Domain.IServices
{
    public interface IApproverConfigService
    {
        Task<SearchResult<ApproverConfigSearchViewModel>> SearchAsync(string tenantId, string keyword, ApproverConfigType? type, int page, int pageSize);

        Task<List<ApproverConfigSearchViewModel>> Search(string tenantId, string keyword, ApproverConfigType? type, int page, int pageSize);

        Task<ActionResultResponse> Insert(string tenantId, string userId, ApproverConfigType type);

        Task<ActionResultResponse> Delete(string tenantId, string userId, ApproverConfigType type);

        Task<bool> CheckExistsUserId(string tenantId, string userId, ApproverConfigType type);

        List<Suggestion<int>> GetTypes();
    }
}
