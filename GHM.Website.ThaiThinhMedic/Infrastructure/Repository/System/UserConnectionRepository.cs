using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository.System;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository.System
{
    public class UserConnectionRepository : RepositoryBase, IUserConnectionRepository
    {
        private readonly IRepository<UserConnection> _userConnectionRepository;
        public UserConnectionRepository(IDbContext context) : base(context)
        {
            _userConnectionRepository = context.GetRepository<UserConnection>();
        }

        public UserConnection GetInfo(string userId, string connectionId, byte type)
        {
            return _userConnectionRepository.Get(false, x => x.UserId.Equals(userId) && x.ConnectionId.Equals(connectionId)
            && x.UserType == type);
        }

        public int Insert(string userId, string connectionId, byte type)
        {
            _userConnectionRepository.Create(new UserConnection
            {
                UserId = userId,
                ConnectionId = connectionId,
                UserType = type
            });

            return Context.SaveChanges();
        }

        public async Task<int> Delete(string connectionId)
        {
            var listUserConnection = Context.Set<UserConnection>().AsNoTracking().Where(x => x.ConnectionId.Equals(connectionId)).Select(x=> x).ToList();
              _userConnectionRepository.Deletes(listUserConnection);

           return await Context.SaveChangesAsync();
        }
        
        public async Task<List<UserConnection>> GetConnectionByUserId(string userId, byte type)
        {
            return await _userConnectionRepository.GetsAsync(true, x => x.UserId.Equals(userId) && x.UserType == type);
        }

        public async Task<int> DeleteByUserId(string userId, byte type)
        {
            var listUserConnect = Context.Set<UserConnection>().AsNoTracking().Where(x => x.UserId.Equals(userId) && x.UserType == type).ToList();

            _userConnectionRepository.Deletes(listUserConnect);

            return await Context.SaveChangesAsync();
        }
    }
}
