using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Product.Domain.IRepository;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;

namespace GHM.Product.Infrastructure.Repository
{
    public class ProductConversionUnitRepository : RepositoryBase, IProductConversionUnitRepository
    {
        private readonly IRepository<ProductConversionUnit> _productConversionUnitRepository;
        public ProductConversionUnitRepository(IDbContext context) : base(context)
        {
            _productConversionUnitRepository = Context.GetRepository<ProductConversionUnit>();
        }

        public async Task<int> Insert(ProductConversionUnit productConversionUnit)
        {
            _productConversionUnitRepository.Create(productConversionUnit);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(ProductConversionUnit productConversionUnit)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<ProductConversionUnit> productConversionUnits)
        {
            _productConversionUnitRepository.Creates(productConversionUnits);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string productUnitId, string productUnitConversionId)
        {
            var info = await _productConversionUnitRepository.GetsAsync(false, x => x.ProductUnitId == productUnitId && x.ProductUnitConversionId == productUnitConversionId);
            if (info == null || !info.Any())
                return -1;

            _productConversionUnitRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<ProductConversionUnit> GetInfo(string productUnitId, string productUnitConversionId, bool isReadOnly = false)
        {
            return await _productConversionUnitRepository.GetAsync(isReadOnly, x => x.ProductUnitId == productUnitId && x.ProductUnitConversionId == productUnitConversionId);
        }

        public  Task<List<ProductConversionUnit>> GetsProductId(string productId)
        {
            Expression<Func<ProductUnit, bool>> spec = x => x.ProductId == productId && x.ToDate == null;
            var query = Context.Set<ProductUnit>().Where(spec)
                .Join(Context.Set<ProductConversionUnit>(), x => x.Id, pt => pt.ProductUnitId, (x, pt) =>
                    new ProductConversionUnit
                    {
                        ProductUnitId = pt.ProductUnitId,
                        ProductUnitConversionId = pt.ProductUnitConversionId,
                        Value = pt.Value
                    }).AsNoTracking();

            return  query.ToListAsync();
        }

        public async Task<bool> CheckExists(string productUnitId, string productUnitConversionId)
        {
            return await _productConversionUnitRepository.ExistAsync(x => x.ProductUnitId == productUnitId && x.ProductUnitConversionId == productUnitConversionId);
        }
    }
}
