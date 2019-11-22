using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string TenantId { get; set; }
        public string ObjectId { get; set; } // Sản phẩm, bài viết, nhóm sản phẩm, nhóm bài viết
        public int? ObjectType { get; set; } // 0: Sản phẩm,1: bài viết, 2:nhóm sản phẩm, 3:nhóm bài viết
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Avatar { get; set; }
        public string Content { get; set; }
        public DateTime? CreateTime { get; set; }
        public int? ParentId { get; set; }
        public string IdPath { get; set; }
        public string UserId { get; set; }
        public int? UserType { get; set; } // 0, Khách vẵng lai, 1: khác có tài khoản, 2: Quản trị viên
        public bool? IsShow { get; set; }
        public bool? IsDelete { get; set; }
        public int? ChildCount { get; set; }

        public Comment()
        {
            CreateTime = System.DateTime.Now;
            IsShow = true;
            IsDelete = false;
        }
    }
}
