using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IProductAttributeValueRepository
    {
        Task<int> Insert(ProductAttributeValue productAttributeValue);

        Task<int> Inserts(List<ProductAttributeValue> productAttributeValues);

        Task<bool> CheckExists(string productAttributeId, string attributeValueId);

        Task<List<ProductAttributeValueViewModel>> GetsByProductAttributeId(string productAttributeId);

        Task<int> DeleteByProductAttributeId(string productAttributeId);
    }
}
