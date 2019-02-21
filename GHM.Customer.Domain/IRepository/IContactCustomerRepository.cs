using GHM.Customer.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Customer.Domain.ViewModels;

namespace GHM.Customer.Domain.IRepository
{
    public interface IContactCustomerRepository
    {
        Task<int> Insert(CustomerRelativesContact contactCustomer);

        Task<int> Inserts(List<CustomerRelativesContact> contactCustomers);

        Task<int> Update(CustomerRelativesContact contactCustomer);

        Task<CustomerRelativesContact> GetInfo(string id);

        Task<int> DeleteByCustomerId(string customerId);

        Task<int> ForceDelete(string id);

        Task<List<ContactCustomerViewModel>> GetByCustomerId(string customerId);

    }
}
