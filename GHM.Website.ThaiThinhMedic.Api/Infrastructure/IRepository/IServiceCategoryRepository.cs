using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository
{
    public interface IServiceCategoryRepository
    {
        Task<List<DmPhanLoaiDichVu>> GetByServiceTypeId(string serviceTypeId);
    }
}
