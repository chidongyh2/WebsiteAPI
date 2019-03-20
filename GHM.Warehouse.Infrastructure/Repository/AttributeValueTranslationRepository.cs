using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Infrastructure.SqlServer;
using System;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class AttributeValueTranslationRepository : RepositoryBase, IAttributeValueTranslationRepository
    {
        private readonly IRepository<AttributeValueTranslation> _productAttributeValueTranslationRepository;
        public AttributeValueTranslationRepository(IDbContext context) : base(context)
        {
            _productAttributeValueTranslationRepository = Context.GetRepository<AttributeValueTranslation>();
        }

        public async Task<int> Insert(AttributeValueTranslation attributeValueTranslation)
        {
            _productAttributeValueTranslationRepository.Create(attributeValueTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(AttributeValueTranslation attributeValueTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<AttributeValueTranslation> productAttributeValueTranslations)
        {
            _productAttributeValueTranslationRepository.Creates(productAttributeValueTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string productAttributeValueId)
        {
            var info = await _productAttributeValueTranslationRepository.GetsAsync(false, x => x.AttributeValueId == productAttributeValueId);
            if (info == null || !info.Any())
                return -1;
            foreach (var productAttributeValueTranslation in info)
            {
                productAttributeValueTranslation.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string productAttributeValueId)
        {
            var info = await _productAttributeValueTranslationRepository.GetsAsync(false, x => x.AttributeValueId == productAttributeValueId);
            if (info == null || !info.Any())
                return -1;

            _productAttributeValueTranslationRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByProductAttribute(string productAttributeId)
        {
            var info = await _productAttributeValueTranslationRepository.GetsAsync(false, x => x.ProductAttributeId == productAttributeId);
            if (info == null)
                return -1;

            foreach (var productAttributeValueTranslation in info)
            {
                productAttributeValueTranslation.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<AttributeValueTranslation> GetInfo(string productAttributeValueId, string languageId, bool isReadOnly = false)
        {
            return await _productAttributeValueTranslationRepository.GetAsync(isReadOnly, x => x.AttributeValueId == productAttributeValueId
                                                                                          && x.LanguageId == languageId && !x.IsDelete);
        }

        public async Task<List<AttributeValueTranslation>> GetsProductAttributeValueId(string productAttributeValueId, bool isReadOnly = false)
        {
            return await _productAttributeValueTranslationRepository.GetsAsync(true, x => x.AttributeValueId == productAttributeValueId && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string productAttributeValueId, string tenantId, string productAttributeId, string languageId, string name)
        {
            try
            {
                name = name.Trim();
                return await _productAttributeValueTranslationRepository.ExistAsync(x =>
                    x.AttributeValueId != productAttributeValueId && x.TenantId == tenantId && x.ProductAttributeId == productAttributeId
                    && x.LanguageId == languageId && x.Name == name && !x.IsDelete);
            }catch(Exception e)
            {
                return false;
            }
        }
    }
}
