using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Customer.Domain.IRepository;
using GHM.Customer.Domain.IServices;
using GHM.Customer.Domain.ModelMetas;
using GHM.Customer.Domain.Models;
using GHM.Customer.Domain.Resources;
using GHM.Customer.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;

namespace GHM.Customer.Infrastructure.Services
{
    public class JobService : IJobService
    {

        private readonly IJobRepository _jobRepository;
        private readonly IJobTranslationRepository _jobTranslationRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCustomerResource> _customerResourceService;

        public JobService(IJobRepository jobRepository, IJobTranslationRepository jobTranslationRepository,
            IResourceService<SharedResource> sharedResourceService, IResourceService<GhmCustomerResource> customerResourceService)
        {
            _jobRepository = jobRepository;
            _jobTranslationRepository = jobTranslationRepository;
            _sharedResourceService = sharedResourceService;
            _customerResourceService = customerResourceService;
        }

        public async Task<List<JobSearchViewModel>> GetsAll(string tenantId, string languageId)
        {
            return await _jobRepository.GetAllActivatedJob(tenantId, languageId);
        }

        public async Task<SearchResult<JobSearchViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive)
        {
            var items = await _jobRepository.Search(tenantId, languageId, keyword, isActive);
            return new SearchResult<JobSearchViewModel>
            {
                Items = items
            };
        }

        public async Task<SearchResult<JobSearchViewModel>> SearchTree(string tenantId, string languageId, string keyword, bool? isActive)
        {
            var items = await _jobRepository.Search(tenantId, languageId, keyword, isActive);
            return new SearchResult<JobSearchViewModel>
            {
                Items = items
            };
        }

        public async Task<List<TreeData>> GetFullJobTree(string tenantId, string languageId)
        {
            var infojobs = await _jobRepository.GetAllActivatedJob(tenantId, languageId);
            if (infojobs == null || !infojobs.Any())
                return null;

            var trees = RenderTree(infojobs, null);
            return trees;

            List<TreeData> RenderTree(List<JobSearchViewModel> jobs, int? parentId)
            {
                var tree = new List<TreeData>();
                var parentJobs = jobs.Where(x => x.ParentId == parentId).ToList();
                if (parentJobs.Any())
                {
                    parentJobs.ForEach(job =>
                    {
                        var treeData = new TreeData
                        {
                            Id = job.Id,
                            Text = job.Name,
                            ParentId = job.ParentId,
                            IdPath = job.IdPath,
                            Data = job,
                            ChildCount = job.ChildCount,
                            Icon = String.Empty,
                            State = new GHM.Infrastructure.Models.State(),
                            Children = RenderTree(jobs, job.Id)
                        };
                        tree.Add(treeData);
                    });
                }
                return tree;
            }

        }

        public async Task<ActionResultResponse<int>> Insert(string tenantId, JobMeta jobMeta)
        {
            if (!jobMeta.JobTranslations.Any())
                return new ActionResultResponse<int>(-1, _customerResourceService.GetString("Please select at least one language."));

            var job = new Job
            {
                IdPath = "-1",
                IsActive = jobMeta.IsActive,
                Order = jobMeta.Order,
                TenantId = tenantId,
                OrderPath = jobMeta.Order.ToString(),
            };

            if (jobMeta.ParentId.HasValue)
            {
                var parentInfo = await _jobRepository.GetInfo(jobMeta.ParentId.Value);
                if (parentInfo == null)
                    return new ActionResultResponse<int>(-2, _customerResourceService.GetString("Parent job does not exists. Please try again."));

                job.ParentId = parentInfo.Id;
                job.IdPath = $"{parentInfo.IdPath}.-1";

            }

            var result = await _jobRepository.Insert(job);
            if (result <= 0)
                return new ActionResultResponse<int>(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            #region Update current jod idPath.            
            job.Level = !string.IsNullOrEmpty(job.IdPath) ? job.IdPath.Split(".").Length : 1;
            job.IdPath = job.IdPath.Replace("-1", job.Id.ToString());
            await _jobRepository.UpdateJobIdPath(job.Id, job.IdPath);
            #endregion

            #region Update parent jod child count.
            if (job.ParentId.HasValue)
            {
                var childCount = await _jobRepository.GetChildCount(job.ParentId.Value);
                await _jobRepository.UpdateChildCount(job.ParentId.Value, childCount);
            }
            #endregion

            #region Insert jod translation.
            var jobTranslations = new List<JobTranslation>();
            foreach (var jobTranslationMeta in jobMeta.JobTranslations)
            {
                // check name exists.
                var isNameExists = await _jobTranslationRepository.CheckExistsByName(job.Id,
                    jobTranslationMeta.LanguageId, jobTranslationMeta.Name);
                if (isNameExists)
                {
                    await RollbackInsert();
                    return new ActionResultResponse<int>(-3,
                        _customerResourceService.GetString("Job name: \"{0}\" already taken by another job. Please try again.", jobTranslationMeta.Name));
                }

                var jobTranslation = new JobTranslation
                {
                    Name = jobTranslationMeta.Name.Trim(),
                    Description = jobTranslationMeta.Description?.Trim(),
                    UnsignName = jobTranslationMeta.Name.Trim().StripVietnameseChars().ToUpper(),
                    LanguageId = jobTranslationMeta.LanguageId,
                    JobId = job.Id,
                };
                jobTranslations.Add(jobTranslation);
            }
            var resultInsertTranslation = await _jobTranslationRepository.Inserts(jobTranslations);
            if (resultInsertTranslation <= 0)
            {
                await RollbackInsert();
                return new ActionResultResponse<int>(resultInsertTranslation, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));
            }
            #endregion

            return new ActionResultResponse<int>(result, _customerResourceService.GetString("Add new jod successful."), string.Empty, job.Id);

            async Task RollbackInsert()
            {
                await _jobRepository.ForceDelete(job.Id);
            }
        }

