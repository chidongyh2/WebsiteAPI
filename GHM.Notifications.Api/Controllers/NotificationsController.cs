using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using GHM.Events;
using GHM.Infrastructure;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.IServices;
using GHM.Notifications.Api.Hubs;
using GHM.Notifications.Api.Infrastructure.IRepository;
using GHM.Notifications.Api.Infrastructure.IServices;
using GHM.Notifications.Api.Infrastructure.Models;
using GHM.Notifications.Api.Resources;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace GHM.Notifications.Api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class NotificationsController : GhmControllerBase
    {
        private readonly INotificationService _notificationService;
        private readonly IUserConnectionService _userConnectionService;
        private readonly IUserConnectionRepository _userConnectionRepository;
        private readonly IResourceService<GhmNotificationResource> _resourceService;
        private readonly IHubContext<NotificationHub> _notificationHub;

        public NotificationsController(INotificationService notificationService, IUserConnectionService userConnectionService,
            IUserConnectionRepository userConnectionRepository, IResourceService<GhmNotificationResource> resourceService,
            IHubContext<NotificationHub> notificationHub)
        {
            _notificationService = notificationService;
            _userConnectionService = userConnectionService;
            _userConnectionRepository = userConnectionRepository;
            _resourceService = resourceService;
            _notificationHub = notificationHub;
        }

        [AcceptVerbs("GET")]
        public async Task<IActionResult> GetNotifications(bool? isRead, int page, int pageSize = 10)
        {
            return Ok(await _notificationService.Search(CurrentUser.TenantId, CurrentUser.Id, isRead, page, pageSize));
        }

        [Route("disconnect"), AcceptVerbs("GET")]
        public async Task<IActionResult> Disconnect()
        {
            return Ok(await _userConnectionService.DeleteByUserId(CurrentUser.Id));
        }

        [Route("{id}"), AcceptVerbs("POST")]
        public async Task<IActionResult> UpdateIsRead(string id, [FromBody]bool isRead)
        {
            return Ok(await _notificationService.UpdateIsRead(id, CurrentUser.Id, isRead));
        }

        [Route("send"), AcceptVerbs("POST")]
        public async Task<IActionResult> DirectSendNotification([FromBody]NotificationEvent @event)
        {
            await SendNotification(@event);
            return Ok(1);
        }

        [Route("sends"), AcceptVerbs("POST")]
        public async Task<IActionResult> DirectSendNotifications([FromBody]List<NotificationEvent> listNotifications)
        {
            if (listNotifications == null || !listNotifications.Any())
                return Ok(-1);

            foreach (var notificationEvent in listNotifications)
            {
                await SendNotification(notificationEvent);
            }
            return Ok(1);
        }

        private async Task SendNotification(NotificationEvent @event)
        {
            var notification = new Notification
            {
                TenantId = @event.TenantId,
                Id = @event.Id.ToString(),
                Title = @event.Title,
                Content = @event.Content,
                Image = @event.Image,
                ReceiverId = @event.ReceiverId,
                SenderId = @event.SenderId,
                SenderFullName = @event.SenderFullName,
                SenderAvatar = @event.SenderAvatar,
                Type = @event.Type,
                Url = @event.Url
            };

            var result = await _notificationService.Insert(notification);
            if (result.Code > 0)
            {
                var userConnections = await _userConnectionRepository.GetAllUserConnections(notification.ReceiverId);
                if (userConnections.Any())
                {
                    // Parse notification title to current language.
                    notification.Title = ExtractMessageContent(notification.Title);
                    notification.Content = ExtractMessageContent(notification.Content);

                    foreach (var userConnection in userConnections)
                    {
                        await _notificationHub
                            .Clients
                            .Client(userConnection.ConnectionId)
                            .SendAsync("NotificationReceived", notification);
                    }
                }
            }
        }

        private string ExtractMessageContent(string content)
        {
            const string pattern = @"(\{(?:.*?)\})";
            foreach (var item in Regex.Split(content, pattern))
            {
                if (item.StartsWith("{") && item.EndsWith("}"))
                {
                    content = content.Replace(item, _resourceService.GetString(item.Trim()));
                }
            }
            return content;
        }
    }
}