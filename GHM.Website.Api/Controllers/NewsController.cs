﻿using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class NewsController : GhmControllerBase
    {
        private readonly INewsService _newsService;
        public NewsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.News, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, int? categoryId, string creatorId, ApproverStatus? status, int page = 1, int pageSize = 20)
        {
            var isApprove = await _newsService.GetStatusApprove(CurrentUser.TenantId, CurrentUser.Id);
            var searchResult = await _newsService.Search(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, categoryId, creatorId, CurrentUser.Id, status, page, pageSize, isApprove);
            return Ok(new { isApprove, searchResult });
        }

        [Route("search-for-select"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> SearchForSelect(string keyword, int? categoryId, int page = 1, int pageSize = 20)
        {
            var result = await _newsService.SearchForSelect(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, categoryId, page, pageSize);
            return Ok(result);
        }

        [Route("isSend/{isSend}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.News, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]NewsMeta newsMeta, bool isSend)
        {
            var result = await _newsService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, newsMeta, isSend);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/isSend/{isSend}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.News, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]NewsMeta newsMeta, bool isSend)
        {
            var result = await _newsService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar, id, newsMeta, isSend);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.News, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _newsService.GetDetail(CurrentUser.TenantId, CurrentUser.Id, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.News, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _newsService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("deletes"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.News, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteListNews([FromBody]List<string> newsIds)
        {
            var result = await _newsService.DeleteListNews(newsIds);
            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/status"), AcceptVerbs("POST")]
        [AllowPermission(PageId.News, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> ChangeNewsStatus(string id, [FromBody]NewStatusMeta newStatusMeta)
        {
            var result = await _newsService.ChangeNewsStatus(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName,
                CurrentUser.Avatar, id, newStatusMeta.Status, newStatusMeta.DeclineReason);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/is-hot/{isHot}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.News, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> ChangeNewsIsHot(string id, bool isHot)
        {
            var result = await _newsService.ChangeNewsIsHot(CurrentUser.TenantId, id, isHot);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/is-home-page/{isHomePage}"), AcceptVerbs("POST")]
        [AllowPermission(PageId.News, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> ChangeNewsIsHomePage(string id, bool isHomePage)
        {
            var result = await _newsService.ChangeNewsIsHomePage(CurrentUser.TenantId, id, isHomePage);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("change-list-news-status"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.News, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> ChangeListNewsStatus([FromBody]ChangeListNewsStatusMeta listNewsStatusMeta)
        {
            var result = await _newsService.ChangeListNewsStatus(CurrentUser.TenantId, listNewsStatusMeta.NewsIds,
                listNewsStatusMeta.Status, listNewsStatusMeta.DeclineReason, CurrentUser.Id, CurrentUser.FullName,
                CurrentUser.Avatar);

            return Ok(result);
        }

        #region Clients.
        /// <summary>
        /// Lấy ra số tin tức mới nhất trong trang chủ
        /// </summary>
        /// <param name="tenantId"></param>
        /// <param name="selectTop"></param>
        /// <param name="languageId"></param>
        /// <returns></returns>
        [Route("home-page/{tenantId}/{selectTop}/{languageId?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetListTopNewsHomePage(string tenantId, int selectTop, string languageId)
        {
            var result = await _newsService.GetListTopNewsHomePage(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, selectTop);
            return Ok(result);
        }

        /// <summary>
        /// Lấy ra số tin tức nổi bật mới nhất
        /// </summary>
        /// <param name="tenantId"></param>
        /// <param name="selectTop"></param>
        /// <param name="languageId"></param>
        /// <returns></returns>
        [Route("hot/{tenantId}/{selectTop}/{languageId?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetListTopNewsHot(string tenantId, int selectTop, string languageId)
        {
            var result = await _newsService.GetListTopNewsHot(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, selectTop);
            return Ok(result);
        }

        /// <summary>
        /// Lấy ra số tin tức mới nhất
        /// </summary>
        /// <param name="tenantId"></param>
        /// <param name="selectTop"></param>
        /// <param name="languageId"></param>
        /// <returns></returns>

        [Route("newest/{tenantId}/{selectTop}/{languageId?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetListTopNewsNewst(string tenantId, int selectTop, string languageId)
        {
            var result = await _newsService.GetListTopNewsNewest(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, selectTop);
            return Ok(result);
        }

        [Route("getNewsRelatedByParentCategoryId/{tenantId}/{id}/{languageId?}/{page}/{pageSize}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetNewsRelatedByParentCategoryId(string tenantId, int id, string languageId, int page = 1 , int pageSize = 5)
        {
            var result = await _newsService.GetNewsRelatedByParentCategoryId(tenantId, id, languageId ?? CultureInfo.CurrentCulture.Name, page, pageSize);
            return Ok(result);
        }

        /// <summary>
        /// Lấy ra số tin túc liên quan
        /// </summary>
        /// <param name="tenantId"></param>
        /// <param name="seoLink"></param>
        /// <param name="selectTop"></param>
        /// <param name="languageId"></param>
        /// <returns></returns>
        [Route("related/{tenantId}/{seoLink}/{selectTop}/{languageId?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetListTopNewsRelated(string tenantId, string seoLink, int selectTop, string languageId)
        {
            var result = await _newsService.GetListTopNewsRelated(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink, selectTop);
            return Ok(result);
        }


        //[Route("related-by-category/{tenantId}/{categoryId}/{selectTop}/{languageId?}"), AcceptVerbs("GET")]
        //[CheckPermission]
        //public async Task<IActionResult> GetListTopNewsRelatedByCategoryId(string tenantId, string seoLink, int selectTop, string languageId)
        //{
        //    var result = await _newsService.GetListTopNewsRelatedByCategoryId(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, categoryId, selectTop);
        //    return Ok(result);
        //}
        /// <summary>
        /// Lấy tin tức theo loại tin tức
        /// </summary>
        /// <param name="tenantId"></param>
        /// <param name="seoLink"></param>
        /// <param name="languageId"></param>
        /// <param name="page"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        [Route("getNewsByCategory/{tenantId}/{seoLink}/{page}/{pageSize}/{languageId?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetNewsByCategorySeoLink(string tenantId, string seoLink, string languageId,
            int page = 1, int pageSize = 20)
        {
            var result = await _newsService.GetNewsByCategorySeoLink(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink, page, pageSize);
            return Ok(result);
        }
        [Route("category/{tenantId}/{seoLink}/{page}/{pageSize}/{languageId?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetNewsByCategorySeoLink2(string tenantId, string seoLink, string languageId,
          int page = 1, int pageSize = 20)
        {
            var result = await _newsService.GetNewsByCategorySeoLink(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink, page, pageSize);
            return Ok(result);
        }
        [Route("getNewsRelatedById/{tenantId}/{NewsId}/{languageId}/{page}/{pageSize}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetNewsRelatedById(string tenantId, string newsId, string languageId, int page = 1, int pageSize = 20)
        {
            var result = await _newsService.GetNewsRelatedById(tenantId, newsId, languageId ?? CultureInfo.CurrentCulture.Name, page, pageSize);
            return Ok(result);
        }
        [Route("getNewsByCategoryById/{tenantId}/{categoryId}/{page}/{pageSize}/{languageId?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetNewsByCategoryId(string tenantId, string categoryId, string languageId,
           int page = 1, int pageSize = 12)
        {
            var result = await _newsService.GetNewsByCategoryIdAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, categoryId, page, pageSize);
            return Ok(result);
        }
        /// <summary>
        ///  Lấy chi tiết tin tức theo seo link
        /// </summary>
        /// <param name="tenantId"></param>
        /// <param name="seoLink"></param>
        /// <param name="languageId"></param>
        /// <returns></returns>
        [Route("client/{tenantId}/{seoLink}/{languageId?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetClient(string tenantId, string seoLink, string languageId)
        {
            var result = await _newsService.GetClient(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink);
            return Ok(result);
        }

        /// <summary>
        /// Lấy seo link của bài viết cho sitemap
        /// </summary>
        /// <param name="tenantId"></param>
        /// <param name="languageId"></param>
        /// <returns></returns>
        [Route("sitemap/{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetSeoLinkForSitemap(string tenantId, string languageId)
        {
            var result = await _newsService.GetAllNewsSeoLinkForSiteMap(tenantId, languageId ?? CultureInfo.CurrentCulture.Name);
            return Ok(result);
        }

        /// <summary>
        /// Lấy tin tức theo nhóm bài viết trong trang chủ
        /// </summary>
        /// <param name="tenantId"></param>
        /// <param name="languageId"></param>
        /// <param name="selectTop"></param>
        /// <returns></returns>
        [Route("category-with-news-in-home/{tenantId}/{selectTop}/{languageId?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetListNewsHomePage(string tenantId, string languageId, int selectTop = 5)
        {
            var result = await _newsService.GetListCategoryWidthNews(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, string.Empty, selectTop, true, false);
            return Ok(result);
        }

        /// <summary>
        /// Lấy nhiều nhóm bài viết và danh sách bài viết theo nhóm
        /// </summary>
        /// <param name="tenantId"></param>
        /// <param name="languageId"></param>
        /// <param name="seoLink"></param>
        /// <param name="selectTop"></param>
        /// <returns></returns>
        [Route("get-list-category-width-news/{tenantId}/{seoLink}/{selectTop}/{languageId?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetListCategoryWidthNews(string tenantId, string languageId, string seoLink, int selectTop = 5)
        {
            var result = await _newsService.GetListCategoryWidthNews(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink, selectTop, false, true);
            return Ok(result);
        }

        /// <summary>
        /// Lấy một nhóm bài viết và danh sách bài viết
        /// </summary>
        /// <param name="tenantId"></param>
        /// <param name="languageId"></param>
        /// <param name="seoLink"></param>
        /// <param name="selectTop"></param>
        /// <returns></returns>
        [Route("get-news-width-parent-category/{tenantId}/{seoLink}/{selectTop}/{languageId?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetNewsWidthParentCategory(string tenantId, string languageId, string seoLink, int selectTop = 5)
        {
            var result = await _newsService.GetCategoryWithNews(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink, selectTop, false, true);
            return Ok(result);
        }
        
        /// <summary>
        ///  Lấy chi  tiết bài viết theo Id
        /// </summary>
        /// <param name="tenantId"></param>
        /// <param name="subjectId"></param>
        /// <param name="languageId"></param>
        /// <returns></returns>
        [Route("detail/{tenantId}/{subjectId}/{languageId}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetNewsDetail(string tenantId, string subjectId, string languageId)
        {
            var result = await _newsService.GetDetailForClient(tenantId, subjectId, languageId ?? CultureInfo.CurrentCulture.Name);
            return Ok(result);
        }

        //get for Jadespa
        [Route("get-detail-frombody"), AcceptVerbs("POST")]
        [CheckPermission]
        public async Task<IActionResult> GetNewsDetailFromBody(CategoryClientMeta newsClientMeta)
        {
            var result = await _newsService.GetClient(newsClientMeta.TenantId, newsClientMeta.LanguageId ?? CultureInfo.CurrentCulture.Name, newsClientMeta.SeoLink);
            return Ok(result);
        }

        /// <summary>
        ///  Kiểm tra bài viết có tồn taị
        /// </summary>
        /// <param name="tenantId"></param>
        /// <param name="seoLink"></param>
        /// <param name="languageId"></param>
        /// <returns></returns>
        [Route("check-exist"), AcceptVerbs("POST")]
        [CheckPermission]
        public async Task<IActionResult> CheckNewsExistBySeoLink(string tenantId, string seoLink, string languageId)
        {
            var result = await _newsService.CheckNewsExistBySeoLink(tenantId, seoLink, languageId);
            return Ok(result);
        }

        [Route("updateViewNews/{tenantId}/{newId}/{languageId}"), AcceptVerbs("GET")]
        public async Task<IActionResult> UpdateViewNews(string tenantId, string newId, string languageId)
        {
            var result = await _newsService.UpdateViewNews(tenantId, newId, languageId ?? CultureInfo.CurrentCulture.Name);

            return Ok(result);
        }
        #endregion
    }
}