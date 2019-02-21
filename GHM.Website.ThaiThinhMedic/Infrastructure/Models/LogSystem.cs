using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class LogSystem
    {
        public long Id { get; set; }
        public int? UserId { get; set; }
        public string FullName { get; set; }
        public byte LogType { get; set; } // 1: Debug 2: Information 3: Warning 4: Error 5: Fatal
        public string ShortMessage { get; set; }
        public string FullMessage { get; set; }
        public string Email { get; set; }
        public string Ip { get; set; }
        public string Os { get; set; }
        public string Browser { get; set; }
        public int? Version { get; set; }
        public string RequestJson { get; set; }
        public string ObjectJson { get; set; }
        public DateTime CreatedOnDate { get; set; }
    }
}
