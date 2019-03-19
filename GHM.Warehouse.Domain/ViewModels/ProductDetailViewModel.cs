using System.Collections.Generic;
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

        public List<ProductTranslationViewModel> Translations { get; set; }
        public List<ProductImageViewModel> Images { get; set; }
        public List<ProductsCategorieViewModel> Categories { get; set; }
        public List<ProductValueViewModel> Attributes { get; set; }
        public List<ProductUnitViewModel> Units { get; set; }
        public List<ProductConversionUnitViewModel> ConversionUnits { get; set; }        
    }
}
