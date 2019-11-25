using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.ViewModels
{
    public class CommentViewModel
    {
        public string Id { get; set; }
        public string ObjectId { get; set; }
        public int ObjectType { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Avatar { get; set; }
        public string Content { get; set; }
        public int? ParentId { get; set; }
        public string UserId { get; set; }
        public int? UserType { get; set; }
        public DateTime? CreateTime { get; set; }
        public string IdPath { get; set; }
        public int? ChildCount { get; set; }
    }
}
