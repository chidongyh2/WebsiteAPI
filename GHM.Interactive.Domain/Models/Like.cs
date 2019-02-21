namespace GHM.Interactive.Domain.Models
{
    using System.ComponentModel.DataAnnotations;

    public class Like
    {
        [StringLength(50)]
        public string Id { get; set; }

        [Required]
        [StringLength(50)]
        public string SubjectId { get; set; }

        public int SubjectType { get; set; }

        [StringLength(50)]
        public string UserId { get; set; }

        [Required]
        [StringLength(50)]
        public string FullName { get; set; }

        [Required]
        [StringLength(500)]
        public string Email { get; set; }

        [Required]
        [StringLength(50)]
        public string PhoneNumber { get; set; }

        public string CreateTime { get; set; }
    }
}
