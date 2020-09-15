using System;

namespace GHM.Website.ModelToys.ViewModels
{
    public class EventDayViewModel
    {
        public string Id { get; set; }
        public string EventId { get; set; }
        public bool IsActive { get; set; }
        public string ConcurrencyStamp { get; set; }
        public int TotalRegisters { get; set; }
        public int TotalAccompanyPersons { get; set; }
        public byte? StartHour { get; set; }
        public byte? StartMinute { get; set; }
        public byte? EndHour { get; set; }
        public byte? EndMinute { get; set; }
        public int? LimitedUsers { get; set; }
        public bool StaffOnly { get; set; }
        public DateTime? EventDate { get; set; }
        public bool? IsAllowAccompanyPerson { get; set; }
        public int? LimitedAccompanyPersons { get; set; }
        public string LanguageId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public bool IsSelect { get; set; }
    }
}
