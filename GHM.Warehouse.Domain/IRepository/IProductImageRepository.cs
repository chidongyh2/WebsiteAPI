using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IProductImageRepository
    {
        Task<int> Insert(ProductImage productImage);

        Task<int> Inserts(List<ProductImage> productImages);

        Task<int> Delete(string productImageId, string tenantId);

        Task<int> DeleteByProductId(string productId, string tennantId);

        Task<ProductImage> GetInfo(string productImageId, string tenantId, bool isReadOnly = false);

        Task<List<ProductImage>> GetsProductId(string productId, string tenantId, bool isReadOnly = false);

        Task<bool> CheckExists(string productId, string Url, string tenantId);
    }
}
