using GHM.Product.Domain.ModelMetas;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Product.Domain.ViewModels
{
    public class UnitDetailViewModel
    {
        public string Id { get; set; }

        public bool IsActive { get; set; }

        public string ConcurrencyStamp { get; set; }

        public List<UnitTranslationViewModel> Translations { get; set; }

    }
}
