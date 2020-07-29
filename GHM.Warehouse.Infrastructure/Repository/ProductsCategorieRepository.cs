using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class ProductsCategorieRepository : RepositoryBase, IProductsCategorieRepository
    {
        private readonly IRepository<ProductsCategory> _productsCategorieRepository;
        public ProductsCategorieRepository(IDbContext context) : base(context)
        {
            _productsCategorieRepository = Context.GetRepository<ProductsCategory>();
        }

        public async Task<int> Insert(ProductsCategory productsCategory)
        {
            _productsCategorieRepository.Create(productsCategory);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<ProductsCategory> productsCategories)
        {
            _productsCategorieRepository.Creates(productsCategories);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByProductId(string productId, string tenantId)
        {
            var info = await _productsCategorieRepository.GetsAsync(false, x => x.ProductId == productId && x.TenantId == tenantId);
            if (info == null || !info.Any())
                return -1;

            _productsCategorieRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string productId, int categoryId)
        {
            var info = await GetInfo(productId, categoryId);
            if (info == null)
                return -1;

            _productsCategorieRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<ProductsCategory> GetInfo(string productId, int categoryId, bool isReadOnly = false)
        {
            return await _productsCategorieRepository.GetAsync(isReadOnly, x => x.ProductId == productId && x.CategoryId == categoryId);
        }

        public async Task<List<ProductsCategorieViewModel>> GetProductCategoryNameByProductId(string tenantId, string productId, bool isReadOnly = false)
        {
            var query = Context.Set<ProductsCategory>().Where(x => x.ProductId == productId)
                       .Join(Context.Set<ProductCategory>().Where(x => x.TenantId == tenantId && !x.IsDelete), productCategories => productCategories.CategoryId, category => category.Id,
                       (productCategories, category) => new
                       {
                           productCategories.CategoryId,
                           productCategories.ProductId
                       })
                       .Join(Context.Set<ProductCategoryTranslation>(), c => c.CategoryId, ct => ct.ProductCategoryId, (c, ct) => new ProductsCategorieViewModel
                       {
                           CategoryId = c.CategoryId,
                           ProductId = c.ProductId,
                           CategoryName = ct.Name,
                           LanguageId = ct.LanguageId
                       }).AsNoTracking().ToList();

            return query;
        }

        public async Task<List<ProductsCategory>> GetByProductId(string productId, string tenantId)
        {
            return await _productsCategorieRepository.GetsAsync(false, x => x.ProductId == productId && x.TenantId == tenantId);
        }

        public async Task<bool> CheckExists(string productId, int categoryId)
        {
            return await _productsCategorieRepository.ExistAsync(x => x.ProductId == productId && x.CategoryId == categoryId);
        }

        public async Task<bool> CheckCategoryHasProduct(int categoryId)
        {
            return await _productsCategorieRepository.ExistAsync(x => x.CategoryId == categoryId);
        }
    }
}
