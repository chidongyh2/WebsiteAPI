using System;
using System.Collections.Generic;
using GHM.Website.Event.Domain.Constants;

namespace GHM.Website.Event.Domain.ViewModels
{
    public class RegisterSearchViewModel
    {
        public string Id { get; set; }
        public string EventId { get; set; }
        public string FullName { get; set; }
        public string Avatar { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Note { get; set; }
        public string UserId { get; set; }
        public DateTime RegisterTime { get; set; }
        public bool IsStaff { get; set; }
        public RegisterRole? Role { get; set; }
        public string ConcurrencyStamp { get; set; }
        public List<EventDayRegisterViewModel> EventDayRegisters { get; set; }
    }
}
