using System.Threading.Tasks;
using GHM.ExecptionHandler.Api.Infrastructure.IServices;
using GHM.ExecptionHandler.Api.Infrastructure.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.ExecptionHandler.Api.Controllers
{
    //    [Authorize]
    [Route("api/[controller]")]
    public class ExceptionController : Controller
    {
        private readonly IExceptionService _exceptionService;

        public ExceptionController(IExceptionService exceptionService)
        {
            _exceptionService = exceptionService;
        }

        [AcceptVerbs("GET")]
        public async Task<IActionResult> Search(bool? isRead, int page = 1, int pageSize = 20)
        {
            return Ok(await _exceptionService.Search(isRead, page, pageSize));
        }

        [Route("{id}"), AcceptVerbs("GET")]
        public async Task<IActionResult> Detail(string id)
        {
            return Ok(await _exceptionService.GetDetail(id));
        }

        [AcceptVerbs("POST")]
        public async Task<IActionResult> Insert([FromBody]CustomException exception)
        {
            return Ok(await _exceptionService.Insert(exception));
        }
    }
}
