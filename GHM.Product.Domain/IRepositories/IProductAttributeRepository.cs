using GHM.Product.Domain.Models;
using GHM.Product.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Product.Domain.IRepository
{
    public interface IProductAttributeRepository
    {
        Task<List<ProductAttributeViewModel>> Search(string tenantId, string languageId, string keyword, bool? isSelfContent,
            bool? isRequire, bool? isMultiple, bool? isActive,  int page, int pageSize, out int totalRows);

        Task<int> Insert(ProductAttribute productAttribute);

        Task<int> Update(ProductAttribute productAttribute);

        Task<int> Delete(string productAttributeId);

        Task<int> ForceDelete(string productAttributeId);

        Task<ProductAttribute> GetInfo(string productAttributeId, bool isReadonly = false);

        Task<ProductAttribute> GetInfo(string tenantId, string productAttributeId, bool isReadonly = false);
        Task<List<ProductAttributeSuggestionViewModel>> Suggestion(string tenantId, string languageId, string keyword, int selectTop, out int totalRows);
        Task<bool> CheckExists(string productAttributeId, string tenantId);
    }
}
