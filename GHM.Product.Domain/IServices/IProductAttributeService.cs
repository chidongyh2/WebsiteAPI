using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Product.Domain.ModelMetas;
using GHM.Product.Domain.ViewModels;

namespace GHM.Product.Domain.IServices
{
    public interface IProductAttributeService
    {
        Task<SearchResult<ProductAttributeViewModel>> Search(string tenantId, string languageId, string keyword, bool? isSelfContent,
            bool? isRequire, bool? isMultiple, bool? isActive, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvatar, 
            ProductAttributeMeta productAttributeMeta);

        Task<ActionResultResponse<string>> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productAttributeId, ProductAttributeMeta productAttributeMeta);

        Task<ActionResultResponse> Delete(string tenantId, string productAttributeId);

        Task<ActionResultResponse<ProductAttributeDetailViewModel>> GetDetail(string tenantId, string productAttributeId);

        Task<SearchResult<ProductAttributeSuggestionViewModel>> Suggestion(string tenantId, string languageId, string keyword, int selectTop);

        Task<ActionResultResponse> UpdateIsActive(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productAttributeId, bool isActive);

        Task<ActionResultResponse> UpdateIsRequire(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productAttributeId, bool isRequire);

        Task<ActionResultResponse> UpdateIsMultiple(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productAttributeId, bool isMultiple);

        Task<ActionResultResponse> UpdateIsSelfContent(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productAttributeId, bool isSelfContent);
    }
}
