using GHM.Customer.Domain.IRepository;
using GHM.Customer.Domain.Models;
using GHM.Infrastructure.SqlServer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GHM.Customer.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Customer.Infrastructure.Repository
{
    public class ContactCustomerRepository : RepositoryBase, IContactCustomerRepository
    {
        private readonly IRepository<CustomerRelativesContact> _contactCustomerRepository;

        public ContactCustomerRepository(IDbContext context) : base(context)
        {
            _contactCustomerRepository = Context.GetRepository<CustomerRelativesContact>();
        }

        public async Task<int> DeleteByCustomerId(string customerId)
        {
            var listRelativesContacts = await _contactCustomerRepository.GetsAsync(false, x => x.CustomerId == customerId);
            if (listRelativesContacts == null || !listRelativesContacts.Any())
                return -1;

            _contactCustomerRepository.Deletes(listRelativesContacts);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string id)
        {
            var info = await _contactCustomerRepository.GetsAsync(false, x => x.Id == id);
            if (info == null || !info.Any())
                return -1;

            _contactCustomerRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public Task<List<ContactCustomerViewModel>> GetByCustomerId(string customerId)
        {
            return Context.Set<CustomerRelativesContact>().AsNoTracking().Where(x => x.CustomerId == customerId)
                          .Select(x => new ContactCustomerViewModel
                          {
                              Id = x.Id,
                              CustomerId = x.CustomerId,
                              FullName = x.FullName,
                              PhoneNumber = x.PhoneNumber,
                              ConcurrencyStamp = x.ConcurrencyStamp
                          }).ToListAsync();
        }

        public async Task<CustomerRelativesContact> GetInfo(string id)
        {
            return await _contactCustomerRepository.GetAsync(false, x => x.Id == id);
        }

        public async Task<int> Insert(CustomerRelativesContact contactCustomer)
        {
            _contactCustomerRepository.Create(contactCustomer);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<CustomerRelativesContact> contactCustomers)
        {
            _contactCustomerRepository.Creates(contactCustomers);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(CustomerRelativesContact contactCustomer)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
