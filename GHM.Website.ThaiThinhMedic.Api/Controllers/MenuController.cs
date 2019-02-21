using System.Threading.Tasks;
using GHM.Infrastructure.CustomAttributes;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Menu;
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
    public class MenuController : Controller
    {
        private readonly IMediator _mediator;
        private readonly IMenuRepository _menuRepository;

        public MenuController(IMediator mediator, IMenuRepository menuRepository)
        {
            _mediator = mediator;
            _menuRepository = menuRepository;
        }

        [Route("search"), AcceptVerbs("GET")]
        public async Task<IActionResult> Search(string keyword, bool? isActive)
        {
            return Ok(await _menuRepository.Search(keyword, isActive));
        }

        [Route("insert"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Insert([FromBody]CreateMenuCommand menu)
        {
            var result = await _mediator.Send(menu);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("update"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Update([FromBody]MenuMeta menu)
        {
            var result = await _menuRepository.Update(menu);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("delete/{id}"), AcceptVerbs("DELETE")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _menuRepository.Delete(id);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }
    }
}