using System.Collections.Generic;
using GHM.Product.Domain.Models;

namespace GHM.Product.Domain.ViewModels
{
    public class ProductDetailViewModel
    {
        public string Id { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool? IsManagementByLot { get; set; }
        public string Thumbnail { get; set; }
        public bool? IsHot { get; set; }
        public bool? IsHomePage { get; set; }
        public List<ProductTranslationViewModel> Translations { get; set; }
        public List<ProductImageViewModel> Images { get; set; }
        public List<ProductsCategorieViewModel> Categories { get; set; }
        public List<ProductValueViewModel> Values { get; set; }
        public List<ProductUnitViewModel> Units { get; set; }
        public List<ProductConversionUnitViewModel> ConversionUnits { get; set; }
    }
}
