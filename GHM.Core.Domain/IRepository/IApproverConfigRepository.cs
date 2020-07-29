using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Constants;

namespace GHM.Core.Domain.IRepository
{
    public interface IApproverConfigRepository
    {
        Task<List<ApproverConfigSearchViewModel>> Search(string tenantId, string keyword,  ApproverConfigType? type, int page, int pageSize,
            out int totalRows);

        Task<int> Insert(ApproverConfig questionapproverconfig);

        Task<int> Update(ApproverConfig questionapproverconfig);

        Task<int> ForceDelete(string userId, ApproverConfigType type);

        Task<ApproverConfig> GetInfo(string userId, ApproverConfigType type);

        Task<bool> CheckExistsUserId(string tenantId, string userId, ApproverConfigType type);

    }
}
