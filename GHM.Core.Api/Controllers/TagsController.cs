using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using GHM.Core.Domain.Constants;
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
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class TagsController : GhmControllerBase
    {
        private readonly ITagService _tagService;

        public TagsController(ITagService tagService)
        {
            _tagService = tagService;
        }

        [Route("{tenantId}/{languageId}/{type}"), AcceptVerbs("GET")]
        //[CheckPermission(PageId.Tag, Permission.View)]
        public async Task<IActionResult> Search(string tenantId, string languageId, string keyword, TagType type, int page = 1, int pageSize = 20)
        {
            var result = await _tagService.Search(tenantId, languageId, keyword, type, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        //   [CheckPermission(PageId.Tag, Permission.Insert)]
        // TODO: TenantId
        public async Task<IActionResult> Insert([FromBody]List<SubjectTagMeta> subjectTagMetas)
        {
            var result = await _tagService.Insert(subjectTagMetas);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{tenantId}/{id}"), AcceptVerbs("GET")]
        //  [CheckPermission(PageId.Tag, Permission.View)]
        public async Task<IActionResult> Detail(string tenantId, string id)
        {
            var result = await _tagService.GetDetail(tenantId, id);
            return Ok(result);
        }

        [Route("{tenantId}/{languageId}/{type}/{subjectId}"), AcceptVerbs("GET")]
        //  [CheckPermission(PageId.Tag, Permission.View)]
        public async Task<IActionResult> GetListSubject(string tenantId, string languageId, TagType type,string subjectId)
        {
            var result = await _tagService.GetListSubject(tenantId, languageId,type,subjectId);
            return Ok(result);
        }

    }
}