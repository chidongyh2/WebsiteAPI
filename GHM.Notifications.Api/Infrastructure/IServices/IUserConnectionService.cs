using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Notifications.Api.Infrastructure.Models;

namespace GHM.Notifications.Api.Infrastructure.IServices
{
    public interface IUserConnectionService
    {
        Task<int> Insert(UserConnection userConnection);

        Task<int> Delete(string userName, string connectionId);

        Task<int> DeleteByUserId(string userId);
    }
}
