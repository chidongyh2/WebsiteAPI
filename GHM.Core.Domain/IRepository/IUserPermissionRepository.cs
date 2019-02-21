using System.Threading.Tasks;

namespace GHM.Core.Domain.IRepository
{
    public interface IUserPermissionRepository
    {
        bool CheckPermission(string userId, int pageId, int permission);
    }
}
