using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using GHM.Notifications.Api.Infrastructure.IServices;
using GHM.Notifications.Api.Infrastructure.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace GHM.Notifications.Api.Hubs
{
    [Authorize]
    public class NotificationHub : Hub
    {
        private readonly IUserConnectionService _userConnectionService;

        public NotificationHub(IUserConnectionService userConnectionService)
        {
            _userConnectionService = userConnectionService;
        }

        public override async Task OnConnectedAsync()
        {
            var userId = GetUserId();
            if (!string.IsNullOrEmpty(userId))
            {
                await _userConnectionService.Insert(new UserConnection(userId, Context.ConnectionId));
            }
            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            var userId = GetUserId();
            if (!string.IsNullOrEmpty(userId))
            {
                await _userConnectionService.Delete(userId, Context.ConnectionId);
            }
            await base.OnDisconnectedAsync(exception);
        }

        private string GetUserId()
        {
            var claimsIdentity = (ClaimsIdentity)Context.User.Identity;
            var claims = claimsIdentity.Claims;
            return claims.FirstOrDefault(c => c.Type == "sub")?.Value;
        }
    }
}
