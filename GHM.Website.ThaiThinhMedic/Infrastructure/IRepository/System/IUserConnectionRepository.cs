using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository.System
{
    public interface IUserConnectionRepository
    {
        UserConnection GetInfo(string userId, string connectionId, byte type);

        int Insert(string userId, string connectionId, byte type);

        Task<int> Delete(string connectionId);

        Task<List<UserConnection>> GetConnectionByUserId(string userId, byte type);

        Task<int> DeleteByUserId(string userId, byte type);
    }
}
