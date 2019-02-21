using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface IDoctorScheduleRepository
    {
        Task<List<DoctorScheduleViewModel>> SearchDoctorSchedule(DateTime workingDay, string doctorName, string shift);
    }
}
