﻿using GHM.Infrastructure.Extensions;
using GHM.Website.Nelly.Controllers;
using GHM.Website.Nelly.Models;
using GHM.Website.Nelly.ViewModels;
using GHM.WebSite.Nelly.Helper;
using GHM.WebSite.Nelly.Models;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;


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
        [Route("san-pham.html")]
        public async Task<IActionResult> Index()
        {
            var apiService = _configuration.GetApiServiceInfo();

            var listProductCategory = await _productService.ProductCategorySearch(apiService.TenantId, CultureInfo.CurrentCulture.Name, string.Empty, null, null, false, int.MaxValue);
            var listProductCategoryData = JsonConvertHelper.GetObjectFromObject<List<ProductCategorySearchViewModel>>(listProductCategory);
            ViewBag.ListProductCategory = listProductCategoryData;

            var productCategoryInfo = listProductCategory.FirstOrDefault();
            ViewBag.ProductCategoryId = productCategoryInfo?.Id;
            var products = await _productService.ProductSearchByCategory(apiService.TenantId, CultureInfo.CurrentCulture.Name, productCategoryInfo?.SeoLink, null, null, 1, 6);

            ViewBag.ListProduct = products?.Items;
            ViewBag.TotalProduct = products?.TotalRows;
            return View();
        }

        [Route("san-pham/tim-kiem.html")]
        public async Task<IActionResult> Search(string keyword,
            string attributeName, string attributeValueName, int page = 1, int pageSize = 6)
        {
            var apiService = _configuration.GetApiServiceInfo();

            ViewBag.Keyword = keyword?.Trim().StripVietnameseChars()?.ToUpper();
            ViewBag.AttributeName = attributeName?.Trim().StripVietnameseChars()?.ToUpper();
            ViewBag.AttributeValueName = attributeValueName?.Trim().StripVietnameseChars()?.ToUpper();

            var breadcrumbs = new List<Breadcrumb>
            {
                new Breadcrumb()
                {
                    Name = "Sản phẩm",
                    IsCurrent = false,
                    Url = "san-pham"
                },
                new Breadcrumb()
                {
                    Name = !string.IsNullOrEmpty(keyword) ? $"Tìm kiếm: {keyword}" : $"{attributeName} : {attributeValueName}",
                    IsCurrent = true,
                }
            };

            ViewBag.Breadcrumb = breadcrumbs;

            var listProductCategory = await _productService.ProductCategorySearch(apiService.TenantId, CultureInfo.CurrentCulture.Name, string.Empty, null, null, null, int.MaxValue);
            var listProductCategoryData = JsonConvertHelper.GetObjectFromObject<List<ProductCategorySearchViewModel>>(listProductCategory);

            ViewBag.ListProductCategory = listProductCategoryData;
            if (listProductCategoryData != null && listProductCategoryData.Any())
            {
                ViewBag.ProductCategroryTree = RenderTree(listProductCategoryData, null)?.Take(5);
            }

            if (!string.IsNullOrEmpty(keyword) && string.IsNullOrEmpty(attributeName)
                && string.IsNullOrEmpty(attributeValueName))
            {
                keyword = keyword?.Trim()?.StripVietnameseChars().ToUpper();
                var products = await _productService.ProductSearch(apiService.TenantId, CultureInfo.CurrentCulture.Name,
                    keyword, null, null, null, page, pageSize);

                ViewBag.ListProduct = products?.Items;
                ViewBag.TotalProduct = products?.TotalRows;
            }

            if (string.IsNullOrEmpty(keyword) && !string.IsNullOrEmpty(attributeName)
                && !string.IsNullOrEmpty(attributeValueName))
            {
                attributeName = attributeName?.Trim()?.StripVietnameseChars().ToUpper();
                attributeValueName = attributeValueName?.Trim()?.StripVietnameseChars().ToUpper();

                var products = await _productService.ProductGetByAttributeValueId(apiService.TenantId, CultureInfo.CurrentCulture.Name,
                    attributeValueName, attributeName, page, pageSize);

                ViewBag.ListProduct = products?.Items;
                ViewBag.TotalProduct = products?.TotalRows;
            }

            var productHots = await _productService.ProductSearch(apiService.TenantId, CultureInfo.CurrentCulture.Name, string.Empty, true, null, string.Empty, 1, 5);
            ViewBag.ListProductHot = JsonConvertHelper.GetObjectFromObject<List<ProductSearchViewModel>>(productHots?.Items);

            return View();
        }

        [Route("giai-phap/{seoLink}.html")]
        public async Task<IActionResult> Solution(string seoLink)
        {
            var apiService = _configuration.GetApiServiceInfo();
            var listProductCategory = await _productService.ProductCategorySearch(apiService.TenantId, CultureInfo.CurrentCulture.Name, seoLink, null, null, null, 1);
            var productCategoryInfo = listProductCategory.FirstOrDefault();

            var model = JsonConvertHelper.GetObjectFromObject<ProductCategorySearchViewModel>(productCategoryInfo);
            if (productCategoryInfo != null)
            {
                var products = await _productService.ProductSearchByParentCategory(apiService.TenantId,
                    CultureInfo.CurrentCulture.Name, null, null, productCategoryInfo?.Id ?? 0);

                ViewBag.ListProduct = JsonConvertHelper.GetObjectFromObject<List<ProductWidthCategoryViewModel>>(products?.Items);
            }
            if (model == null)
            {
                return View("../NotFound/Index");
            }
            return View(model);
        }

        private List<TreeData> RenderTree(List<ProductCategorySearchViewModel> productCategorys, int? parentId)
        {
            var tree = new List<TreeData>();
            var parents = productCategorys.Where(x => x.ParentId == parentId).ToList();
            if (parents.Any())
            {
                parents.ForEach(parent =>
                {
                    var treeData = new TreeData
                    {
                        Id = parent.Id,
                        Text = parent.Name,
                        ParentId = parent.ParentId,
                        IdPath = parent.IdPath,
                        Data = parent,
                        ChildCount = parent.ChildCount,
                        Icon = string.Empty,
                        State = new State()
                        {
                            Opened = !parentId.HasValue
                        },
                        Children = parent.ChildCount > 0 ? RenderTree(productCategorys, parent.Id) : null
                    };
                    tree.Add(treeData);
                });
            }
            return tree;
        }
    }
}
