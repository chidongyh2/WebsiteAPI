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
        public string IdCard { get; set; }
        public DateTime IdCardDate { get; set; }
        public string NationalId { get; set; }
        public string ProvinceId { get; set; }
        public string DistrictId { get; set; }
        public float Length { get; set; }
        public float Width { get; set; }
        public float Height { get; set; }
        public float TotalArea { get; set; }
        public DateTime StartTime { get; set; }
        public string GoogleMap { get; set; }
        public int Order { get; set; }
        public string IsShow { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public DateTime? CreateTime { get; set; }
        public DateTime? LastUpdate { get; set; }

        public List<AgencyInfoTranslationViewModel> AgencyInfoTranslationViewModels { get; set; }
    }
}
