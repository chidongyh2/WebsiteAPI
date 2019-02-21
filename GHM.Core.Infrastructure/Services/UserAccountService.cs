using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Resources;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.ViewModels;

namespace GHM.Core.Infrastructure.Services
{
    public class UserAccountService : IUserAccountService
    {
        private readonly IUserAccountRepository _userAccountRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCoreResource> _resourceService;

        public UserAccountService(IUserAccountRepository userAccountRepository, IResourceService<SharedResource> shareResourceService, IResourceService<GhmCoreResource> resourceService)
        {
            _userAccountRepository = userAccountRepository;
            _sharedResourceService = shareResourceService;
            _resourceService = resourceService;
        }

        public async Task<ActionResultResponse> InsertUserAccount(string tenantId, UserAccountMeta userAccountMeta)
        {
            var userId = Guid.NewGuid().ToString();
            var isUserNameExists = await _userAccountRepository.CheckUserNameExists(userId, userAccountMeta.UserName);
            if (isUserNameExists)
                return new ActionResultResponse(-1, _resourceService.GetString("Username already exists"));

            if (userAccountMeta.Password.Trim() != userAccountMeta.ConfirmPassword.Trim())
                return new ActionResultResponse(-2, _resourceService.GetString("Confirm password doesn't match. Please try again."));

            var passwordSalt = Generate.GenerateRandomBytes(Generate.PasswordSaltLength);
            var passwordHash = Generate.GetInputPasswordHash(userAccountMeta.Password.Trim(), passwordSalt);

            var userAccount = new UserAccount
            {
                UserName = userAccountMeta.UserName.Trim(),
                Email = userAccountMeta.Email?.Trim(),
                IsActive = userAccountMeta.IsActive,
                PhoneNumber = userAccountMeta.PhoneNumber?.Trim(),
                FullName = userAccountMeta.FullName,
                PasswordHash = Convert.ToBase64String(passwordHash),
                PasswordSalt = passwordSalt,
                Avatar = userAccountMeta.Avatar?.Trim(),
                TenantId = tenantId,
                UnsignName = $"{userAccountMeta.UserName.Trim().ToUpper().StripVietnameseChars()} {userAccountMeta.PhoneNumber?.Trim().StripVietnameseChars()} {userAccountMeta.Email?.Trim().ToUpper().StripVietnameseChars()}",
                NormalizedUserName = userAccountMeta.UserName.Trim().StripChars().ToUpper()
            };

            var result = await _userAccountRepository.Insert(userAccount);
            return result <= 0
                ? new ActionResultResponse(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong))
                : new ActionResultResponse(result, _resourceService.GetString("Add new account success"));
        }

        public async Task<ActionResultResponse> UpdateUserAccount(string tenantId, string userId, UserAccountMeta userAccountMeta)
        {
            var userAccountInfo = await _userAccountRepository.GetInfo(userId);
            if (userAccountInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Account doest not exists."));

            var isUserNameExists = await _userAccountRepository.CheckUserNameExists(userId, userAccountMeta.UserName);
            if (isUserNameExists)
                return new ActionResultResponse(-2, _resourceService.GetString("Username already exists"));

            if (userAccountInfo.TenantId != tenantId)
                return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            userAccountInfo.UserName = userAccountMeta.UserName.Trim();
            userAccountInfo.FullName = userAccountMeta.FullName.Trim();
            userAccountInfo.Avatar = userAccountMeta.Avatar?.Trim();
            userAccountInfo.PhoneNumber = userAccountMeta.PhoneNumber?.Trim();
            userAccountInfo.Email = userAccountMeta.Email?.Trim();
            userAccountInfo.IsActive = userAccountMeta.IsActive;
            var result = await _userAccountRepository.UpdateUserAccount(userAccountInfo);
            return result <= 0
                ? new ActionResultResponse(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong))
                : new ActionResultResponse(result, _sharedResourceService.GetString("Update account info success"));
        }

        public async Task<ActionResultResponse> UpdatePassword(string userId, UpdatePasswordMeta updatePasswordMeta)
        {
            var accountInfo = await _userAccountRepository.GetInfo(userId);
            if (accountInfo == null)
                return new ActionResultResponse(-1, _sharedResourceService.GetString("You do not have permission to do this action."));

            var oldPasswordSalt = accountInfo.PasswordSalt;
            var oldPasswordHash = Generate.GetInputPasswordHash(updatePasswordMeta.OldPassword.Trim(), oldPasswordSalt);

            if (Convert.ToBase64String(oldPasswordHash) != accountInfo.PasswordHash)
            {
                return new ActionResultResponse(-2, _resourceService.GetString("Old password does not match."));
            }

            var passwordSalt = Generate.GenerateRandomBytes(Generate.PasswordSaltLength);
            var passwordHash = Generate.GetInputPasswordHash(updatePasswordMeta.NewPassword.Trim(), passwordSalt);

            accountInfo.PasswordSalt = passwordSalt;
            accountInfo.PasswordHash = Convert.ToBase64String(passwordHash);
            var result = await _userAccountRepository.UpdatePassword(userId, accountInfo.PasswordSalt, accountInfo.PasswordHash);
            return new ActionResultResponse(result, result > 0
                ? _resourceService.GetString("Change password successful.")
                : _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));
        }

        public async Task<ActionResultResponse> DeleteUserAccount(string userId)
        {
            UserAccount userAccountInfo = await _userAccountRepository.GetInfo(userId);
            if (userAccountInfo == null)
            {
                return new ActionResultResponse(-1, _resourceService.GetString("UserAccount does not exists"));
            }

            int result = await _userAccountRepository.DeleteAccount(userAccountInfo);
            return new ActionResultResponse(result, result > 0
                ? _resourceService.GetString("Delete account successful.")
                : _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));
        }

        public async Task<SearchResult<UserAccountViewModel>> Search(string tenantId, string keyword, bool? isActive, int page, int pageSize)
        {
            var items = await _userAccountRepository.Search(tenantId, keyword, isActive, page, pageSize,
                out var totalRows);

            return new SearchResult<UserAccountViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<SearchResult<ShortUserInfoViewModel>> GetShortUserInfoByListIds(string tenantId, List<string> ids)
        {
            var items = await _userAccountRepository.GetShortUserInfoByListIds(tenantId, ids);
            return new SearchResult<ShortUserInfoViewModel>(items);
        }

        public async Task<SearchResult<UserSuggestion>> Suggestions(string tenantId, string keyword, int page, int pageSize)
        {
            var items = await _userAccountRepository.Suggestions(tenantId, keyword, page, pageSize, out int totalRows);
            return new SearchResult<UserSuggestion>
            {
                Items = items,
                TotalRows = totalRows
            };
        }
    }
}
