using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [Route("category/{tenantId}/{seoLink}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetNameByCategoryId(string tenantId, string seoLink, string languageId)
        {
            var result = await _categoryService.GetNameByCategoryIdAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink);
            return Ok(result);
        }

        [Route("category-relations/{tenantId}/{seoLink}/{languageId?}")]
        public async Task<IActionResult> GetCategoryRelations(string tenantId, string seoLink, string languageId)
        {
            var result = await _categoryService.GetCategoryRelationsAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink);
            return Ok(result);
        }

        [Route("category-home-page/{tenantId}/{languageId?}")]
        public async Task<IActionResult> GetListCategoryHomePage(string tenantId, string languageId)
        {
            var result = await _categoryService.GetCategoryHomePageAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name);
            return Ok(result);
        }
        [Route("sitemap/{tenantId}/{languageId?}")]
        public async Task<IActionResult> GetSeoLinlForSiteMap(string tenantId, string languageId)
        {
            var result = await _categoryService.GetAllSeoLinkForSitemapAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name);
            return Ok(result);
        }
        [Route("check-category-exist"), AcceptVerbs("POST")]
        public async Task<IActionResult> CategoryCheckExist(CategoryClientMeta categoryClientMeta)
        {
            var result = await _categoryService.CheckExistForClientAsync(categoryClientMeta.TenantId, categoryClientMeta.SeoLink, categoryClientMeta.LanguageId);
            return Ok(result);
        }
    }
}