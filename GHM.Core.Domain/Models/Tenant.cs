using System;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Models;

namespace GHM.Core.Domain.Models
{
    public class Tenant : EntityBase<string>
    {
        public string Name { get; set; }
        public string UnsignName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public bool IsActive { get; set; }
        public string Note { get; set; }
        public string Logo { get; set; }

        public Tenant()
        {

        }
        public Tenant(string id, string name, string email, string phoneNumber, string address, bool isActive, string note, string logo)
        {
            Id = id;
            Name = name.Trim();
            Email = email?.Trim();
            PhoneNumber = phoneNumber?.Trim();
            Address = address?.Trim();
            IsActive = isActive;
            Note = note?.Trim();
            Logo = logo?.Trim();
            UnsignName = $"{Name.StripVietnameseChars().ToUpper()} {email?.StripVietnameseChars().ToUpper()} {phoneNumber?.StripVietnameseChars().ToUpper()}";
            CreateTime = DateTime.Now;
        }
    }
}
