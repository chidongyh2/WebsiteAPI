using System;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels
{
    public class AppointmentScheduleEventViewModel
    {
        public long Id { get; set; }

        public string MaBenhNhan { get; set; }

        public string GioDatHen { get; set; }

        public DateTime? StartTime { get; set; }

        public DateTime? EndTime { get; set; }

        public string MaDichVu { get; set; }

        public string MaBacSy { get; set; }

        public string TenBacSy { get; set; }

        public bool IsMine { get; set; }
    }
}
