using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Domain.ViewModels
{
    public class AgencyInfoDetailViewModel
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Website { get; set; }
        public string IdCard { get; set; }
        public DateTime? IdCardDate { get; set; }
        public int ProvinceId { get; set; }
        public int DistrictId { get; set; }
        public double? Length { get; set; }
        public double? Width { get; set; }
        public double? Height { get; set; }
        public double? TotalArea { get; set; }
        public DateTime? StartTime { get; set; }
        public string GoogleMap { get; set; }
        public int? Order { get; set; }
        public bool? IsShow { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public DateTime? CreateTime { get; set; }
        public DateTime? LastUpdate { get; set; }

        public List<AgencyInfoTranslationViewModel> Translations { get; set; }
    }
}
