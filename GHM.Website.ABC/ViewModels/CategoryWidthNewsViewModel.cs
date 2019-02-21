using GHM.Website.ABC.ViewModels;
using System.Collections.Generic;

namespace GHM.Website.ABC.ViewModels
{
    public class CategoryWidthNewsViewModel
    {
        public int CategoryId { set; get; }
        public string CategoryName { get; set; }
        public string SeoLink { get; set; }
        public List<NewsSearchViewModel> ListNews { get; set; }
    }
}
