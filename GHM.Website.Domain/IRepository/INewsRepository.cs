using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface INewsRepository
    {
        Task<List<NewsViewModel>> Search(string tenantId, string languageId, string keyword, int? categoryId,
            string creatorId, string currentUserId, ApproverStatus? status, int page, int pageSize, bool isApprove, out int totalRows);

        Task<List<NewSearchForSelectViewModel>> SearchForSelect(string tenantId, string languageId, string keyword, int? categoryId, int page, int pageSize, out int totalRows);

        Task<int> Insert(News news);

        Task<int> Update(News news);

        Task<int> Delete(string newsId);

        Task<int> ForceDelete(string newsId);

        Task<int> UpdateLikeCount(string newsId, int likeCount);

        Task<int> UpdateCommentCount(string newsId, int commentCount);

        Task<int> UpdateViewCount(string newsId, int viewCount);

        Task<News> GetInfo(string newsId, bool isReadonly = false);

        Task<News> GetInfo(string tenantId, string newsId, bool isReadonly = false);

        Task<List<NewsViewModel>> GetAllNewsByApproverUserId(string tenantId, string approverUserId, string languageId);

        Task<int> UpdateNewsStatus(string newsId, ApproverStatus approverStatus);

        Task<int> UpdateNewsIsHot(string newsId, bool isHot);

        Task<int> UpdateNewsIsHomePage(string newsId, bool isHomePage);

        Task<List<NewsSearchClientViewModel>> GetListTopNewsHomePage(string tenantId, string languageId, int selectTop);

        Task<List<NewsSearchClientViewModel>> GetListTopNewsHot(string tenantId, string languageId, int selectTop);

        Task<List<NewsSearchClientViewModel>> GetNewsByCategorySeoLink(string tenantId, string languageId, string seoLink,
            int page, int pageSize, out int totalRows);

        Task<List<NewsSearchClientViewModel>> GetListTopNewsRelated(string tenantId, string languageId,List<string> newsIds,
            int selectTop);

        Task<NewsClientViewModel> GetClient(string tenantId, string languageId, string seoLink);

        Task<List<string>> GetAllNewsSeoLinkForSiteMap(string tenantId, string languageId);

        Task<List<NewsSearchClientViewModel>> GetListTopNewsNewest(string tenantId, string languageId, int selectTop);

        Task<List<CategoryWidthNewsViewModel>> GetListCategoryWidthNews(string tenantId, string languageId, int categoryId, int selectTop, bool isHomePage);

        Task<CategoryWidthNewsViewModel> GetCategoryWithNews(string tenantId, string languageId, int categoryId, int selectTop, bool isHomePage);

        Task<List<NewsSearchClientViewModel>> GetNewsByCategoryId(string tenantId, string languageId, string categoryId, int page, int pageSize, out int totalRows);

        Task<NewsDetailForClientViewModel> GetDetailForClient(string teantId, string newsId, string languageId);

        Task<List<NewsSearchClientViewModel>> GetListNewsRelated(string tenantId, string languageId, string newsId, int pageSize);

        Task<List<NewsSearchClientViewModel>> GetListNewsRelatedForClient(string tenantId, string languageId, string newsId, int pageSize);

        Task<List<NewsSearchClientViewModel>> GetListNewsRelatedForClientByParentCategoryId(string tenantId, string languageId, int id, int parentId, int page, int pageSize);
    }
}
