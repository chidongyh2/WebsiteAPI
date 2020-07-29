using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
namespace GHM.Warehouse.Domain.IRepository
{
    public interface IAttributeValueRepository
    {
        Task<List<AttributeValueViewModel>> Search(string tenantId, string languageId, string keyword, string productAttributeId,
            bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(AttributeValue attributeValue);

        Task<int> Update(AttributeValue attributeValue);

        Task<int> Delete(string productAttributeValueId);

        Task<int> ForceDelete(string productAttributeValueId);

        Task<int> DeleteByProductAttribute(string productAttributeId);

        Task<AttributeValue> GetInfo(string productAttributeValueId, bool isReadonly = false);

        Task<AttributeValue> GetInfo(string tenantId, string productAttributeValueId, bool isReadonly = false);
        Task<List<ProductAttributeValueSuggestionViewModel>> Suggestion(string tenantId, string languageId, string keyword, string productAttributeId,
            int selectTop, out int totalRows);

        Task<bool> CheckExistsByProductAttributeId(string productAttributeId);

        Task<bool> CheckIsValid(string attributeId, string[] attributeValueIds);

        Task<bool> CheckExists(string tenantId, string productAttributeId, string id, bool? isActive);
    }
}