        public async Task<ActionResultResponse> Update(string tenantId, int jobId, JobMeta jobMeta)
        {
            if (!jobMeta.JobTranslations.Any())
                return new ActionResultResponse(-1, _customerResourceService.GetString("Please select at least one language."));

            var jobInfo = await _jobRepository.GetInfo(jobId);
            if (jobInfo == null)
                return new ActionResultResponse(-2, _customerResourceService.GetString("Job info does not exists. Please try again."));

            if (jobInfo.TenantId != tenantId)
                return new ActionResultResponse(-3, _sharedResourceService.GetString("You do not have permission to do this action."));


            if (jobMeta.ParentId.HasValue && jobInfo.Id == jobMeta.ParentId.Value)
                return new ActionResultResponse(-4, _customerResourceService.GetString("Job and parent jod can not be the same.")); ;

            var oldParentId = jobInfo.ParentId;
            var oldIdPath = jobInfo.IdPath;


            jobInfo.IsActive = jobMeta.IsActive;
            jobInfo.Order = jobMeta.Order;
            jobInfo.LastUpdate = DateTime.Now;

            if (jobInfo.ParentId.HasValue && !jobMeta.ParentId.HasValue)
            {
                jobInfo.ParentId = null;
                jobInfo.IdPath = jobInfo.Id.ToString();
                jobInfo.OrderPath = jobInfo.Order.ToString();
            }
            else if (jobMeta.ParentId.HasValue && jobMeta.ParentId != jobInfo.ParentId)
            {
                var parentInfo = await _jobRepository.GetInfo(jobMeta.ParentId.Value);
                if (parentInfo == null)
                    return new ActionResultResponse(-5, _customerResourceService.GetString("Parent job does not exists. Please try again.")); ;

                jobInfo.IdPath = $"{parentInfo.IdPath}.{jobInfo.Id}";
                jobInfo.ParentId = parentInfo.Id;
                jobInfo.OrderPath = $"{parentInfo.OrderPath}.{jobInfo.Order}";
            }

            await _jobRepository.Update(jobInfo);

            // Update children IdPath and RootInfo
            if (jobInfo.IdPath != oldIdPath)
            {
                await _jobRepository.UpdateChildrenIdPath(oldIdPath, jobInfo.IdPath);
            }

            // Update parent jod child count.
            if (jobInfo.ParentId.HasValue && oldParentId.HasValue && jobInfo.ParentId.Value != oldParentId.Value)
            {
                // Update old parent jod child count.
                var oldChildCount = await _jobRepository.GetChildCount(oldParentId.Value);
                await _jobRepository.UpdateChildCount(oldParentId.Value, oldChildCount);

                // Update new parent jod child count.
                var newParentId = jobInfo.ParentId.Value;
                var newChildCount = await _jobRepository.GetChildCount(newParentId);
                await _jobRepository.UpdateChildCount(newParentId, newChildCount);
            }

            // Update jod translation.
            var resultUpdateTranslation = await UpdateJobTranslation();
            if (resultUpdateTranslation.Code <= 0)
                return new ActionResultResponse(resultUpdateTranslation.Code, resultUpdateTranslation.Message);


            return new ActionResultResponse(1, _customerResourceService.GetString("Update jod successful."));


            async Task<ActionResultResponse> UpdateJobTranslation()
            {
                foreach (var jobTranslationMeta in jobMeta.JobTranslations)
                {
                    // check name exists.
                    var isNameExists = await _jobTranslationRepository.CheckExistsByName(jobInfo.Id,
                        jobTranslationMeta.LanguageId, jobTranslationMeta.Name);
                    if (isNameExists)
                    {
                        return new ActionResultResponse(-6,
                            _customerResourceService.GetString("Job name: \"{0}\" already taken by another job. Please try again.", jobTranslationMeta.Name));
                    }



                    if (jobInfo.ParentId.HasValue)
                    {
                        await _jobTranslationRepository.GetInfo(jobInfo.ParentId.Value, jobTranslationMeta.LanguageId, true);
                    }


                    var jobTranslationInfo =
                        await _jobTranslationRepository.GetInfo(jobInfo.Id, jobTranslationMeta.LanguageId);
                    if (jobTranslationInfo == null)
                    {
                        jobTranslationInfo = new JobTranslation
                        {
                            Name = jobTranslationMeta.Name.Trim(),
                            Description = jobTranslationMeta.Description?.Trim(),
                            UnsignName = jobTranslationMeta.Name.Trim().StripVietnameseChars().ToUpper(),
                            LanguageId = jobTranslationMeta.LanguageId,
                            JobId = jobInfo.Id,

                        };
                        await _jobTranslationRepository.Insert(jobTranslationInfo);
                    }
                    else
                    {
                        jobTranslationInfo.Name = jobTranslationMeta.Name.Trim();
                        jobTranslationInfo.Description = jobTranslationMeta.Description?.Trim();
                        jobTranslationInfo.UnsignName = jobTranslationMeta.Name.StripVietnameseChars().ToUpper();
                        await _jobTranslationRepository.Update(jobTranslationInfo);
                    }
                }

                return new ActionResultResponse(1,
                    _customerResourceService.GetString("Update jod successful."));
            }

        }

