using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Customer.Domain.IRepository;
using GHM.Customer.Domain.Models;
using GHM.Customer.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;
namespace GHM.Customer.Infrastructure.Repository
{
    public class JobRepository : RepositoryBase, IJobRepository
    {
        private readonly IRepository<Job> _jobRepository;

        public JobRepository(IDbContext context) : base(context)
        {
            _jobRepository = Context.GetRepository<Job>();
        }

        public async Task<int> Insert(Job job)
        {
            _jobRepository.Create(job);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Job job)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateJobIdPath(int id, string idPath)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateChildCount(int id, int childCount)
        {
            var info = await GetInfo(id);
            if (info == null)
                return -1;

            info.ChildCount = childCount;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateChildrenIdPath(string oldIdPath, string newIdPath)
        {
            var childrenJob = await _jobRepository.GetsAsync(false, x => !x.IsDelete && x.IdPath.StartsWith(oldIdPath + "."));
            if (childrenJob == null || !childrenJob.Any())
                return -1;

            foreach (var job in childrenJob)
            {
                job.IdPath = $"{newIdPath}.{job.Id}";
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<int> SaveChangeAsync()
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(int jobId)
        {
            var officeInfo = await GetInfo(jobId);
            if (officeInfo == null)
                return -1;

            officeInfo.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(int jobId)
        {
            var info = await GetInfo(jobId);
            if (info == null)
                return -1;

            _jobRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<Job> GetInfo(int jobId, bool isReadOnly = false)
        {
            return await _jobRepository.GetAsync(isReadOnly, x => x.Id == jobId && !x.IsDelete);
        }

        public async Task<Job> GetInfo(string jobIdPath, bool isReadOnly = false)
        {
            return await _jobRepository.GetAsync(isReadOnly, x => x.IdPath == jobIdPath && !x.IsDelete);
        }

        public async Task<int> GetChildCount(int id)
        {
            return await _jobRepository.CountAsync(x => x.ParentId == id && !x.IsDelete);
        }

        public async Task<List<JobSearchViewModel>> GetAllActivatedJob(string tenantId, string languageId)
        {
            var query = Context.Set<Job>().Where(x => x.IsActive && !x.IsDelete && x.TenantId == tenantId)
                .Join(Context.Set<JobTranslation>().Where(x => x.LanguageId == languageId), o => o.Id,
                    ot => ot.JobId, (o, ot) => new JobSearchViewModel
                    {
                        Id = o.Id,
                        Name = ot.Name,
                        Description = ot.Description,
                        IsActive = o.IsActive,
                        ParentId = o.ParentId,
                        IdPath = o.IdPath                        
                    });
            return await query
                .AsNoTracking()
                .ToListAsync();
        }


        public Task<List<JobSearchViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive)
        {
            Expression<Func<Job, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<JobTranslation, bool>> specTranslation = x => x.LanguageId == languageId;
            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive.Value);

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<Job>().Where(spec)
                .Join(Context.Set<JobTranslation>().Where(specTranslation), o => o.Id, ot => ot.JobId, (o, ot) => new JobSearchViewModel
                {
                    Id = o.Id,
                    IdPath = o.IdPath,
                    Name = ot.Name,
                    Description = ot.Description,
                    IsActive = o.IsActive,
                    ParentId = o.ParentId
                });
            return query
                .AsNoTracking()
                .OrderBy(x => x.IdPath)
                .ToListAsync();
        }

        public async Task<List<JobSearchViewModel>> GetActivedJob(string tenantId, string languageId)
        {
            var query = Context.Set<Job>().Where(x => x.IsActive && !x.IsDelete && x.TenantId == tenantId)
                .Join(Context.Set<JobTranslation>().Where(x => x.LanguageId == languageId), o => o.Id,
                    ot => ot.JobId, (o, ot) => new JobSearchViewModel
                    {
                        Id = o.Id,
                        Name = ot.Name,
                        Description = ot.Description,
                        IsActive = o.IsActive,
                        ParentId = o.ParentId,
                        IdPath = o.IdPath                        
                    });
            return await query
                .AsNoTracking()
                .ToListAsync();
        }

        public Task<List<JobSearchViewModel>> SearchJob(string tenantId, string languageId,
            string keyword, bool? isActive, int page,
            int pageSize, out int totalRows)
        {
            Expression<Func<Job, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<JobTranslation, bool>> specTranslation = x => x.LanguageId == languageId;
            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive.Value);

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<Job>().Where(spec)
                .Join(Context.Set<JobTranslation>().Where(specTranslation), o => o.Id, ot => ot.JobId, (o, ot) => new JobSearchViewModel
                {
                    Id = o.Id,
                    IdPath = o.IdPath,
                    Name = ot.Name,
                    Description = ot.Description,
                    IsActive = o.IsActive,
                }).AsNoTracking();

            totalRows = query.Count();
            return query.ToListAsync();
        }

        public Task<List<JobForSelectViewModel>> GetAllJobForSelect(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Job, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId && x.IsActive;
            Expression<Func<JobTranslation, bool>> specTranslation = x => x.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<Job>().Where(spec)
                 .Join(Context.Set<JobTranslation>().Where(specTranslation), o => o.Id,
                     ot => ot.JobId, (o, ot) => new JobForSelectViewModel
                     {
                         Id = o.Id,
                         Name = ot.Name,
                     }).AsNoTracking();

            totalRows = query.Count();
            return query.OrderBy(c => c.Name).Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        }
    }
}
