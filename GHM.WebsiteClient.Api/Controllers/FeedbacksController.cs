using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.CustomAttributes;
using GHM.WebsiteClient.Api.Domain.IServices;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GHM.WebsiteClient.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbacksController : ControllerBase
    {
        private readonly IFeedbackService _feedbackService;
        public FeedbacksController(IFeedbackService feedbackService)
        {
            _feedbackService = feedbackService;
        }

        [Route("{tenantId}"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Insert(string tenantId, [FromBody]FeedbackMeta feedbackMeta)
        {
            var result = await _feedbackService.Insert(tenantId, feedbackMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }
    }
}