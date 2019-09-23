using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace GHM.Website.Domain.IRepository
{
    public interface IAgencyInfoRepository
    {
        Task<List<AgencyInfoViewModel>> Search(string tenantId, string languageId, string keyword,
       bool? isActive, int page, int pageSize, out int totalRows);

        Task<int> Insert(AgencyInfo agencyInfo);

        Task<int> Update(AgencyInfo agencyInfo);

        Task<int> Delete(string agencyInfoId);

        Task<int> ForceDelete(string agencyInfoId);

        Task<AgencyInfo> GetInfo(string agencyInfoId, bool isReadonly = false);

        Task<AgencyInfo> GetInfo(string tenantId, string agencyInfoId, bool isReadonly = false);
    }
}
