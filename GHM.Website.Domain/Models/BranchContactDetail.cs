using GHM.Website.Domain.Constants;
using System;

namespace GHM.Website.Domain.Models
{
    public class BranchContactDetail
    {
        public string Id { get; set; }

        public string BranchContactId { get; set; }

        public ContactType ContactType { get; set; }

        public string ContactValue { get; set; }

        public bool IsDelete { get; set; }

        public BranchContactDetail()
        {
            Id = Guid.NewGuid().ToString();
            IsDelete = false;
        }
    }
}
