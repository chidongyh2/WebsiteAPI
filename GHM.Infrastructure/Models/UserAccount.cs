using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace GHM.Infrastructure.Models
{
    public class UserAccount : IdentityUser
    {
        public string FullName { get; set; }

        public bool IsActive { get; set; }

        public bool IsDelete { get; set; }

        public string TenantId { get; set; }

        [MaxLength(500)]
        public string Avatar { get; set; }

        [MaxLength(16)]
        public byte[] PasswordSalt { get; set; }

        [Required]
        public override string PhoneNumber { get; set; }

        [MaxLength(500)]
        public string UnsignName { get; set; }

        public DateTime CreateTime { get; set; }

        public UserAccount()
        {
            AccessFailedCount = 0;
            EmailConfirmed = false;
            IsActive = true;
            IsDelete = false;
            LockoutEnabled = true;
            PhoneNumberConfirmed = false;
            TwoFactorEnabled = false;
            PhoneNumber = "00";
            PhoneNumberConfirmed = false;
            CreateTime = DateTime.Now;
        }
    }
}
