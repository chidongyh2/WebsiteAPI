using GHM.WebsiteClient.Api.Domain.Constants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.Models
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
