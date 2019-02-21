using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Customer.Domain.Models;
using GHM.Customer.Domain.ViewModels;
namespace GHM.Customer.Domain.IRepository
{
  public  interface ICustomerResourceRepository
    {
        Task<List<CustomerResourceViewModel>> Search(string tenantId, string languageId, string keyword,
        bool? isActive, int page, int pageSize, out int totalRows);


        Task<int> Insert(CustomerResource customerResource);

        Task<int> Update(CustomerResource customerResource);

        Task<int> Delete(string customerSourceId);

        Task<int> ForceDelete(string customerSourceId);

        Task<CustomerResource> GetInfo(string id, bool isReadonly = false);

        Task<List<CustomerResourceForSelectViewModel>> SearchForSelect(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows);
    }
}
