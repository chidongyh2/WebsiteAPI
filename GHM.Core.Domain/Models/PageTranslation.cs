using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;

namespace GHM.Core.Domain.Models
{
    public class PageTranslation
    {
        public int PageId { get; set; }
        public string Name { get; set; }
        public string UnsignName { get; set; }
        public string Description { get; set; }
        public string LanguageId { get; set; }
        public bool IsDelete { get; set; }

        public PageTranslation()
        {

        }

        public PageTranslation(int pageId, string langulageId, string name, string description)
        {
            PageId = pageId;
            Name = name.Trim();
            UnsignName = name.Trim().StripVietnameseChars().ToUpper();
            Description = description?.Trim();
            LanguageId = langulageId?.Trim();
            IsDelete = false;
        }
    }
}
