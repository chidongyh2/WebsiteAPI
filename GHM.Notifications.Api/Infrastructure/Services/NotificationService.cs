using System;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Notifications.Api.Infrastructure.IRepository;
using GHM.Notifications.Api.Infrastructure.IServices;
using GHM.Notifications.Api.Infrastructure.Models;
using GHM.Notifications.Api.Infrastructure.ViewModels;
using GHM.Notifications.Api.Resources;

namespace GHM.Notifications.Api.Infrastructure.Services
{
    public class NotificationService : INotificationService
    {
        private readonly INotificationRepository _notificationRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmNotificationResource> _resourceService;

        public NotificationService(INotificationRepository notificationRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmNotificationResource> notificationResourceService)
        {
            _notificationRepository = notificationRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = notificationResourceService;
        }

        public async Task<ActionResultResponse> Insert(Notification notification)
        {
            var result = await _notificationRepository.Insert(notification);
            return new ActionResultResponse(result, result <= 0
                ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Add new notification successful."));
        }

        public async Task<ActionResultResponse> UpdateIsRead(string id, string userId, bool isRead)
        {
            var info = await _notificationRepository.GetInfo(id, true);
            if (info.ReceiverId != userId)
                return new ActionResultResponse(-1, _sharedResourceService.GetString("You do have permission to do this action."));

            if (info.IsRead == isRead)
                return new ActionResultResponse(-2, _sharedResourceService.GetString("Nothing for update."));

            var result = await _notificationRepository.UpdateIsRead(id, isRead);
            return new ActionResultResponse(result, result <= 0
                ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Update isRead successful."));
        }

        public async Task<ActionResultResponse> UpdateIsShow(string userId)
        {
            var result = await _notificationRepository.UpdateIsShow(userId);
            return new ActionResultResponse(result, result < 0
                ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : result == 0 ? _sharedResourceService.GetString("Have no record updated.")
                : _resourceService.GetString("Update show status successful."));
        }

        public async Task<ActionResultResponse> Delete(string id, string userId)
        {
            var info = await _notificationRepository.GetInfo(id, true);
            if (info == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Notification not found."));

            if (info.ReceiverId != userId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString("You do have permission to do this action."));

            var result = await _notificationRepository.Delete(id);
            return new ActionResultResponse(result, result < 0
                ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : result == 0 ? _sharedResourceService.GetString("Nothing deleted.")
                : _resourceService.GetString("Delete notification successful."));
        }

        public async Task<SearchResult<NotificationSearchViewModel>> Search(string tenantId, string userId, bool? isRead, int page, int pageSize)
        {
            var items = await _notificationRepository.Search(tenantId, userId, isRead, page, pageSize,
                out var totalRows);
            foreach (var item in items)
            {
                item.Title = ExtractMessageContent(item.Title);
                item.Content = ExtractMessageContent(item.Content);
            }
            return new SearchResult<NotificationSearchViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
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
