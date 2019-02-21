using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Product.Domain.IRepository;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;

namespace GHM.Product.Infrastructure.Repository
{
    public class ProductAttributeTranslationRepository : RepositoryBase, IProductAttributeTranslationRepository
    {
        private readonly IRepository<ProductAttributeTranslation> _productAttributeTranslationRepository;
        public ProductAttributeTranslationRepository(IDbContext context) : base(context)
        {
            _productAttributeTranslationRepository = Context.GetRepository<ProductAttributeTranslation>();
        }

        public async Task<int> Insert(ProductAttributeTranslation productAttributeTranslation)
        {
            _productAttributeTranslationRepository.Create(productAttributeTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<ProductAttributeTranslation> productAttributeTranslations)
        {
            _productAttributeTranslationRepository.Creates(productAttributeTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ProductAttributeTranslation productAttributeTranslation)
        {
            return await Context.SaveChangesAsync();
        }
        
        public async Task<int> Delete(string productAttributeId)
        {
            var info = await _productAttributeTranslationRepository.GetsAsync(false, x => x.ProductAttributeId == productAttributeId);
            if (info == null || !info.Any())
                return -1;
            foreach (var productAttributeTranslation in info)
            {
                productAttributeTranslation.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string productAttributeId)
        {
            var info = await _productAttributeTranslationRepository.GetsAsync(false, x => x.ProductAttributeId == productAttributeId);
            if (info == null || !info.Any())
                return -1;

            _productAttributeTranslationRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<ProductAttributeTranslation> GetInfo(string productAttributeId, string languageId, bool isReadOnly = false)
        {
            return await _productAttributeTranslationRepository.GetAsync(isReadOnly, x => x.ProductAttributeId == productAttributeId 
            && x.LanguageId == languageId && !x.IsDelete);
        }

        public async Task<List<ProductAttributeTranslation>> GetsProductAttributeId(string productAttributeId, bool isReadOnly = false)
        {
            return await _productAttributeTranslationRepository.GetsAsync(true, x => x.ProductAttributeId == productAttributeId && !x.IsDelete);
        }
        public async Task<bool> CheckExists(string productAttributeId, string tenantId, string languageId, string name)
        {
            name = name.Trim();
            return await _productAttributeTranslationRepository.ExistAsync(x =>
                x.ProductAttributeId != productAttributeId && x.TenantId == tenantId && x.LanguageId == languageId && x.Name == name && !x.IsDelete);
        }
    }
}
