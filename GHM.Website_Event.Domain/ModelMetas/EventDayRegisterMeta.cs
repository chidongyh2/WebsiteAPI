using System.Collections.Generic;
using GHM.Website.Event.Domain.Constants;

namespace GHM.Website.Event.Domain.ModelMetas
{
  public  class EventDayRegisterMeta
    {
        public string EventDayId { get; set; }
        public List<AccompanyPersonMeta> AccompanyPersons { get; set; }
    }
}
