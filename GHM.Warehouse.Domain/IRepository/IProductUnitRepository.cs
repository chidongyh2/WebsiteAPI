using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IProductUnitRepository
    {
        Task<int> Insert(ProductUnit productUnit);

        Task<int> Inserts(List<ProductUnit> productUnits);

        Task<int> Delete(string productUnitId, string tenantId);

        Task<int> Delete(string tenantId, string productId, string unitId);

        Task<int> UpdateToDateByProductUnitGroupId(string productUnitGroupId, string tenantId);

        Task<ProductUnit> GetInfo(string productUnitId, string tenantId, bool isReadOnly = false);

        Task<ProductUnit> GetInfo(string tenantId, string productId, string unitId);

        Task<bool> CheckExists(string tenantId, string productId, string unitId);

        Task<bool> CheckExists(string unitId, string tenantId);

        Task<List<ProductUnit>> GetsProductId(string productId, string tenantId, bool isReadOnly = false);

        Task<string> GetDefaultUnitId(string productId, string tenantId);

        Task<ProductUnitViewModel> GetDefaultUnit(string tenantId, string productId);

        Task<List<UnitSuggestionsViewModel>> SearchSuggestionsUnitByProduct(string tenantId, string languageId,
            string productId, int page, int pageSize, out int totalRows);

        Task<List<ProductUnitViewModel>> GetByProductId(string tenantId, string productId);

        Task<List<ProductUnit>> GetsAll(string tenantId, string productId, bool isReadOnly = false);

        Task<bool> CheckDefaultUnitExists(string productId, string tenantId);

        Task<int> ForceDeleteByProductId(string productId, string tenantId);

        Task<int> Update(ProductUnit productUnit);
    }
}
