using System;

namespace GHM.Website.Domain.ViewModels
{
    public class AgencyInfoViewModel
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Website { get; set; }
        public string IdCard { get; set; }
        public DateTime? IdCardDate { get; set; }
        public double? Length { get; set; }
        public double? Width { get; set; }
        public double? Height { get; set; }
        public double? TotalArea { get; set; }
        public DateTime? StartTime { get; set; }
        public int? Order { get; set; }
        public bool? IsShow { get; set; }
        public bool IsActive { get; set; }
        public DateTime? CreateTime { get; set; }
        public DateTime? LastUpdate { get; set; }
        public string FullName { get; set; }
        public string AgencyName { get; set; }
        public string ProvinceName { get; set; }
        public string DistrictName { get; set; }
        public string AddressRegistered { get; set; }
    }
}
