using System;
using System.Security.Claims;
using System.Threading.Tasks;
using GHM.Authentication.IRepository;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using IdentityServer4.Extensions;
using IdentityServer4.Models;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace GHM.Authentication.Repository
{
    public class ProfileRepository : IProfileService
    {
        private readonly IUserAccountRepository _userAccountRepository;
        private readonly IUserClaimsPrincipalFactory<UserAccount> _claimsFactory;

        public ProfileRepository(IUserAccountRepository userAccountRepository, IUserClaimsPrincipalFactory<UserAccount> claimsFactory)
        {
            _userAccountRepository = userAccountRepository;
            _claimsFactory = claimsFactory;
        }

        public async Task GetProfileDataAsync(ProfileDataRequestContext context)
        {
            var sub = context.Subject.GetSubjectId();
            var userInfo = await _userAccountRepository.GetInfo(sub, true);
            var principal = await _claimsFactory.CreateAsync(userInfo);
            var userInfoString = JsonConvert.SerializeObject(new BriefUser
            {
                Id = userInfo.Id,
                FullName = userInfo.FullName,
                TenantId = userInfo.TenantId,
                Avatar = userInfo.Avatar,
                Email = userInfo.Email,
                PhoneNumber = userInfo.PhoneNumber,
                UserName = userInfo.UserName
            });
            var userInfoEncrypted = EncryptionHelper.Encrypt(userInfoString, userInfo.Id);
            context.IssuedClaims.AddRange(principal.Claims);
            context.IssuedClaims.Add(new Claim("ui", userInfoEncrypted));                
        }

        public async Task IsActiveAsync(IsActiveContext context)
        {
            var sub = context.Subject.GetSubjectId();
            var userInfo = await _userAccountRepository.GetInfo(sub, true);
            context.IsActive = userInfo != null;
        }
    }
}
