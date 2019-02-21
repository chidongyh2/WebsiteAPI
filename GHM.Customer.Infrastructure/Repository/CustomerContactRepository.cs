using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GHM.Customer.Domain.IRepository;
using GHM.Customer.Domain.Models;
using GHM.Customer.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;

namespace GHM.Customer.Infrastructure.Repository
{
    public class CustomerContactRepository : RepositoryBase, ICustomerContactRepository
    {
        private readonly IRepository<CustomerContact> _CustomerContactRepository;

        public CustomerContactRepository(IDbContext context) : base(context)
        {
            _CustomerContactRepository = Context.GetRepository<Domain.Models.CustomerContact>();
        }

        public async Task<int> DeleteByCustomerId(string customerId)
        {
            var listCustomerContacts = await _CustomerContactRepository.GetsAsync(false, x => x.CustomerId == customerId);
            if (listCustomerContacts == null || !listCustomerContacts.Any())
                return -1;

            _CustomerContactRepository.Deletes(listCustomerContacts);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string id)
        {
            var info = await _CustomerContactRepository.GetsAsync(false, x => x.Id == id);
            if (info == null || !info.Any())
                return -1;

            _CustomerContactRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public Task<List<CustomerContactViewModel>> GetByCustomerId(string customerId)
        {
            return Context.Set<CustomerContact>().AsNoTracking().Where(c => c.CustomerId == customerId)
                .Select(x => new CustomerContactViewModel
                {
                    Id = x.Id,
                    CustomerId = x.CustomerId,
                    ContactType = x.ContactType,
                    ContactValue = x.ContactValue,
                    ConcurrencyStamp = x.ConcurrencyStamp,
                }).ToListAsync();
        }

        public async Task<CustomerContact> GetInfo(string id)
        {
            return await _CustomerContactRepository.GetAsync(false, x => x.Id == id);
        }

        public async Task<int> Insert(CustomerContact customerContact)
        {
            _CustomerContactRepository.Create(customerContact);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<CustomerContact> customerContacts)
        {
            _CustomerContactRepository.Creates(customerContacts);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(CustomerContact customerContact)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
