using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.Resources;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.SqlServer;

namespace GHM.Core.Infrastructure.Repository
{
    public class TenantRepository : RepositoryBase, ITenantRepository
    {
        private readonly IRepository<Tenant> _tenantRepository;
        public TenantRepository(IDbContext context) : base(context)
        {
            _tenantRepository = Context.GetRepository<Tenant>();
        }

        public async Task<int> Insert(Tenant tenant)
        {
            _tenantRepository.Create(tenant);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Tenant tenant)
        {
            //var info = await GetInfo(tenant.Id);
            //if (info == null)
            //    return new ActionResultResponse(-1, _resourceService.GetString("Tenant info doest not exists."));

            //var isExists = await CheckExists(tenant.Id, tenant.PhoneNumber.Trim(), tenant.Email.Trim());
            //if (isExists)
            //    return new ActionResultResponse(-2, _resourceService.GetString("Email or Phonenumber already exists."));

            //info.Name = tenant.Name.Trim();
            //info.Email = tenant.Email?.Trim();
            //info.PhoneNumber = tenant.PhoneNumber?.Trim();
            //info.IsActive = tenant.IsActive;
            //info.Address = tenant.Address?.Trim();
            //info.Note = tenant.Note;
            //info.UnsignName = $"{info.Name.StripVietnameseChars().ToUpper()} {info.Email.StripVietnameseChars().ToUpper()} {info.PhoneNumber.StripVietnameseChars().ToUpper()}";
            //info.Logo = tenant.Logo;
            return await Context.SaveChangesAsync();
            //return new ActionResultResponse(result, result > 0 ?
            //    _resourceService.GetString("Update tenant: \"{0}\" successful.", tenant.Name)
            //    : _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));
        }

        public async Task<int> UpdateActiveStatus(string id, bool isActive)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            info.IsActive = isActive;
            return await Context.SaveChangesAsync();
        }

        public async Task<Tenant> GetInfo(string id)
        {
            return await _tenantRepository.GetAsync(false, x => x.Id == id);
        }

        public async Task<bool> CheckExists(string id, string phoneNumber, string email)
        {
            return await _tenantRepository.ExistAsync(x =>
                x.Id != id && (x.PhoneNumber == phoneNumber || x.Email == email));
        }

        public Task<List<TenantSearchViewModel>> Search(string keyword, bool? isActive, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Tenant, bool>> spec = x => true;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.StripVietnameseChars().ToLower();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive.Value);

            var sort = Context.Filters.Sort<Tenant, DateTime>(x => x.CreateTime, true);
            var paging = Context.Filters.Page<Tenant>(page, pageSize);

            totalRows = _tenantRepository.Count(spec);
            return _tenantRepository.GetsAsAsync(x => new TenantSearchViewModel
            {
                Name = x.Name,
                Id = x.Id,
                CreateTime = x.CreateTime,
                Address = x.Address,
                Email = x.Email,
                PhoneNumber = x.PhoneNumber,
                Note = x.Note,
                IsActive = x.IsActive
            }, spec, sort, paging);
        }
    }
}
