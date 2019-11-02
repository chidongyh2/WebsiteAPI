using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GHM.WebsiteClient.Api.Domain.ModelMetas
{
    public class AgencyInfoMeta
    {
        public string Id { get; set; }
        public string TenantId { get; set; }
        public string ConcurrencyStamp { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }

        public string PhoneNumber { get; set; }
        public string Address { get; set; }

        public string IdCard { get; set; }

        public DateTime? IdCardDate { get; set; }
        public string IdCardAddress { get; set; }

        public string AgencyName { get; set; }

        public int ProvinceId { get; set; }

        public string ProvinceName { get; set; }
        public int DistrictId { get; set; }

        public string DistrictName { get; set; }

        public string AddressRegistered { get; set; }

        public double? Length { get; set; }
        public double? Width { get; set; }

        public double? Height { get; set; }

        public double? TotalArea { get; set; }

        public DateTime? StartTime { get; set; }

        public string Website { get; set; }
        public string GoogleMap { get; set; }

        public AgencyInfoMeta()
        {
            Id = Guid.NewGuid().ToString();
            ConcurrencyStamp = Guid.NewGuid().ToString(); 
        }
    }
}
