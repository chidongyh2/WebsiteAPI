using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class ProductConversionUnitGroupRepository : RepositoryBase, IProductConversionUnitGroupRepository

    {
        private readonly IRepository<ProductConversionUnitGroup> _productConversionUnitGroupRepository;
        public ProductConversionUnitGroupRepository(IDbContext context) : base(context)
        {
            _productConversionUnitGroupRepository = Context.GetRepository<ProductConversionUnitGroup>();
        }

        public async Task<bool> CheckExists(string id, string productConversionUnitId)
        {
            return await _productConversionUnitGroupRepository.ExistAsync(x =>
                x.Id == id && x.ProductConversionUnitId == productConversionUnitId);
        }

        public async Task<int> Insert(string id, string productConversionUnitId)
        {
            _productConversionUnitGroupRepository.Create(new ProductConversionUnitGroup
            {
                Id = id,
                ProductConversionUnitId = productConversionUnitId
            });
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<ProductConversionUnitGroup> productConversionUnitGroup)
        {
            throw new System.NotImplementedException();
        }
    }
}
