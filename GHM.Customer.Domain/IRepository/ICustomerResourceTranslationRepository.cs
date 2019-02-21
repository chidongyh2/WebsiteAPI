using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Customer.Domain.Models;

namespace GHM.Customer.Domain.IRepository
{
    public interface ICustomerResourceTranslationRepository
    {
        Task<int> Insert(CustomerResourceTranslation customerResourceTranslation);

        Task<int> Update(CustomerResourceTranslation customerResourceTranslation);

        Task<int> Inserts(List<CustomerResourceTranslation> customerResourceTranslations);

        Task<int> Delete(string customerResourceId, string languageId);

        Task<int> ForceDeleteByCustomerResourceId(string customerResourceId);

        Task<int> DeleteByCustomerResourceId(string customerResourceId);

        Task<CustomerResourceTranslation> GetInfo(string customerResourceId, string languageId, bool isReadOnly = false);

        Task<List<CustomerResourceTranslation>> GetsByCustomerResourceId(string CustomerResourceId);

        Task<bool> CheckExists(string customerResourceId, string languageId, string name);


    }
}
