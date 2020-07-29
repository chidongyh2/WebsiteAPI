using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;
using GHM.Warehouse.Domain.Constants;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class InventoryRepository : RepositoryBase, IInventoryRepository
    {
        private readonly IRepository<Inventory> _inventorieRepository;
        public InventoryRepository(IDbContext context) : base(context)
        {
            _inventorieRepository = Context.GetRepository<Inventory>();
        }
        public async Task<bool> CheckExists(string inventorieId, string tenantId)
        {
            return await _inventorieRepository.ExistAsync(x =>
                x.Id == inventorieId && x.TenantId == tenantId);
        }

        public async Task<int> ForceDelete(string inventorieId)
        {
            var info = await GetInfo(inventorieId);
            if (info == null)
                return -1;

            _inventorieRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<Inventory> GetInfo(string inventorieId, bool isReadonly = false)
        {
            return await _inventorieRepository.GetAsync(isReadonly, x => x.Id == inventorieId);
        }

        public async Task<Inventory> GetInfo(string tenantId, string inventorieId, bool isReadonly = false)
        {
            return await _inventorieRepository.GetAsync(isReadonly, x => x.Id == inventorieId && x.TenantId == tenantId);
        }

        public async Task<int> Insert(Inventory inventorie)
        {
            _inventorieRepository.Create(inventorie);
            return await Context.SaveChangesAsync();
        }

        public Task<List<InventoryViewModel>> Search(string tenantId, string warehouseId, DateTime? fromDate, DateTime? toDate,
            InventoryStatus? status, int page, int pageSize, out int totalRows)
        {
            var query = from i in Context.Set<Inventory>()
                        join w in Context.Set<Domain.Models.Warehouse>() on i.WarehouseId equals w.Id
                        where i.TenantId == tenantId && i.WarehouseId == warehouseId
                                                     && (!fromDate.HasValue || i.CreateTime >= fromDate)
                                                     && (!toDate.HasValue || i.CreateTime <= toDate)
                                                     && (!status.HasValue || i.Status == status)
                        select new InventoryViewModel
                        {
                            Id = i.Id,
                            Date = i.InventoryDate,
                            WarehouseId = i.WarehouseId,
                            WarehouseName = w.Name,
                            CreatorFullName = i.CreatorFullName,
                            CreatorId = i.CreatorId,
                            Status = i.Status,
                            Note = i.Note
                        };
            totalRows = query.Count();
            return query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Update(Inventory inventorie)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> GetTotal(string tenantId)
        {
            return await _inventorieRepository.CountAsync(x => x.TenantId == tenantId);
        }
    }
}
