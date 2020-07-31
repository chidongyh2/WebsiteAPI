using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Authentication.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using Microsoft.AspNetCore.Identity;

namespace GHM.Authentication.IRepository
{
    public interface IUserAccountRepository : IUserPasswordStore<UserAccount>
    {
        Task<int> Insert(UserAccount userAccount);

        Task<BriefUser> GetCurrentUser(string id);

        Task<List<UserSuggestion>> Suggestions(string tenantId, string keyword, int page, int pageSize, out int totalRows);

        Task<UserAccount> GetInfo(string id, bool isReadOnly = false);

        Task<UserAccount> GetInfoByUserName(string userName, bool isReadOnly = false);

        Task<bool> CheckUserNameExists(string id, string userName);

        Task<bool> CheckEmailExists(string id, string email);

        Task<bool> CheckExistsByUserId(string userId);

        int UpdateAccessFailCount(string userName, int failCount, bool lockoutOnFailure = false);

        int ResetLockout(string userName);

        Task<int> UpdateUserAccount(UserAccount userAccount);

        Task<int> UpdatePassword(string userId, byte[] passwordSalt, string passwordHash);

        Task<int> DeleteAccount(UserAccount userAccount);

        Task<List<UserAccountViewModel>> Search(string tenantId, string keyword, bool? isActive, int page, int pageSize, out int totalRows);

        Task<List<ShortUserInfoViewModel>> GetShortUserInfoByListIds(string tenantId, List<string> ids);

        Task<UserAccount> GetInfo(string tenantId, string id, bool isReadOnly = false);
    }
}
