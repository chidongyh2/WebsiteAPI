using System.Threading.Tasks;
using GHM.Infrastructure;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.News;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.ThaiThinhMedic.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class NewsController : GhmControllerBase
    {
        private readonly IMediator _mediator;
        private readonly INewsRepository _newsRepository;
        private readonly INewsCategoryRepository _newsCategoryRepository;

        public NewsController(IMediator mediator, INewsRepository newsRepository, INewsCategoryRepository newsCategoryRepository)
        {
            _mediator = mediator;
            _newsRepository = newsRepository;
            _newsCategoryRepository = newsCategoryRepository;
        }

        [Route("insert"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Insert([FromBody]CreateNewsCommand news)
        {
            news.CreatorId = CurrentUser.Id;
            news.CreatorFullName = CurrentUser.FullName;
            news.CreatorImage = CurrentUser.Avatar;
            var result = await _mediator.Send(news);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("update"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Update([FromBody]UpdateNewsCommand news)
        {
            var result = await _mediator.Send(news);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("delete/{id}"), AcceptVerbs("DELETE")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _mediator.Send(new DeleteNewsCommand(id));
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("search"), AcceptVerbs("GET")]
        public async Task<IActionResult> Search(string keyword, int? categoryId, bool? isActive, bool? isHot, bool? isHomePage, int page = 1, int pageSize = 20)
        {
            var items = await _newsRepository.Search(keyword, categoryId, isActive, isHot, isHomePage, page, pageSize, out var totalRows);
            return Ok(new
            {
                items,
                totalRows
            });
        }

        [Route("search-picker"), AcceptVerbs("GET")]
        public async Task<IActionResult> SearchForSelect(string keyword, int? categoryId, int page = 1, int pageSize = 20)
        {

            var items = await _newsRepository.SearchPicker(x => new
            {
                x.Id,
                Name = x.Title
            }, keyword, categoryId, page, pageSize, out var totalRows);
            return Ok(new
            {
                items,
                totalRows
            });
        }

        [Route("detail/{id}"), AcceptVerbs("GET")]
        public async Task<IActionResult> Detail(int id)
        {

            var info = await _newsRepository.GetDetail(id);
            if (info == null)
                return BadRequest(new ActionResultResponse(-1,
                    "Thông tin tin tức không tồn tại. Vui lòng kiểm tra lại hoặc liên hệ với Quản trị viên."));

            var listCategoryIds = await _newsCategoryRepository.GetListCategoryIdsByNewsId(info.Id);
            info.CategoryIds = listCategoryIds;
            return Ok(info);
        }
    }
}