using GHM.WebsiteClient.Api.Domain.Constants;
using System.Collections.Generic;

namespace GHM.WebsiteClient.Api.Domain.ViewModels
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
