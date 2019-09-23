namespace GHM.Website.Domain.Models
{
    public class AgencyInfoTranslation
    {
        public string TenantId { get; set; }
        public string LanguageId { get; set; }
        public string AgencyInfoId { get; set; }
        public string Name { get; set; }
        public string IdCardAddress { get; set; }
        public string Address { get; set; }
        public string AddressRegistered { get; set; }
        public string NationalName { get; set; }
        public string ProvinceName { get; set; }
        public string DistrictName { get; set; }
        public bool IsDelete { get; set; }

        public AgencyInfoTranslation()
        {
            IsDelete = false;
        }

        public AgencyInfo AgencyInfo { get; set; }
    }
}
