using System;
using System.Globalization;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace GHM.Website.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class MenusController : GhmControllerBase
    {
        private readonly IMenuService _menuService;
        public MenusController(IMenuService menuService)
        {
            _menuService = menuService;
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteConfigMenu, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _menuService.Search(CurrentUser.TenantId, keyword, isActive, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WebsiteConfigMenu, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> InsertMenu([FromBody]MenuMeta menuMeta)
        {
            var result = await _menuService.InsertMenu(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, menuMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WebsiteConfigMenu, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateMenu(string id, [FromBody]MenuMeta menuMeta)
        {
            var result = await _menuService.UpdateMenu(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, id, menuMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteConfigMenu, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> DetailMenu(string id)
        {
            var result = await _menuService.GetDetailMenu(CurrentUser.TenantId, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.WebsiteConfigMenu, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteMenu(string id)
        {
            var result = await _menuService.DeleteMenu(CurrentUser.TenantId, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/items"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WebsiteConfigMenu, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> InsertMenuItem(string id, [FromBody]MenuItemMeta menuItemMeta)
        {
            var result = await _menuService.InsertMenuItem(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, id, menuItemMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/items/{itemId}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WebsiteConfigMenu, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateMenuItem(string id, int itemId, [FromBody]MenuItemMeta menuItemMeta)
        {
            var result = await _menuService.UpdateMenuItem(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, id, itemId, menuItemMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/items/{itemId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteConfigMenu, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetDetailMenuItem(string id, int itemId)
        {
            var result = await _menuService.GetDetailMenuItem(CurrentUser.TenantId, id, itemId);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/items/{itemId}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.WebsiteConfigMenu, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteMenuItem(string id, int itemId)
        {
            var result = await _menuService.DeleteMenuItem(CurrentUser.TenantId, id, itemId);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/items/trees"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteConfigMenu, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetTreeMenuItem(string id)
        {
            var trees = await _menuService.GetFullMenuItemTree(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, id);
            return Ok(trees);
        }

        [Route("{id}/items/sugesstions"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteConfigMenu, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetAllMenuItemForSelect(string keyword, string id, int page = 1, int pageSize = 20)
        {
            var result = await _menuService.GetMenuItemForSelect(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, id, page, pageSize);
            return Ok(result);
        }

        [Route("{id}/items"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteConfigMenu, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> SearchMenuItem(string keyword, string id, bool? isActive, int page = 1, int pageSize = 20)
        {
            var result = await _menuService.SearchMenuItem(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, keyword, id, isActive, page, pageSize);
            return Ok(result);
        }

        [Route("{subjectId}/getMenuItemSelected"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteConfigMenu, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetMenuItemSelectedDetail(string subjectId, int subjectType, string languageId)
        {
            var result = await _menuService.ItemSelected(CurrentUser.TenantId, subjectType, subjectId, languageId);
            return Ok(result);
        }

        [Route("{id}/items/Order"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WebsiteConfigMenu, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateMenuItemByListOrder(string id, int itemId, [FromBody]MenuItemUpdate menuItem)
        {
            var result = await _menuService.UpdateOrderAndParentId(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, id, menuItem);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("check-subject/{tenantId}/{id}/{subjectId}"), AcceptVerbs("GET")]
        public async Task<IActionResult> CheckExistBySubjectId(string tenantId, string id, SubjectType subjectType)
        {
            var result = await _menuService.CheckExistBySubJectId(tenantId, id, subjectType);

            if (result.Code < 0)
                return BadRequest(result);

            return Ok(result);
        }
      
        #region  client
        //[Route("{id}/items/menu/{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        //public async Task<IActionResult> GetAllActivatedMenuItem(string tenantId, string id, string languageId)
        //{
        //    var result = await _menuService.GetAllActivatedMenuItem(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, id);
        //    return Ok(result);
        //}

        //[Route("position/{position}/items/menu/{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        //public async Task<IActionResult> GetMenuItemByPosition(string tenantId, Position position, string languageId)
        //{
        //    var result = await _menuService.GetAllActivatedMenuItemByPosition(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, position);
        //    return Ok(result);
        //}

        //[Route("get-all-menu-position/{position}/{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        //public async Task<IActionResult> GetAllMenuPositon(Position position, string tenantId, string languageId)
        //{
        //    var result = await _menuService.GetAllActivatedMenuByPosition(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, position);
        //    return Ok(result);

        //}

        //[Route("get-by-seoLink"), AcceptVerbs("POST")]
        //public async Task<IActionResult> GetInfoBySeoLink(CategoryClientMeta categoryMeta)
        //{
        //    var result = await _menuService.GetDetailBySeoLink(categoryMeta.TenantId, categoryMeta.SeoLink, categoryMeta.LanguageId ?? CultureInfo.CurrentCulture.Name);

        //    return Ok(result);
        //}
        #endregion
    }
}