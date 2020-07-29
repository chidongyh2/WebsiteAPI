using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
namespace GHM.Warehouse.Domain.IRepository
{
    public interface IWarehouseRepository
    {
        Task<List<WarehouseViewModel>> Search(string tenantId, string keyword, bool? isActive,
            int page, int pageSize, out int totalRows);

        Task<int> Insert(Models.Warehouse warehouse);

        Task<int> Update(Models.Warehouse warehouse);

        Task<int> Delete(string id);

        Task<int> ForceDelete(string id);

        Task<Domain.Models.Warehouse> GetInfo(string id, bool isReadonly = false);
        Task<Models.Warehouse> GetInfo(string id, string tenantId, bool isReadOnly = false);

        Task<bool> CheckExists(string id, string tenantId, string name);
        Task<bool> CheckExists(string id, string tenantId);

        Task<List<WarehouseSuggestionViewModel>> SearchSuggestions(string tenantId, string userId,
            string keyword, int page, int pageSize, out int totalRows);

        Task<List<ProductSuggestionViewModel>> ProductSuggestions(string tenantId, string keyword, string warehouseId, int page,
            int pageSize, out int totalRows);
    }
}
