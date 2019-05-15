using GHM.Website.ThaiThinhMedical.ViewModels;
using System.Collections.Generic;

namespace GHM.Website.ThaiThinhMedical.ViewModels
{
    public class CategoryWidthNewsViewModel
    {
        public int CategoryId { set; get; }
        public string CategoryName { get; set; }
        public string SeoLink { get; set; }
        public string Description { get; set; }
        public int Order { get; set; }
        public string BannerImage { get; set; }
        public int? TotalNews { get; set; }
        public List<NewsSearchViewModel> ListNews { get; set; }
    }
}
