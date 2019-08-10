using GHM.WebsiteClient.Api.Domain.Constants;

namespace GHM.WebsiteClient.Api.Domain.ViewModels
{
    public class AccompanyPersonViewModel
    {
        public string Id { get; set; }
        public string RegisterId { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string EventDayId { get; set; }
        public EventDayStatus Status { get; set; }
    }
}
