using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoreValuesController : ControllerBase
    {
        private readonly ICoreValueService _coreValueService;
        public CoreValuesController(ICoreValueService coreValueService)
        {
            _coreValueService = coreValueService;
        }

        [Route("{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetAllActivatedCoreValue(string tenantId, string languageId)
        {
            var result = await _coreValueService.GetAllActivatedCoreValueAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name);
            return Ok(result);
        }
    }
}