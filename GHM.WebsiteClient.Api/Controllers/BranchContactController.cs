using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GHM.WebsiteClient.Api.Domain.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GHM.WebsiteClient.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BranchContactController : ControllerBase
    {
        private readonly IBranchContactService _branchContactService;
        public BranchContactController(IBranchContactService branchContactService)
        {
            _branchContactService = branchContactService;
        }

        [Route("alls/{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> SearchClient(string tenantId, string languageId)
        {
            var result = await _branchContactService.SearchForClientAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name);
            return Ok(result);
        }
    }
}