using System.Collections.Generic;
using GHM.Website.Event.Domain.Constants;

namespace GHM.Website.Event.Domain.ViewModels
{
    public class EventDayRegisterViewModel
    {
        public string Id { get; set; }
        public string RegisterId { get; set; }
        public EventDayStatus Status { get; set; }
        public string Name { get; set; }
        public List<AccompanyPersonViewModel> AccompanyPersons { get; set; }

    }
}
