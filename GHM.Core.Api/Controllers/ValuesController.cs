using GHM.EventBus.Abstractions;
using GHM.Events;
using Microsoft.AspNetCore.Mvc;

namespace GHM.Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        //private readonly IEventBus _eventBus;

        public ValuesController()
        {
            //_eventBus = eventBus;
        }

        // GET api/values/5
        [AcceptVerbs("GET")]
        public string Get()
        {
            //_eventBus.Publish(new NotificationEvent
            //{
            //    TenantId = "1",
            //    Title = "Tieu de",
            //    Content = "Noi dung",
            //    SenderId = "hoang",
            //    Url = "test",
            //    Type = 1,
            //    ReceiverId = "7fa8058b-29bd-4184-b7a7-eef4c4a5a5a5",
            //    Image = "",
            //    SenderAvatar = "avatar",
            //    SenderFullName = "sender fullname",
            //    IsSystem = false
            //});
            return "Hello world";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
