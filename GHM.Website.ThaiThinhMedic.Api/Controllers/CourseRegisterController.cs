using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.CustomAttributes;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Course;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.ThaiThinhMedic.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/course-register")]
    public class CourseRegisterController : GhmControllerBase
    {
        private readonly ICourseRegisterRepository _courseRegisterRepository;
        private readonly IMediator _mediator;

        public CourseRegisterController(ICourseRegisterRepository courseRegisterRepository, IMediator mediator)
        {
            _courseRegisterRepository = courseRegisterRepository;
            _mediator = mediator;
        }

        [Route("insert"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Insert([FromBody]CreateCourseRegisterCommand courseRegister)
        {
            var result = await _mediator.Send(courseRegister);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("update"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Update([FromBody]CourseRegister courseRegister)
        {
            var result = await _courseRegisterRepository.Update(courseRegister);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("delete"), AcceptVerbs("DELETE")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _courseRegisterRepository.Delete(id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("search"), AcceptVerbs("GET")]
        public async Task<IActionResult> Search(string keyword, int courseId, int classId, CourseRegisterStatus? status, int page = 1, int pageSize = 20)
        {
            var items = await _courseRegisterRepository.Search(keyword, courseId, classId, status, page, pageSize, out var totalRows);
            return Ok(new { items, totalRows });
        }
    }
}