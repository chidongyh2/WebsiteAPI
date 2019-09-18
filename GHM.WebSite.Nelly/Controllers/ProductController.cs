using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Website.Nelly.Controllers;
using GHM.Website.Nelly.ViewModels;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GHM.WebSite.Nelly.Controllers
{
    public class ProductController : BaseController
    {

        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        private readonly IProductService _productService;

        public ProductController(IConfiguration configuration, IMemoryCache cache, IBrandService brandService,
            IBranchContactService branchContactService,
            IMenuService menuService, ISettingService settingService,
            ISocialNetworkService socialNetworkService, ILanguageService languageService,
            IProductService productService)
            : base(configuration, cache, brandService, branchContactService, menuService, settingService, socialNetworkService, languageService)
        {
            _configuration = configuration;
            _cache = cache;
            _productService = productService;
        }

        // GET: /<controller>/
        [Route("san-pham")]
        public async Task<IActionResult> Index()
        {
            var apiService = _configuration.GetApiServiceInfo();

            var listProductCategory= await _productService.ProductCategorySearch(apiService.TenantId, CultureInfo.CurrentCulture.Name, string.Empty, null, null, false, 20);
            var listProductCategoryData = JsonConvert.DeserializeObject<List<ProductCategorySearchViewModel>>(JsonConvert.SerializeObject(listProductCategory));
            ViewBag.ListProductCategory = listProductCategoryData;

            var productCategoryInfo = listProductCategory.FirstOrDefault();
            ViewBag.ProductCategoryId = productCategoryInfo?.Id;
            var products = await _productService.ProductSearch(apiService.TenantId, CultureInfo.CurrentCulture.Name, productCategoryInfo.SeoLink, null, null, 1, 12);

            ViewBag.ListProduct = products?.Items;
            ViewBag.TotalProduct = products?.TotalRows;
            return View();
        }
    }
}
