using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.IServices
{
    public interface INewsService
    {
        Task<SearchResult<NewsViewModel>> Search(string tenantId, string languageId, string keyword, int? categoryId,
            string creatorId, string currentUserId, ApproverStatus? status, int page, int pageSize, bool isApprove);

        Task<SearchResult<NewSearchForSelectViewModel>> SearchForSelect(string tenantId, string languageId, string keyword, int? categoryId, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvatar, NewsMeta newsMeta, bool isSend);

        Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string newsId, NewsMeta newsMeta, bool isSend);

        Task<ActionResultResponse> Delete(string tenantId, string newsId);

        Task<ActionResultResponse<NewsDetailViewModel>> GetDetail(string tenantId, string userId, string newsId);

        Task<NewsDetailForClientViewModel> GetDetailForClient(string teantId, string newsId, string languageId);

        Task<ActionResultResponse> DeleteListNews(List<string> listNewsId);

        Task<ActionResultResponse> ChangeNewsStatus(string tenantId, string userId, string fullName, string avatar,
            string newsId, ApproverStatus status, string declineReason);

        Task<ActionResultResponse> ChangeNewsIsHot(string tenantId, string newsId, bool isHot);

        Task<ActionResultResponse> ChangeNewsIsHomePage(string tenantId, string newsId, bool isHomePage);

        Task<List<ActionResultResponse>> ChangeListNewsStatus(string tenantId, List<string> listnewsId,
            ApproverStatus status, string declineReason, string userId, string fullName, string avatar);

        Task<List<NewsSearchClientViewModel>> GetListTopNewsHomePage(string tenantId, string languageId, int selectTop);

        Task<List<NewsSearchClientViewModel>> GetListTopNewsNewest(string tenantId, string languageId, int selectTop);

        Task<List<NewsSearchClientViewModel>> GetListTopNewsHot(string tenantId, string languageId, int selectTop);

        Task<SearchResult<NewsSearchClientViewModel>> GetNewsByCategorySeoLink(string tenantId, string languageId, string seoLink,
            int page, int pageSizes);

        Task<List<NewsSearchClientViewModel>> GetListTopNewsRelated(string tenantId, string languageId, string seoLink, int selectTop);

        Task<NewsClientViewModel> GetClient(string tenantId, string languageId, string seoLink);

        Task<bool> GetStatusApprove(string tenantId, string userId);

        Task<SearchResult<string>> GetAllNewsSeoLinkForSiteMap(string tenantId, string languageId);

        Task<SearchResult<CategoryWidthNewsViewModel>> GetCategoryWidthNews(string tenantId, string languageId, string seoLink, int selectTop, bool isHomePage, bool isParent);

        Task<ActionResultResponse<CategoryWidthNewsViewModel>> GetCategoryWithNews(string tenantId, string languageId, string seoLink, int selectTop, bool isHomePage, bool isParent);

        Task<ActionResultResponse<CategoryWidthNewsViewModel>> GetNewsByCategoryIdAsync(string tenantId, string languageId, string categoryId, int page, int pageSize);

        Task<bool> CheckNewsExistBySeoLink(string tenantId, string seoLink, string languageId);

        Task<List<NewsSearchClientViewModel>> GetNewsRelatedById(string tenantId, string newsId, string v, int page, int pageSize);

        //Task GetListNewsRelated(string tenantId, string v, string seoLink, int selectTop);

        // Task<List<NewsSearchClientViewModel>> GetListTopNewsRelatedByCategoryId(string tenantId, string v, object categoryId, int selectTop);
    }
}
