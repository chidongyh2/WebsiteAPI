using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.IRepository.System
{
    public interface IUserSessionRepository
    {
        bool CheckLoginSession(string userId, string sessionId, byte type);

        Task<int> InsertUserSessionLogin(string userId, string sessionId, byte type);

        bool Exist(string userId, string sessionId, byte type);
    }
}
