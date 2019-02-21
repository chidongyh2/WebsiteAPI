using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository
{
    public interface IDoctorRepository
    {
        Task<DmBacSy> GetById(string id);
    }
}
