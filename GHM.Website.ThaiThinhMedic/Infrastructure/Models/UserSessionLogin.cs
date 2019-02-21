using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class UserSessionLogin
    {
        public string UserId { get; set; }
        public string SessionId { get; set; }
        public byte Type { get; set; } // 0: Staff 1: Patient
    }
}
