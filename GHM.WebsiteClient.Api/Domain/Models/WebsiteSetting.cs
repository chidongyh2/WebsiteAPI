using System.ComponentModel;

namespace GHM.WebsiteClient.Api.Domain.Models
{
    public class WebsiteSetting
    {
        [DisplayName("Logo")]
        public string Logo { get; set; }

        [DisplayName("Favicon")]
        public string Favicon { get; set; }

        [DisplayName("ZaloId")]
        public string ZaloId { get; set; }

        [DisplayName("Brand")]
        public string Brand { get; set; }

        [DisplayName("Instruction")]
        public string Instruction { get; set; }

        [DisplayName("Meta title")]
        public string MetaTitle { get; set; }

        [DisplayName("Meta description")]
        public string MetaDescription { get; set; }

        [DisplayName("Ip blocking")]
        public string IpBlocking { get; set; }

        [DisplayName("Meta Keyword")]
        public string MetaKeyword { get; set; }

        [DisplayName("Fanpage")]
        public string Fanpage { get; set; }

        [DisplayName("GoogleMap")]
        public string GoogleMap { get; set; }

        [DisplayName("Hotline")]
        public string Hotline { get; set; }

        [DisplayName("LogoMobile")]
        public string LogoMobile { get; set; }
    }
}
