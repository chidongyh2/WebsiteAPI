namespace GHM.Website.Domain.ModelMetas
{
    public class MailTypeMeta
    {
        public string Name { get; set; }

        public bool Ssl { get; set; }

        public string Host { get; set; }

        public int Port { get; set; }

        public string ConcurrencyStamp { get; set; }
    }
}
