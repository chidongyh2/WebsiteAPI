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

        Task<int> Delete(string productValue, string productId, string tenantId);

        Task<int> DeleteByAttributeId(string tenantId, string productId, string productAttributeId);

        Task<int> ForceDelete(string productValue, string tenantId);

        Task<int> ForceDeleteByProductId(string productId, string tenantId);

        Task<ProductAttribute> GetInfo(string productValue, string tenantId, bool isReadOnly = false);

        Task<ProductAttribute> GetInfo(string tenantId, string productId, string attributeId, bool isReadOnly = false);

        Task<List<ProductAttribute>> GetsProductId(string productId, string tenantId, bool isReadOnly = false);

        Task<List<ProductValueViewModel>> GetProductValueByProductId(string tenantId, string prodcutId);        

        Task<bool> CheckExistProductAttributeId(string productAttributeId, string tenantId);

        Task<bool> CheckExistProductAttributeValueId(string productAttributeValueId, string tenantId);

        Task<List<ProductAttribute>> GetsByProductId(string productId, string tenantId);

        Task<int> Updates(List<ProductAttribute> productValues);

        Task<int> DeleteAtrribute(string tenantId, string productId, string attributeId);
    }
}
