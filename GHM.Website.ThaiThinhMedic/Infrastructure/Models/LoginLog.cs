using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class LoginLog
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string FullName { get; set; }
        public string UnsignName { get; set; }
        public DateTime Time { get; set; }
        public string Ip { get; set; }
        public string Browser { get; set; }
        public string Os { get; set; }
        public string Version { get; set; }
        public byte Type { get; set; } // 0: Staff 1: Customer
        public bool IsSuccess { get; set; }

        public LoginLog()
        {
            Time = DateTime.Now;
        }
    }
}
