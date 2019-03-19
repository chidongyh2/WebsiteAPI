using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Warehouse.Domain.ViewModels;
using Attribute = GHM.Warehouse.Domain.Models.Attribute;

namespace GHM.Warehouse.Domain.IRepository
{
    public interface IAttributeRepository
    {
        Task<List<AttributeViewModel>> Search(string tenantId, string languageId, string keyword, bool? isSelfContent,
            bool? isRequire, bool? isMultiple, bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(Attribute productAttribute);

        Task<int> Update(Attribute productAttribute);

        Task<int> Delete(string productAttributeId);

        Task<int> ForceDelete(string productAttributeId);

        Task<Attribute> GetInfo(string productAttributeId, bool isReadonly = false);

        Task<Attribute> GetInfo(string tenantId, string productAttributeId, bool isReadonly = false);

        Task<List<AttributeSuggestionViewModel>> Suggestion(string tenantId, string languageId, string keyword, int selectTop,
            out int totalRows);

        Task<bool> CheckExists(string productAttributeId, string tenantId);
    }
}
