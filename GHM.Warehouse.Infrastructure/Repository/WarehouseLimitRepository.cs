using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class WarehouseLimitRepository : RepositoryBase, IWarehouseLimitRepository
    {
        private readonly IRepository<WarehouseLimit> _warehouseLimitRepository;
        public WarehouseLimitRepository(IDbContext context) : base(context)
        {
            _warehouseLimitRepository = Context.GetRepository<WarehouseLimit>();
        }

        public Task<List<WarehouseLimitViewModel>> SearchAsync(string tenantId, string languageId, string warehouseId, string keyword,
            int page, int pageSize, out int totalRows)
        {
            Expression<Func<WarehouseLimit, bool>> spec = x => x.TenantId == tenantId && x.WarehouseId == warehouseId;
            Expression<Func<ProductTranslation, bool>> specTranslation = pt => pt.LanguageId == languageId && !pt.IsDelete && pt.TenantId == tenantId;
            Expression<Func<UnitTranslation, bool>> specUnitTranslation = ut => ut.LanguageId == languageId && ut.TenantId == tenantId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<WarehouseLimit>().Where(spec)
                .Select(x => new
                {
                    x.WarehouseId,
                    x.ProductId,
                    x.Quantity,
                    x.UnitId,
                    x.CreateTime,
                });

            var queryInventory = Context.Set<InventoryDailyReport>().Where(x => x.WarehouseId == warehouseId 
            && !query.Select(p => p.ProductId).Contains(x.ProductId))
                 .Select(x => new
                 {
                     x.WarehouseId,
                     x.ProductId,
                     Quantity = 0,
                     x.UnitId,
                     x.CreateTime,
                 }).Distinct();

        
            var result = query.Union(queryInventory)
                .Join(Context.Set<ProductTranslation>().Where(specTranslation), x => x.ProductId, pt => pt.ProductId, (x, pt) =>
               new
               {
                   x.WarehouseId,
                   x.ProductId,
                   x.UnitId,
                   x.CreateTime,
                   x.Quantity,
                   ProductName = pt.Name
               }).GroupJoin(Context.Set<UnitTranslation>().Where(specUnitTranslation), p => p.UnitId, ut => ut.UnitId,
               (p, ut) => new {p, ut})
               .SelectMany(x=> x.ut.DefaultIfEmpty(), (x, ut) => new WarehouseLimitViewModel
               {
                   WarehouseId = x.p.WarehouseId,
                   ProductId = x.p.ProductId,
                   UnitId = x.p.UnitId,
                   Quantity = x.p.Quantity,
                   CreateTime = x.p.CreateTime,
                   UnitName = ut.Name,
                   ProductName = x.p.ProductName
               }).AsNoTracking();

            totalRows = result.Count();

            return result
                .OrderByDescending(x => x.CreateTime)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(WarehouseLimit warehouseLimit)
        {
            _warehouseLimitRepository.Create(warehouseLimit);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(WarehouseLimit warehouseLimit)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string warehouseId, string productId, string unitId)
        {
            var info = await GetInfo(warehouseId, productId, unitId);
            if (info == null)
                return -1;

            _warehouseLimitRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<WarehouseLimit> GetInfo(string warehouseId, string productId, string unitId, bool isReadOnly = false)
        {
            return await _warehouseLimitRepository.GetAsync(isReadOnly, x => x.WarehouseId == warehouseId && x.ProductId == productId && x.UnitId == unitId);
        }

        public async Task<WarehouseLimit> GetInfo(string warehouseId, string productId, string unitId, string tenantId, bool isReadOnly = false)
        {
            return await _warehouseLimitRepository.GetAsync(isReadOnly, x => x.WarehouseId == warehouseId && x.ProductId == productId
            && x.UnitId == unitId && x.TenantId == tenantId);
        }

        public async Task<List<WarehouseLimit>> GetsWarehouseId(string warehouseId, string tenantId, bool isReadOnly = false)
        {
            return await _warehouseLimitRepository.GetsAsync(true, x => x.WarehouseId == warehouseId && x.TenantId == tenantId);
        }

        public async Task<bool> CheckExists(string warehouseId, string productId, string unitId, string tenantId)
        {
            return await _warehouseLimitRepository.ExistAsync(x => x.WarehouseId == warehouseId && x.ProductId == productId
                                                                        && x.UnitId == unitId && x.TenantId == tenantId);
        }
    }
}
