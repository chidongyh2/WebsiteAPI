using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Notifications.Api.Infrastructure.Models;

namespace GHM.Notifications.Api.Infrastructure.IRepository
{
    public interface IUserConnectionRepository
    {
        Task<int> Insert(UserConnection userConnection);

        Task<int> Delete(string userId);

        Task<int> Delete(string userId, string connectionId);

        Task<bool> CheckExists(string userId, string connectionId);

        Task<List<UserConnection>> GetAllUserConnections(string userId);
    }
}
