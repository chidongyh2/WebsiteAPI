using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;


namespace GHM.Warehouse.Infrastructure.Repository
{
    public class ProductImageRepository : RepositoryBase, IProductImageRepository
    {
        private readonly IRepository<ProductImage> _productImageRepository;
        public ProductImageRepository(IDbContext context) : base(context)
        {
            _productImageRepository = Context.GetRepository<ProductImage>();
        }

        public async Task<int> Insert(ProductImage productImage)
        {
            _productImageRepository.Create(productImage);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<ProductImage> productImages)
        {
            _productImageRepository.Creates(productImages);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string productImageId, string tenantId)
        {
            var info = await GetInfo(productImageId, tenantId);
            if (info == null)
                return -1;

            _productImageRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByProductId(string productId)
        {
            var info = await _productImageRepository.GetsAsync(false, x => x.ProductId == productId);
            if (info == null || !info.Any())
                return -1;

            _productImageRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<ProductImage> GetInfo(string productImageId, string tenantId, bool isReadOnly = false)
        {
            return await _productImageRepository.GetAsync(isReadOnly, x => x.Id == productImageId);
        }

        public async Task<List<ProductImage>> GetsProductId(string productId, bool isReadOnly = false)
        {
            return await _productImageRepository.GetsAsync(true, x => x.ProductId == productId);
        }

        public async Task<bool> CheckExists(string productId, string Url)
        {
            Url = Url.Trim();
            return await _productImageRepository.ExistAsync(x =>
                x.ProductId == productId && x.Url == Url);
        }

        public async  Task<int> DeleteByProductId(string productId, string tennantId)
        {
            var listProductImage = await GetsProductId(productId, tennantId);
            foreach(var item in listProductImage)
            {
                item.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }
       
        public  async Task<List<ProductImage>> GetsProductId(string productId, string tenantId, bool isReadOnly = false)
        {
            return await _productImageRepository.GetsAsync(isReadOnly, x => x.TenantId == tenantId && !x.IsDelete && x.ProductId == productId);
        }

        public Task<bool> CheckExists(string productId, string url, string tenantId)
        {
            return _productImageRepository.ExistAsync(x => x.TenantId == tenantId && x.ProductId == productId && x.Url == url & !x.IsDelete);
        }
    }
}
