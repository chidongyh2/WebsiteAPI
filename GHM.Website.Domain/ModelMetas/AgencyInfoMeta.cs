using System;
using System.Collections.Generic;

namespace GHM.Website.Domain.ModelMetas
{
    public class AgencyInfoMeta
    {
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
        public string ProvinceName { get; set; }
        public string DistrictName { get; set; }
        public List<AgencyInfoTranslationMeta> Translations { get; set; }
    }
}
