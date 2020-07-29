using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.ViewModels;
namespace GHM.Warehouse.Domain.IServices
{
    public interface IAttributeValueService
    {
        Task<SearchResult<AttributeValueViewModel>> Search(string tenantId, string productAttributeId, string languageId, string keyword, 
            bool? isActive, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, string productAttributeId, string creatorId, string creatorFullName, string creatorAvatar,
            AttributeValueMeta attributeValueMeta);

        Task<ActionResultResponse<string>> Update(string tenantId, string productAttributeId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productAttributeValueId, AttributeValueMeta attributeValueMeta);

        Task<ActionResultResponse> Delete(string tenantId, string productAttributeId, string productAttributeValueId);

        Task<ActionResultResponse<ProductAttributeValueDetailViewModel>> GetDetail(string tenantId, string productAttributeId, string productAttributeValueId);

        Task<SearchResult<ProductAttributeValueSuggestionViewModel>> Suggestion(string tenantId, string productAttributeId, string languageId, string keyword, int selectTop);

        Task<ActionResultResponse> UpdateIsActive(string tenantId, string productAttributeId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productAttributeValueId, bool isActive);
    }
}
