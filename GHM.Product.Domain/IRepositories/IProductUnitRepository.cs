using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;

namespace GHM.Product.Domain.IRepository
{
    public interface IProductUnitRepository
    {
        Task<int> Insert(ProductUnit productUnit);

        Task<int> Inserts(List<ProductUnit> productUnits);

        Task<int> Delete(string productUnitId);

        Task<int> UpdateToDateByProductUnitGroupId(string productUnitGroupId);

        Task<ProductUnit> GetInfo(string productUnitId, bool isReadOnly = false);

        Task<bool> CheckExists(string productId, string unitId);

        Task<bool> CheckExists(string unitId);

        Task<List<ProductUnit>> GetsProductId(string productId, bool isReadOnly = false);

        Task<string> GetDefaultUnitId(string productId);

        Task<List<UnitSuggestionsViewModel>> SearchSuggestionsUnitByProduct(string tenantId, string languageId,
            string productId, int page, int pageSize, out int totalRows);

        Task<List<ProductUnitViewModel>> GetByProductId(string tenantId, string productId);
    }
}
