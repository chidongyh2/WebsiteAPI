using System.Collections.Generic;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.ViewModels
{
    public class CategoryDetailViewModel
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public int? ParentId { get; set; }
        public int Order { get; set; }
        public bool? IsHomePage { get; set; }
        public string BannerImage { get; set; }
        public List<CategoryTranslation> CategoryTranslations { get; set; }
    }
}
