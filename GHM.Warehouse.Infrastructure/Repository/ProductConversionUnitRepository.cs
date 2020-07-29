using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure.Repository
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

        //public async Task<int> Delete(string productId, string unitId, string conversionUnitId)
        //{
        //    var info = await GetInfo(productId, unitId, conversionUnitId);
        //    if (info == null)
        //        return -1;

        //    info.IsDelete = true;
        //    return await Context.SaveChangesAsync();
        //}

        public async Task<ProductConversionUnit> GetInfo(string tenantId, string productId, string unitId, string conversionUnitId,
            bool isReadOnly = false)
        {
            return await _productConversionUnitRepository.GetAsync(isReadOnly, x => x.ProductId == productId && x.UnitId == unitId
                                                                                    && x.ConversionUnitId == conversionUnitId
                                                                                    && x.TenantId == tenantId && !x.ToDate.HasValue);
        }

        public Task<List<ProductConversionUnit>> GetsProductId(string tenantId, string productId)
        {
            Expression<Func<ProductUnit, bool>> spec = x => x.ProductId == productId && x.ToDate == null && x.TenantId == tenantId;
            var query = Context.Set<ProductUnit>().Where(spec)
                .Join(Context.Set<ProductConversionUnit>(), x => x.Id, pcu => pcu.ProductId, (x, pcu) =>
                    new ProductConversionUnit
                    {
                        UnitId = pcu.UnitId,
                        ConversionUnitId = pcu.ConversionUnitId,
                        Value = pcu.Value
                    }).AsNoTracking();

            return query.ToListAsync();
        }

        public async Task<bool> CheckExists(string tenantId, string productId, string unitId, string conversionUnitId)
        {
            return await _productConversionUnitRepository.ExistAsync(x => x.ProductId == productId && x.UnitId == unitId
                                                                          && x.ConversionUnitId == conversionUnitId && x.TenantId == tenantId);
        }

        public async Task<decimal?> GetConversion(string tenantId, string productId, string unitId, string conversionUnitId)
        {
            var greaterConversion = await GetInfo(tenantId, productId, unitId, conversionUnitId, true);
            if (greaterConversion != null)
                return greaterConversion.Value;

            // Trường hợp người lại là đơn vị chuyển đổi nhỏ hơn đơn vị mặc định.
            var lessConversion = await GetInfo(tenantId, productId, unitId, conversionUnitId, true);
            return -lessConversion?.Value;
        }

        public async Task<int> ForceDeleteByProductId(string tenantId, string productId)
        {
            var productConversionUnits =
                await _productConversionUnitRepository.GetsAsync(false, x => x.ProductId == productId);
            if (productConversionUnits == null || !productConversionUnits.Any())
                return -1;

            _productConversionUnitRepository.Deletes(productConversionUnits);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<ProductConversionUnitViewModel>> GetsByProductId(string tenantId, string productId)
        {
            var queryUnit = from pcu in Context.Set<ProductConversionUnit>()
                            join pu in Context.Set<ProductUnit>() on new { pcu.TenantId, pcu.UnitId, pcu.ProductId } equals new
                            {
                                pu.TenantId,
                                pu.UnitId,
                                pu.ProductId
                            }
                            join ut in Context.Set<UnitTranslation>() on pcu.UnitId equals ut.UnitId
                            where pcu.ProductId == productId && !pcu.IsDelete && pu.ProductId == productId
                                  && pcu.TenantId == tenantId && !pu.IsDelete && !pu.ToDate.HasValue
                                  && !pcu.ToDate.HasValue && pu.TenantId == tenantId
                            select new ProductConversionUnitViewModel
                            {
                                UnitId = pcu.UnitId,
                                UnitName = ut.Name,
                                Value = pcu.Value,
                                SalePrice = pu.SalePrice,
                                ConversionUnitId = pcu.ConversionUnitId
                            };
            var queryConversionUnit = from u in queryUnit
                                      join ut in Context.Set<UnitTranslation>() on u.ConversionUnitId equals ut.UnitId
                                      where !ut.IsDelete
                                      select new ProductConversionUnitViewModel
                                      {
                                          UnitId = u.UnitId,
                                          UnitName = u.UnitName,
                                          Value = u.Value,
                                          SalePrice = u.SalePrice,
                                          ConversionUnitId = u.ConversionUnitId,
                                          ConversionUnitName = ut.Name
                                      };
            return await queryUnit
                .OrderBy(x => x.UnitName)
                .ToListAsync();
        }

        public async Task<List<ProductConversionUnit>> GetsAll(string tenantId, string productId, bool isReadOnly = false)
        {
            return await _productConversionUnitRepository.GetsAsync(isReadOnly,
                x => x.ProductId == productId && !x.IsDelete && x.TenantId == tenantId);
        }

        public async Task<int> Delete(string tenantId, string productId, string unitId)
        {
            var conversionUnits = await _productConversionUnitRepository.GetsAsync(false, x =>
                x.ProductId == productId && x.UnitId == unitId && !x.IsDelete && x.TenantId == tenantId);
            if (conversionUnits == null || !conversionUnits.Any())
                return -1;

            foreach (var conversionUnit in conversionUnits)
            {
                conversionUnit.IsDelete = true;
            }

            return await Context.SaveChangesAsync();
        }

        public async Task<int> Updates(List<ProductConversionUnit> productConversionUnits)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<string> GetCurrentConversionUnitGroupId(string tenantId, string productId, DateTime date)
        {
            var query = from pcu in Context.Set<ProductConversionUnit>()
                        where !pcu.IsDelete && pcu.TenantId == tenantId && pcu.ProductId == productId
                              && date >= pcu.CreateTime && date <= pcu.ToDate
                        select pcu.ConversionUnitGroupId;
            var conversionUnitGroupId = await query.FirstOrDefaultAsync();
            if (!string.IsNullOrEmpty(conversionUnitGroupId))
                return conversionUnitGroupId;

            return await (from pcu in Context.Set<ProductConversionUnit>()
                          where !pcu.IsDelete && pcu.TenantId == tenantId && pcu.ProductId == productId
                                && !pcu.ToDate.HasValue
                          select pcu.ConversionUnitGroupId).FirstOrDefaultAsync();
        }
    }
}
