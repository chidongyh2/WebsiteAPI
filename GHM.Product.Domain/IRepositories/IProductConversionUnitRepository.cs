using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Product.Domain.Models;

namespace GHM.Product.Domain.IRepository
{
    public interface IProductConversionUnitRepository
    {
        Task<int> Insert(ProductConversionUnit productConversionUnit);

        Task<int> Update(ProductConversionUnit productConversionUnit);

        Task<int> Inserts(List<ProductConversionUnit> productConversionUnits);

        Task<int> Delete(string productUnitId,string productUnitConversionId);

        Task<ProductConversionUnit> GetInfo(string productUnitId, string productUnitConversionId, bool isReadOnly = false);

        Task<List<ProductConversionUnit>> GetsProductId(string productId);

        Task<bool> CheckExists(string productUnitId, string productUnitConversionId);
    }
}
