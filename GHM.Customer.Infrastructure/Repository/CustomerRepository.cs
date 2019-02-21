using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Customer.Domain.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Customer.Domain.IRepository;
using GHM.Customer.Domain.Models;
using GHM.Customer.Domain.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Website.Event.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Customer.Infrastructure.Repository
{
    public class CustomerRepository : RepositoryBase, ICustomerRepository
    {
        private readonly IRepository<Domain.Models.Customer> _customerRepository;
        private readonly IRepository<Domain.Models.CustomerContact> _customerContact;

        public CustomerRepository(IDbContext context) : base(context)
        {
            _customerRepository = Context.GetRepository<Domain.Models.Customer>();
            _customerContact = Context.GetRepository<Domain.Models.CustomerContact>();
        }

        public Task<List<CustomerSearchViewModel>> Search(string tenantId, string keyword, DateTime? createDate, int page, int pageSize, out int totalRows)
        {
            Expression<Func<GHM.Customer.Domain.Models.Customer, bool>> spec = t => t.TenantId == tenantId;
            Expression<Func<CustomerContact, bool>> specC = tt => tt.ContactValue.Contains(keyword);

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (createDate.HasValue)
            {
                createDate = createDate.Value.Date;
                spec = spec.And(x => x.CreateTime.Date == createDate);
            }

            var query = Context.Set<Domain.Models.Customer>().Where(spec).Select(x => new CustomerSearchViewModel
            {
                Id = x.Id,
                CustomerCode = x.CustomerCode,
                FullName = x.FullName,
                Birthday = x.Birthday,
                Address = x.Address
            });

            if (query.Any())
            {
                totalRows = query.ToList().Count;
                return query.OrderByDescending(x => x.FullName)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .ToListAsync();
            }
            else
            {
                var resultquery = Context.Set<Domain.Models.Customer>().Where(spec)
                    .Join(Context.Set<CustomerContact>().Where(specC), t => t.Id, tt => tt.CustomerId, (t, tt) =>
                       new CustomerSearchViewModel
                       {
                           Id = t.Id,
                           CustomerCode = t.CustomerCode,
                           FullName = t.FullName,
                           Birthday = t.Birthday,
                           Address = t.Address
                       });

                totalRows = resultquery.ToList().Count;
                return resultquery.OrderByDescending(x => x.FullName)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .ToListAsync();
            }

        }

        public async Task<int> Insert(Domain.Models.Customer customer)
        {
            _customerRepository.Create(customer);
            return await Context.SaveChangesAsync();
        }

        public async Task<Domain.Models.Customer> GetInfoSummary(string tenantId, string id, bool isReadOnly = false)
        {
            return await _customerRepository.GetAsync(isReadOnly, x => x.Id == id && x.TenantId == tenantId);
        }

        public async Task<int> ForceDelete(string id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            _customerRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Domain.Models.Customer customer)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateUnsignName(string id, string unsignName)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<Domain.Models.Customer> GetInfo(string id, bool isReadOnly = false)
        {
            return await _customerRepository.GetAsync(isReadOnly, x => x.Id == id);
        }

        public async Task<bool> CheckExistsCustomer(string tenantId, string unsignName, string contactValue)
        {
            Expression<Func<Domain.Models.Customer, bool>> spec = t => t.TenantId == tenantId && t.UnsignName.Contains(unsignName);
            Expression<Func<CustomerContact, bool>> specC = tt => tt.ContactValue == contactValue;

            var query = Context.Set<Domain.Models.Customer>().Where(spec)
                .Join(Context.Set<CustomerContact>().Where(specC), t => t.Id, tt => tt.CustomerId, (t, tt) =>
                    new CustomerDetailViewModel
                    {
                        Id = t.Id
                    });

            return await query.AnyAsync();
        }

        public string GetCustomerId(string tenantId, string unsignName, string phone, string email)
        {
            Expression<Func<Domain.Models.Customer, bool>> spec = t => t.TenantId == tenantId && t.UnsignName == unsignName.Trim();
            //Expression<Func<CustomerContact, bool>> specC = tt => tt.ContactValue == phone && tt.ContactType == ContactType.MobilePhone;

            //if (!string.IsNullOrEmpty(email))
            //{
            //    specC = specC.Or(x => x.ContactType == ContactType.Email && x.ContactValue == email.Trim());
            //}

            var query = Context.Set<Domain.Models.Customer>().Where(spec)
                .Join(Context.Set<CustomerContact>(), t => t.Id, tt => tt.CustomerId, (t, tt) => new { t.Id, tt.ContactType, tt.ContactValue });

            if (query.Any(x => x.ContactType == ContactType.Email && x.ContactValue == email)
                && query.Any(x => x.ContactType == ContactType.MobilePhone && x.ContactValue == phone))
            {
                return query.FirstOrDefault()?.Id;
            }
            return string.Empty;
        }

        public Task<List<CustomerSearchViewModel>> GetAllCustomer(string tenantId, DateTime fromDate, DateTime toDate, int page, int pageSize, out int totalRows)
        {
            Expression<Func<GHM.Customer.Domain.Models.Customer, bool>> spec = t => t.TenantId == tenantId;

            var query = from customer in Context.Set<Domain.Models.Customer>().Where(spec)
                        join customerContact in Context.Set<Domain.Models.CustomerContact>() on customer.Id equals customerContact.CustomerId
                        where customerContact.ContactType != ContactType.Fax
                        select new CustomerSearchViewModel()
                        {
                            Id = customer.Id,
                            CustomerCode = customer.CustomerCode,
                            FullName = customer.FullName,
                            Birthday = customer.Birthday,
                            Address = customer.Address,
                            Email = customerContact.ContactValue,
                            CreateTime = customer.CreateTime
                        };

            totalRows = query.ToList().Count;
            return query.OrderByDescending(x => x.FullName)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<List<CustomerSearchViewModel>> GetAllCustomerInMonth(string tenantId, int month, int year, int page, int pageSize, out int totalRows)
        {
            Expression<Func<GHM.Customer.Domain.Models.Customer, bool>> spec = t => t.TenantId == tenantId && t.CreateTime.Month == month && t.CreateTime.Year == year;

            var query = from customer in Context.Set<Domain.Models.Customer>().Where(spec)
                        join customerContact in Context.Set<Domain.Models.CustomerContact>() on customer.Id equals customerContact.CustomerId
                        where customerContact.ContactType != ContactType.Fax
                        select new CustomerSearchViewModel()
                        {
                            Id = customer.Id,
                            CustomerCode = customer.CustomerCode,
                            FullName = customer.FullName,
                            Birthday = customer.Birthday,
                            Address = customer.Address,
                            Email = customerContact.ContactValue,
                            CreateTime = customer.CreateTime
                        };

            totalRows = query.ToList().Count;
            return query.OrderByDescending(x => x.FullName)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<List<CustomerTotalViewModel>> GetTotalCustomerInMonths(string tenantId, int month, int year)
        {
            Expression<Func<GHM.Customer.Domain.Models.Customer, bool>> spec = t => t.TenantId == tenantId && t.CreateTime.Month == month && t.CreateTime.Year == year;

            var query = from customer in Context.Set<Domain.Models.Customer>().Where(spec)
                        group customer by customer.CreateTime.Month
                into cus
                        select new CustomerTotalViewModel()
                        {
                            Month = cus.Key,
                            TotalCustomer = cus.Count()
                        };

            return query.OrderByDescending(x => x.Month)
                .ToListAsync();
        }

        public Task<List<CustomerSuggestionViewModel>> Suggestions(string tenantId, string keyword, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Domain.Models.Customer, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<Domain.Models.Customer>().Where(spec)
                .Join(Context.Set<CustomerContact>(), c => c.Id, cc => cc.CustomerId, (c, cc) => new { c.Id, c.FullName, cc.ContactType, cc.ContactValue })
                .GroupBy(x => new { x.Id, x.FullName })
                .Select(x => new CustomerSuggestionViewModel
                {
                    Id = x.Key.Id,
                    Name = x.Key.FullName,
                    PhoneNumber = x.FirstOrDefault(f => f.ContactType == ContactType.MobilePhone).ContactValue,
                    Email = x.FirstOrDefault(f => f.ContactType == ContactType.Email).ContactValue
                })
                .AsNoTracking();

            totalRows = query.Count();
            return query.ToListAsync();
        }
    }

    

   
}
