using System;
using System.Collections.Generic;
using System.Text;
using GHM.Website.Event.Domain.Constants;

namespace GHM.Website.Event.Domain.ViewModels
{
    public class EventDetailViewModel
    {
        public string Id { get; set; }
        public bool IsActive { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string ConcurrencyStamp { get; set; }
        public int? LimitedUsers { get; set; }
        public bool IsAllowRegisterWhenOverload { get; set; }
        public int? LimitedAccompanyPersons { get; set; }
        public bool StaffOnly { get; set; }
        public bool IsAllowRegister { get; set; }
        public bool IsAllowAccompanyPerson { get; set; }
        public string Thumbnail { get; set; }
        public DateTime? SentTime { get; set; }
        public DateTime? CreateTime { get; set; }
        public string CreatorId { get; set; }
        public string CreatorFullName { get; set; }
        public string CreatorAvatar { get; set; }
        public ApproverStatus Status { get; set; }
        public string ApproverId { get; set; }
        public string ApproverFullName { get; set; }
        public string ApproverAvatar { get; set; }
        public DateTime? ApprovedTime { get; set; }
        public string DeclineReason { get; set; }

        public List<EventTranslationViewModel> EventTranslations { get; set; }
    }
}
