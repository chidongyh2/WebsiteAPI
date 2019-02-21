using System.Threading.Tasks;
using GHM.FileManagement.Domain.IServices;
using GHM.FileManagement.Domain.ModelMetas;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using Microsoft.AspNetCore.Mvc;
using GHM.Infrastructure;
using Microsoft.AspNetCore.Authorization;

namespace GHM.FileManagement.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class FilesController : GhmControllerBase
    {
        private readonly IFileService _fileService;

        public FilesController(IFileService fileService)
        {
            _fileService = fileService;
        }

        [Route("uploads"), AcceptVerbs("POST")]
        [AllowPermission(PageId.WebsiteFile, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> UploadFile(FileUploadMeta files)
        {
            var result = await _fileService.UploadFiles(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName,
                CurrentUser.Avatar, files.FolderId, files.FormFileCollection);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.WebsiteFile, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]FileMeta fileMeta)
        {
            var result = await _fileService.Update(CurrentUser.TenantId, CurrentUser.Id, id, fileMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.WebsiteFile, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> DeleteFile(string id)
        {
            var result = await _fileService.Delete(CurrentUser.TenantId, CurrentUser.Id, id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.WebsiteFile, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> GetFile(string id)
        {
            var result = await _fileService.GetInfo(CurrentUser.TenantId, CurrentUser.Id, id);
            return Ok(result);
        }
    }
}