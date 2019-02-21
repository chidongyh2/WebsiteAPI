using GHM.Infrastructure.SqlServer;
using GHM.Customer.Domain.IRepository;
using GHM.Customer.Domain.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Customer.Infrastructure.Repository
{
  public  class CustomerSubjectTranslationRepository: RepositoryBase, ICustomerSubjectTranslationRepository
    {
        private readonly IRepository<CustomerSubjectTranslation> _customerSubjectTranslationRepository;
        public CustomerSubjectTranslationRepository(IDbContext context): base(context)
        {
            _customerSubjectTranslationRepository = context.GetRepository<CustomerSubjectTranslation>();
        }

        public async Task<int> Insert(CustomerSubjectTranslation customerSubjectTranslation)
        {
            _customerSubjectTranslationRepository.Create(customerSubjectTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<CustomerSubjectTranslation> customerSubjectTranslations)
        {
            _customerSubjectTranslationRepository.Creates(customerSubjectTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(CustomerSubjectTranslation customerSubjectTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        //public async Task<int> Delete(string CustomerSubjectTranslationsId)
        //{
        //    var info = await GetInfo(CustomerSubjectTranslationsId);
        //    if (info == null)
        //        return -1;

        //    info.IsDelete = true;
        //    return await Context.SaveChangesAsync();
        //}

        public async Task<int> ForceDelete(string customerSubjectId)
        {
            var info = await _customerSubjectTranslationRepository.GetsAsync(false, x => x.CustomerSubjectId  == customerSubjectId);
            if (info == null || !info.Any())
                return -1;

            _customerSubjectTranslationRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<CustomerSubjectTranslation> GetInfo(string customerSubjectId, string languageId, bool isReadOnly = false)
        {
            return await _customerSubjectTranslationRepository.GetAsync(isReadOnly, x => x.CustomerSubjectId  == customerSubjectId && x.LanguageId == languageId);
        }
        
        public async Task<bool> CheckUserNameExists(string customerSubjectId, string languageId, string name)
        {
            return await _customerSubjectTranslationRepository.ExistAsync(x => x.CustomerSubjectId != customerSubjectId && x.LanguageId == languageId && x.Name == name);
        }

        public async Task<List<CustomerSubjectTranslation>> GetsByCustomerSubjectId(string customerSubjectId)
        {
            return await _customerSubjectTranslationRepository.GetsAsync(true, x => x.CustomerSubjectId== customerSubjectId);
        }
       
    }
}
