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
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.ModelMetas;
using Microsoft.EntityFrameworkCore;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class WarehouseManagerConfigRepository : RepositoryBase, IWarehouseManagerConfigRepository
    {
        private readonly IRepository<WarehouseManagerConfig> _warehouseManagerConfigRepository;
        public WarehouseManagerConfigRepository(IDbContext context) : base(context)
        {
            _warehouseManagerConfigRepository = Context.GetRepository<WarehouseManagerConfig>();
        }

        public Task<List<WarehouseManagerConfigViewModel>> Search(string tenantId, string warehouseId, int page, int pageSize, out int totalRows)
        {
            Expression<Func<WarehouseManagerConfig, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && x.WarehouseId == warehouseId;

            var query = Context.Set<WarehouseManagerConfig>().Where(spec)
                .Select(x => new WarehouseManagerConfigViewModel
                {
                    UserId = x.UserId,
                    WarehouseId = warehouseId,
                    FullName = x.FullName,
                    Avatar = x.Avatar,
                    Permissions = x.Permissions,
                    PhoneNumber = x.PhoneNumber,
                    CreateTime = x.CreateTime
                }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.CreateTime)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(WarehouseManagerConfig warehouseManagerConfig)
        {
            _warehouseManagerConfigRepository.Create(warehouseManagerConfig);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<WarehouseManagerConfig> warehouseManagerConfigs)
        {
            _warehouseManagerConfigRepository.Creates(warehouseManagerConfigs);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(WarehouseManagerConfig warehouseManagerConfig)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string warehouseId, string userId)
        {
            var info = await GetInfo(warehouseId, userId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string warehouseId, string userId)
        {
            var info = await GetInfo(warehouseId, userId);
            if (info == null)
                return -1;

            _warehouseManagerConfigRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByWarehouseId(string warehouseId)
        {
            var info = await _warehouseManagerConfigRepository.GetsAsync(false, x => x.WarehouseId == warehouseId);
            if (info == null || !info.Any())
                return -1;

            _warehouseManagerConfigRepository.Deletes(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<WarehouseManagerConfig> GetInfo(string warehouseId, string userId, bool isReadOnly = false)
        {
            return await _warehouseManagerConfigRepository.GetAsync(isReadOnly, x => x.WarehouseId == warehouseId && x.UserId == userId && !x.IsDelete);
        }

        public async Task<WarehouseManagerConfig> GetInfo(string warehouseId, string userId, string tenantId, bool isReadOnly = false)
        {
            return await _warehouseManagerConfigRepository.GetAsync(isReadOnly, x => x.WarehouseId == warehouseId && x.UserId == userId
            && x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<List<WarehouseManagerConfig>> GetManagerInfo(string tenantId, string warehouseId)
        {
            return await _warehouseManagerConfigRepository.GetsAsync(true,
                x => x.TenantId == tenantId && x.WarehouseId == warehouseId && !x.IsDelete);
        }

        public async Task<List<WarehouseManagerConfig>> GetsWarehouseId(string warehouseId, string tenantId, bool isReadOnly = false)
        {
            return await _warehouseManagerConfigRepository.GetsAsync(true, x => x.WarehouseId == warehouseId && x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<bool> CheckExists(string warehouseId, string userId, string tenantId)
        {
            return await _warehouseManagerConfigRepository.ExistAsync(x => x.WarehouseId == warehouseId && x.UserId == userId && x.TenantId == tenantId);
        }

        public Task<List<Suggestion<string>>> Suggestions(string tenantId, string warehouseId, string keyword, int page,
            int pageSize, out int totalRows)
        {
            Expression<Func<WarehouseManagerConfig, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete;
            if (!string.IsNullOrEmpty(warehouseId))
                spec = spec.And(x => x.WarehouseId == warehouseId);

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            totalRows = _warehouseManagerConfigRepository.Count(spec);
            return _warehouseManagerConfigRepository.GetsAsAsync(x => new Suggestion<string>
            {
                Id = x.UserId,
                Name = x.FullName
            }, spec);
        }
    }
}
