using System.Threading.Tasks;

namespace GHM.Infrastructure.SqlServer
{
    public interface IRepositoryBase
    {
        Task<int> Update();
    }
}
