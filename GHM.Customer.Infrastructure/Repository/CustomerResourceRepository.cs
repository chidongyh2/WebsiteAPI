using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Customer.Domain.IRepository;
using GHM.Customer.Domain.Models;
using GHM.Customer.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;

namespace GHM.Customer.Infrastructure.Repository
{
    public class CustomerResourceRepository : RepositoryBase, ICustomerResourceRepository
    {

        private readonly IRepository<CustomerResource> _CustomerResourceRepository;

        public CustomerResourceRepository(IDbContext context) : base(context)
        {
            _CustomerResourceRepository = Context.GetRepository<CustomerResource>();
        }

        public Task<List<CustomerResourceViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize, out int totalRows)
        {
            Expression<Func<CustomerResource, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<CustomerResourceTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<CustomerResource>().Where(spec)
                .Join(Context.Set<CustomerResourceTranslation>().Where(specTranslation), x => x.Id, pt => pt.CustomerResourceId, (x, pt) =>
                    new CustomerResourceViewModel
                    {
                        Id = x.Id,
                        Name = pt.Name,
                        CreateTime = x.CreateTime,
                        Description = pt.Description,
                        IsActive = x.IsActive,
                        Order = x.Order
                    }).AsNoTracking();

            totalRows = _CustomerResourceRepository.Count(spec);


            return query
                .OrderBy(x => x.Order)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(CustomerResource customerResource)
        {
            _CustomerResourceRepository.Create(customerResource);
            return await Context.SaveChangesAsync();
        }


        public async Task<int> Update(CustomerResource customerResource)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string customerResourceId)
        {
            var info = await GetInfo(customerResourceId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string customerResourceId)
        {
            var info = await GetInfo(customerResourceId);
            if (info == null)
                return -1;

            _CustomerResourceRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<CustomerResource> GetInfo(string id, bool isReadonly = false)
        {
            return await _CustomerResourceRepository.GetAsync(isReadonly, x => x.Id == id);
        }

        public Task<List<CustomerResourceForSelectViewModel>> SearchForSelect(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows)
        {
            Expression<Func<CustomerResource, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && x.IsActive;
            Expression<Func<CustomerResourceTranslation, bool>> specTranslation = t => t.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<CustomerResource>().Where(spec)
                .Join(Context.Set<CustomerResourceTranslation>().Where(specTranslation), Customer => Customer.Id,
                    CustomerTranslation => CustomerTranslation.CustomerResourceId,
                    (Customer, CustomerTranslation) => new { Customer, CustomerTranslation })
                    .OrderBy(x => x.Customer.Order)
                    .Select(x => new CustomerResourceForSelectViewModel
                    {
                        Id = x.Customer.Id,
                        Name = x.CustomerTranslation.Name,
                    });

            totalRows = _CustomerResourceRepository.Count(spec);
            return query
                .AsNoTracking()
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }
    }
}
