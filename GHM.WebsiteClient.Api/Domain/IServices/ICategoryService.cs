using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
   public interface ICategoryService
    {
        Task<CategoryTranslationViewModel> GetNameByCategoryIdAsync(string tenantId, string languageId, string seoLink);
        Task<ActionResultResponse<CategoryTranslationViewModel>> GetCategoryRelationsAsync(string tenantId, string languageId, string seoLink);
        Task<SearchResult<CategorySearchForSelectViewModel>> GetCategoryHomePageAsync(string tenantId, string languageId);
        Task<SearchResult<string>> GetAllSeoLinkForSitemapAsync(string tenantId, string languageId);
        Task<bool> CheckExistForClientAsync(string tenantId, string seoLink, string languageId);
    }
}
