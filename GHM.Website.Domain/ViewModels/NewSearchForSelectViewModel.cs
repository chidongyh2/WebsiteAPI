using System;

namespace GHM.Website.Domain.ViewModels
{
    public class NewSearchForSelectViewModel
    {
        public string Id { get; set; }
        public string FeatureImage { get; set; }
        public string LanguageId { get; set; }
        public string Title { get; set; }
        public string SeoLink { get; set; }
        public DateTime? LastUpdate { get; set; }
        public DateTime? CreateTime { get; set; }
    }
}
