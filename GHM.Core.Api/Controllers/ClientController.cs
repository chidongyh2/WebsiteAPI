using System;
using System.Linq;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Models;
using GHM.Infrastructure.CustomAttributes;
using GHM.Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Core.Api.Controllers
{
    [Route("api/v1/[controller]")]
    [Produces("application/json")]
    public class ClientController : ControllerBase
    {
        private readonly IClientRepository _clientRepository;
        public ClientController(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }

        [Route("search"), AcceptVerbs("GET")]
        public async Task<IActionResult> Search(string keyword, bool? enabled, int page = 1, int pageSize = 20)
        {
            var items = await _clientRepository.Search(keyword, enabled, page, pageSize, out var totalRows);
            return Ok(new
            {
                items,
                totalRows
            });
        }
        
        [Route("get-client-id"), AcceptVerbs("GET")]
        public IActionResult GetClientId()
        {
            return Ok(Guid.NewGuid().ToString());
        }

        [Route("insert"), AcceptVerbs("POST"), ValidateModel]
        public async Task<IActionResult> Insert([FromBody]ClientMeta client)
        {
            if (string.IsNullOrEmpty(client.ClientId))
                client.ClientId = Guid.NewGuid().ToString();

            if (string.IsNullOrEmpty(client.ClientAllowedGrantTypes))
                return BadRequest(new ActionResultResponse
                {
                    Code = -3,
                    Message = "Vui lòng chọn ít nhất 1 quyền truy cập."
                });

            var result = await _clientRepository.Insert(client);
            if (result <= 0)
            {
                return BadRequest(new ActionResultResponse
                {
                    Code = result,
                    Message = result == -1
                        ? "Tên client đã tồn tại. Vui lòng kiểm tra lại."
                        : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với quản trị viên."
                });
            }
            return Ok(new ActionResultResponse(result, "Thêm Client thành công."));
        }

        [Route("update"), AcceptVerbs("POST")]
        public async Task<IActionResult> Update(Client client)
        {
            var result = await _clientRepository.Update(client);
            if (result <= 0)
            {
                return BadRequest(new ActionResultResponse
                {
                    Code = result,
                    Message = result == -1
                        ? "Thông tin client cần chỉnh sửa không tồn tại. Vui lòng kiểm tra lại hoặc liên hệ với quản trị viên."
                        : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với quản trị viên."
                });
            }
            return Ok(new ActionResultResponse(result, "Cập nhật thông tin Client thành công."));
        }

        [Route("delete"), AcceptVerbs("POST")]
        public async Task<IActionResult> Delete(string clientId)
        {
            var result = await _clientRepository.Delete(clientId);
            return Ok(new ActionResultResponse(result, "Xóa Client thành công."));
        }
    }
}
