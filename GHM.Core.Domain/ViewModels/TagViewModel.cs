using GHM.Core.Domain.Constants;

namespace GHM.Core.Domain.ViewModels
{
    public class TagViewModel
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public TagType Type { get; set; }
        public string LanguageId { get; set; }
        public string Name { get; set; }
        public string UnsignName { get; set; }
        public string SeoLink { get; set; }
    }
}
