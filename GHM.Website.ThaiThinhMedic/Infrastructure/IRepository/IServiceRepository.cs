using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface IServiceRepository
    {
        Task<List<GetServiceByDateAndByShiftViewModel>> GetServiceByDateAndByShift(DateTime fromDate, DateTime toDate);

        Task<DmDichVu> GetById(string id);

        Task<bool> CheckDoctorHasWorkSchedule(string doctorId, string serviceId, DateTime? date, string shiftId);
    }
}
