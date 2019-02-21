using GHM.Customer.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Customer.Domain.ViewModels;

namespace GHM.Customer.Domain.IRepository
{
    public interface ICustomerContactRepository
    {
        Task<int> Insert(CustomerContact customerContact);

        Task<int> Inserts(List<CustomerContact> customerContacts);

        Task<int> Update(CustomerContact customerContact);

        Task<CustomerContact> GetInfo(string id);

        Task<int> DeleteByCustomerId(string customerId);

        Task<int> ForceDelete(string id);

        Task<List<CustomerContactViewModel>> GetByCustomerId(string customerId);
    }
}
