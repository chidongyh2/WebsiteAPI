using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Customer.Domain.Models;
using GHM.Customer.Domain.ViewModels;
namespace GHM.Customer.Domain.IRepository
{
    public interface IJobTranslationRepository
    {
        Task<int> Insert(JobTranslation jobTranslation);

        Task<int> Update(JobTranslation jobTranslation);

        Task<int> Inserts(List<JobTranslation> jobTranslation);

        Task<int> ForceDeleteByJobId(int jobId);

        Task<int> SaveChangeAsync();

        Task<bool> CheckExistsByName(int jobId, string languageId, string name);

        Task<JobTranslation> GetInfo(int jobId, string languageId, bool isReadonly = false);

        Task<List<JobTranslationViewModel>> GetsByJobId(int jobId);
    }
}
