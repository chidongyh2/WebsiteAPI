using GHM.Customer.Domain.Models;
using GHM.Customer.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Customer.Domain.IRepository
{
    public interface ICustomerSubjectRepository
    {
        Task<List<CustomerSubjectViewModel>> Search(string tenantId, string languageId, string keyword,float? totalReduction,
            bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(CustomerSubject customerSubject);

        Task<int> Update(CustomerSubject customerSubject);

        Task<int> Delete(string customerSubjectId);

        Task<int> ForceDelete(string customerSubjectId);

        Task<CustomerSubject> GetInfo(string customerSubjectId, bool isReadOnly = false);

        Task<CustomerSubject> GetInfo(string customerSubjectId, string tenantId, bool isReadOnly = false);

        Task<bool> CheckExistsByCustomerSubjectId(string customerSubjectId);

        Task<List<CustomerSubject>> GetAll(string tenantId, bool isReadOnly = false);


    }
}
