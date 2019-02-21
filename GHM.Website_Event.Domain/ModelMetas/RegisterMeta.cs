using GHM.Website.Event.Domain.Constants;
using System;
using System.Collections.Generic;
using System.Text;

namespace GHM.Website.Event.Domain.ModelMetas
{
    public class RegisterMeta
    {
        public string UserId { get; set; }
        public string Avatar { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Note { get; set; }
        public RegisterRole? Role { get; set; }
        public bool IsStaff { get; set; }
        public string ConcurrencyStamp { get; set; }

        public List<EventDayRegisterMeta> EventDayRegisters { get; set; }

    }
}
