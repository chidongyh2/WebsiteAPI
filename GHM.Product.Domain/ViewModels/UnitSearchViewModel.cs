using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Product.Domain.ViewModels
{
    public class UnitSearchViewModel
    {
        public string Id { get; set; }

        public bool IsActive { get; set; }
        public string Abbreviation { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string ConcurrencyStamp { get; set; }

        public DateTime CreateTime { get; set; }
    }

}
