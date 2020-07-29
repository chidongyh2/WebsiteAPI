using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class InventoryDetailRepository : RepositoryBase, IInventoryDetailRepository
    {
        private readonly IRepository<InventoryDetail> _inventoryDetailRepository;
        public InventoryDetailRepository(IDbContext context) : base(context)
        {
            _inventoryDetailRepository = Context.GetRepository<InventoryDetail>();
        }

        public async Task<InventoryDetail> GetInfo(string inventoryId, string productId, bool isReadOnly = false)
        {
            return await _inventoryDetailRepository.GetAsync(isReadOnly, x => x.InventoryId == inventoryId && x.ProductId == productId);
        }

        public async Task<bool> CheckExistsByProductId(string inventoryId, string productId, string lotId)
        {
            return await _inventoryDetailRepository.ExistAsync(x => x.InventoryId == inventoryId && x.ProductId == productId && x.LotId == lotId);
        }

        public async Task<int> ForceDelete(string inventoryId, string productId)
        {
            var info = await GetInfo(inventoryId, productId);
            if (info == null)
                return -1;

            _inventoryDetailRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDeleteByInventoryId(string inventoryId)
        {
            var info = await _inventoryDetailRepository.GetsAsync(false, x => x.InventoryId == inventoryId);
            if (info == null)
                return -1;
            _inventoryDetailRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public Task<List<InventoryDetailViewModel>> GetsByInventoryId(string tenantId, string inventoryId, string warehouseId,
            bool isGetPrice, int page, int pageSize, out int totalRows)
        {
            var query = from i in Context.Set<Inventory>()
                        join id in Context.Set<InventoryDetail>() on i.Id equals id.InventoryId
                        join pt in Context.Set<ProductTranslation>() on id.ProductId equals pt.ProductId
                        join ut in Context.Set<UnitTranslation>() on id.UnitId equals ut.UnitId
                        where i.TenantId == tenantId && i.WarehouseId == warehouseId && i.Id == inventoryId
                        select new InventoryDetailViewModel
                        {
                            Id = id.Id,
                            ProductId = id.ProductId,
                            ProductName = pt.Name,
                            UnitId = id.UnitId,
                            LotId = id.LotId,
                            InventoryQuantity = id.InventoryQuantity,
                            Reason = id.Reason,
                            RealQuantity = id.RealQuantity,
                            UnitName = ut.Name,
                            InventoryId = i.Id,
                            ConcurrencyStamp = id.ConcurrencyStamp,
                            Price = isGetPrice ? id.Price : 0
                        };
            totalRows = query.Count();
            return query
                .Skip((page - 1) * pageSize)
                .Take(pageSize).ToListAsync();
        }

        public async Task<int> Insert(InventoryDetail inventoryDetail)
        {
            _inventoryDetailRepository.Create(inventoryDetail);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<InventoryDetail> inventoryDetails)
        {
            _inventoryDetailRepository.Creates(inventoryDetails);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(InventoryDetail inventoryDetail)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<List<InventoryDetail>> GetInventoryDetailByInventoryId(string tenantId, string inventoryId, bool isReadOnly = false)
        {
            return await _inventoryDetailRepository.GetsAsync(isReadOnly, x => x.InventoryId == inventoryId);
        }

        public async Task<int> Count(string inventoryId)
        {
            return await _inventoryDetailRepository.CountAsync(x => x.InventoryId == inventoryId);
        }

        public async Task<int> Deletes(List<InventoryDetail> inventoryDetails)
        {
            _inventoryDetailRepository.Deletes(inventoryDetails);
            return await Context.SaveChangesAsync();
        }

        public async Task Updates(List<InventoryDetail> inventoryDetails)
        {
            await Context.SaveChangesAsync();
        }
    }
}
