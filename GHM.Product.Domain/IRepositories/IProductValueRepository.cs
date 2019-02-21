using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;

namespace GHM.Product.Domain.IRepository
{
    public interface IProductValueRepository
    {
        Task<int> Insert(ProductValue productValue);

        Task<int> Update(ProductValue productValue);

        Task<int> Inserts(List<ProductValue> productValues);

        Task<int> Delete(string productValue);

        Task<int> DeleteByAttributeId(string tenantId, string productId, string productAttributeId);

        Task<int> ForceDelete(string productValue);

        Task<ProductValue> GetInfo(string productValue, bool isReadOnly = false);

        Task<List<ProductValue>> GetsProductId(string productId, bool isReadOnly = false);

        Task<List<ProductValueViewModel>> GetProductValueByProductId(string tenantId, string prodcutId);

        Task<ProductValue> GetInfo(string productId, string productAttributeId, string productAttributevalueId, bool isReadOnly = false);

        Task<bool> CheckExistProductAttributeId(string productAttributeId);

        Task<bool> CheckExistProductAttributeValueId(string productAttributeValueId);
    }
}
