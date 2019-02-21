using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Customer.Domain.ModelMetas;
using GHM.Customer.Domain.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;

namespace GHM.Customer.Domain.IServices
{
    public interface IJobService
    {
        Task<List<JobSearchViewModel>> GetsAll(string tenantId, string languageId);

        Task<SearchResult<JobSearchViewModel>> Search(string tenantId, string languageId, string keyword,
            bool? isActive);

        Task<SearchResult<JobSearchViewModel>> SearchTree(string tenantId, string languageId, string keyword, bool? isActive);

        Task<List<TreeData>> GetFullJobTree(string tenantId, string languageId);

        Task<ActionResultResponse<int>> Insert(string tenantId, JobMeta jobMeta);

        Task<ActionResultResponse> Update(string tenantId, int jobId, JobMeta jobMeta);

        Task<ActionResultResponse> Delete(string tenantId, int id);

        Task<ActionResultResponse<JobDetailViewModel>> GetDetail(string tenantId, string languageId, int id);

        Task<List<JobForSelectViewModel>> GetJobForSelect(string tenantId, string languageId, string keyword, int page, int pageSize);
    }
}
