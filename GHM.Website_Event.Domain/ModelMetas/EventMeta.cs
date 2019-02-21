using System;
using System.Collections.Generic;
using GHM.Infrastructure.CustomAttributes;
using GHM.Website.Event.Domain.Constants;
using Newtonsoft.Json;

namespace GHM.Website.Event.Domain.ModelMetas
{
    public class EventMeta
    {
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
        public ApproverStatus Status { get; set; }
        public string DeclineReason { get; set; }

        public List<EventTranslationMeta> EventTranslations { get; set; }
    }
}
