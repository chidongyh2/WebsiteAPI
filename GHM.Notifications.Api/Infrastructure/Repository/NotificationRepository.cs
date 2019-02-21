using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Notifications.Api.Infrastructure.IRepository;
using GHM.Notifications.Api.Infrastructure.Models;
using GHM.Notifications.Api.Infrastructure.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Notifications.Api.Infrastructure.Repository
{
    public class NotificationRepository : RepositoryBase, INotificationRepository
    {
        private readonly IRepository<Notification> _notificationRepository;
        public NotificationRepository(IDbContext context) : base(context)
        {
            _notificationRepository = Context.GetRepository<Notification>();
        }

        public async Task<int> Insert(Notification notification)
        {
            _notificationRepository.Create(notification);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Notification notification)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateIsRead(string id, bool isRead)
        {
            var notification = await GetInfo(id);
            if (notification == null)
                return -1;

            notification.IsRead = isRead;
            if (!notification.ReadTime.HasValue)
                notification.ReadTime = isRead ? DateTime.Now : notification.ReadTime;

            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateIsShow(string userId)
        {
            var notifications = await _notificationRepository.GetsAsync(false, x => x.ReceiverId == userId
                                                                                    && !x.IsRead && !x.IsShow &&
                                                                                    !x.IsDelete);
            if (!notifications.Any())
                return -1;

            foreach (var notification in notifications)
            {
                notification.IsShow = true;
            }

            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<Notification> GetInfo(string id, bool isReadOnly = false)
        {
            return await _notificationRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete);
        }

        public Task<List<NotificationSearchViewModel>> Search(string tenantId, string toUserId, bool? isRead, int page, int pageSize,
            out int totalRows)
        {
            Expression<Func<Notification, bool>> spec = x =>
                !x.IsDelete && x.TenantId == tenantId && x.ReceiverId == toUserId;

            if (isRead.HasValue)
            {
                spec = spec.And(x => x.IsRead == isRead.Value);
            }

            var query = Context.Set<Notification>()
                .Where(spec);

            totalRows = query.Count();
            return query.AsNoTracking()
                .Select(x => new NotificationSearchViewModel
                {
                    Id = x.Id,
                    SenderId = x.SenderId,
                    SenderFullName = x.SenderFullName,
                    SenderAvatar = x.SenderAvatar,
                    Title = x.Title,
                    Content = x.Content,
                    CreateTime = x.CreateTime,
                    Image = x.Image,
                    Url = x.Url,
                    IsShow = x.IsShow,
                    IsRead = x.IsRead
                })
                .OrderByDescending(x => x.CreateTime)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }
    }
}
