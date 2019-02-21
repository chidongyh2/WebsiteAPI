using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Product.Domain.IRepository;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;

namespace GHM.Product.Infrastructure.Repository
{
    public class ProductsCategorieRepository : RepositoryBase, IProductsCategorieRepository
    {
        private readonly IRepository<ProductsCategorie> _productsCategorieRepository;
        public ProductsCategorieRepository(IDbContext context) : base(context)
        {
            _productsCategorieRepository = Context.GetRepository<ProductsCategorie>();
        }

        public async Task<int> Insert(ProductsCategorie productsCategorie)
        {
            _productsCategorieRepository.Create(productsCategorie);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<ProductsCategorie> productsCategories)
        {
            _productsCategorieRepository.Creates(productsCategories);
            return await Context.SaveChangesAsync();
        }

        public int DeleteByProductId(string productId)
        {
            var info = _productsCategorieRepository.Gets(false, x => x.ProductId == productId);
            if (info == null || !info.Any())
                return -1;

            _productsCategorieRepository.Deletes(info);
            return Context.SaveChanges();
        }

        public async Task<int> Delete(string productId, int categoryId)
        {
            var info = await GetInfo(productId, categoryId);
            if (info == null)
                return -1;

            _productsCategorieRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<ProductsCategorie> GetInfo(string productId, int categoryId, bool isReadOnly = false)
        {
            return await _productsCategorieRepository.GetAsync(isReadOnly, x => x.ProductId == productId && x.CategoryId == categoryId);
        }

        public async Task<List<ProductsCategorieViewModel>> GetProductCategoryNameByProductId(string tenantId, string productId, bool isReadOnly = false)
        {
            var query = Context.Set<ProductsCategorie>().Where(x => x.ProductId == productId)
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

        public async Task<List<ProductsCategorie>> GetByProductId(string productId)
        {
            return await _productsCategorieRepository.GetsAsync(false, x => x.ProductId == productId);
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
