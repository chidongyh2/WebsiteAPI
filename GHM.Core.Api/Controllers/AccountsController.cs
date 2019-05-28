using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace GHM.Core.Api.Controllers
{
    [Authorize]
    [Route("api/v1/[controller]")]
    [Produces("application/json")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class AccountsController : GhmControllerBase
    {
        private readonly IUserAccountRepository _userAccountRepository;
        private readonly IMemoryCache _cache;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IUserAccountService _userAccountService;
        //private readonly SignInManager<UserAccount> _signInManager;
        //private readonly IEmailSender _emailSender;

        public AccountsController(IUserAccountRepository userAccountRepository, IMemoryCache cache,
            IResourceService<SharedResource> sharedResourceService, IUserAccountService userAccountService)
        {
            _userAccountRepository = userAccountRepository;
            _cache = cache;
            _sharedResourceService = sharedResourceService;
            _userAccountService = userAccountService;
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.ConfigAccount, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, bool? isActive, int page = 1, int pageSize = 10)
        {
            var items = await _userAccountRepository.Search(CurrentUser.TenantId, keyword, isActive, page, pageSize, out var totalRows);
            return Ok(new SearchResult<UserAccountViewModel>
            {
                Items = items,
                TotalRows = totalRows
            });
        }

        //[Route("register"), AcceptVerbs("POST"), ValidateModel]
        //public async Task<IActionResult> Register([FromBody]RegisterViewModel model)
        //{
        //    //var passwordSalt = Generate.GenerateRandomBytes(Generate.PasswordSaltLength);
        //    //var passwordHash = Generate.GetInputPasswordHash(model.Password, passwordSalt);
        //    //var userAccount = new UserAccount
        //    //{
        //    //    UserName = model.UserName.Trim(),
        //    //    Email = model.Email,
        //    //    IsActive = model.IsActive,
        //    //    PhoneNumber = model.PhoneNumber,
        //    //    FullName = model.FullName,
        //    //    PasswordHash = Convert.ToBase64String(passwordHash),
        //    //    PasswordSalt = passwordSalt,
        //    //    TenantId = CurrentUser.TenantId,
        //    //    UnsignName = $"{model.UserName.Trim().ToUpper().StripVietnameseChars()} {model.PhoneNumber.Trim().StripVietnameseChars()} {model.Email?.Trim().ToUpper().StripVietnameseChars()}"
        //    //};
        //    //var result = await _userAccountRepository.CreateAsync(userAccount, new CancellationToken());
        //    var result = await _userAccountService.InsertUserAccount(CurrentUser.TenantId, model);
        //    if (result.Code <= 0)
        //        return BadRequest(result);

        //    return Ok(result);
        //}

        [AllowAnonymous]
        [Route("confirm-email"), AcceptVerbs("GET")]
        public async Task<IActionResult> ConfirmEmail(string userId, string code)
        {
            if (userId == null || code == null)
            {
                //return RedirectToAction(nameof(HomeController.Index), "Home");
                return BadRequest(new ActionResultResponse(-1, "Email không được để trống."));
            }
            var user = await _userAccountRepository.FindByIdAsync(userId, new CancellationToken());
            if (user == null)
            {
                throw new ApplicationException($"Unable to load user with ID '{userId}'.");
            }

            return Ok();
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ConfigAccount, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> AddUserAccount([FromBody]UserAccountMeta userAccount)
        {
            var result = await _userAccountService.InsertUserAccount(CurrentUser.TenantId, userAccount);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.ConfigAccount, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateUserAccount(string id, [FromBody]UserAccountMeta userAccount)
        {
            var result = await _userAccountService.UpdateUserAccount(CurrentUser.TenantId, id, userAccount);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("change-password"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> UpdatePassword([FromBody]UpdatePasswordMeta updatePasswordMeta)
        {
            var result = await _userAccountService.UpdatePassword(CurrentUser.Id, updatePasswordMeta);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.ConfigAccount, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteAccount(string id)
        {
            var result = await _userAccountService.DeleteUserAccount(id);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("suggestions"), AcceptVerbs("GET")]
        [AllowPermission(PageId.ConfigAccount, Permission.View, Permission.Insert, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Suggestions(string keyword, int page = 1, int pageSize = 20)
        {
            var result = await _userAccountService.Suggestions(CurrentUser.TenantId, keyword, page, pageSize);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("infos"), AcceptVerbs("POST")]
        [AllowPermission(PageId.ConfigAccount, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetsUserInfos([FromBody]List<string> userIds)
        {
            var result = await _userAccountService.GetShortUserInfoByListIds(CurrentUser.TenantId, userIds);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }



        //[AllowAnonymous]
        //[Route("reset-password"), AcceptVerbs("POST")]
        //public async Task<IActionResult> ResetPassword(ResetPasswordViewModel model)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        //return View(model);
        //        return BadRequest(new ActionResultResponse(-1, "Something went wrong", "", model));
        //    }
        //    var user = await _userAccountRepository.FindByEmailAsync(model.Email);
        //    if (user == null)
        //    {
        //        // Don't reveal that the user does not exist
        //        //return RedirectToAction(nameof(ResetPasswordConfirmation));
        //        return BadRequest(new ActionResultResponse(-2, "Thông tin tài khoản không hợp lệ."));
        //    }
        //    var result = await _userAccountRepository.ResetPasswordAsync(user, model.Code, model.Password);
        //    if (result.Succeeded)
        //    {
        //        //return RedirectToAction(nameof(ResetPasswordConfirmation));
        //        return Ok(new ActionResultResponse(1, "Reset password success."));
        //    }
        //    AddErrors(result);
        //    return BadRequest(new ActionResultResponse(-3, "Something went wrong. Please contact with administrator."));
        //}
    }
}