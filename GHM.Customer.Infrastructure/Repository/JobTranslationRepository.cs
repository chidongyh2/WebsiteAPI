using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Customer.Domain.IRepository;
using GHM.Customer.Domain.Models;
using GHM.Customer.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;


namespace GHM.Customer.Infrastructure.Repository
{
    public class JobTranslationRepository : RepositoryBase, IJobTranslationRepository
    {
        private readonly IRepository<JobTranslation> _jobTranslationRepository;
        public JobTranslationRepository(IDbContext context) : base(context)
        {
            _jobTranslationRepository = Context.GetRepository<JobTranslation>();
        }

        public async Task<int> Insert(JobTranslation jobTranslation)
        {
            _jobTranslationRepository.Create(jobTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(JobTranslation jobTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<JobTranslation> jobTranslation)
        {
            _jobTranslationRepository.Creates(jobTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDeleteByJobId(int jobId)
        {
            var jobTranslation = await _jobTranslationRepository.GetsAsync(false, x => x.JobId == jobId);
            if (jobTranslation == null || !jobTranslation.Any())
                return -1;

            _jobTranslationRepository.Deletes(jobTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> SaveChangeAsync()
        {
            return await Context.SaveChangesAsync();
        }
        
        public async Task<bool> CheckExistsByName( int jobId, string languageId, string name)
        {
            name = name.Trim();
            return await _jobTranslationRepository.ExistAsync(x =>
                x.JobId != jobId && x.LanguageId == languageId && x.Name == name);
        }

        public async Task<JobTranslation> GetInfo(int jobId, string languageId, bool isReadOnly = false)
        {
            return await _jobTranslationRepository.GetAsync(isReadOnly, c => c.JobId == jobId && c.LanguageId == languageId);
        }

        public async Task<List<JobTranslationViewModel>> GetsByJobId(int jobId)
        {
            return await _jobTranslationRepository.GetsAsAsync(x => new JobTranslationViewModel
            {
                Name = x.Name,
                Description = x.Description,
                LanguageId = x.LanguageId,
                CustomerName = x.ParentName
            }, x => x.JobId == jobId);
        }


    }
}
