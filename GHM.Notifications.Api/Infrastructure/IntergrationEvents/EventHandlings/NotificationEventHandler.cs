using System;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using GHM.EventBus.Abstractions;
using GHM.Events;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.IServices;
using GHM.Notifications.Api.Hubs;
using GHM.Notifications.Api.Infrastructure.IRepository;
using GHM.Notifications.Api.Infrastructure.IServices;
using GHM.Notifications.Api.Infrastructure.Models;
using GHM.Notifications.Api.Resources;
using Microsoft.AspNetCore.SignalR;

namespace GHM.Notifications.Api.Infrastructure.IntergrationEvents.EventHandlings
{
    public class NotificationEventHandler : IIntegrationEventHandler<NotificationEvent>
    {
        private readonly INotificationService _notificationService;
        private readonly IUserConnectionRepository _userConnectionRepository;
        private readonly IHubContext<NotificationHub> _notificationHub;
        private readonly IResourceService<GhmNotificationResource> _resourceService;

        public NotificationEventHandler(INotificationService notificationService,
            IUserConnectionRepository userConnectionRepository, IHubContext<NotificationHub> notificationHub,
            IResourceService<GhmNotificationResource> resourceService)
        {
            _notificationService = notificationService;
            _userConnectionRepository = userConnectionRepository;
            _notificationHub = notificationHub;
            _resourceService = resourceService;
        }

        public async Task Handle(NotificationEvent @event)
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
                var userConnections = Task.Run(() => _userConnectionRepository.GetAllUserConnections(notification.ReceiverId)).Result;
                if (userConnections.Any())
                {
                    // Refactor: Need to support multi languages.
                    var cultureInfo = new CultureInfo("vi-VN");
                    Thread.CurrentThread.CurrentCulture = cultureInfo;
                    Thread.CurrentThread.CurrentUICulture = cultureInfo;

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