        public async Task<ActionResultResponse> Delete(string tenantId, int id)
        {
            var jobInfo = await _jobRepository.GetInfo(id);
            if (jobInfo == null)
                return new ActionResultResponse(-1, _customerResourceService.GetString("Job does not exists. Please try again."));

            if (jobInfo.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString("You do not have permission to to this action."));

            // Check is has child.
            if (jobInfo.ChildCount > 0)
                return new ActionResultResponse(-3, _customerResourceService.GetString("This job has children jod. You can not delete this job."));


            var result = await _jobRepository.Delete(jobInfo.Id);
            if (result > 0 && jobInfo.ParentId.HasValue)
            {
                // Update parent jod child count.
                var childCount = await _jobRepository.GetChildCount(jobInfo.ParentId.Value);
                await _jobRepository.UpdateChildCount(jobInfo.ParentId.Value, childCount);
            }
            return new ActionResultResponse(result, result > 0
                ? _customerResourceService.GetString("Delete jod successful.")
                : _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));
        }

        public async Task<ActionResultResponse<JobDetailViewModel>> GetDetail(string tenantId, string languageId, int id)
        {
            var jobInfo = await _jobRepository.GetInfo(id, true);
            if (jobInfo == null)
                return new ActionResultResponse<JobDetailViewModel>(-1, _customerResourceService.GetString("Job does not exists."));

            if (jobInfo.TenantId != tenantId)
                return new ActionResultResponse<JobDetailViewModel>(-2, _customerResourceService.GetString("You do not have permission to view this job info."));

            var jobDetail = new JobDetailViewModel
            {
                IsActive = jobInfo.IsActive,
                ParentId = jobInfo.ParentId,
                Order = jobInfo.Order,
                ChildCount = jobInfo.ChildCount,
                JobTranslations = await _jobTranslationRepository.GetsByJobId(jobInfo.Id)
            };

            return new ActionResultResponse<JobDetailViewModel>
            {
                Code = 1,
                Data = jobDetail
            };
        }

        public async Task<List<JobForSelectViewModel>> GetJobForSelect(string tenantId, string languageId, string keyword, int page, int pageSize)
        {
            return await _jobRepository.GetAllJobForSelect(tenantId, languageId, keyword, page, pageSize, out var totalRows);
        }
    }
}
