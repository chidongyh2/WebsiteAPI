using GHM.Customer.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Customer.Domain.IRepository
{
    public interface ICustomerSubjectTranslationRepository
    {
        Task<int> Insert(CustomerSubjectTranslation customerSubjectTranslation);

        Task<int> Inserts(List<CustomerSubjectTranslation> customerSubjectTranslations);

        Task<int> Update(CustomerSubjectTranslation customerSubjectTranslation);

        //Task<int> Delete(string CustomersubjectId, string languageId);

        //Task<int> Delete(string CustomerSubjectId);

        Task<int> ForceDelete(string customerSubjectId);

        Task<CustomerSubjectTranslation> GetInfo(string customerSubjectId, string languageId, bool isReadOnly = false);

        Task<List<CustomerSubjectTranslation>> GetsByCustomerSubjectId(string customerSubjectId);

        Task<bool> CheckUserNameExists(string customerSubjectId, string languageId, string name);
    }
}
