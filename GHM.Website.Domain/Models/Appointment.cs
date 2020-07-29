using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.Models
{
    public class Appointment
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public DateTime DateTime { get; set; }
        public string Description { get; set; }
        public DateTime CreateTime { get; set; }
        public string TenantId { get; set; }
        public bool IsDelete { get; set; }
        public string Service { get; set; }
    }
}
