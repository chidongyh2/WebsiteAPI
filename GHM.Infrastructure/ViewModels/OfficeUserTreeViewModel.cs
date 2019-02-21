namespace GHM.Infrastructure.ViewModels
{
    public class OfficeUserTreeViewModel
    {
        public int OfficeId { get; set; }
        public string OfficeName { get; set; }
        public string OfficeIdPath { get; set; }
        public int? ParentOfficeId { get; set; }
        public string UserId { get; set; }
        public string FullName { get; set; }
        public int? TitleId { get; set; }
        public string TitleName { get; set; }
        public int? ChildCount { get; set; }
        public int Level { get; set; }
    }
}
