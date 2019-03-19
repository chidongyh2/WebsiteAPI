using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class ProductListUnitMeta
    {
        public List<ProductUnitMeta> ListUnit { get; set; }
        public List<ProductConversionUnitMeta> ListConversionUnit { get; set; }
    }
}
