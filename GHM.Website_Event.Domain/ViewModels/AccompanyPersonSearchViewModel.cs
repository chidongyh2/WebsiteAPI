﻿using GHM.Website.Event.Domain.Constants;

namespace GHM.Website.Event.Domain.ViewModels
{
    public class AccompanyPersonSearchViewModel
    {
        public string Id { get; set; }
        public string RegisterId { get; set; }
        public string EventDayId { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public EventDayStatus Status { get; set; }
        public string EventDayName { get; set; }
    }
}
