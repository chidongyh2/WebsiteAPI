using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Course;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ModelMetas;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.ThaiThinhMedic.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class CourseController : GhmControllerBase
    {
        private readonly ICourseRepository _courseRepository;
        private readonly IMediator _mediator;

        public CourseController(ICourseRepository courseRepository, IMediator mediator)
        {
            _courseRepository = courseRepository;
            _mediator = mediator;
        }

        [Route("insert"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Insert([FromBody]CreateCourseRegisterCommand course)
        {
            var result = await _mediator.Send(course);
            // var result = await _courseRepository.Insert(new Course(course.Name, course.Description, course.Content, course.IsActive));
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("update"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Update(string id, [FromBody]CourseMeta course)
        {
            if (string.IsNullOrEmpty(id))
                return BadRequest(new ActionResultResponse(-1, "Thông tin khóa học cần chỉnh sửa không tồn tai. Vui lòng kiểm tra lại hoặc liên hệ với Quản trị viên."));

            var result = await _courseRepository.Update(course);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("DELETE")]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _courseRepository.Delete(id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [AcceptVerbs("GET")]
        public async Task<IActionResult> Search(string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            var items = await _courseRepository.Search(keyword, isActive, page, pageSize, out var totalRows);
            return Ok(new { items, totalRows });
        }
    }
}