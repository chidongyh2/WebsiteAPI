using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;
using Microsoft.EntityFrameworkCore;
using Ninject;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class DoctorScheduleRepository : RepositoryBase, IDoctorScheduleRepository
    {
        public DoctorScheduleRepository(IDbContext context) : base(context)
        {
        }

        public Task<List<DoctorScheduleViewModel>> SearchDoctorSchedule(DateTime workingDay, string doctorName, string shift)
        {
            //var query = Context.Database.ExecuteSqlCommand("EXEC sp_Doctor_Schedule_Get_All @WorkingDay, @DoctorName, @ShiftId",
            //    parameters: new[] { workingDay.ToString(), doctorName, shift });

            //return query;
            try { 
            var query = Context.Set<DoctorScheduleViewModel>().FromSql("EXEC sp_Doctor_Schedule_Get_All @WorkingDay, @DoctorName, @ShiftId",
                parameters: new[] { workingDay.ToString(), doctorName, shift });
                return query.ToListAsync();
            }
            catch(Exception e)
            {
                return null;
            }
                        
        }
    }
}
