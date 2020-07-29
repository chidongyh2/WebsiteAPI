using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GHM.WebsiteClient.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LanguagesController : ControllerBase
    {
        private readonly ILanguageService _languageService;

        public LanguagesController(ILanguageService languageService)
        {
            _languageService = languageService;
        }

        [Route("support/{tenantId}"), AcceptVerbs("GET")]
        public async Task<IActionResult> Support(string tenantId)
        {
            return Ok(await _languageService.GetLanguageSupportAsync(tenantId));
        }
    }
}