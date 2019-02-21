using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using GHM.Core.Domain.Constants;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.Resources;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.SqlServer;
using Microsoft.AspNetCore.Identity;

namespace GHM.Core.Infrastructure.Repository
{
    public class RoleRepository : RepositoryBase, IRoleRepository
    {
        private readonly IRepository<Role> _roleRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCoreResource> _resourceService;
        public RoleRepository(IDbContext context, IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmCoreResource> resourceService) : base(context)
        {
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _roleRepository = Context.GetRepository<Role>();
        }

        public async Task<IdentityResult> CreateAsync(Role role, CancellationToken cancellationToken)
        {
            //            var isExists = await CheckNameExists(role.Id, role.TenantId, role.Name);
            //            if (isExists)
            //                return IdentityResult.Failed(new IdentityError
            //                {
            //                    Code = "-1",
            //                    Description = _resourceService.GetString("Role: \"{0}\" already exists.", role.Name)
            //                });

            _roleRepository.Create(role);
            var result = await Context.SaveChangesAsync(cancellationToken);
            return result <= 0
                ? IdentityResult.Failed(new IdentityError
                {
                    Code = result.ToString(),
                    Description =
                        _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                })
                : IdentityResult.Success;
        }

        public async Task<IdentityResult> UpdateAsync(Role role, CancellationToken cancellationToken)
        {
            //var isExists = await CheckNameExists(role.Id, role.TenantId, role.Name);
            //if (isExists)
            //    return IdentityResult.Failed(new IdentityError { Code = "-1", Description = _resourceService.GetString("Role: \"{0}\" already exists.", role.Name) });

            //var roleInfo = await FindByIdAsync(role.Id, new CancellationToken());
            //if (roleInfo == null)
            //    return IdentityResult.Failed(new IdentityError
            //    {
            //        Code = "-2",
            //        Description = _resourceService.GetString("Role: \"{0}\" does not exists.", role.Name)
            //    });

            //if (roleInfo.ConcurrencyStamp != role.ConcurrencyStamp)
            //    return IdentityResult.Failed(new IdentityError
            //    {
            //        Code = "-3",
            //        Description = _resourceService.GetString("Role: \"{0}\" has already updated.", role.Name)
            //    });

            //roleInfo.Name = role.Name.Trim();
            //roleInfo.NormalizedName = roleInfo.Name.StripVietnameseChars().ToUpper();
            //roleInfo.Description = role.Description?.Trim();
            //roleInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            //var result = await Context.SaveChangesAsync(cancellationToken);
            //return result <= 0 ? IdentityResult.Failed(new IdentityError { Code = result.ToString(), Description = _sharedResourceService.GetString("Something went wrong. Please contact with administrator.") })
            //    : IdentityResult.Success;

            var result = await Context.SaveChangesAsync(cancellationToken);
            return result <= 0 ? IdentityResult.Failed(new IdentityError { Code = result.ToString(), Description = _sharedResourceService.GetString("Something went wrong. Please contact with administrator.") })
                : IdentityResult.Success;
        }

        public async Task<IdentityResult> DeleteAsync(Role role, CancellationToken cancellationToken)
        {
            var roleInfo = await FindByIdAsync(role.Id, new CancellationToken());
            if (roleInfo == null)
                return IdentityResult.Failed(new IdentityError
                {
                    Code = "-1",
                    Description = _resourceService.GetString("Role does not exists.")
                });

            _roleRepository.Delete(roleInfo);
            var result = await Context.SaveChangesAsync(cancellationToken);
            return result > 0 ? IdentityResult.Success : IdentityResult.Failed(new IdentityError
            {
                Code = "-3",
                Description = _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
            });
        }

        public async Task<string> GetRoleIdAsync(Role role, CancellationToken cancellationToken)
        {
            var roleInfo = await FindByNameAsync(role.NormalizedName, new CancellationToken());
            return roleInfo == null ? string.Empty : roleInfo.Id;
        }

        public async Task<string> GetRoleNameAsync(Role role, CancellationToken cancellationToken)
        {
            var roleInfo = await FindByIdAsync(role.Id, cancellationToken);
            return roleInfo == null ? string.Empty : roleInfo.Name;
        }

        public async Task SetRoleNameAsync(Role role, string roleName, CancellationToken cancellationToken)
        {
            var roleInfo = await FindByIdAsync(role.Id, cancellationToken);
            if (roleInfo != null)
            {
                roleInfo.Name = role.Name.Trim();
                await Context.SaveChangesAsync(cancellationToken);
            }
        }

        public async Task<string> GetNormalizedRoleNameAsync(Role role, CancellationToken cancellationToken)
        {
            var roleInfo = await FindByIdAsync(role.Id, new CancellationToken());
            return roleInfo == null ? string.Empty : roleInfo.NormalizedName;
        }

        public async Task SetNormalizedRoleNameAsync(Role role, string normalizedName, CancellationToken cancellationToken)
        {
            var roleInfo = await FindByIdAsync(role.Id, cancellationToken);
            if (roleInfo != null)
            {
                roleInfo.NormalizedName = roleInfo.Name.StripVietnameseChars().ToLower();
                await Context.SaveChangesAsync(cancellationToken);
            }
        }

        public async Task<Role> FindByIdAsync(string roleId, CancellationToken cancellationToken)
        {
            return await _roleRepository.GetAsync(false, x => x.Id == roleId);
        }

        public async Task<Role> FindByNameAsync(string normalizedRoleName, CancellationToken cancellationToken)
        {
            return await _roleRepository.GetAsync(false, x => x.NormalizedName == normalizedRoleName);
        }

        public async Task<bool> CheckRoleExistsByTenant(string tenantId, string roleId)
        {
            return await _roleRepository.ExistAsync(x => x.Id == roleId && x.TenantId == tenantId);
        }

        public async Task<bool> CheckExists(string tenantId, string id, string name)
        {
            name = name.Trim();
            return await _roleRepository.ExistAsync(x => x.TenantId == tenantId && x.Id != id && x.Name == name);
        }

        public Task<List<RoleSearchViewModel>> SearchByTenant(string keyword, string tenantId, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Role, bool>> spec = x => x.TenantId == tenantId && x.Id != "SuperAdministrator";

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.StripVietnameseChars().Trim().ToUpper();
                spec = spec.And(x => x.NormalizedName.Contains(keyword));
            }

            totalRows = _roleRepository.Count(spec);
            var sort = Context.Filters.Sort((Expression<Func<Role, string>>)(a => (string)a.Id), true);
            var paging = Context.Filters.Page<Role>(page, pageSize);
            return _roleRepository.GetsAsAsync(x => new RoleSearchViewModel
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Type = x.Type
            }, spec, sort, paging);
        }

        public async Task<int> ForceDelete(string roleId)
        {
            var role = await _roleRepository.GetAsync(false, x => x.Id == roleId);
            if (role == null)
                return -1;

            _roleRepository.Delete(role);
            return await Context.SaveChangesAsync();
        }

        private async Task<bool> CheckNameExists(string tenantId, string id, string name)
        {
            return await _roleRepository.ExistAsync(x => x.Id != id && x.TenantId == tenantId && x.Name == name);
        }
    }
}
