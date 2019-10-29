using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Filters;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Globalization;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace GHM.Warehouse.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/orders")]
    public class OrderController : GhmControllerBase
    {
        private readonly IOrderService _orderService;
        private readonly IHostingEnvironment _hostingEnvironment;
        public OrderController(IOrderService orderService, IHostingEnvironment hostingEnvironment)
        {
            _orderService = orderService;
            _hostingEnvironment = hostingEnvironment;
        }

        [AcceptVerbs("GET")]
        [AllowPermission(PageId.Order, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Search(string userId, string productId, string keyword, DateTime? fromDate, DateTime? toDate,
           OrderStatus? status, int page = 1, int pageSize = 20)
        {
            var result = await _orderService.Search(CurrentUser.TenantId, userId, productId, keyword, status,
                fromDate, toDate, page, pageSize);
            return Ok(result);
        }

        [AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Order, Permission.Insert)]
        [CheckPermission]
        public async Task<IActionResult> Insert([FromBody]OrderMeta OrderMeta)
        {
            var result = await _orderService.Insert(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, OrderMeta);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("{id}"), AcceptVerbs("POST"), ValidateModel]
        [AllowPermission(PageId.Order, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> Update(string id, [FromBody]OrderMeta OrderMeta, bool isBalanced)
        {
            //var result = await _orderService.Update(CurrentUser.TenantId, CurrentUser.Id, CurrentUser.FullName, CurrentUser.Avatar,
            //    id, OrderMeta, isBalanced);
            //if (result.Code <= 0)
            //    return BadRequest(result);
            return Ok(1);
        }       

        [Route("{id}"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Order, Permission.View)]
        [CheckPermission]
        public async Task<IActionResult> Detail(string id)
        {
            var result = await _orderService.GetDetail(CurrentUser.TenantId, CultureInfo.CurrentCulture.Name, id);
            if (result.Code < 0)
                return BadRequest(result);
            return Ok(result);
        }

        [Route("{id}/status"), AcceptVerbs("POST")]
        [AllowPermission(PageId.Order, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> UpdateStatus(string id, OrderStatus status)
        {
            var result = await _orderService.UpdateStatus(CurrentUser.TenantId, CurrentUser.Id,
                CurrentUser.FullName, id, status);
            if (result.Code <= 0)
                return BadRequest(result);

            return Ok(result);
        }

        [Route("getcode"), AcceptVerbs("GET")]
        [AllowPermission(PageId.Order, Permission.Update)]
        [CheckPermission]
        public async Task<IActionResult> GetCode()
        {
            var result = await _orderService.GetCode(CurrentUser.TenantId);           

            return Ok(result);
        }
    }
}
