using System;

namespace GHM.Website.Domain.ViewModels
{
    public class AgencyInfoViewModel
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Website { get; set; }
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
        public string LanguageId { get; set; }
        public string Name { get; set; }
        public string IdCardAddress { get; set; }
        public string Address { get; set; }
        public string AddressRegistered { get; set; }
        public string NationalName { get; set; }
        public string ProvinceName { get; set; }
        public string DistrictName { get; set; }
    }
}
