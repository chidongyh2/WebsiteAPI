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
using GHM.Warehouse.Domain.ModelMetas;
using Microsoft.EntityFrameworkCore;
namespace GHM.Warehouse.Infrastructure.Repository
{
    public class WarehouseRepository : RepositoryBase, IWarehouseRepository
    {
        private readonly IRepository<Domain.Models.Warehouse> _warehouseRepository;
        public WarehouseRepository(IDbContext context) : base(context)
        {
            _warehouseRepository = Context.GetRepository<Domain.Models.Warehouse>();
        }

        public Task<List<WarehouseViewModel>> Search(string tenantId, string keyword, bool? isActive, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Domain.Models.Warehouse, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<Domain.Models.Warehouse>().Where(spec)
                .OrderByDescending(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize);

            totalRows = query.Count();

            var result = query.GroupJoin(Context.Set<WarehouseManagerConfig>().Where(x => !x.IsDelete), w => w.Id, wm => wm.WarehouseId, (w, wm) => new { w, wm })
                .SelectMany(x => x.wm.DefaultIfEmpty(), (x, wm) => new
                {
                    x.w.Id,
                    x.w.Name,
                    x.w.IsActive,
                    x.w.Address,
                    x.w.Description,
                    wm.FullName
                }).GroupBy(x => new { x.Id, x.IsActive, x.Name, x.Address, x.Description },
                (key, g) => new WarehouseViewModel
                {
                    Id = key.Id,
                    Name = key.Name,
                    IsActive = key.IsActive,
                    Description = key.Description,
                    Address = key.Address,
                    ListManagerFullName = g.Select(x => x.FullName).ToList(),
                }).AsNoTracking();

            return result.ToListAsync();
        }

        public async Task<int> Insert(Domain.Models.Warehouse warehouse)
        {
            _warehouseRepository.Create(warehouse);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Domain.Models.Warehouse warehouse)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            _warehouseRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<Domain.Models.Warehouse> GetInfo(string id, bool isReadonly = false)
        {
            return await _warehouseRepository.GetAsync(isReadonly, x => x.Id == id && !x.IsDelete);
        }

        public async Task<Domain.Models.Warehouse> GetInfo(string id, string tenantId, bool isReadOnly = false)
        {
            return await _warehouseRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.Id == id && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string id, string tenantId, string name)
        {
            name = name.Trim();
            return await _warehouseRepository.ExistAsync(x => x.Id != id && x.TenantId == tenantId && x.Name == name && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string id, string tenantId)
        {
            return await _warehouseRepository.ExistAsync(x => x.Id == id && x.TenantId == tenantId && !x.IsDelete);
        }

        public Task<List<WarehouseSuggestionViewModel>> SearchSuggestions(string tenantId, string userId, string keyword, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Domain.Models.Warehouse, bool>> spec = t => !t.IsDelete && t.TenantId == tenantId && t.IsActive;
            Expression<Func<Domain.Models.WarehouseManagerConfig, bool>> specConfig = t => !t.IsDelete && t.TenantId == tenantId && t.UserId == userId;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<Domain.Models.Warehouse>().Where(spec)
                .Join(Context.Set<Domain.Models.WarehouseManagerConfig>().Where(specConfig), w => w.Id, wc => wc.WarehouseId,
                (w, wc) => new WarehouseSuggestionViewModel
                {
                    Id = w.Id,
                    Name = w.Name,
                });

            totalRows = query.Count();

            return query.OrderBy(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<List<ProductSuggestionViewModel>> ProductSuggestions(string tenantId, string keyword, string warehouseId, int page,
            int pageSize, out int totalRows)
        {
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars();
            }

            var query = from ir in Context.Set<InventoryReport>()
                        join ird in Context.Set<InventoryReportDetail>() on ir.Id equals ird.InventoryReportId
                        join p in Context.Set<Product>() on ir.ProductId equals p.Id
                        join pt in Context.Set<ProductTranslation>() on ir.ProductId equals pt.ProductId
                        where ir.TenantId == tenantId
                              && (string.IsNullOrEmpty(keyword) || (pt.UnsignName.Contains(keyword) || ird.GoodsReceiptNoteDetailCode.Equals(keyword)))
                        && ir.WarehouseId == warehouseId
                        group ir by new { ir.ProductId, pt.Name, p.Thumbnail, ird.LotId } into g
                        select new ProductSuggestionViewModel
                        {
                            Id = g.Key.ProductId,
                            Name = g.Key.Name,
                            Image = g.Key.Thumbnail,
                            LotId = g.Key.LotId,
                        };

            totalRows = query.Count();
            return query
                .OrderByDescending(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }
    }
}
