using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.ModelMetas
{
    public class CommentMeta
    {
        public string TenantId { get; set; }
        public int ObjectId { get; set; }
        public int ObjectType { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Avatar { get; set; }
        public string Content { get; set; }
        public int? ParentId { get; set; }
        public string UserId { get; set; }
        public int UserType { get; set; }
    }
}
