using GHM.Website.Event.Domain.Constants;

namespace GHM.Website.Event.Domain.Models
{
    public class EventDayRegister
    {

        /// <summary>
        /// Mã ngày diễn ra sự kiện.
        /// </summary>
        public string EventDayId { get; set; }


        /// <summary>
        /// Mã khách hàng.
        /// </summary>
        public string RegisterId { get; set; }

        public EventDayStatus Status { get; set; }
    }
}
