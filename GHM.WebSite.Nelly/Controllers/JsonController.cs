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

            var productCategory = await _productService.ProductCategorySearch(apiService.TenantId, CultureInfo.CurrentCulture.Name, seoLink, null, null, null, 1);

            var categories = productCategory.FirstOrDefault();
            return Ok(new { products.Items, products.TotalRows, categories });
        }

        [Route("view-more-news"), AcceptVerbs("POST")]
        public async Task<IActionResult> GetNewsByCategory(int categoryId, int page = 3, int pageSize = 6)
        {
            var apiService = _configuration.GetApiServiceInfo();

            var listNews = await _newsService.GetNewsByCategoryIdAsync(apiService.TenantId, CultureInfo.CurrentCulture.Name, categoryId, page, pageSize);
            var listNewsData = JsonConvertHelper.GetObjectFromObject<CategoryWidthNewsViewModel>(listNews.Data);
            return Json(listNewsData.ListNews);
        }
    }
}
