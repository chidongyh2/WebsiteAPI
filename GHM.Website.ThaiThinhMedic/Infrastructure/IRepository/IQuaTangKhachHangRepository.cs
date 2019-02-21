using System.Threading.Tasks;
using GHM.Website.ThaiThinhMedic.Infrastructure.ModelMetas;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface IQuaTangKhachHangRepository
    {
        Task<bool> CheckExists(string idQuaTang, string maKhachHang);

        Task<int> Register(QuaTangKhachHangMeta quaTangKhachHangMeta);
    }
}
