using GHM.Interactive.Domain.Constants;

namespace GHM.Interactive.Domain.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class Comment
    {
        [Required]
        [StringLength(50)]        
        public string Id { get; set; }

        [Required]
        [StringLength(50)]
        public string SubjectId { get; set; }

        public SubjectType SubjectType { get; set; }

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

        [Required]
        [StringLength(4000)]
        public string Content { get; set; }

        public long? ParentId { get; set; }

        [Required]
        [StringLength(500)]
        public string IdPath { get; set; }

        public DateTime CreateTime { get; set; }

        [Required]
        [StringLength(50)]
        public string ConcurrencyStamp { get; set; }

        public bool IsDelete { get; set; }

        public bool? IsApproved { get; set; }

        public DateTime? ApprovedTime { get; set; }

        [StringLength(50)]
        public string ApproverId { get; set; }

        [StringLength(50)]
        public string ApproverFullName { get; set; }

        [StringLength(500)]
        public string ApproverAvatar { get; set; }

        public CommentStatus CommentStatus { get; set; }
    }    
}
