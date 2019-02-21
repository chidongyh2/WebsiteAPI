using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Product.Domain.ViewModels
{
    public class UnitTranslationViewModel
    {
        public string UnitId { get; set; }

        public string LanguageId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Abbreviation { get; set; }
    }
}
