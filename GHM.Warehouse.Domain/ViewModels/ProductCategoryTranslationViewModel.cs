using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class ProductCategoryTranslationViewModel
    {
        public string LanguageId { get; set; }

        public string Name { get; set; }

        public string SeoLink { get; set; }

        public string ParentName { get; set; }

        public string Description { get; set; }
    }
}
