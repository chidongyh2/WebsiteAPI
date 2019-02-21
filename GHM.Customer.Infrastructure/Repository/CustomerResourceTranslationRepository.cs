using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Customer.Domain.IRepository;
using GHM.Customer.Domain.Models;
using GHM.Infrastructure.SqlServer;

namespace GHM.Customer.Infrastructure.Repository
{
    public class CustomerResourceTranslationRepository : RepositoryBase, ICustomerResourceTranslationRepository
    {

        private readonly IRepository<CustomerResourceTranslation> _customerResourceTranslationRepository;

        public  CustomerResourceTranslationRepository(IDbContext context) : base(context)
        {
            _customerResourceTranslationRepository = Context.GetRepository<CustomerResourceTranslation>();
        }

        public async Task<int> Insert(CustomerResourceTranslation customerResourceTranslation)
        {
            _customerResourceTranslationRepository.Create(customerResourceTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<CustomerResourceTranslation> customerResourceTranslations)
        {
            _customerResourceTranslationRepository.Creates(customerResourceTranslations);
            return await Context.SaveChangesAsync();
        }

 

        public async Task<int> Update(CustomerResourceTranslation customerResourceTranslation)
        {
            return await Context.SaveChangesAsync();
        }

                                                 
        public async Task<int> Delete(string customerResourceId, string languageId)
        {
            var info = await GetInfo(customerResourceId, languageId);
            if (info == null)
                return -1;

            _customerResourceTranslationRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByCustomerResourceId(string customerResourceId)
        {
            var listCustomerResourceLanguages = await GetsByCustomerResourceId(customerResourceId);
            _customerResourceTranslationRepository.Deletes(listCustomerResourceLanguages);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDeleteByCustomerResourceId(string customerResourceId)
        {
            var CustomerResourceTranslations = await _customerResourceTranslationRepository.GetsAsync(false, x => x.CustomerResourceId == customerResourceId);
            if (!CustomerResourceTranslations.Any())
                return -1;

            _customerResourceTranslationRepository.Deletes(CustomerResourceTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<CustomerResourceTranslation> GetInfo(string customerResourceId, string languageId, bool isReadOnly = false)
        {
            return await _customerResourceTranslationRepository.GetAsync(isReadOnly, x => x.CustomerResourceId == customerResourceId && x.LanguageId == languageId);
        }

        public async Task<List<CustomerResourceTranslation>> GetsByCustomerResourceId(string customerResourceId)
        {
            return await _customerResourceTranslationRepository.GetsAsync(true, x => x.CustomerResourceId == customerResourceId);
        }
        public async Task<bool> CheckExists(string customerResourceId, string languageId, string name)
        {
            name = name.Trim();
            return await _customerResourceTranslationRepository.ExistAsync(x =>
                x.CustomerResourceId != customerResourceId && x.LanguageId == languageId && x.Name == name);
        }

    
    }
}
