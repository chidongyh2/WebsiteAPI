using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IServices
{
    public interface IProductUnitService
    {
        Task<List<ProductUnitViewModel>> GetsAll(string tenantId, string productId);

        Task<ActionResultResponse> Insert(ProductUnit productUnit);

        Task<ActionResultResponse> UpdateConversionUnit(string id, string productId, string unitId, decimal value);

        Task<ActionResultResponse> Save(List<ProductUnit> productUnits);

        Task<ActionResultResponse> Delete(string id);
    }
}
