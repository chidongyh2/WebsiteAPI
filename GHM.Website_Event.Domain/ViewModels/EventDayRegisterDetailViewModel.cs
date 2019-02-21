using System;
using System.Collections.Generic;
using GHM.Website.Event.Domain.Constants;
using GHM.Website.Event.Domain.Models;

namespace GHM.Website.Event.Domain.ViewModels
{
    public class EventDayRegisterDetailViewModel
    {
        public string EventDayId { get; set; }
        public string RegisterId { get; set; }
        public EventDayStatus? Status { get; set; }
        public string EventDayName { get; set; }
        public DateTime EventDayDate { get; set; }
        public bool IsSelected { get; set; }
        public List<AccompanyPerson> AccompanyPersons { get; set; }

    }
}
