namespace GHM.Infrastructure.ViewModels
{
    public class UserInfoViewModel
    {
        public string UserId { get; set; }
        public int EnrollNumber { get; set; }
        public string UserName { get; set; }
        public string FullName { get; set; }
        public int TitleId { get; set; }
        public string TitleName { get; set; }
        public int OfficeId { get; set; }
        public string OfficeName { get; set; }
        public string OfficeIdPath { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Avatar { get; set; }
        public decimal HolidayRemaining { get; set; }
        public string ManagerUserId { get; set; }
        public string ApproverUserId { get; set; }
    }
}
