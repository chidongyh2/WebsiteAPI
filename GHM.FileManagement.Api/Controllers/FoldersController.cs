using GHM.FileManagement.Domain.IServices;
using GHM.FileManagement.Domain.ModelMetas;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace GHM.FileManagement.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/folders")]
    public class FoldersController : GhmControllerBase
    {
        private readonly IFolderService _folderService;
        private readonly IFileService _fileService;

        public FoldersController(IFolderService folderService, IFileService fileService)
        {
            _folderService = folderService;
            _fileService = fileService;
        }

        [Route("alls"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteFolder, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _folderService.GetsAll(CurrentUser.TenantId, CurrentUser.Id, null));
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WebsiteFolder, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> InsertFolder([FromBody]FolderMeta folderMeta)
        {
            var result = await _folderService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, folderMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WebsiteFolder, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateFolder(int id, [FromBody]FolderMeta folderMeta)
        {
            var result = await _folderService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, id, folderMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.WebsiteFolder, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteFolder(int id)
        {
            var result = await _folderService.Delete(CurrentUser.TenantId, CurrentUser.Id, id);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        //[Route("trees"), AcceptVerbs("GET")]
        //[AllowPermission(PageId.WebsiteFolder, Permission.View)]
        //public async Task<IActionResult> GetFolderTree()
        //{
        //    var trees = await _folderService.GetFullFolderTree(CurrentUser.TenantId);
        //    return Ok(trees);
        //}

        //[Route("sugesstions"), AcceptVerbs("GET")]
        //[AllowPermission(PageId.WebsiteFolder, Permission.View)]
        //public async Task<IActionResult> GetAllSurveyGroupForSelect(string keyword, int page = 1, int pageSize = 20)
        //{
        //    var result = await _folderService.GetAllFolderForSelect(CurrentUser.TenantId, keyword, page, pageSize);
        //    return Ok(result);
        //}

        //[AcceptVerbs("GET")]
        //[AllowPermission(PageId.WebsiteFolder, Permission.View)]
        //public async Task<IActionResult> GetAllInFolder(int? folderId, int page = 1, int pageSize = 20)
        //{
        //    var result = _folderService.GetAllInFolder(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, folderId,
        //        page, pageSize, out int totalRows);
        //    return Ok(result);
        //}

        //[Route("names"), AcceptVerbs("GET")]
        //[AllowPermission(PageId.WebsiteFolder, Permission.View)]
        //public async Task<IActionResult> SearchByName(string keyword, int page = 1, int pageSize = 20)
        //{
        //    var result = _folderService.Search(CurrentUser.TenantId, keyword, CultureInfo.CurrentCulture.Name,
        //        page, pageSize, out int totalRows);
        //    return Ok(result);
        //}

        [Route("{folderId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteFolder, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetFolder(int folderId)
        {
            var result = await _folderService.GetDetail(CurrentUser.TenantId, CurrentUser.Id, folderId);
            return Ok(result);
        }

        //[Route("folder/{folderId}"), AcceptVerbs("GET")]
        //[AllowPermission(PageId.WebsiteFolder, Permission.View)]
        //public async Task<IActionResult> GetFolderByFolderId(int? folderId)
        //{
        //    var result = await _folderService.GetsAll(CurrentUser.TenantId, CurrentUser.Id, folderId, string.Empty);
        //    return Ok(result);
        //}

        [Route("{folderId}/name"), AcceptVerbs("POST")]
        [AllowPermission(PageId.WebsiteFolder, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> UpdateName(int folderId, string concurrencyStamp, string name)
        {
            var result = await _folderService.UpdateName(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName,
            folderId, concurrencyStamp, name);
            return Ok(result);
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteFolder, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetCurrentDirectory(int? folderId)
        {
            var breadcrumbs = await _folderService.GetBreadcrumbs(CurrentUser.TenantId, CurrentUser.Id, folderId);
            var files = await _fileService.GetsAll(CurrentUser.TenantId, CurrentUser.Id, folderId);
            var folders = await _folderService.GetsAll(CurrentUser.TenantId, CurrentUser.Id, folderId);
            return Ok(new
            {
                breadcrumbs,
                files,
                folders
            });
        }

        [Route("children/{folderId}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteFolder, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetFolderByFolderId(int? folderId)
        {
            return Ok(  await _folderService.GetsAll(CurrentUser.TenantId, CurrentUser.Id, folderId));
        }

        [Route("names"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteFolder, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, int page = 1, int pageSize = 20)
        {
            var result = await _folderService.Search(CurrentUser.Id, CurrentUser.Id, keyword, page, pageSize);
            return Ok(result);
        }
    }
}