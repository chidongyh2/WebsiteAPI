using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Notifications.Api.Infrastructure.Models;
using GHM.Notifications.Api.Infrastructure.ViewModels;

namespace GHM.Notifications.Api.Infrastructure.IServices
{
    public interface INotificationService
    {
        Task<ActionResultResponse> Insert(Notification notification);

        Task<ActionResultResponse> UpdateIsRead(string id, string userId, bool isRead);

        Task<ActionResultResponse> UpdateIsShow(string userId);

        Task<ActionResultResponse> Delete(string id, string userId);        

        Task<SearchResult<NotificationSearchViewModel>> Search(string tenantId, string userId, bool? isRead, int page, int pageSize);
    }
}
