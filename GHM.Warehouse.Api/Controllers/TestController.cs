using System.Threading.Tasks;
using GHM.Infrastructure.Services;
using GHM.Infrastructure.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Warehouse.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [AcceptVerbs("GET")]
        public async Task<IActionResult> Get()
        {
            //var httpClientService = new HttpClientService();
            //var officeInfo =
            //    await httpClientService.GetAsync<OfficeInfoViewModel>($"http://localhost:5002/api/v1/offices/info/12");
            //if (officeInfo == null)
            //    BadRequest("");
            return Ok();
        }
    }
}