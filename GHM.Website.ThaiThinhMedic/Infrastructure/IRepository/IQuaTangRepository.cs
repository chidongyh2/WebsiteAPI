using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public interface IQuaTangRepository
    {
        Task<List<QuaTang>> GetList();

        Task<bool> CheckExists(string id);
    }
}
