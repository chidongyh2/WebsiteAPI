using GHM.Warehouse.Domain.Constants;
using System;
using System.Collections.Generic;

namespace GHM.Warehouse.Domain.ModelMetas
{
    public class ProductMeta
    {
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool? IsManagementByLot { get; set; }
        public string Thumbnail { get; set; }
        public string UnitId { get; set; }
        public decimal SalePrice { get; set; }
        public ApproverStatus Status { get; set; }
        public DateTime SentTime { get; set; }
        public DateTime? ApprovedTime { get; set; }
        public string ApproverUserId { get; set; }
        public string ApproverFullName { get; set; }
        public string ApproverAvartar { get; set; }
        public string ApproverComment { get; set; }
        public bool? IsHot { get; set; }
        public string Source { get; set; }
        public DateTime? LastUpdateHot { get; set; }
        public bool? IsHomePage { get; set; }
        public DateTime? LastUpdateHomePage { get; set; }
        public List<ProductTranslationMeta> Translations { get; set; }
        public List<ProductImageMeta> Images { get; set; }
        public List<int> Categories { get; set; }
        public List<ProductConversionUnitMeta> ConversionUnits { get; set; }
        public List<ProductAttributeMeta> Attributes { get; set; }

    }
}
