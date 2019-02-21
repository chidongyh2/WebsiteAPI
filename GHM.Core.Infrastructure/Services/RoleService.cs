using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GHM.Core.Domain.Constants;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.Resources;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using Microsoft.Extensions.Configuration;

namespace GHM.Core.Infrastructure.Services
{
    public class RoleService : IRoleService
    {
        private readonly IRoleRepository _roleRepository;
        private readonly IRolePageRepository _rolePageRepository;
        private readonly IUserRoleRepository _userRoleRepository;
        private readonly IPageRepository _pageRepository;
        private readonly IUserAccountRepository _userAccountRepository;

        private readonly IConfiguration _configuration;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCoreResource> _resourceService;

        public RoleService(IRoleRepository roleRepository, IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmCoreResource> resourceService, IRolePageRepository rolePageRepository, IUserRoleRepository userRoleRepository,
            IConfiguration configuration, IPageRepository pageRepository, IUserAccountRepository userAccountRepository)
        {
            _roleRepository = roleRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _rolePageRepository = rolePageRepository;
            _userRoleRepository = userRoleRepository;
            _configuration = configuration;
            _pageRepository = pageRepository;
            _userAccountRepository = userAccountRepository;
        }

        public async Task<ActionResultResponse> Insert(string tenantId, RoleMeta roleMeta)
        {
            if (roleMeta.RolePagePermissions == null || !roleMeta.RolePagePermissions.Any())
                return new ActionResultResponse(-1, _resourceService.GetString("Please select at least 1 page and permission."));

            var roleId = Guid.NewGuid().ToString();
            // Check RoleName exists.
            var isNameExists = await _roleRepository.CheckExists(tenantId, roleId, roleMeta.Name);
            if (isNameExists)
                return new ActionResultResponse(-2, _resourceService.GetString("Role name already exists. Please try again."));

            var role = new Role
            {
                Id = roleId,
                Name = roleMeta.Name.Trim(),
                NormalizedName = roleMeta.Name.Trim().StripVietnameseChars().ToUpper(),
                Description = roleMeta.Description?.Trim(),
                TenantId = tenantId,
                Type = RoleType.Custom,
                ConcurrencyStamp = roleId
            };
            var result = await _roleRepository.CreateAsync(role, new CancellationToken());
            if (result.Errors.Any())
            {
                return new ActionResultResponse(-3, string.Join(",", result.Errors.Select(x => x.Description).ToArray()));
            }

            // Add new user role.
            if (roleMeta.UserIds != null && roleMeta.UserIds.Any())
            {
                await AddNewUserRole(tenantId, roleId, roleMeta.UserIds);
            }

            // Add new role pages.
            var resultInsertResultPage = await AddNewRolePage(roleId, roleMeta.RolePagePermissions);
            if (resultInsertResultPage > 0)
                return new ActionResultResponse(resultInsertResultPage, _resourceService.GetString("Add new role successful."));

            await RollbackInsert();
            return new ActionResultResponse(-4, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            async Task RollbackInsert()
            {
                await _roleRepository.ForceDelete(roleId);
                await _rolePageRepository.ForceDeleteByRoleId(roleId);
            }
        }

        public async Task<ActionResultResponse> Update(string tenantId, string id, RoleMeta roleMeta)
        {
            if (roleMeta.RolePagePermissions == null || !roleMeta.RolePagePermissions.Any())
                return new ActionResultResponse(-1, _resourceService.GetString("Please select at least 1 page and permission."));

            // Check RoleName exists.
            var isNameExists = await _roleRepository.CheckExists(tenantId, id, roleMeta.Name);
            if (isNameExists)
                return new ActionResultResponse(-2, _resourceService.GetString("Role name already exists. Please try again."));

            var roleInfo = await _roleRepository.FindByIdAsync(id, new CancellationToken());
            if (roleInfo == null)
                return new ActionResultResponse(-3, _resourceService.GetString("Role does not exists. Please try again."));

            if (roleInfo.TenantId != tenantId)
                return new ActionResultResponse(-4, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (roleMeta.ConcurrencyStamp != roleInfo.ConcurrencyStamp)
                return new ActionResultResponse(-5, _resourceService.GetString("Role has been updated by another staff. You can not update this role."));

            if (roleInfo.Type == RoleType.BuiltIn)
                return new ActionResultResponse(-6, _resourceService.GetString("You can not modifi built-In role."));

            roleInfo.Name = roleMeta.Name.Trim();
            roleInfo.Description = roleMeta.Description?.Trim();
            roleInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            roleInfo.NormalizedName = roleInfo.Name.StripVietnameseChars().ToUpper();
            var result = await _roleRepository.UpdateAsync(roleInfo, new CancellationToken());

            // Save role pages.
            await UpdateRolePages(roleInfo.Id, roleMeta.RolePagePermissions);

            // Save user roles.
            await SaveUsers();

            return new ActionResultResponse(result.Succeeded ? 1 : 0, result.Succeeded
                ? _resourceService.GetString("Update role successful.")
                : _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            async Task SaveUsers()
            {
                // Delete all user role.
                await _userRoleRepository.DeleteByRoleId(roleInfo.Id);

                // Add new user role.
                await AddNewUserRole(tenantId, roleInfo.Id, roleMeta.UserIds);
            }
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string id)
        {
            var roleInfo = await _roleRepository.FindByIdAsync(id, new CancellationToken());
            if (roleInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Role does not exists. Please try again."));

            if (roleInfo.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString("You do not have permission to do this action."));

            if (roleInfo.Type == RoleType.BuiltIn)
                return new ActionResultResponse(-3, _resourceService.GetString("You can not delete built-In role."));

            var result = await _roleRepository.DeleteAsync(roleInfo, new CancellationToken());
            if (result.Succeeded)
            {
                // TODO: Check this later.
                // Delete user role and role page by NServiceBus Event.
                //await _messageSession.Publish(new RoleDeleted(roleInfo.Id))
                //    .ConfigureAwait(false);

                await _rolePageRepository.DeleteByRoleId(roleInfo.Id);
                await _userRoleRepository.DeleteByRoleId(roleInfo.Id);
            }

            return new ActionResultResponse(result.Succeeded ? 1 : 0,
                result.Succeeded ? _resourceService.GetString("Delete role successful.")
                    : _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));
        }

        public async Task<ActionResultResponse<RoleDetailViewModel>> Detail(string tenantId, string languageId, string id)
        {
            var roleInfo = await _roleRepository.FindByIdAsync(id, new CancellationToken());
            if (roleInfo == null)
                return new ActionResultResponse<RoleDetailViewModel>
                {
                    Code = -1,
                    Message = _resourceService.GetString("Role does not exists.")
                };

            if (roleInfo.TenantId != tenantId)
                return new ActionResultResponse<RoleDetailViewModel>
                {
                    Code = -403,
                    Message = _resourceService.GetString("You do not have permission to view this role.")
                };

            var roleDetail = new RoleDetailViewModel
            {
                Id = roleInfo.Id,
                Name = roleInfo.Name,
                Description = roleInfo.Description,
                ConcurrencyStamp = roleInfo.ConcurrencyStamp,
                RolesPagesViewModels = await _rolePageRepository.GetsByRoleId(languageId, id),
                Users = await _userRoleRepository.GetUserByRoleId(id)
            };

            return new ActionResultResponse<RoleDetailViewModel>
            {
                Data = roleDetail
            };
        }

        public async Task<SearchResult<RoleSearchViewModel>> Search(string tenantId, string keyword, int page, int pageSize)
        {
            var items = await _roleRepository.SearchByTenant(keyword, tenantId, page, pageSize, out var totalRows);
            return new SearchResult<RoleSearchViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse> AddNewRolePage(string tenantId, string roleId, List<RolePagePermissionMeta> rolePagePermissionMeta)
        {
            var roleInfo = await _roleRepository.FindByIdAsync(roleId, new CancellationToken());
            if (roleInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Role does not exists."));

            if (roleInfo.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString("You do not have permission to do this action."));

            var rolePages = new List<RolesPages>();
            foreach (var rolePage in rolePagePermissionMeta)
            {
                var rolePageInfo = await _rolePageRepository.GetInfo(roleId, rolePage.PageId);
                if (rolePageInfo == null)
                {
                    rolePages.Add(new RolesPages
                    {
                        PageId = rolePage.PageId,
                        RoleId = roleId,
                        Permissions = rolePage.Permissions
                    });
                }
            }

            var result = await _rolePageRepository.Inserts(rolePages);
            return new ActionResultResponse(result, result <= 0 ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Add new role permission successful."));
        }

        #region RolePage
        public async Task<ActionResultResponse> DeleteRolePage(string tenantId, string roleId, int pageId)
        {
            var roleInfo = await _roleRepository.FindByIdAsync(roleId, new CancellationToken());
            if (roleInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Role does not exists."));

            if (roleInfo.TenantId != tenantId)
                return new ActionResultResponse(-403, _sharedResourceService.GetString("You do not have permission to do this action."));

            var result = await _rolePageRepository.Delete(roleId, pageId);
            return new ActionResultResponse(result, result == -1
                ? _resourceService.GetString("Remove permission fail.")
                : result == 0
                    ? _sharedResourceService.GetString("Nothing updated.")
                    : _resourceService.GetString("Remove permission successful."));
        }

        public async Task<ActionResultResponse> UpdateRolePagePermission(string tenantId, string roleId, int pageId, int permissions)
        {
            var roleInfo = await _roleRepository.FindByIdAsync(roleId, new CancellationToken());
            if (roleInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Role does not exists."));

            if (roleInfo.TenantId != tenantId)
                return new ActionResultResponse(-403, _sharedResourceService.GetString("You do not have permission to do this action."));

            var result = await _rolePageRepository.UpdatePermission(roleId, pageId, permissions);
            return new ActionResultResponse(result,
                result < 0
                    ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                    : result == 0
                        ? _resourceService.GetString("Please select permission for update.")
                        : _resourceService.GetString("Update permission successful."));
        }

        public async Task<SearchResult<RolesPagesViewModel>> GetRolesPages(string languageId, string tenantId, string roleId)
        {
            var roleInfo = await _roleRepository.FindByIdAsync(roleId, new CancellationToken());
            if (roleInfo == null)
                return new SearchResult<RolesPagesViewModel>
                {
                    Code = -1,
                    Message = _resourceService.GetString("Role does not exists.")
                };

            if (roleInfo.TenantId != tenantId)
                return new SearchResult<RolesPagesViewModel>
                {
                    Code = -403,
                    Message = _sharedResourceService.GetString("You do not have permission to do this action.")
                };

            var rolesPages = await _rolePageRepository.GetsByRoleId(languageId, roleId);
            return new SearchResult<RolesPagesViewModel>
            {
                Items = rolesPages
            };
        }

        #endregion

        #region Privates.

        private async Task<ActionResultResponse> UpdateRolePages(string roleId,
            IEnumerable<RolePagePermissionMeta> listRolePagePermissions)
        {
            var listRolePages = await _rolePageRepository.GetsByRoleId(roleId, true);
            if (listRolePages == null || !listRolePages.Any())
            {
                var result = await AddNewRolePage(roleId, listRolePagePermissions);
                return new ActionResultResponse(result, result <= 0
                    ? _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong)
                    : _resourceService.GetString("Add new page to role successful."));
            }

            // List roles page ids.
            var listPageIds = listRolePages.Select(x => x.PageId).ToList();

            // List new pages.
            var listNewPageIds = listRolePagePermissions.Select(x => x.PageId)
                .Except(listRolePages.Select(x => x.PageId).ToList());

            // List delete role page.
            var listDeletedPageIds = listPageIds.Except(listRolePagePermissions.Select(x => x.PageId));

            // List update role page.
            var listUpdatedPageIds = listPageIds.Intersect(listRolePagePermissions.Select(x => x.PageId));

            // Add new role page if not exists.
            await AddNewRolePage(roleId,
                listRolePagePermissions.Where(x => listNewPageIds.Contains(x.PageId)).ToList());

            // Update existings role page.
            await UpdateRolePagePermission();

            // Delete role page.
            await DeleteRolePage();

            return new ActionResultResponse(1, _resourceService.GetString("Update role page succesful."));

            async Task<int> UpdateRolePagePermission()
            {
                return await _rolePageRepository
                    .UpdateRolePagePermission(roleId,
                        listRolePagePermissions.Where(x => listUpdatedPageIds.Contains(x.PageId)).ToList());
            }

            async Task<int> DeleteRolePage()
            {
                return await _rolePageRepository.DeleteByRoleIdAndPageIds(roleId, listDeletedPageIds.ToList());
            }
        }


        private async Task<int> AddNewRolePage(string roleId, IEnumerable<RolePagePermissionMeta> listRolePagePermissionMeta)
        {
            var rolesPages = new List<RolesPages>();
            foreach (var rolePage in listRolePagePermissionMeta)
            {
                var rolePageInfo = await _pageRepository.GetInfo(rolePage.PageId);
                if (rolePageInfo == null)
                    continue;

                if (rolePageInfo.ParentId.HasValue)
                {
                    var pageIds = rolePageInfo.IdPath.Split('.')
                        .Select(Int32.Parse).ToList();
                    if (!pageIds.Any() || pageIds.Count == 1)
                        continue;

                    var listParentPages = await _pageRepository.GetInfo(pageIds);
                    if (listParentPages != null && listParentPages.Any())
                    {
                        foreach (var parentPage in listParentPages)
                        {
                            if (parentPage.Id == rolePageInfo.Id)
                                continue;

                            var isExistsInList = rolesPages.Any(x => x.PageId == parentPage.Id);
                            if (isExistsInList)
                                continue;

                            // Check page exists.
                            var isPageExists = await _rolePageRepository.CheckExists(parentPage.Id, roleId);
                            if (isPageExists)
                                continue;

                            rolesPages.Add(new RolesPages
                            {
                                PageId = parentPage.Id,
                                RoleId = roleId,
                                Permissions = (int)Permission.View
                            });
                        }
                    }
                }

                rolesPages.Add(new RolesPages
                {
                    RoleId = roleId,
                    PageId = rolePage.PageId,
                    Permissions = rolePage.Permissions
                });
            }

            return await _rolePageRepository.Inserts(rolesPages);
        }

        private async Task<ActionResultResponse> AddNewUserRole(string tenantId, string roleId, List<string> userIds)
        {
            var listUserInfo = await _userAccountRepository.GetShortUserInfoByListIds(tenantId, userIds);
            if (listUserInfo == null || !listUserInfo.Any())
                return new ActionResultResponse<string>(-3,
                    _resourceService.GetString(
                        "User info not found. Please contact with administrator."));

            // Add new user roles.
            var resultAddNewUserRoles = await _userRoleRepository.Inserts(listUserInfo.Select(x => x.UserId).ToList(), roleId);
            return new ActionResultResponse(resultAddNewUserRoles, resultAddNewUserRoles <= 0
                ? _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong)
                : _resourceService.GetString("Add new user role successful."));
        }
        #endregion
    }
}
