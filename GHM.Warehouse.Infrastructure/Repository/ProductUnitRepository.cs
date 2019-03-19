using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class ProductUnitRepository : RepositoryBase, IProductUnitRepository
    {
        private readonly IRepository<ProductUnit> _productUnitRepository;
        public ProductUnitRepository(IDbContext context) : base(context)
        {
            _productUnitRepository = Context.GetRepository<ProductUnit>();
        }

        public async Task<int> Insert(ProductUnit productUnit)
        {
            _productUnitRepository.Create(productUnit);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<ProductUnit> productUnits)
        {
            _productUnitRepository.Creates(productUnits);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string productUnitId)
        {
            var info = await GetInfo(productUnitId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            info.ToDate = DateTime.Now;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string tenantId, string productId, string unitId)
        {
            var productUnit = await _productUnitRepository.GetAsync(false, x => x.ProductId == productId && x.UnitId
                                                                                == unitId && x.TenantId == tenantId && !x.ToDate.HasValue
                                                                                && !x.IsDelete);
            if (productUnit == null)
                return -1;

            productUnit.IsDelete = true;
            productUnit.ToDate = DateTime.Now;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateToDateByProductUnitGroupId(string productUnitGroupId)
        {
            // TODO: Check
            //var info = await _productUnitRepository.GetsAsync(false, x => x.ProductUnitGroupId == productUnitGroupId);
            //if (info == null || !info.Any())
            //    return -1;
            //foreach (var productUnit in info)
            //{
            //    productUnit.ToDate = DateTime.Now;
            //}
            //return await Context.SaveChangesAsync();
            return 1;
        }

        public async Task<ProductUnit> GetInfo(string productUnitId, bool isReadOnly = false)
        {
            return await _productUnitRepository.GetAsync(isReadOnly, x => x.Id == productUnitId && !x.IsDelete
                                                                          && !x.ToDate.HasValue);
        }

        public async Task<ProductUnit> GetInfo(string tenantId, string productId, string unitId)
        {
            return await _productUnitRepository.GetAsync(false,
                x => x.TenantId == tenantId && x.ProductId == productId && x.UnitId == unitId && !x.IsDelete
                     && !x.ToDate.HasValue);
        }

        public async Task<bool> CheckExists(string tenantId, string productId, string unitId)
        {
            return await _productUnitRepository.ExistAsync(x => x.TenantId == tenantId && x.ProductId == productId && x.UnitId == unitId && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string unitId)
        {
            return await _productUnitRepository.ExistAsync(x => x.UnitId == unitId);
        }

        public async Task<List<ProductUnit>> GetsProductId(string productId, bool isReadOnly = false)
        {
            return await _productUnitRepository.GetsAsync(isReadOnly, x => x.ProductId == productId && !x.IsDelete);
        }

        public async Task<List<ProductUnitViewModel>> GetsByProductId(string productId)
        {
            var query = from pu in Context.Set<ProductUnit>()
                        join ut in Context.Set<UnitTranslation>() on pu.UnitId equals ut.UnitId
                        where pu.ProductId == productId && !pu.IsDelete
                        select new ProductUnitViewModel
                        {
                            Id = pu.Id,
                            IsDefault = pu.IsDefault,
                            Name = ut.Name,
                            UnitId = pu.UnitId,
                            SalePrice = pu.SalePrice
                        };

            return await query.ToListAsync();
        }

        public async Task<string> GetDefaultUnitId(string productId)
        {
            return await _productUnitRepository.GetAsAsync(x => x.UnitId,
                x => x.ProductId == productId && x.IsDefault && !x.ToDate.HasValue && !x.IsDelete);
        }

        public async Task<ProductUnitViewModel> GetDefaultUnit(string tenantId, string productId)
        {
            var query = from pu in Context.Set<ProductUnit>()
                        join ut in Context.Set<UnitTranslation>() on pu.UnitId equals ut.UnitId
                        where pu.ProductId == productId && pu.IsDefault && !pu.IsDelete && !pu.ToDate.HasValue
                              && pu.TenantId == tenantId && !pu.IsDelete
                        select new ProductUnitViewModel
                        {
                            Id = pu.Id,
                            UnitId = pu.UnitId,
                            Name = ut.Name,
                            IsDefault = pu.IsDefault,
                            SalePrice = pu.SalePrice
                        };
            return await query.FirstOrDefaultAsync();
        }

        public Task<List<UnitSuggestionsViewModel>> SearchSuggestionsUnitByProduct(string tenantId, string languageId, string productId,
             int page, int pageSize, out int totalRows)
        {
            var query = from pu in Context.Set<ProductUnit>()
                        join ut in Context.Set<UnitTranslation>() on pu.UnitId equals ut.UnitId
                        join pcu in Context.Set<ProductConversionUnit>()
                            on new { pu.TenantId, pu.ProductId, pu.UnitId } equals new { pcu.TenantId, pcu.ProductId, pcu.UnitId }
                            into gpcu
                        from pcu in gpcu.DefaultIfEmpty()
                        where pu.TenantId == tenantId && pu.ProductId == productId && !pu.ToDate.HasValue
                              && ut.LanguageId == CultureInfo.CurrentCulture.Name
                              && !pu.IsDelete && !ut.IsDelete && !pcu.ToDate.HasValue
                        select new UnitSuggestionsViewModel
                        {
                            Id = pu.UnitId,
                            Name = ut.Name,
                            IsDefault = pu.IsDefault,
                            Price = pu.SalePrice
                        };
            totalRows = query.Count();

            return query.Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<List<ProductUnitViewModel>> GetByProductId(string tenantId, string productId)
        {
            return await (from pu in Context.Set<ProductUnit>()
                          join ut in Context.Set<UnitTranslation>() on pu.UnitId equals ut.UnitId
                          join pcu in Context.Set<ProductConversionUnit>()
                              on new { pu.TenantId, pu.ProductId, pu.UnitId } equals new { pcu.TenantId, pcu.ProductId, pcu.UnitId }
                                into gpcu
                          from pcu in gpcu.DefaultIfEmpty()
                          where pu.TenantId == tenantId && pu.ProductId == productId && !pu.ToDate.HasValue
                                && ut.LanguageId == CultureInfo.CurrentCulture.Name
                                && !pu.IsDelete && !ut.IsDelete && !pcu.ToDate.HasValue
                          select new ProductUnitViewModel
                          {
                              Id = pu.UnitId,
                              UnitId = pu.UnitId,
                              Name = ut.Name,
                              IsDefault = pu.IsDefault,
                              ConversionValue = pcu != null ? pcu.Value : 1
                          }).ToListAsync();
        }

        public async Task<bool> CheckDefaultUnitExists(string productId)
        {
            return await _productUnitRepository.ExistAsync(x =>
                x.ProductId == productId && !x.IsDelete && !x.ToDate.HasValue);
        }

        public async Task<int> ForceDeleteByProductId(string productId)
        {
            var productUnits = await _productUnitRepository.GetsAsync(false, x => x.ProductId == productId);
            if (productUnits == null || !productUnits.Any())
                return -1;

            _productUnitRepository.Deletes(productUnits);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<ProductUnit>> GetsAll(string tenantId, string productId, bool isReadOnly = false)
        {
            return await _productUnitRepository.GetsAsync(isReadOnly,
                x => !x.IsDelete && x.TenantId == tenantId && x.ProductId == productId && !x.ToDate.HasValue);
        }

        public async Task<int> Update(ProductUnit productUnit)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
