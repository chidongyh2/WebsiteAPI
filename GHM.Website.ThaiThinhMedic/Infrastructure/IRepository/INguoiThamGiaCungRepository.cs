using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface INguoiThamGiaCungRepository
    {
        Task<int> Insert(List<string> tenNguoiThamGiaCung);
    }
}
