using System;
using GHM.Interactive.Domain.Constants;

namespace GHM.Interactive.Domain.ViewModels
{
    public class CommentForAdminViewModel
    {
        public string Id { get; set; }

        public string SubjectId { get; set; }

        public SubjectType SubjectType { get; set; }

        public string UserId { get; set; }

        public string FullName { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public string Content { get; set; }

        public long? ParentId { get; set; }

        public string IdPath { get; set; }

        public DateTime CreateTime { get; set; }

        public bool? IsApproved { get; set; }

        public DateTime? ApprovedTime { get; set; }

        public string ApproverId { get; set; }

        public string ApproverFullName { get; set; }

        public string ApproverAvatar { get; set; }

        public CommentStatus CommentStatus { get; set; }
    }
}
