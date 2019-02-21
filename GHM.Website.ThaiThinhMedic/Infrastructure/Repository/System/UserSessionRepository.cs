using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository.System;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository.System
{
    public class UserSessionRepository : RepositoryBase, IUserSessionRepository
    {
        private readonly IRepository<UserSessionLogin> _userSessionLoginRepository;
        public UserSessionRepository(IDbContext context) : base(context)
        {
            _userSessionLoginRepository = Context.GetRepository<UserSessionLogin>();
        }

        /// <summary>
        /// Kiểm tra session đăng nhập của người dùng
        /// </summary>
        /// <param name="userId">Mã người dùng</param>
        /// <param name="sessionId">Mã session</param>        
        /// <returns></returns>
        public bool CheckLoginSession(string userId, string sessionId, byte type)
        {
            return _userSessionLoginRepository.Exist(u => u.UserId == userId && u.SessionId == sessionId && u.Type == type);
        }

        public async Task<int> InsertUserSessionLogin(string userId, string sessionId, byte type)
        {
            // TODO: Check user session login.
            //await _userSessionLoginRepository.Raw.Where(u => u.UserId == userId && u.Type == type).DeleteAsync();
            //_userSessionLoginRepository.Create(new UserSessionLogin { UserId = userId, SessionId = sessionId, Type = type });

            //return await Context.SaveChangesAsync();
            return 1;
        }

        public bool Exist(string userId, string sessionId, byte type)
        {
            return _userSessionLoginRepository.Exist(u => u.UserId == userId && u.SessionId == sessionId && u.Type == type);
        }
    }
}
