using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface INewsService
    {
        Task<List<NewsSearchClientViewModel>> GetListTopNewsHomePageAsync(string tenantId, string languageId, int selectTop);
        Task<List<NewsSearchClientViewModel>> GetListTopNewsHotAsync(string tenantId, string languageId, int selectTop);
        Task<List<NewsSearchClientViewModel>> GetListTopNewsNewestAsync(string tenantId, string languageId, int selectTop);
        Task<List<NewsSearchClientViewModel>> GetNewsRelatedByParentCategoryIdAsync(string tenantId, int id, string languageId, int page, int pageSize);
        Task<List<NewsSearchClientViewModel>> GetListTopNewsRelatedAsync(string tenantId, string languageId, string seoLink, int selectTop);
        Task<SearchResult<NewsSearchClientViewModel>> GetNewsByCategorySeoLinkAsync(string tenantId, string languageId, string seoLink, int page, int pageSizes);
        Task<List<NewsSearchClientViewModel>> GetNewsRelatedByIdAsync(string tenantId, string newsId, string languageId, int page, int pageSize);
        Task<ActionResultResponse<CategoryWidthNewsViewModel>> GetNewsByCategoryIdAsync(string tenantId, string languageId, int categoryId, int page, int pageSize);
        Task<NewsClientViewModel> GetClientAsync(string tenantId, string languageId, string seoLink);
        Task<SearchResult<string>> GetAllNewsSeoLinkForSiteMapAsync(string tenantId, string languageId);
        Task<SearchResult<CategoryWidthNewsViewModel>> GetListCategoryWidthNewsAsync(string tenantId, string languageId, int selectTop, bool isHomePage);
        Task<SearchResult<CategoryWidthNewsViewModel>> GetListCategoryWidthNewsAsync(string tenantId, string languageId, string seolink,int selectTop, bool isHomePage);
        Task<ActionResultResponse<CategoryWidthNewsViewModel>> GetCategoryWithNewsAsync(string tenantId, string languageId, string seoLink, int selectTop, bool isHomePage);
        Task<NewsDetailForClientViewModel> GetDetailForClientAsync(string teantId, string newsId, string languageId);
        Task<bool> CheckNewsExistBySeoLinkAsync(string tenantId, string seoLink, string languageId);
        Task<int> UpdateViewNewsAsync(string tenantId, string newId, string languageId);
    }
}
