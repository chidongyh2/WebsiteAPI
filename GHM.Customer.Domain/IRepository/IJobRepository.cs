using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Customer.Domain.Models;
using GHM.Customer.Domain.ViewModels;
namespace GHM.Customer.Domain.IRepository
{
    public interface IJobRepository
    {
        Task<int> Insert(Job job);

        Task<int> Update(Job job);

        Task<int> UpdateJobIdPath(int id, string idPath);

        Task<int> UpdateChildCount(int id, int childCount);

        Task<int> UpdateChildrenIdPath(string oldIdPath, string newIdPath);

        Task<int> SaveChangeAsync();

        Task<int> Delete(int jobId);

        Task<int> ForceDelete(int jobId);

        Task<Job> GetInfo(int jobId, bool isReadOnly = false);

        Task<Job> GetInfo(string jobIdPath, bool isReadOnly = false);

        Task<int> GetChildCount(int id);

        Task<List<JobSearchViewModel>> GetAllActivatedJob(string tenantId, string languageId);

        Task<List<JobSearchViewModel>> GetActivedJob(string tenantId, string languageId);

        Task<List<JobForSelectViewModel>> GetAllJobForSelect(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows);

        Task<List<JobSearchViewModel>> SearchJob(string tenantId, string languageId,  string keyword, bool? isActive, int page, int pageSize, out int totalRows);

        Task<List<JobSearchViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive);
    }
}
