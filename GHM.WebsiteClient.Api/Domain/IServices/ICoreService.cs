using GHM.WebsiteClient.Api.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface ICoreService
    {
        Task<List<ObjectViewModel>> GetProvinceByNationId(int nationId);

        Task<List<ObjectViewModel>> GetDistinctByProvinceId(int provinceId);
    }
}
