namespace GHM.Website.TTMedic.Models
{
    public class Setting
    {
        public string Key { get; set; }

        public string GroupId { get; set; }

        public string LanguageId { get; set; }

        public string DisplayName { get; set; }

        public string Value { get; set; }

        public string ConcurrencyStamp { get; set; }
    }
}
