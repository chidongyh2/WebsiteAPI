using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.CustomAttributes;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Course;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.ThaiThinhMedic.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ClassController : GhmControllerBase
    {
        private readonly IClassRepository _classRepository;
        private readonly IMediator _mediator;

        public ClassController(IMediator mediator, IClassRepository classRepository)
        {
            _mediator = mediator;
            _classRepository = classRepository;
        }

        [Route("insert"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Insert([FromBody]CreateClassCommand classes)
        {
            var result = await _mediator.Send(classes);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("update"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Update([FromBody]Classes classes)
        {
            var result = await _classRepository.Update(classes);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("delete"), AcceptVerbs("DELETE")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _classRepository.Delete(id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("search"), AcceptVerbs("GET")]
        public async Task<IActionResult> Search(string keyword, int courseId, bool? isActive, int page = 1, int pageSize = 20)
        {
            var items = await _classRepository.Search(keyword, courseId, isActive, page, pageSize, out var totalRows);
            return Ok(new { items, totalRows });
        }
    }
}