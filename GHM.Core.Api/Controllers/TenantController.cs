using System.Threading.Tasks;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Models;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Core.Api.Controllers
{
    [Authorize]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]s")]
    public class TenantController : ControllerBase
    {
        private readonly ITenantService _tenantService;
        private readonly ITenantLanguageService _tenantLanguageService;

        public TenantController(ITenantService tenantService, ITenantLanguageService tenantLanguageService)
        {
            _tenantService = tenantService;
            _tenantLanguageService = tenantLanguageService;
        }

        [AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Insert([FromBody]TenantMeta tenantMeta)
        {
            var result = await _tenantService.Insert(tenantMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Update(string id, [FromBody]TenantMeta tenantMeta)
        {
            var result = await _tenantService.Update(id, tenantMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/{isActive}"), AcceptVerbs("GET")]
        public async Task<IActionResult> UpdateActiveStatus(string id, bool isActive)
        {
            var result = await _tenantService.UpdateActiveStatus(id, isActive);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.ConfigTenant, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            return Ok(await _tenantService.Search(keyword, isActive, page, pageSize));
        }

        [Route("select"), AcceptVerbs("GET")]
        public async Task<IActionResult> SearchForSelect(string keyword, int page = 1, int pageSize = 20)
        {
            return Ok(await _tenantService.Search(keyword, true, page, pageSize));
        }

        #region TenantLanguage
        [Route("{id}/languages"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetLanguages(string id)
        {
            return Ok(await _tenantLanguageService.GetsByTenantId(id));
        }

        [Route("{id}/language/{languageId}/active/{isActive}"), AcceptVerbs("GET")]
        public async Task<IActionResult> UpdateLanguageActiveStatus(string id, string languageId, bool isActive)
        {
            var result = await _tenantLanguageService.UpdateActiveStatus(id, languageId, isActive);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/language/{languageId}/default/{isDefault}"), AcceptVerbs("GET")]
        public async Task<IActionResult> UpdateLanguageDefaultStatus(string id, string languageId, bool isDefault)
        {
            var result = await _tenantLanguageService.UpdateDefaultStatus(id, languageId, isDefault);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/languages"), AcceptVerbs("POST")]
        public async Task<IActionResult> AddLanguage(string id, [FromBody]TenantLanguageMeta tenantLanguageMeta)
        {
            var result = await _tenantLanguageService.Save(new TenantLanguage
            {
                TenantId = id,
                Name = tenantLanguageMeta.Name,
                IsActive = tenantLanguageMeta.IsActive,
                IsDefault = tenantLanguageMeta.IsDefault,
                LanguageId = tenantLanguageMeta.LanguageId
            });
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/languages/{languageId}"), AcceptVerbs("DELETE")]
        public async Task<IActionResult> RemoveLanguage(string id, string languageId)
        {
            var result = await _tenantLanguageService.Delete(id, languageId);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
        #endregion
    }
}