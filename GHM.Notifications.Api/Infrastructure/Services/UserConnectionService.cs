using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Notifications.Api.Hubs;
using GHM.Notifications.Api.Infrastructure.IRepository;
using GHM.Notifications.Api.Infrastructure.IServices;
using GHM.Notifications.Api.Infrastructure.Models;
using Microsoft.AspNetCore.SignalR;

namespace GHM.Notifications.Api.Infrastructure.Services
{
    public class UserConnectionService : IUserConnectionService
    {
        private readonly IUserConnectionRepository _userConnectionRepository;
        private readonly IHubContext<NotificationHub> _notificationHubContext;

        public UserConnectionService(IUserConnectionRepository userConnectionRepository, IHubContext<NotificationHub> notificationHubContext)
        {
            _userConnectionRepository = userConnectionRepository;
            _notificationHubContext = notificationHubContext;
        }

        public async Task<int> Insert(UserConnection userConnection)
        {
            var isExists =
                await _userConnectionRepository.CheckExists(userConnection.UserId, userConnection.ConnectionId);
            if (isExists)
                return -1;

            return await _userConnectionRepository.Insert(userConnection);
        }

        public async Task<int> Delete(string userName, string connectionId)
        {
            return await _userConnectionRepository.Delete(userName, connectionId);
        }

        public async Task<int> DeleteByUserId(string userId)
        {
            try {
                var userConnections = await _userConnectionRepository.GetAllUserConnections(userId);
                if (userConnections != null && userConnections.Any())
                {
                    await _notificationHubContext.Clients.Clients(userConnections.Select(x => x.ConnectionId).ToList())
                        .SendAsync("LoggedOut");
                }

                return await _userConnectionRepository.Delete(userId);
            } catch(Exception e)
            {
                return 1;
            }
        }
    }
}
