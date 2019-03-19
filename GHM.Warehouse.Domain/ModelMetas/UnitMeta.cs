using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.ModelMetas
{
    /// <summary>
    /// Model meta được gửi lên từ truy vấn của client.
    /// </summary>

    public class UnitMeta
    {
        public string Id { get; set; }

        public bool IsActive { get; set; }

        public string ConcurrencyStamp { get; set; }

        public List<UnitTranslationMeta> Translations { get; set; }
    }

}
