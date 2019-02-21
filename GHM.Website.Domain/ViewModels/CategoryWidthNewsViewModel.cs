using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
{
    public class CategoryWidthNewsViewModel
    {
        public int CategoryId { set; get; }
        public string CategoryName { get; set; }
        public string SeoLink { get; set; }
        public int Order { get; set; }
        public List<NewsSearchClientViewModel> ListNews { get; set; }
    }
}
