using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
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
    public class CategoriesController : GhmControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.NewsCategory, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetAll(string keyword, bool? isActive)
        {
            var result = await _categoryService.GetsTree(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, isActive);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("tree"), AcceptVerbs("GET")]
        [AllowPermission(PageId.NewsCategory, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetTree()
        {
            var result = await _categoryService.GetsTree(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, string.Empty, true);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.NewsCategory, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetail(int id)
        {
            var result = await _categoryService.GetDetail(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.NewsCategory, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody] CategoryMeta categoryMeta)
        {
            categoryMeta.CreatorId = CurrentUser.Id;
            categoryMeta.CreatorFullName = CurrentUser.FullName;
            categoryMeta.CreatorAvatar = CurrentUser.Avatar;
            var result = await _categoryService.Insert(CurrentUser.TenantId, categoryMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.NewsCategory, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Update(int id, [FromBody] CategoryMeta categoryMeta)
        {
            var result = await _categoryService.Update(CurrentUser.TenantId, id, categoryMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE"), ValidateModel]
        [AllowPermission(PageId.NewsCategory, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _categoryService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/{order}/{parentId}"), AcceptVerbs("GET"), ValidateModel]
        [AllowPermission(PageId.NewsCategory, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> UpdateOrder(int id, int order, int? parentId)
        {
            var result = await _categoryService.Delete(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("suggestions"), AcceptVerbs("GET"), ValidateModel]
        [AllowPermission(PageId.NewsCategory, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Suggestions(string keyword, int page, int pageSize)
        {
            var result = await _categoryService.Suggestions(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("search-for-select"), AcceptVerbs("GET"), ValidateModel]
        [CheckPermission]
        public async Task<IActionResult> SearchForSelect(string keyword, int page, int pageSize)
        {
            var result = await _categoryService.SearchForSelect(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, page, pageSize);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        #region Client
        [Route("category/{tenantId}/{seoLink}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetNameByCategoryId(string tenantId, string seoLink, string languageId)
        {
            var result = await _categoryService.GetNameByCategoryId(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink);
            return Ok(result);
        }

        [Route("category-relations/{tenantId}/{seoLink}/{languageId?}")]
        public async Task<IActionResult> GetCategoryRelations(string tenantId, string seoLink, string languageId)
        {
            var result = await _categoryService.GetCategoryRelations(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, seoLink);
            return Ok(result);
        }

        [Route("category-home-page/{tenantId}/{languageId?}")]
        public async Task<IActionResult> GetListCategoryHomePage(string tenantId, string languageId)
        {
            var result = await _categoryService.GetCategoryHomePage(tenantId, languageId ?? CultureInfo.CurrentCulture.Name);
            return Ok(result);
        }
        [Route("sitemap/{tenantId}/{languageId?}")]
        public async Task<IActionResult> GetSeoLinlForSiteMap(string tenantId, string languageId)
        {
            var result = await _categoryService.GetAllSeoLinkForSitemap(tenantId, languageId ?? CultureInfo.CurrentCulture.Name);
            return Ok(result);
        }
        [Route("check-category-exist"), AcceptVerbs("POST")]
        public async Task<IActionResult> CategoryCheckExist(CategoryClientMeta categoryClientMeta)
        {
            var result = await _categoryService.CheckExistForClient(categoryClientMeta.TenantId, categoryClientMeta.SeoLink, categoryClientMeta.LanguageId);
            return Ok(result);
        }   
        #endregion

    }
}