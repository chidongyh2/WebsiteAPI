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
    public class FaqsController : ControllerBase
    {
        private readonly IFaqService _faqService;
        public FaqsController(IFaqService faqService)
        {
            _faqService = faqService;
        }

        [Route("{tenantId}/{languageId?}"), AcceptVerbs("GET")]
        public async Task<IActionResult> ListFaq(string tenantId, string languageId, int page = 1, int pageSize = 6)
        {
            var result = await _faqService.SearchClientAsync(tenantId, languageId ?? CultureInfo.CurrentCulture.Name, page, pageSize);
            return Ok(result);
        }
    }
}