using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IWarehouseConfigService
    {
        Task<ActionResultResponse> Save(List<WarehouseConfigMeta> warehouseConfigMetas);

        Task<ActionResultResponse> Save(WarehouseConfigMeta warehouseConfigMeta);

        Task<SearchResult<WarehouseConfigViewModel>> GetWarehouseConfigs(string tenantId, string languageId, string warehouseId);
    }
}
