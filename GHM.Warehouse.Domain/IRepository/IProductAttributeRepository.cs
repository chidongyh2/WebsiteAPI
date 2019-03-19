using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IProductAttributeRepository
    {
        Task<int> Insert(ProductAttribute productAttribute);

        Task<int> Update(ProductAttribute productAttribute);

        Task<int> Inserts(List<ProductAttribute> productValues);

        Task<int> Delete(string productValue, string productId);

        Task<int> DeleteByAttributeId(string tenantId, string productId, string productAttributeId);

        Task<int> ForceDelete(string productValue);

        Task<int> ForceDeleteByProductId(string productId);

        Task<ProductAttribute> GetInfo(string productValue, bool isReadOnly = false);

        Task<ProductAttribute> GetInfo(string tenantId, string productId, string attributeId, bool isReadOnly = false);

        Task<List<ProductAttribute>> GetsProductId(string productId, bool isReadOnly = false);

        Task<List<ProductValueViewModel>> GetProductValueByProductId(string tenantId, string prodcutId);        

        Task<bool> CheckExistProductAttributeId(string productAttributeId);

        Task<bool> CheckExistProductAttributeValueId(string productAttributeValueId);

        Task<List<ProductAttribute>> GetsByProductId(string productId);

        Task<int> Updates(List<ProductAttribute> productValues);

        Task<int> Delete(string tenantId, string productId, string attributeId);
    }
}
