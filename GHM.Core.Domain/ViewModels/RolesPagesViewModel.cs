namespace GHM.Core.Domain.ViewModels
{
    public class RolesPagesViewModel
    {
        public string RoleId { get; set; }
        public int? PageId { get; set; }
        public string PageName { get; set; }
        public int? Permissions { get; set; }
        public string IdPath { get; set; }
    }
}
