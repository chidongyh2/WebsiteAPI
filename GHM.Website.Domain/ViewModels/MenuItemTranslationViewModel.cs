using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
{
    public class MenuItemTranslationViewModel
    {
        public string LanguageId { get; set; }
        public string Name { get; set; }
        public string ParentName { get; set; }
        public string NamePath { get; set; }
        public string Description { get; set; }
    }
}
