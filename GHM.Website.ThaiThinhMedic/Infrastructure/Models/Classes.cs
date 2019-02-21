using System;
using GHM.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Models
{
    public class Classes : EntityBase<string>
    {
        public int CourseId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string UnsignName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public string Address { get; set; }

        public Classes()
        {
            IsDelete = false;
        }
    }
}
