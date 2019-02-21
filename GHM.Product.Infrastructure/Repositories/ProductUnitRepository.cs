using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GHM.Product.Domain.IRepository;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

namespace GHM.Product.Infrastructure.Repository
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

            _productUnitRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateToDateByProductUnitGroupId(string productUnitGroupId)
        {
            var info = await _productUnitRepository.GetsAsync(false, x => x.ProductUnitGroupId == productUnitGroupId);
            if (info == null || !info.Any())
                return -1;
            foreach (var productUnit in info)
            {
                productUnit.ToDate = DateTime.Now;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<ProductUnit> GetInfo(string productUnitId, bool isReadOnly = false)
        {
            return await _productUnitRepository.GetAsync(isReadOnly, x => x.Id == productUnitId);
        }

        public async Task<bool> CheckExists(string productId, string unitId)
        {
            return await _productUnitRepository.ExistAsync(x => x.ProductId == productId && x.UnitId == unitId);
        }

        public async Task<bool> CheckExists(string unitId)
        {
            return await _productUnitRepository.ExistAsync(x => x.UnitId == unitId);
        }

        public async Task<List<ProductUnit>> GetsProductId(string productId, bool isReadOnly = false)
        {
            return await _productUnitRepository.GetsAsync(true, x => x.ProductId == productId && x.ToDate == null);
        }

        public async Task<string> GetDefaultUnitId(string productId)
        {
            return await _productUnitRepository.GetAsAsync(x => x.UnitId,
                x => x.ProductId == productId && x.IsDefault && !x.ToDate.HasValue);
        }

        public Task<List<UnitSuggestionsViewModel>> SearchSuggestionsUnitByProduct(string tenantId, string languageId, string productId,
             int page, int pageSize, out int totalRows)
        {
            Expression<Func<ProductUnit, bool>> spec = t => !t.ToDate.HasValue && t.ProductId == productId;
            Expression<Func<UnitTranslation, bool>> specunitTranslation = tt => tt.LanguageId == languageId;

            var query = Context.Set<ProductUnit>().Where(spec)
                .Join(Context.Set<UnitTranslation>().Where(specunitTranslation), t => t.UnitId, tt => tt.UnitId, (t, tt) =>
                    new UnitSuggestionsViewModel
                    {
                        Id = t.UnitId,
                        Name = tt.Name,
                        IsDefault = t.IsDefault,
                        Price = t.SalePrice
                    });

            totalRows = query.Count();
            return query.OrderBy(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<List<ProductUnitViewModel>> GetByProductId(string tenantId, string productId)
        {
            return await (from pu in Context.Set<ProductUnit>()
                          join ut in Context.Set<UnitTranslation>() on pu.UnitId equals ut.UnitId
                          where pu.ProductId == productId && !pu.ToDate.HasValue && ut.LanguageId == CultureInfo.CurrentCulture.Name
                          select new ProductUnitViewModel
                          {
                              Id = pu.UnitId,
                              Name = ut.Name
                          }).ToListAsync();
        }
    }
}
