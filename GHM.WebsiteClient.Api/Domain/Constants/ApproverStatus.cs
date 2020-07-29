using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.Constants
{
    public enum ApproverStatus
    {
        Draft, // 0 - Draft (Nháp).
        Pending, // 1- Pending (Đang gửi).
        Approved, // 2 - Approved (Đã duyệt). 
        Decline // 3 - Decline (Không duyệt).
    }
}
