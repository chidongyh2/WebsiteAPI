using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Website.ThaiThinhMedic.Infrastructure.ModelMetas;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface IAppointmentScheduleRepository
    {


        Task<int> Insert(DatHenMeta datHen, string userId);

        Task<int> Save(DatHenMeta datHen, string userId);

        Task<int> Update(DatHenMeta datHen, string userId);

        Task<bool> CheckExistsByServiceIdDoctorAndTime(string serviceId, string doctorId, DateTime time, string patientId);

        Task<List<T>> Search<T>(Expression<Func<DatHen, T>> projector, DateTime fromDate, DateTime toDate);

        Task<List<T>> Search<T>(Expression<Func<DatHen, T>> projector, string serviceId, string doctorId, DateTime fromDate, DateTime toDate);

        List<DatHenDichVuViewModel> GetMyAppointmentSchedule(string userId);

        Task<bool> CheckFreeTime(string serviceId, string shift, string time, DateTime date);

        Task<int> GetTotalAppointmentByServiceIdAndShiftAndDate(string serviceId, string shift, string time, DateTime date);

        Task<DatHen> GetInfoByPatientId(long id, string patientId);

        Task<int> Delete(long id, string userId);
    }
}
