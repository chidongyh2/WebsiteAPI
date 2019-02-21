using System.Threading.Tasks;
using GHM.Infrastructure.CustomAttributes;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Category;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ModelMetas;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.ThaiThinhMedic.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMediator _mediator;

        public CategoryController(ICategoryRepository categoryRepository, IMediator mediator)
        {
            _categoryRepository = categoryRepository;
            _mediator = mediator;
        }

        [Route("insert"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Insert([FromBody]CategoryMeta category)
        {
            var result = await _categoryRepository.Insert(new Category(category.Name, category.Description, category.IsActive, category.ParentId));
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("update"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Update([FromBody]UpdateCategoryCommand category)
        {
            var result = await _mediator.Send(category);
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }


        [Route("delete"), AcceptVerbs("DELETE"), ValidateModel]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _mediator.Send(new DeleteCategoryCommand(id));
            if (result.Code <= 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("search"), AcceptVerbs("GET"), ValidateModel]
        public async Task<IActionResult> Search(string keyword, bool? isActive, int page = 1, int pageSize = 20)
        {
            var items = await _categoryRepository.Search(keyword, isActive, page, pageSize, out var totalRows);
            return Ok(new
            {
                items,
                totalRows
            });
        }

        [Route("search-picker"), AcceptVerbs("GET"), ValidateModel]
        public async Task<IActionResult> SearchPicker(string keyword, int page = 1, int pageSize = 20)
        {
            var items = await _categoryRepository.Search(x => new { x.Id, x.Name }, keyword, true, page, pageSize, out var totalRows);
            return Ok(new
            {
                items,
                totalRows
            });
        }

        [Route("get-category-tree"), AcceptVerbs("GET"), ValidateModel]
        public async Task<IActionResult> GetCategoryTree()
        {
            var items = await _categoryRepository.Search(string.Empty, true, 1, int.MaxValue, out var _);
            return Ok(items);
        }
    }
}