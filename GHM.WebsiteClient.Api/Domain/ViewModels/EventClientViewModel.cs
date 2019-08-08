using System;

namespace GHM.WebsiteClient.Api.Domain.ViewModels
{
    public class EventClientViewModel
    {
        public string Id { get; set; }
        public bool IsActive { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? LimitedUsers { get; set; }
        public bool IsAllowRegisterWhenOverload { get; set; }
        public int? LimitedAccompanyUsers { get; set; }
        public bool StaffOnly { get; set; }
        public bool IsAllowRegister { get; set; }
        public bool IsAllowAccompanyPersons { get; set; }
        public string Thumbnail { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string SeoLink { get; set; }
        public DateTime? CreateTime { get; set; }
        public string Address { get; set; }
        public string MetaTitle { get; set; }
    }
}
