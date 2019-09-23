using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class ProductCategoryTranslationRepository : RepositoryBase, IProductCategoryTranslationRepository
    {
        private readonly IRepository<ProductCategoryTranslation> _productCategoryTranslation;

        public ProductCategoryTranslationRepository(IDbContext context) : base(context)
        {
            _productCategoryTranslation = Context.GetRepository<ProductCategoryTranslation>();
        }

        public async Task<bool> CheckExistsByName(int productCategoryId, string tenantId, string languageId, string name)
        {
            name = name.Trim();
            return await _productCategoryTranslation.ExistAsync(x =>
                x.ProductCategoryId != productCategoryId && !x.IsDelete && x.TenantId == tenantId && x.LanguageId == languageId && x.Name == name);
        }

        public async Task<int> ForceDeleteByProductCategoryId(int productCategoryId)
        {
            var info = await _productCategoryTranslation.GetsAsync(false, x => x.ProductCategoryId == productCategoryId);
            if (info == null || !info.Any())
                return -1;

            _productCategoryTranslation.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<ProductCategoryTranslation>> GetAllByProductCategoryId(int productCategoryId, bool isReadonly = false)
        {

            var query = Context.Set<ProductCategoryTranslation>().Where(x => x.ProductCategoryId == productCategoryId && !x.IsDelete);

            return await query
                .ToListAsync();

        }

        public async Task<ProductCategoryTranslation> GetInfo(int productCategoryId, string languageId, bool isReadonly = false)
        {
            return await _productCategoryTranslation.GetAsync(isReadonly, c => c.ProductCategoryId == productCategoryId && c.LanguageId == languageId);
        }

        public async Task<string> GetProductCategoryName(int productCategoryId, string languageId)
        {
            return await _productCategoryTranslation.GetAsAsync(x => x.Name, x => x.ProductCategoryId == productCategoryId
                                                                                 && x.LanguageId == languageId);
        }

        public async Task<List<ProductCategoryTranslationViewModel>> GetsByProductCategoryId(int productCategoryId)
        {
            return await _productCategoryTranslation.GetsAsAsync(x => new ProductCategoryTranslationViewModel
            {
                Name = x.Name,
                SeoLink = x.SeoLink,                
                Description = x.Description,
                LanguageId = x.LanguageId,
                ParentName = x.ParentName
            }, x => x.ProductCategoryId == productCategoryId);
        }

        public async Task<int> Insert(ProductCategoryTranslation productCategoryTranslation)
        {
            _productCategoryTranslation.Create(productCategoryTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<ProductCategoryTranslation> productCategoryTranslations)
        {
            _productCategoryTranslation.Creates(productCategoryTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ProductCategoryTranslation productCategoryTranslation)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
