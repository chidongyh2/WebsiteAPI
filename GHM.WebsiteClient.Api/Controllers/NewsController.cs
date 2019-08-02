using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly INewsService _newsService;
        public NewsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        /// <summary>
        /// Lấy ra số tin tức mới nhất trong trang chủ
        /// </summary>
        /// <param name="tenantId"></param>
        /// <param name="selectTop"></param>
        /// <param name="languageId"></param>
        /// <returns></returns>
        [Route("home-page/{tenantId}/{selectTop}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetListTopNewsHomePage(string tenantId, int selectTop, string languageId)
        {
            var result = await _newsService.GetListTopNewsHomePageAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, selectTop);
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
        public async Task<IActionResult> GetListTopNewsHot(string tenantId, int selectTop, string languageId)
        {
            var result = await _newsService.GetListTopNewsHotAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, selectTop);
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
        public async Task<IActionResult> GetListTopNewsNewst(string tenantId, int selectTop, string languageId)
        {
            var result = await _newsService.GetListTopNewsNewestAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, selectTop);
            return Ok(result);
        }

        [Route("getNewsRelatedByParentCategoryId/{tenantId}/{id}/{languageId?}/{page}/{pageSize}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetNewsRelatedByParentCategoryId(string tenantId, int id, string languageId, int page = 1, int pageSize = 5)
        {
            var result = await _newsService.GetNewsRelatedByParentCategoryIdAsync(tenantId, id, languageId ?? CultureInfo.CurrentCulture.Name, page, pageSize);
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
        public async Task<IActionResult> GetListTopNewsRelated(string tenantId, string seoLink, int selectTop, string languageId)
        {
            var result = await _newsService.GetListTopNewsRelatedAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink, selectTop);
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
        public async Task<IActionResult> GetNewsByCategorySeoLink(string tenantId, string seoLink, string languageId,
            int page = 1, int pageSize = 20)
        {
            var result = await _newsService.GetNewsByCategorySeoLinkAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink, page, pageSize);
            return Ok(result);
        }

        [Route("category/{tenantId}/{seoLink}/{page}/{pageSize}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetNewsByCategorySeoLink2(string tenantId, string seoLink, string languageId,
          int page = 1, int pageSize = 20)
        {
            var result = await _newsService.GetNewsByCategorySeoLinkAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink, page, pageSize);
            return Ok(result);
        }

        [Route("getNewsRelatedById/{tenantId}/{NewsId}/{languageId}/{page}/{pageSize}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetNewsRelatedById(string tenantId, string newsId, string languageId, int page = 1, int pageSize = 20)
        {
            var result = await _newsService.GetNewsRelatedByIdAsync(tenantId, newsId, languageId ?? CultureInfo.CurrentCulture.Name, page, pageSize);
            return Ok(result);
        }

        [Route("getNewsByCategoryById/{tenantId}/{categoryId}/{page}/{pageSize}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetNewsByCategoryId(string tenantId, int categoryId, string languageId,
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
        public async Task<IActionResult> GetClient(string tenantId, string seoLink, string languageId)
        {
            var result = await _newsService.GetClientAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink);
            return Ok(result);
        }

        /// <summary>
        /// Lấy seo link của bài viết cho sitemap
        /// </summary>
        /// <param name="tenantId"></param>
        /// <param name="languageId"></param>
        /// <returns></returns>
        [Route("sitemap/{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetSeoLinkForSitemap(string tenantId, string languageId)
        {
            var result = await _newsService.GetAllNewsSeoLinkForSiteMapAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name);
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
        public async Task<IActionResult> GetListNewsHomePage(string tenantId, string languageId, int selectTop = 5)
        {
            var result = await _newsService.GetListCategoryWidthNewsAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name,  selectTop, true);
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
        public async Task<IActionResult> GetListCategoryWidthNews(string tenantId, string languageId, string seoLink, int selectTop = 5)
        {
            var result = await _newsService.GetListCategoryWidthNewsAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink, selectTop, false);
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
        public async Task<IActionResult> GetNewsWidthParentCategory(string tenantId, string languageId, string seoLink, int selectTop = 5)
        {
            var result = await _newsService.GetCategoryWithNewsAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink, selectTop, false);
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
        public async Task<IActionResult> GetNewsDetail(string tenantId, string subjectId, string languageId)
        {
            var result = await _newsService.GetDetailForClientAsync(tenantId, subjectId, languageId ?? CultureInfo.CurrentCulture.Name);
            return Ok(result);
        }

        //get for Jadespa
        [Route("get-detail-frombody"), AcceptVerbs("POST")]
        public async Task<IActionResult> GetNewsDetailFromBody(CategoryClientMeta newsClientMeta)
        {
            var result = await _newsService.GetClientAsync(newsClientMeta.TenantId, newsClientMeta.LanguageId ?? CultureInfo.CurrentCulture.Name, newsClientMeta.SeoLink);
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
        public async Task<IActionResult> CheckNewsExistBySeoLink(string tenantId, string seoLink, string languageId)
        {
            var result = await _newsService.CheckNewsExistBySeoLinkAsync(tenantId, seoLink, languageId);
            return Ok(result);
        }

        [Route("updateViewNews/{tenantId}/{newId}/{languageId}"), AcceptVerbs("GET")]
        public async Task<IActionResult> UpdateViewNews(string tenantId, string newId, string languageId)
        {
            var result = await _newsService.UpdateViewNewsAsync(tenantId, newId, languageId ?? CultureInfo.CurrentCulture.Name);

            return Ok(result);
        }
    }
}