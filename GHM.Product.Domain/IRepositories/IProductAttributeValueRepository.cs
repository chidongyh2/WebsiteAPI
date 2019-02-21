using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;
namespace GHM.Product.Domain.IRepository
{
    public interface IProductAttributeValueRepository
    {
        Task<List<ProductAttributeValueViewModel>> Search(string tenantId, string languageId, string keyword, string productAttributeId,
            bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(ProductAttributeValue productAttributeValue);

        Task<int> Update(ProductAttributeValue productAttributeValue);

        Task<int> Delete(string productAttributeValueId);

        Task<int> ForceDelete(string productAttributeValueId);

        Task<int> DeleteByProductAttribute(string productAttributeId);

        Task<ProductAttributeValue> GetInfo(string productAttributeValueId, bool isReadonly = false);

        Task<ProductAttributeValue> GetInfo(string tenantId, string productAttributeValueId, bool isReadonly = false);
        Task<List<ProductAttributeValueSuggestionViewModel>> Suggestion(string tenantId, string languageId, string keyword, string productAttributeId,
            int selectTop, out int totalRows);

        Task<bool> CheckExistsByProductAttributeId(string productAttributeId);
    }
}
