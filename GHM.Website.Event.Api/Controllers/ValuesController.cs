using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.EventBus.Constants;
using GHM.Events;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Website.Event.Api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [Route("test-notification"), AcceptVerbs("GET")]
        public IActionResult TestNotification()
        {
            new NotificationHelper()
                .Send(new NotificationEvent
                {
                    Content = "hello from controller value",
                    IsSystem = true,
                    ReceiverId = "7fa8058b-29bd-4184-b7a7-eef4c4a5a5a5",
                    SenderId = "dkjfhakdhfasdhfkh",
                    TenantId = "7fa8058b-29bd-4184-b7a7-eef4c4a5a5a5",
                    Type = NotificationType.Info
                });
            return Ok(1);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
