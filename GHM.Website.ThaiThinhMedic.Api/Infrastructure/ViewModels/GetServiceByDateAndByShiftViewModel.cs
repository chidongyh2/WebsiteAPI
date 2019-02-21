using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels
{
    public class GetServiceByDateAndByShiftViewModel
    {
        public string ServiceId { get; set; }
        public string ServiceName { get; set; }
        public string DoctorId { get; set; }
        public string DoctorName { get; set; }
        public string Shift { get; set; }
        public DateTime WorkingDay { get; set; }
    }
}
