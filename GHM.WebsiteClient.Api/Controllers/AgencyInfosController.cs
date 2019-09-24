using GHM.Infrastructure.CustomAttributes;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System.Threading.Tasks;


namespace GHM.WebsiteClient.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgencyInfosController : ControllerBase
    {
        private readonly IAgencyInfoService _agencyInfoService;
        public AgencyInfosController(IAgencyInfoService agencyInfoService)
        {
            _agencyInfoService = agencyInfoService;
        }

        [Route("{tenantId}/{languageId?}/{provinceId?}/{districtId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> ListAgencyInfo(string tenantId, string languageId, string provinceId, string districtId)
        {
            var result = await _agencyInfoService.AgencyInfoGetClient(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, provinceId, districtId);
            return Ok(result);
        }

        [Route("{tenantId}"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Insert(string tenantId, [FromBody]AgencyInfoMeta agencyInfoMeta)
        {
            var result = await _agencyInfoService.Insert(tenantId, agencyInfoMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
    }
}