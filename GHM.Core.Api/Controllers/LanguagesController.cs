using System.Threading.Tasks;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Models;
using GHM.Infrastructure.CustomAttributes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Core.Api.Controllers
{
    [Authorize]
    [ApiVersion("1.0")]
    [Produces("application/json")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class LanguagesController : GhmControllerBase
    {
        private readonly ILanguageService _languageService;
        private readonly ITenantLanguageService _tenantLanguageService;

        #region Language

        public LanguagesController(ITenantLanguageService tenantLanguageService, ILanguageService languageService)
        {
            _tenantLanguageService = tenantLanguageService;
            _languageService = languageService;
        }

        [AcceptVerbs("GET")]
        public async Task<IActionResult> GetAllLanguage(string keyword)
        {
            return Ok(await _languageService.GetAll());
        }

        [Route("support/{tenantId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> Support(string tenantId)
        {
            return Ok(await _tenantLanguageService.GetLanguageSupport(tenantId ?? CurrentUser.TenantId));
        }

        [Route("suggestions"), AcceptVerbs("GET")]
        public async Task<IActionResult> Suggestions(string keyword, int page = 1, int pageSize = 20)
        {
            return Ok(await _languageService.Suggestion(keyword, page, pageSize));
        }

        [AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Insert([FromBody]LanguageMeta languageMeta)
        {
            var result = await _languageService.Insert(languageMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Update(string id, [FromBody]LanguageMeta languageMeta)
        {
            var result = await _languageService.Update(id, languageMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/languages"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetById(string id)
        {
            return Ok(await _tenantLanguageService.GetsByTenantId(id));
        }

        #endregion

        #region  TenantLanguage
        [Route("tenant"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> InsertTenantLanguage([FromBody]TenantLanguage tenantLanguage)
        {
            tenantLanguage.TenantId = CurrentUser.TenantId;
            var result = await _tenantLanguageService.Save(tenantLanguage);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("tenant/{languageId}/active"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> UpdateActiveStatus(string languageId, bool isActive)
        {
            var result = await _tenantLanguageService.UpdateActiveStatus(CurrentUser.TenantId, languageId, isActive);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("tenant/{languageId}/default"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> UpdateDefaultStatus(string languageId, bool isDefault)
        {
            var result = await _tenantLanguageService.UpdateDefaultStatus(CurrentUser.TenantId, languageId, isDefault);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("tenant/{languageId}"), AcceptVerbs("DELETE"), ValidateModel]
        public async Task<IActionResult> Delete(string languageId)
        {
            var result = await _tenantLanguageService.Delete(CurrentUser.TenantId, languageId);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("tenants"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetsByTenantId()
        {
            return Ok(await _tenantLanguageService.GetsByTenantId(CurrentUser.TenantId));
        }

        #endregion

    }
}