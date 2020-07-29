using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.Constants
{
    public enum EventDayStatus
    {
        NotYet,  // 0 - Chưa đến.
        AlreadyTo, // 1 - Đã đến.
        Cancel // 2 - Hủy.
    }
}
