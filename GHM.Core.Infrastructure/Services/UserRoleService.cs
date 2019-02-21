using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.Resources;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;

namespace GHM.Core.Infrastructure.Services
{
    public class UserRoleService : IUserRoleService
    {
        private readonly IUserRoleRepository _userRoleRepository;
        private readonly IUserAccountRepository _userAccountRepository;
        private readonly IRoleRepository _roleRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCoreResource> _resourceService;

        public UserRoleService(IUserRoleRepository userRoleRepository, IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmCoreResource> resourceService, IUserAccountRepository userAccountRepository, IRoleRepository roleRepository)
        {
            _userRoleRepository = userRoleRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _userAccountRepository = userAccountRepository;
            _roleRepository = roleRepository;
        }

        public async Task<ActionResultResponse> Insert(string userId, string roleId)
        {
            var isExists = await _userRoleRepository.CheckExists(userId, roleId);
            if (isExists)
                return new ActionResultResponse(-1, _resourceService.GetString("Role already assigned for this user."));

            // Check user exists by id.
            var isUserExists = await _userAccountRepository.CheckExistsByUserId(userId);
            if (!isUserExists)
                return new ActionResultResponse(-2, _resourceService.GetString("User does not exists."));

            var roleInfo = await _roleRepository.FindByIdAsync(roleId, new CancellationToken());
            if (roleInfo == null)
                return new ActionResultResponse(-3, _resourceService.GetString("Role does not exists."));

            var result = await _userRoleRepository.Insert(userId, roleId);
            return new ActionResultResponse(result, result <= 0 ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Assign role successful."));
        }

        public async Task<ActionResultResponse> SaveUsers(string tenantId, string roleId, ICollection<string> userIds)
        {
            // Check role exists by tenantId.
            var isRoleExistsInTenant = await _roleRepository.CheckRoleExistsByTenant(tenantId, roleId);
            if (!isRoleExistsInTenant)
                return new ActionResultResponse(-1, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            // Delete all user by roleId.
            var result = await _userRoleRepository.DeleteByRoleId(roleId);

            // Add users to user roles.
            if (result == -1 || result > 0)
            {
                var resultAdd = await _userRoleRepository.AddUsers(roleId, userIds);
                return new ActionResultResponse(resultAdd, resultAdd <= 0
                    ? _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong)
                    : _resourceService.GetString("Update user role successful.")
                );
            }

            return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string userId, string roleId)
        {
            // Check role exists in this tenant.
            var isRoleExistsInTenant = await _roleRepository.CheckRoleExistsByTenant(tenantId, roleId);
            if (!isRoleExistsInTenant)
                return new ActionResultResponse(-1, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var result = await _userRoleRepository.Delete(userId, roleId);
            return new ActionResultResponse(result, result <= 0 ? _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong)
                : _resourceService.GetString("Remove user role successful."));
        }

        public async Task<bool> CheckPermission(string userId, int pageId, int[] permissions)
        {
            foreach (var permission in permissions)
            {
                var isHasPermission = await _userRoleRepository.CheckPermission(userId, pageId, permission);
                if (isHasPermission)
                    return true;
            }
            return false;
        }

        public async Task<bool> CheckPermission(string userId, List<PagePermission> pagePermissions)
        {
            return await _userRoleRepository.CheckPermission(userId, pagePermissions);
        }

        public async Task<List<UserRoleSearchViewModel>> GetsByUserId(string userId)
        {
            return await _userRoleRepository.GetsByUserId(userId);
        }

        public async Task<List<UserRoleSearchViewModel>> GetsByRoleId(string roleId)
        {
            return await _userRoleRepository.GetsByRoleId(roleId);
        }

        public async Task<ActionResultResponse> DeleteByUserId(string userId)
        {
            var result = await _userRoleRepository.DeleteByUserId(userId);
            return new ActionResultResponse(result, result <= 0 ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Delete user role by user successful."));
        }

        public async Task<ActionResultResponse> DeleteByRoleId(string roleId)
        {
            var result = await _userRoleRepository.DeleteByRoleId(roleId);
            return new ActionResultResponse(result, result <= 0 ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Delete user role by role successful."));
        }
    }
}
