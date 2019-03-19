using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Warehouse.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/contacts")]

    public class ContactsController : GhmControllerBase
    {
        private readonly IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Contact, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]ContactMeta contactMeta)
        {
            var result = await _contactService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, contactMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}/{type}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Contact, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, ContactType type, [FromBody]ContactMeta contactMeta)
        {
            var result = await _contactService.Update(CurrentUser.TenantId, id, type, CurrentUser.Id, CurrentUser.FullName, contactMeta);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/{type}"), AcceptVerbs("DELETE")]
        [AllowPermission(PageId.Contact, Permission.Delete)]
        [CheckPermission]
        public async Task<IActionResult> Delete(string id, ContactType type)
        {
            var result = await _contactService.Delete(id, type);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

    }
}