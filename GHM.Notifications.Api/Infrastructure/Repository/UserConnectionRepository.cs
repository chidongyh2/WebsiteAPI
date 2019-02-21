using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Notifications.Api.Infrastructure.IRepository;
using GHM.Notifications.Api.Infrastructure.Models;

namespace GHM.Notifications.Api.Infrastructure.Repository
{
    public class UserConnectionRepository : RepositoryBase, IUserConnectionRepository
    {
        private readonly IRepository<UserConnection> _userConnectionRepository;
        public UserConnectionRepository(IDbContext context) : base(context)
        {
            _userConnectionRepository = Context.GetRepository<UserConnection>();
        }

        public async Task<int> Insert(UserConnection userConnection)
        {
            _userConnectionRepository.Create(userConnection);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string userId)
        {
            var userConnections = await _userConnectionRepository.GetsAsync(false, x => x.UserId == userId);
            if (userConnections == null || !userConnections.Any())
                return -1;

            _userConnectionRepository.Deletes(userConnections);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string userId, string connectionId)
        {
            var userConnection = await _userConnectionRepository.GetAsync(false, x => x.UserId == userId && x.ConnectionId == connectionId);
            if (userConnection == null)
                return -1;

            _userConnectionRepository.Delete(userConnection);
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExists(string userId, string connectionId)
        {
            return await _userConnectionRepository.ExistAsync(x =>
                x.UserId == userId && x.ConnectionId == connectionId);
        }

        public async Task<List<UserConnection>> GetAllUserConnections(string userId)
        {
            return await _userConnectionRepository.GetsAsync(true, x => x.UserId == userId);
        }


    }
}
