using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Website.Nelly.ViewModels;
using GHM.WebSite.Nelly.Helper;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GHM.WebSite.Nelly.Controllers
{
    public class JsonController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IProductService _productService;
        private readonly IVideoService _videoService;
        private readonly INewsService _newsService;

        public JsonController(IConfiguration configuration, IVideoService videoService,
            IProductService productService, INewsService newsService)
        {
            _configuration = configuration;
            _productService = productService;
            _videoService = videoService;
            _newsService = newsService;
        }

        // GET: /<controller>/
        [Route("get-product-by-category"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetProductByCategory(string seoLink, int page = 1, int pageSize =20)
        {
            var apiService = _configuration.GetApiServiceInfo();
            var result = await _productService.ProductSearchByCategory(apiService.TenantId, CultureInfo.CurrentCulture.Name, seoLink, null, null, page, pageSize);

            return Ok(result);
        }

        [Route("get-video-by-album"), AcceptVerbs("GET")]
        public async Task<JsonResult> GetVideoByAlbum(string seoLink, int page = 1, int pageSize = 20)
        {
            var apiService = _configuration.GetApiServiceInfo();

            var listVideo = await _videoService.ListVideoAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, seoLink, page, pageSize);
            return Json(listVideo);
        }

        [Route("get-productcategory-and-list"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetProductByCategoryAndList(string seoLink, int page = 1, int pageSize = 20)
        {
            var apiService = _configuration.GetApiServiceInfo();
            var products = await _productService.ProductSearchByCategory(apiService.TenantId, CultureInfo.CurrentCulture.Name, seoLink, null, null, page, pageSize);

            return Ok(new { products.Items, products.TotalRows });
        }

        [Route("view-more-news"), AcceptVerbs("POST")]
        public async Task<IActionResult> GetNewsByCategory(int categoryId, int page = 3, int pageSize = 6)
        {
            var apiService = _configuration.GetApiServiceInfo();

            var listNews = await _newsService.GetNewsByCategoryIdAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, categoryId, page, pageSize);
            var listNewsData = JsonConvertHelper.GetObjectFromObject<CategoryWidthNewsViewModel>(listNews.Data);
            return Json(listNewsData.ListNews);
        }


        [Route("search-product"), AcceptVerbs("GET")]
        public async Task<IActionResult> SearchProduct(string keyword, string attributeName, string attributeValueName,
            int page = 1, int pageSize = 20)
        {
            var apiService = _configuration.GetApiServiceInfo();
            if (!string.IsNullOrEmpty(keyword) && string.IsNullOrEmpty(attributeName)
               && string.IsNullOrEmpty(attributeValueName))
            {
                keyword = keyword?.Trim()?.StripVietnameseChars().ToUpper();
                var products = await _productService.ProductSearch(apiService.TenantId, CultureInfo.CurrentCulture.Name,
                    keyword, null, null, null, page, pageSize);

                return Ok(new { products.Items, products.TotalRows });
            }

            if (string.IsNullOrEmpty(keyword) && !string.IsNullOrEmpty(attributeName)
                && !string.IsNullOrEmpty(attributeValueName))
            {
                attributeName = attributeName?.Trim()?.StripVietnameseChars().ToUpper();
                attributeValueName = attributeValueName?.Trim()?.StripVietnameseChars().ToUpper();

                var products = await _productService.ProductGetByAttributeValueId(apiService.TenantId, CultureInfo.CurrentCulture.Name,
                    attributeValueName, attributeName, page, pageSize);

                return Ok(new { products.Items, products.TotalRows });
            }

            return Ok();
        }
    }
}
