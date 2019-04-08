using GHM.Website.JadesSpa.ViewModels;
using System.Collections.Generic;

namespace GHM.Website.JadesSpa.ViewModels
{
    public class CategoryWidthNewsViewModel
    {
        public int CategoryId { set; get; }
        public string CategoryName { get; set; }
        public string SeoLink { get; set; }
        public string BannerImage { get; set; }
        public int? TotalRows { get; set; }
        public List<NewsSearchViewModel> ListNews { get; set; }
    }
}
