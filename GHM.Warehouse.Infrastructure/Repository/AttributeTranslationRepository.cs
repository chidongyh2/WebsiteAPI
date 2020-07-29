using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class AttributeTranslationRepository : RepositoryBase, IAttributeTranslationRepository
    {
        private readonly IRepository<AttributeTranslation> _ttributeTranslationRepository;
        public AttributeTranslationRepository(IDbContext context) : base(context)
        {
            _ttributeTranslationRepository = Context.GetRepository<AttributeTranslation>();
        }

        public async Task<int> Insert(AttributeTranslation attributeTranslation)
        {
            _ttributeTranslationRepository.Create(attributeTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<AttributeTranslation> attributeTranslations)
        {
            _ttributeTranslationRepository.Creates(attributeTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(AttributeTranslation attributeTranslation)
        {
            return await Context.SaveChangesAsync();
        }
        
        public async Task<int> Delete(string attributeId)
        {
            var info = await _ttributeTranslationRepository.GetsAsync(false, x => x.AttributeId == attributeId);
            if (info == null || !info.Any())
                return -1;
            foreach (var attributeTranslation in info)
            {
                attributeTranslation.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string attributeId)
        {
            var info = await _ttributeTranslationRepository.GetsAsync(false, x => x.AttributeId == attributeId);
            if (info == null || !info.Any())
                return -1;

            _ttributeTranslationRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<AttributeTranslation> GetInfo(string attributeId, string languageId, bool isReadOnly = false)
        {
            return await _ttributeTranslationRepository.GetAsync(isReadOnly, x => x.AttributeId == attributeId 
            && x.LanguageId == languageId && !x.IsDelete);
        }

        public async Task<List<AttributeTranslation>> GetsAttributeId(string attributeId, bool isReadOnly = false)
        {
            return await _ttributeTranslationRepository.GetsAsync(true, x => x.AttributeId == attributeId && !x.IsDelete);
        }
        public async Task<bool> CheckExists(string attributeId, string tenantId, string languageId, string name)
        {
            name = name.Trim();
            return await _ttributeTranslationRepository.ExistAsync(x =>
                x.AttributeId != attributeId && x.TenantId == tenantId && x.LanguageId == languageId && x.Name == name && !x.IsDelete);
        }
    }
}
