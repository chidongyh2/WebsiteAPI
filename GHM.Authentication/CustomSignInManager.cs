using System;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace GHM.Authentication
{
    public class CustomSignInManager<TUser> : SignInManager<TUser> where TUser : class
    {
        private readonly UserManager<TUser> _userManager;
        private readonly IUserAccountRepository _userAccountRepository;
        private readonly IHttpContextAccessor _contextAccessor;
        public CustomSignInManager(UserManager<TUser> userManager, IHttpContextAccessor contextAccessor, IUserClaimsPrincipalFactory<TUser> claimsFactory, IOptions<IdentityOptions> optionsAccessor, ILogger<SignInManager<TUser>> logger, IAuthenticationSchemeProvider schemes, IUserAccountRepository userAccountRepository)
            : base(userManager, contextAccessor, claimsFactory, optionsAccessor, logger, schemes)
        {
            if (userManager == null)
                throw new ArgumentNullException(nameof(userManager));

            //if (dbContext == null)
            //    throw new ArgumentNullException(nameof(dbContext));

            if (contextAccessor == null)
                throw new ArgumentNullException(nameof(contextAccessor));

            _userManager = userManager;
            _contextAccessor = contextAccessor;
            _userAccountRepository = userAccountRepository;
        }

        public override async Task<SignInResult> CheckPasswordSignInAsync(TUser user, string password,
            bool lockoutOnFailure)
        {
            var appUser = user as UserAccount;
            if (appUser == null)
                return SignInResult.NotAllowed;

            if (appUser.LockoutEnd.HasValue)
                return SignInResult.LockedOut;

            var passwordHash = Convert.ToBase64String(Generate.GetInputPasswordHash(password, appUser.PasswordSalt));
            if (!passwordHash.Equals(appUser.PasswordHash))
            {
                // Increase fail count.
                var failCount = appUser.AccessFailedCount;
                failCount += 1;
                _userAccountRepository.UpdateAccessFailCount(appUser.UserName, failCount, lockoutOnFailure);
                return SignInResult.Failed;
            }
            if (appUser.AccessFailedCount > 0)
            {
                //await _userManager.AccessFailedAsync(user);
                _userAccountRepository.UpdateAccessFailCount(appUser.UserName, 0, lockoutOnFailure);
            }
            return SignInResult.Success;
        }
    }
}
