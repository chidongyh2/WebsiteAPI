using GHM.Infrastructure.Extensions;
using GHM.Website.Nelly.Constants;
using GHM.Website.Nelly.Controllers;
using GHM.Website.Nelly.ViewModels;
using GHM.WebSite.Nelly.Helper;
using GHM.WebSite.Nelly.Models;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

namespace GHM.WebSite.Nelly.Controllers
{
    [Route("gio-hang")]
    public class ShoppingCartController : BaseController
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;
        private readonly IProductService _productService;

        public ShoppingCartController(IConfiguration configuration, IMemoryCache cache,
            IBrandService brandService, IBranchContactService branchContactService, IProductService productService,
             IMenuService menuService, ISettingService settingService, ISocialNetworkService socialNetworkService, ILanguageService languageService)
             : base(configuration, cache, brandService, branchContactService, menuService, settingService,
                   socialNetworkService, languageService)
        {
            _configuration = configuration;
            _cache = cache;
            _productService = productService;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {

            return View();
        }

        [Route("buy/{productId}")]
        public async Task<IActionResult> Buy(string productId, int? quantity)
        {
            var apiService = _configuration.GetApiServiceInfo();

            var productInfo = await _productService.ProductGetDetail(apiService.TenantId, CultureInfo.CurrentCulture.Name, productId, null);
            var product = JsonConvertHelper.GetObjectFromObject<ProductSearchViewModel>(productInfo);

            if (SessionHelper.GetObjectFromJson<List<ProductSelectedItem>>(HttpContext.Session, SessionParam.ShoppingCart) == null)
            {
                List<ProductSelectedItem> cart = new List<ProductSelectedItem>
                {
                    new ProductSelectedItem { Product = product, Quantity = quantity ?? 0 }
                };

                SessionHelper.SetObjectAsJson(HttpContext.Session, SessionParam.ShoppingCart, cart);
            }
            else
            {
                List<ProductSelectedItem> cart = SessionHelper.GetObjectFromJson<List<ProductSelectedItem>>(HttpContext.Session, SessionParam.ShoppingCart);
                int index = IsExists(productId);

                if (index >= 0)
                {
                    cart[index].Quantity += quantity ?? 0;
                }
                else
                {
                    cart.Add(new ProductSelectedItem { Product = product, Quantity = quantity ?? 0 });
                }

                SessionHelper.SetObjectAsJson(HttpContext.Session, SessionParam.ShoppingCart, cart);
            }

            var listProduct = SessionHelper.GetObjectFromJson<List<ProductSelectedItem>>(HttpContext.Session, SessionParam.ShoppingCart);

            return Ok(listProduct);
        }

        [Route("remove/{productId}")]
        public async Task<JsonResult> Remove(string productId)
        {
            return Json(1);
        }

        #region privete
        private int IsExists(string id)
        {
            List<ProductSelectedItem> cart = SessionHelper.GetObjectFromJson<List<ProductSelectedItem>>(HttpContext.Session, SessionParam.ShoppingCart);

            return cart.FindIndex(x => x.Product.Id == id);
        }
        #endregion
    }
}
