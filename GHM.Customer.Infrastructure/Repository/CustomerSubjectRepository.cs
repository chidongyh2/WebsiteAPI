using GHM.Infrastructure.SqlServer;
using GHM.Customer.Domain.IRepository;
using System;
using System.Collections.Generic;
using GHM.Customer.Domain.Models;
using System.Threading.Tasks;
using System.Linq.Expressions;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using System.Linq;
using GHM.Customer.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Customer.Infrastructure.Repository
{
    public class CustomerSubjectRepository : RepositoryBase, ICustomerSubjectRepository 
    {
        private readonly IRepository<CustomerSubject> _CustomersubjectRepository;

        public CustomerSubjectRepository(IDbContext context) : base(context)
        {
            _CustomersubjectRepository = Context.GetRepository<CustomerSubject>();
        }

        public Task<List<CustomerSubjectViewModel>> Search(string tenantId, string languageId, string keyword, float? totalReduction, 
                        bool? isActive, int page, int pageSize, out int totalRows)
        {
            Expression<Func<CustomerSubject, bool>> spec = t => !t.IsDelete && t.TenantId == tenantId;
            Expression<Func<CustomerSubjectTranslation, bool>> specTranslation = tt => tt.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            if(totalReduction.HasValue)
            {
                spec = spec.And(x => x.TotalReduction == totalReduction.Value);
            }

            var query = Context.Set<CustomerSubject>().Where(spec)
                .Join(Context.Set<CustomerSubjectTranslation>().Where(specTranslation), t => t.Id, tt => tt.CustomerSubjectId, (t, tt) =>
                    new CustomerSubjectViewModel
                    {
                        Id = t.Id,
                        Order = t.Order,
                        TotalReduction = t.TotalReduction,
                        IsActive = t.IsActive,
                        Description = tt.Description,
                        Name = tt.Name ,
                    }).AsNoTracking();

            totalRows = _CustomersubjectRepository.Count(spec);
            return query
                .OrderBy(x => x.Order)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(CustomerSubject customersubject)
        {
            _CustomersubjectRepository.Create(customersubject);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(CustomerSubject customersubject)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string customersubjectId)
        {
            var info = await GetInfo(customersubjectId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string customerSubjectId)
        {
            var info = await GetInfo(customerSubjectId);
            if (info == null)
                return -1;

            _CustomersubjectRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<CustomerSubject> GetInfo(string customerSubjectId, bool isReadOnly = false)
        {
            return await _CustomersubjectRepository.GetAsync(isReadOnly, x => x.Id == customerSubjectId);
        }

        public async Task<CustomerSubject> GetInfo(string customerSubjectId, string tenantId, bool isReadOnly = false)
        {
            return await _CustomersubjectRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.Id == customerSubjectId);// && !x.IsDelete);
        }

        public async Task<bool> CheckExistsByCustomerSubjectId(string customerSubjectId)
        {
            return await _CustomersubjectRepository.ExistAsync(x => x.Id == customerSubjectId && !x.IsDelete);
        }

        public async Task<List<CustomerSubject>> GetAll(string tenantId, bool isReadOnly = false)
        {
            return await _CustomersubjectRepository.GetsAsync(isReadOnly, x => !x.IsDelete);
        }

    }
}
