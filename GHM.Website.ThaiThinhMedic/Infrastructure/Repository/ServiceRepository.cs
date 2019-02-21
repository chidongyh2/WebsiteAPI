using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;
using Ninject;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class ServiceRepository : RepositoryBase, IServiceRepository
    {
        private readonly IRepository<DmDichVu> _serviceRepository;
        public ServiceRepository(IDbContext context) : base(context)
        {
            _serviceRepository = context.GetRepository<DmDichVu>();
        }

        public async Task<List<GetServiceByDateAndByShiftViewModel>> GetServiceByDateAndByShift(DateTime fromDate, DateTime toDate)
        {
            var query = await Context.RawQueryAsync<GetServiceByDateAndByShiftViewModel>("EXEC sp_GetServiceByDateAndByShift @FromDate, @ToDate",
               new SqlParameter("FromDate", fromDate),
               new SqlParameter("ToDate", toDate));

            return query.ToList();
        }

        public async Task<DmDichVu> GetById(string id)
        {
            return await _serviceRepository.GetAsync(false, x => x.MaDichVu.Equals(id) && x.Dung.HasValue && x.Dung.Value);
        }

        public async Task<bool> CheckDoctorHasWorkSchedule(string doctorId, string serviceId, DateTime? date, string shiftId)
        {
            var query = await Context.RawQueryAsync<Boolean>("EXEC sp_CheckDoctorHasWorkSchedule @DoctorId, @ServiceId, @Date, @ShiftId",
                new SqlParameter("DoctorId", doctorId),
                new SqlParameter("ServiceId", serviceId),
                new SqlParameter("Date", date),
                new SqlParameter("ShiftId", shiftId));

            return query.FirstOrDefault();
        }
    }
}
