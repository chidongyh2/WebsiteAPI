using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Notifications.Api.Infrastructure.Models;
using GHM.Notifications.Api.Infrastructure.ViewModels;

namespace GHM.Notifications.Api.Infrastructure.IRepository
{
    public interface INotificationRepository
    {
        Task<int> Insert(Notification notification);

        Task<int> Update(Notification notification);

        Task<int> UpdateIsRead(string id, bool isRead);

        Task<int> UpdateIsShow(string userId);

        Task<int> Delete(string id);

        Task<Notification> GetInfo(string id, bool isReadOnly = false);

        Task<List<NotificationSearchViewModel>> Search(string tenantId, string toUserId, bool? isRead, int page,
            int pagSize, out int totalRows);
    }
}
