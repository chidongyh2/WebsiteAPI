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

        Task<int> Delete(string productUnitId);

        Task<int> Delete(string tenantId, string productId, string unitId);

        Task<int> UpdateToDateByProductUnitGroupId(string productUnitGroupId);

        Task<ProductUnit> GetInfo(string productUnitId, bool isReadOnly = false);

        Task<ProductUnit> GetInfo(string tenantId, string productId, string unitId);

        Task<bool> CheckExists(string tenantId, string productId, string unitId);

        Task<bool> CheckExists(string unitId);

        Task<List<ProductUnit>> GetsProductId(string productId, bool isReadOnly = false);

        Task<string> GetDefaultUnitId(string productId);

        Task<ProductUnitViewModel> GetDefaultUnit(string tenantId, string productId);

        Task<List<UnitSuggestionsViewModel>> SearchSuggestionsUnitByProduct(string tenantId, string languageId,
            string productId, int page, int pageSize, out int totalRows);

        Task<List<ProductUnitViewModel>> GetByProductId(string tenantId, string productId);

        Task<List<ProductUnit>> GetsAll(string tenantId, string productId, bool isReadOnly = false);

        Task<bool> CheckDefaultUnitExists(string productId);

        Task<int> ForceDeleteByProductId(string productId);

        Task<int> Update(ProductUnit productUnit);
    }
}
