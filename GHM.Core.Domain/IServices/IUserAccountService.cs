using System.Collections.Generic;
using GHM.Core.Domain.ModelMetas;
using GHM.Infrastructure.Models;
using System.Threading.Tasks;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.ViewModels;

namespace GHM.Core.Domain.IServices
{
    public interface IUserAccountService
    {
        Task<ActionResultResponse> InsertUserAccount(string tenantId, UserAccountMeta userAccount);

        Task<ActionResultResponse> UpdateUserAccount(string tenantId, string userId, UserAccountMeta userAccount);

        Task<ActionResultResponse> UpdatePassword(string userId, UpdatePasswordMeta updatePasswordMeta);

        Task<ActionResultResponse> DeleteUserAccount(string userId);

        Task<SearchResult<UserAccountViewModel>> Search(string tenantId, string keyword, bool? isActive, int page, int pageSize);

        Task<SearchResult<ShortUserInfoViewModel>> GetShortUserInfoByListIds(string tenantId, List<string> ids);

        Task<SearchResult<UserSuggestion>> Suggestions(string tenantId, string keyword, int page, int pageSize);
    }
}
