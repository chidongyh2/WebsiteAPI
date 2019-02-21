using System;
using GHM.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels
{
    public class ClassViewModel : EntityBase<string>
    {
        public int CourseId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Address { get; set; }
        public bool IsActive { get; set; }        

        public ClassViewModel(string id, int courseId, string name, string description, DateTime? startDate, DateTime? endDate, string address, bool isActive)
        {
            Id = id;
            CourseId = courseId;
            Name = name;
            Description = description;
            StartDate = startDate;
            EndDate = endDate;
            Address = address;
            IsActive = isActive;
        }
    }
}
