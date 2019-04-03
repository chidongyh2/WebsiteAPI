using System.Collections.Generic;
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

        [Route("getNewsByCategoryById/{tenantId}/{categoryId}/{page}/{pageSize}/{languageId?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetNewsByCategoryId(string tenantId, string categoryId, string languageId,
           int page = 1, int pageSize = 20)
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
            var result = await _newsService.GetCategoryWidthNews(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, string.Empty, selectTop, true, false);
            return Ok(result);
        }
        
        [Route("get-news-width-parent-category/{tenantId}/{seoLink}/{selectTop}/{languageId?}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetNewsWidthParentCategory(string tenantId, string languageId, string seoLink, int selectTop = 5)
        {
            var result = await _newsService.GetCategoryWidthNews(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink, selectTop, false, true);
            return Ok(result);
        }
        [Route("detail/{tenantId}/{subjectId}/{languageId}"), AcceptVerbs("GET")]
        [CheckPermission]
        public async Task<IActionResult> GetNewsDetail(string tenantId, string subjectId, string languageId)
        {
            var result = await _newsService.GetDetailForClient(tenantId, subjectId, languageId ?? CultureInfo.CurrentCulture.Name);
            return Ok(result);
        }
        #endregion
    }
}