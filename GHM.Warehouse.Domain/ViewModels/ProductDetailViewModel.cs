using System;
using System.Collections.Generic;
using GHM.Warehouse.Domain.Constants;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Models;

namespace GHM.Warehouse.Domain.ViewModels
{
    public class ProductDetailViewModel
    {
        public string Id { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool? IsManagementByLot { get; set; }
        public string Thumbnail { get; set; }
        public string UnitId { get; set; }
        public string UnitName { get; set; }
        public decimal? SalePrice { get; set; }
        public int LikeCount { get; set; }
        public int CommentCount { get; set; }
        public int ViewCount { get; set; }
        public string Source { get; set; }
        public ApproverStatus Status { get; set; }
        public DateTime SentTime { get; set; }
        public DateTime? ApprovedTime { get; set; }
        public string ApproverUserId { get; set; }
        public string ApproverFullName { get; set; }
        public string ApproverAvartar { get; set; }
        public string ApproverComment { get; set; }
        public bool? IsHot { get; set; }
        public DateTime? LastUpdateHot { get; set; }
        public bool? IsHomePage { get; set; }
        public DateTime? LastUpdateHomePage { get; set; }

        public List<ProductTranslationViewModel> Translations { get; set; }
        public List<ProductImageViewModel> Images { get; set; }
        public List<ProductsCategorieViewModel> Categories { get; set; }
        public List<ProductValueViewModel> Attributes { get; set; }
        public List<ProductUnitViewModel> Units { get; set; }
        public List<ProductConversionUnitViewModel> ConversionUnits { get; set; }        
    }
}
