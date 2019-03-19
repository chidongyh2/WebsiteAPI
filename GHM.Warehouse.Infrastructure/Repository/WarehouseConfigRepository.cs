using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.ModelMetas;
using Microsoft.EntityFrameworkCore;
namespace GHM.Warehouse.Infrastructure.Repository
{
    public class WarehouseConfigRepository : RepositoryBase, IWarehouseConfigRepository
    {
        private readonly IRepository<WarehouseConfig> _warehouseConfigRepository;
        public WarehouseConfigRepository(IDbContext context) : base(context)
        {
            _warehouseConfigRepository = Context.GetRepository<WarehouseConfig>();
        }

        public async Task<int> Insert(WarehouseConfig warehouseConfig)
        {
            _warehouseConfigRepository.Create(warehouseConfig);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<WarehouseConfig> warehouseConfigs)
        {
            _warehouseConfigRepository.Creates(warehouseConfigs);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(WarehouseConfig warehouseConfig)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<WarehouseConfig> GetInfo(string tenantId, string languageId, string warehouseId, string key, bool isReadOnly = false)
        {
            return await _warehouseConfigRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.LanguageId == languageId
                                                                      && x.Key == key && x.WarehouseId == warehouseId && !x.ToDate.HasValue);
        }

        public async Task<List<WarehouseConfigViewModel>> GetAll(string tenantId, string languageId, string warehouseId)
        {
            return await _warehouseConfigRepository.GetsAsAsync(x => new WarehouseConfigViewModel
            {
                TenantId = tenantId,
                Value = x.Value,
                LanguageId = x.LanguageId,
                Key = x.Key,
                DisplayName = x.DisplayName,
                ConcurrencyStamp = x.ConcurrencyStamp
            }, x => x.TenantId == tenantId && x.LanguageId == languageId && x.WarehouseId == warehouseId && !x.ToDate.HasValue);
        }

        public async Task<bool> CheckKeyExists(string tenantId, string languageId, string warehouseId, string key)
        {
            return await _warehouseConfigRepository.ExistAsync(x => x.TenantId == tenantId && x.LanguageId == languageId
                                                            && x.Key == key && x.WarehouseId == warehouseId);
        }

        /// <summary>
        /// Lấy về phương pháp tính tồn kho.
        /// </summary>
        /// <param name="tenantId">Mã khách hàng</param>
        /// <param name="warehouseId">Mã kho</param>
        /// <param name="date">Thời gian áp dụng</param>
        /// <returns></returns>
        public async Task<InventoryCalculatorMethod?> GetInventoryCalculatorMethod(string tenantId, string warehouseId)
        {
            var key = ClassHelper.GetPropertyNameAsKey<WarehouseConfigSetting>("CalculatorMethod");
            var query = from wc in Context.Set<WarehouseConfig>()
                        where wc.TenantId == tenantId && wc.WarehouseId == warehouseId && !wc.ToDate.HasValue
                              && wc.Key == key
                        select wc.Value;

            var inventoryCalculatorMethodConfig = await query.FirstOrDefaultAsync();
            int.TryParse(inventoryCalculatorMethodConfig, out int inventoryCalculatorMethodValue);
            return (InventoryCalculatorMethod?)inventoryCalculatorMethodValue;
        }
    }
}
