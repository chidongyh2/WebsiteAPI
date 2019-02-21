namespace GHM.Interactive.Domain.ModelMetas
{
    public class CommentMeta
    {
        public string Id { get; set; }

        public string SubjectId { get; set; }

        public int SubjectType { get; set; }

        public string UserId { get; set; }

        public string FullName { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public string Content { get; set; }

        public long? ParentId { get; set; }
    }
}
