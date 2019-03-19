using GHM.Warehouse.Domain.ModelMetas;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class UnitDetailViewModel
    {
        public string Id { get; set; }

        public bool IsActive { get; set; }

        public string ConcurrencyStamp { get; set; }

        public List<UnitTranslationViewModel> Translations { get; set; }

    }
}
