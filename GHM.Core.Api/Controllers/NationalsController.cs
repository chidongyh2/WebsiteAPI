using System.Globalization;
using System.Threading.Tasks;
using GHM.Core.Domain.IServices;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Core.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/v1/[controller]")]
    public class NationalsController : GhmControllerBase
    {
        private readonly IProvinceService _provinceService;
        private readonly IEthnicService _ethnicService;
        private readonly IReligionService _religionService;

        public NationalsController(IProvinceService provinceService, IEthnicService ethnicService, IReligionService religionService)
        {
            _provinceService = provinceService;
            _ethnicService = ethnicService;
            _religionService = religionService;
        }

        [AcceptVerbs("GET")]
        public async Task<IActionResult> GetAllNational()
        {
            return Ok(await _provinceService.GetAllNational(CultureInfo.CurrentCulture.Name));
        }

        [Route("{id}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetNationalById(int id)
        {
            return Ok(await _provinceService.GetNationalById(id));
        }

        [Route("{id}/provinces"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetProvinceByNational(int id)
        {
            return Ok(await _provinceService.GetProvinceByNational(id));
        }
       
        [AcceptVerbs("provinces")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _provinceService.GetAllProvince());
        }

        [Route("districts"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetAllDistrict()
        {
            return Ok(await _provinceService.GetAllDistrict());
        }

        [Route("provinces/{id}/districts"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetDistrictByProvinceId(int id)
        {
            return Ok(await _provinceService.GetDistrictByProvinceId(id));
        }

        [Route("provinces/{id}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetProvinceById(int id)
        {
            return Ok(await _provinceService.GetProvinceInfo(id));
        }

        [Route("provinces/districts/{id}"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetDistrictBId(int id)
        {
            return Ok(await _provinceService.GetDistrictInfo(id));
        }

        [Route("ethnics"), AcceptVerbs("GET")]
        public async Task<IActionResult> SearchEthnic()
        {
            var result = await _ethnicService.SearchEthnicAll(CultureInfo.CurrentCulture.Name);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("ethnics/{id}")]
        public async Task<IActionResult> GetInfoEthnic(int id)
        {
            return Ok(await _ethnicService.GetInfo(id));
        }

        [Route("religions/{id}")]
        public async Task<IActionResult> GetInfoReligion(int id)
        {
            return Ok(await _religionService.GetInfo(id));
        }

        [Route("religions")]
        public async Task<IActionResult> GetReligionForSelect()
        {
            var result = await _religionService.GetForSelect(CultureInfo.CurrentCulture.Name);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("get-all")]
        public async Task<IActionResult> GetAllData()
        {
            var listNationals = await _provinceService.GetAllNational(CultureInfo.CurrentCulture.Name);
            var listEthnics = await _ethnicService.SearchEthnicAll(CultureInfo.CurrentCulture.Name);
            var listReligions = await _religionService.GetForSelect(CultureInfo.CurrentCulture.Name);

            return Ok(new { listNationals, listReligions, listEthnics });
        }
    }
}