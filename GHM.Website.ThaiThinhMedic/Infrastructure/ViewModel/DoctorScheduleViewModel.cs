namespace GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels
{
    public class DoctorScheduleViewModel
    {
        public string RoomId { get; set; } // Mã phòng
        public string RoomName { get; set; } // Tên phòng
        public string DoctorId { get; set; } // Mã bác sỹ
        public string DoctorName { get; set; } // Tên bác sỹ
        public string Morning { get; set; } // Ca sáng
        public string Afternoon { get; set; } // Ca chiều
        public string Evening { get; set; } // Ca tối
        public string DepartmentId { get; set; } // Mã khoa
        public string DepartmentName { get; set; } // Tên khoa
    }
}
