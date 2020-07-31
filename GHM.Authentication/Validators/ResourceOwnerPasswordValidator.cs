using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Authentication.IRepository;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using IdentityModel;
using IdentityServer4.Models;
using IdentityServer4.Validation;

namespace GHM.Authentication.Validators
{
    public class ResourceOwnerPasswordValidator : IResourceOwnerPasswordValidator
    {
        private readonly IUserAccountRepository _userAccountRepository;

        public ResourceOwnerPasswordValidator(IUserAccountRepository userAccountRepository)
        {
            _userAccountRepository = userAccountRepository;
        }

        public Task ValidateAsync(ResourceOwnerPasswordValidationContext context)
        {
            var userInfo = Task.Run(() => _userAccountRepository.GetInfoByUserName(context.UserName, true)).Result;
            if (userInfo == null)
            {
                context.Result = new GrantValidationResult(TokenRequestErrors.InvalidGrant, "account_does_not_exists");
                return Task.CompletedTask;
            }

            int totalFailCount;
            if (userInfo.LockoutEnabled && userInfo.LockoutEnd.HasValue)
            {
                if (DateTime.Compare(userInfo.LockoutEnd.Value.DateTime, DateTime.Now) < 0)
                {
                    // Reset access fail count.
                    _userAccountRepository.ResetLockout(userInfo.UserName);

                    // Validate password.
                    var validateResult = ValidatePassword(userInfo, context.UserName, context.Password, out totalFailCount);
                    if (!validateResult)
                    {
                        context.Result = new GrantValidationResult(TokenRequestErrors.InvalidGrant, "invalid_username_or_password",
                            new Dictionary<string, object>
                        {
                            {"failCount", totalFailCount }
                        });
                        return Task.CompletedTask;
                    }
                }
                else
                {
                    context.Result = new GrantValidationResult(TokenRequestErrors.InvalidGrant, "account_has_been_locked",
                        new Dictionary<string, object>
                    {
                        {"lockEnd", userInfo.LockoutEnd.Value }
                    });
                }
                return Task.CompletedTask;
            }
            //var isValidPassword = ValidatePassword(userInfo, context.UserName, context.Password, out totalFailCount);
            //if (!isValidPassword)
            //{
            //    context.Result = new GrantValidationResult(TokenRequestErrors.InvalidGrant, "invalid_username_or_password", new Dictionary<string, object>
            //    {
            //        {"failCount", totalFailCount }
            //    });
            //    return Task.CompletedTask;
            //}

            context.Result = new GrantValidationResult(userInfo.Id, OidcConstants.AuthenticationMethods.Password);
            return Task.CompletedTask;
        }

        private bool ValidatePassword(UserAccount userAccount, string userName, string password, out int totalFailCount)
        {
            var passwordHash = Convert.ToBase64String(Generate.GetInputPasswordHash(password.Trim(), userAccount.PasswordSalt));
            if (!passwordHash.Equals(userAccount.PasswordHash))
            {
                // Increase fail count.
                var failCount = userAccount.AccessFailedCount;
                failCount += 1;
                _userAccountRepository.UpdateAccessFailCount(userAccount.UserName, failCount, userAccount.LockoutEnabled);
                totalFailCount = failCount;
                return false;
            }
            if (userAccount.AccessFailedCount > 0)
            {
                _userAccountRepository.UpdateAccessFailCount(userAccount.UserName, 0, userAccount.LockoutEnabled);
            }
            totalFailCount = 0;
            return true;
        }
    }
}
