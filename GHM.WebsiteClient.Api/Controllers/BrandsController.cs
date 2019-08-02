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
    public class BrandsController : ControllerBase
    {
        private readonly IBrandService _brandService;

        public BrandsController(IBrandService brandService)
        {
            _brandService = brandService;
        }

        [Route("{tenantId}/alls"), AcceptVerbs("GET")]
        public async Task<IActionResult> GetAllBrand(string tenantId)
        {

            var result = await _brandService.Search(tenantId);
            return Ok(result);

        }
    }
}