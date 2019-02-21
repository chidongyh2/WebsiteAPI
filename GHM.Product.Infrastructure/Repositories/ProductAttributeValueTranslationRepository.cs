using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Product.Domain.IRepository;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;

namespace GHM.Product.Infrastructure.Repository
{
    public class ProductAttributeValueTranslationRepository : RepositoryBase, IProductAttributeValueTranslationRepository
    {
        private readonly IRepository<ProductAttributeValueTranslation> _productAttributeValueTranslationRepository;
        public ProductAttributeValueTranslationRepository(IDbContext context) : base(context)
        {
            _productAttributeValueTranslationRepository = Context.GetRepository<ProductAttributeValueTranslation>();
        }

        public async Task<int> Insert(ProductAttributeValueTranslation productAttributeValueTranslation)
        {
            _productAttributeValueTranslationRepository.Create(productAttributeValueTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ProductAttributeValueTranslation productAttributeValueTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<ProductAttributeValueTranslation> productAttributeValueTranslations)
        {
            _productAttributeValueTranslationRepository.Creates(productAttributeValueTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string productAttributeValueId)
        {
            var info = await _productAttributeValueTranslationRepository.GetsAsync(false, x => x.ProductAttributeValueId == productAttributeValueId);
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
            var info = await _productAttributeValueTranslationRepository.GetsAsync(false, x => x.ProductAttributeValueId == productAttributeValueId);
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

        public async Task<ProductAttributeValueTranslation> GetInfo(string productAttributeValueId, string languageId, bool isReadOnly = false)
        {
            return await _productAttributeValueTranslationRepository.GetAsync(isReadOnly, x => x.ProductAttributeValueId == productAttributeValueId
                                                                                          && x.LanguageId == languageId && !x.IsDelete);
        }

        public async Task<List<ProductAttributeValueTranslation>> GetsProductAttributeValueId(string productAttributeValueId, bool isReadOnly = false)
        {
            return await _productAttributeValueTranslationRepository.GetsAsync(true, x => x.ProductAttributeValueId == productAttributeValueId && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string productAttributeValueId, string tenantId, string productAttributeId, string languageId, string name)
        {
            name = name.Trim();
            return await _productAttributeValueTranslationRepository.ExistAsync(x =>
                x.ProductAttributeValueId != productAttributeValueId && x.TenantId == tenantId && x.ProductAttributeId == productAttributeId
                && x.LanguageId == languageId && x.Name == name && !x.IsDelete);
        }
    }
}
