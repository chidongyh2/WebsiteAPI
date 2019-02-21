namespace GHM.Interactive.Domain.Models
{
    using System.ComponentModel.DataAnnotations;

    public class View
    {
        [StringLength(50)]
        public string Id { get; set; }

        [StringLength(50)]
        public string UserId { get; set; }

        [StringLength(50)]
        public string SubjectId { get; set; }

        public int SubjectType { get; set; }

        [Required]
        [StringLength(10)]
        public string LanguageId { get; set; }

        [StringLength(50)]
        public string FullName { get; set; }

        [StringLength(500)]
        public string Email { get; set; }

        [StringLength(50)]
        public string PhoneNumber { get; set; }

        [Required]
        [StringLength(20)]
        public string IPAddress { get; set; }

        [Required]
        [StringLength(50)]
        public string BrowserName { get; set; }

        [Required]
        [StringLength(50)]
        public string BrowserVersion { get; set; }

        [Required]
        [StringLength(256)]
        public string OperatingSystem { get; set; }

        [Required]
        [StringLength(50)]
        public string CookieId { get; set; }
    }
}
