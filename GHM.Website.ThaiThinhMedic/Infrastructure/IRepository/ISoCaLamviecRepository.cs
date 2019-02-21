using System;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface ISoCaLamviecRepository
    {
        Task<int> GetTotalRoomByServiceIdAndShiftAndDate(string serviceId, string shift, DateTime date);
    }
}
