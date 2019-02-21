using GHM.Product.Domain.Constants;
using System;

namespace GHM.Product.Domain.Models
{
    /// <summary>
    /// Model mapping với bảng trong database.
    /// </summary>

    public class Contact
    {
        public string Id { get; set; }

        public string SubjectId { get; set; }

        public string FullName { get; set; }

        public string PositionName { get; set; }

        public string Email { get; set; }

        public string Fax { get; set; }

        public string PhoneNumber { get; set; }

        public string Description { get; set; }

        public string UnsignName { get; set; }

        public ContactStatus Status { get; set; }

        public string ConcurrencyStamp { get; set; }

        public ContactType Type { get; set; }

        public string CreatorId { get; set; }

        public string CreatorFullName { get; set; }

        public string LastUpdateUserId { get; set; }

        public string LastUpdateFullName { get; set; }

        public DateTime? LastUpdateTime { get; set; }

        public DateTime CreateTime { get; set; }

        public Contact()
        {
            Id = Guid.NewGuid().ToString();
            SubjectId = "";
            FullName = "";
            PositionName = "";
            UnsignName = "";
            Status = ContactStatus.Working;
            ConcurrencyStamp = "";
            CreatorId = "";
            CreatorFullName = "";
            CreateTime = DateTime.Now;
        }
    }

}
