using System.Collections.Generic;

namespace GHM.WebsiteClient.Api.Domain.ModelMetas
{
    public class EventDayRegisterMeta
    {
        public string EventDayId { get; set; }
        public List<AccompanyPersonMeta> AccompanyPersons { get; set; }
    }
}
