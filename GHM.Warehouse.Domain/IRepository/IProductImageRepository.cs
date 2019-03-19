using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IProductImageRepository
    {
        Task<int> Insert(ProductImage productImage);

        Task<int> Inserts(List<ProductImage> productImages);

        Task<int> Delete(string productImageId);

        Task<int> DeleteByProductId(string productId);

        Task<ProductImage> GetInfo(string productImageId, bool isReadOnly = false);

        Task<List<ProductImage>> GetsProductId(string productId, bool isReadOnly = false);

        Task<bool> CheckExists(string productId, string Url);
    }
}
