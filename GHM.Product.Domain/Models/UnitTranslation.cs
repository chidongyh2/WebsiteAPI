using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Product.Domain.Models
{
    /// <summary>
    /// Model mapping với bảng trong database.
    /// </summary>

    public class UnitTranslation
    {
        public string UnitId { get; set; }

        public string LanguageId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Abbreviation { get; set; }

        public string UnsignName { get; set; }

        public bool IsDelete { get; set; }

        public string TenantId { get; set; }

        public UnitTranslation()
        {
            UnitId = "";
            LanguageId = "";
            Name = "";
            Abbreviation = "";
            UnsignName = "";
            IsDelete = false;
            TenantId = "";
        }
    }

}
