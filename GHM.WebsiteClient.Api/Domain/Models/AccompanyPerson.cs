﻿using GHM.WebsiteClient.Api.Domain.Constants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.Models
{
    public class AccompanyPerson
    {
        /// <summary>
        /// Mã người đi cùng.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Mã khách hàng.
        /// </summary>
        public string RegisterId { get; set; }

        /// <summary>
        /// Họ tên người đi cùng.
        /// </summary>
        public string FullName { get; set; }

        /// <summary>
        /// Số điện thoại.
        /// </summary>
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Mã ngày diễn ra sự kiện.
        /// </summary>
        public string EventDayId { get; set; }

        public EventDayStatus Status { get; set; }
    }
}
