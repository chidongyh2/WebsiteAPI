using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Product.Domain.IRepository;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;

namespace GHM.Product.Infrastructure.Repository
{
    public class ProductTranslationRepository : RepositoryBase, IProductTranslationRepository
    {
        private readonly IRepository<ProductTranslation> _productTranslationRepository;
        public ProductTranslationRepository(IDbContext context) : base(context)
        {
            _productTranslationRepository = Context.GetRepository<ProductTranslation>();
        }

        public async Task<int> Insert(ProductTranslation productTranslation)
        {
            _productTranslationRepository.Create(productTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ProductTranslation productTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<ProductTranslation> productTranslations)
        {
            _productTranslationRepository.Creates(productTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string productId)
        {
            var info = await _productTranslationRepository.GetsAsync(false, x => x.ProductId == productId);
            if (info == null || !info.Any())
                return -1;
            foreach (var productTranslation in info)
            {
                productTranslation.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string productId)
        {
            var info = await _productTranslationRepository.GetsAsync(false, x => x.ProductId == productId);
            if (info == null || !info.Any())
                return -1;

            _productTranslationRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<ProductTranslation> GetInfo(string productId, string languageId, bool isReadOnly = false)
        {
            return await _productTranslationRepository.GetAsync(isReadOnly, x => x.ProductId == productId
                                                                                          && x.LanguageId == languageId && !x.IsDelete);
        }

        public async Task<List<ProductTranslation>> GetsProductId(string productId, bool isReadOnly = false)
        {
            return await _productTranslationRepository.GetsAsync(true, x => x.ProductId == productId && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string productId, string tenantId, string languageId, string name)
        {
            name = name.Trim();
            return await _productTranslationRepository.ExistAsync(x =>
                x.ProductId != productId && x.TenantId == tenantId && x.LanguageId == languageId && x.Name == name && !x.IsDelete);
        }

        public async Task<bool> CheckSeoLinkExists(string tenantId, string languageId, string productId, string seolink)
        {
            seolink = seolink.Trim();
            return await _productTranslationRepository.ExistAsync(x =>
                x.TenantId == tenantId && x.ProductId != productId && x.LanguageId == languageId && x.SeoLink == seolink && !x.IsDelete);
        }
    }
}
