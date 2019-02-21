namespace GHM.Website.Domain.ModelMetas
{
    public class MailMeta
    {
        public string Owner { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string MailTypeId { get; set; }

        public string ConcurrencyStamp { get; set; }

        public bool IsActive { get; set; }
    }
}
