using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.Resources;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Infrastructure.Services
{
    public class MailTempGroupService : IMailTempGroupService
    {
        private readonly IMailTempGroupRepository _mailGroupRepository;
        private readonly IMailTempGroupTranslationRepository _mailGroupTranslationRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _resourceService;

        public MailTempGroupService(IMailTempGroupRepository mailGroupRepository,
            IMailTempGroupTranslationRepository mailGroupTranslationRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> resourceService)
        {
            _mailGroupRepository = mailGroupRepository;
            _mailGroupTranslationRepository = mailGroupTranslationRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string id)
        {
            var mailgroupinfo = await _mailGroupRepository.GetInfo(id);
            if (mailgroupinfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("MailGroup does not exists."));

            var result = await _mailGroupRepository.Delete(id);
            return new ActionResultResponse(result, result <= 0 ? _resourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Delete MailGroup successful."));
        }

        public async Task<ActionResultResponse<MailTempGroupDetailViewModel>> GetDetail(string tenantId, string id)
        {
            var mailGroupInfo = await _mailGroupRepository.GetInfo(id);
            if (mailGroupInfo == null)
                return new ActionResultResponse<MailTempGroupDetailViewModel>(-1, _resourceService.GetString("MailGroup does not exists."));

            var mailGroupTranslations = await _mailGroupTranslationRepository.GetAll(tenantId, id);

            var mailGroupViewModel = new MailTempGroupDetailViewModel
            {
                Id = id,
                MailTempGroupTranslations = mailGroupTranslations.Select(x => new MailTempGroupTranslationMeta() 
                {
                    LanguageId = x.LanguageId, 
                    Name = x.Name,
                    Description = x.Description,
                }).ToList()
            };

            return new ActionResultResponse<MailTempGroupDetailViewModel>
            {
                Code = 1,
                Data = mailGroupViewModel ,
            };
        }

        public async Task<ActionResultResponse> Insert(string tenantId, MailTempGroupMeta mailGroupMeta)
        {
            if (!mailGroupMeta.MailTempGroupTranslations.Any())
                return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one mailgrouptranslation."));

            var mailTempGroupId = Guid.NewGuid().ToString();
            var mailgroup = new MailTempGroup()
            {
                Id = mailTempGroupId,
                TenantId = tenantId,
            };

            var result = await _mailGroupRepository.Insert(mailgroup);
            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            var mailgrouptranslations = new List<MailTempGroupTranslation>();
            foreach (var mailTempGroupTranslation in mailGroupMeta.MailTempGroupTranslations)
            {
                mailgrouptranslations.Add(new MailTempGroupTranslation
                {
                    Name = mailTempGroupTranslation.Name,
                    Description = mailTempGroupTranslation.Description ,
                    UnsignName = mailTempGroupTranslation.Name.Trim().StripVietnameseChars().ToUpper(),
                    TenantId = tenantId  ,
                    LanguageId = mailTempGroupTranslation.LanguageId ,
                    MailTempGroupId = mailTempGroupId,
                });
            }

            var resultInsertDetail = await _mailGroupTranslationRepository.Inserts(mailgrouptranslations);
            if (resultInsertDetail > 0)
                return new ActionResultResponse(resultInsertDetail, _resourceService.GetString("Add new MailGroup successful."));

            await RollbackInsert(mailTempGroupId);
            return new ActionResultResponse(-5, _resourceService.GetString("Can not insert new MailGroup. Please contact with administrator."));

        }

        public Task<List<MailTempGroupViewModel>> Search(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows)
        {
            var result = _mailGroupRepository.Search(tenantId, languageId, keyword, page, pageSize, out totalRows);
            return result;
        }

        public async Task<ActionResultResponse> Update(string id, MailTempGroupMeta mailTempGroupMeta)
        {
            if (!mailTempGroupMeta.MailTempGroupTranslations.Any())
                return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one language."));

            var mailTempGroupInfo = await _mailGroupRepository.GetInfo(id);
            if (mailTempGroupInfo == null)
                return new ActionResultResponse(-2, _resourceService.GetString("MailGroup does not exists."));

            if (mailTempGroupInfo.ConcurrencyStamp != mailTempGroupMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _resourceService.GetString("The MailGroup already updated by other people. You can not update this MailGroup."));

            mailTempGroupInfo.LastUpdate = DateTime.Now;
            mailTempGroupInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            mailTempGroupInfo.IsDelete = mailTempGroupMeta.IsDelete;

            await _mailGroupRepository.Update(id, mailTempGroupInfo);

            foreach (var mailTempGroupTranslation in mailTempGroupMeta.MailTempGroupTranslations)
            {
                var mailTempGroupTranslationInfo = await _mailGroupTranslationRepository.GetInfo(mailTempGroupInfo.TenantId,
                    id, mailTempGroupTranslation.LanguageId);
                if (mailTempGroupTranslationInfo != null)
                {
                    mailTempGroupTranslationInfo.Name = mailTempGroupTranslation.Name;
                    mailTempGroupTranslationInfo.UnsignName = mailTempGroupTranslation.Name.Trim().StripVietnameseChars().ToUpper();
                    mailTempGroupTranslationInfo.Description = mailTempGroupTranslation.Description;
                    await _mailGroupTranslationRepository.Update(mailTempGroupTranslationInfo);
                }
                else
                {
                    mailTempGroupTranslationInfo = new MailTempGroupTranslation()
                    {
                        Name = mailTempGroupTranslation.Name,
                        Description = mailTempGroupTranslation.Description,
                        LanguageId = mailTempGroupTranslation.LanguageId,
                        UnsignName = mailTempGroupTranslation.Name.Trim().StripVietnameseChars().ToUpper(),
                        TenantId = mailTempGroupInfo.TenantId,
                        MailTempGroupId = id
                    };
                    await _mailGroupTranslationRepository.Insert(mailTempGroupTranslationInfo);
                }
            }

            return new ActionResultResponse(1, _resourceService.GetString("Update MailGroup successful."));
        }

        async Task RollbackInsert(string mailGroupId)
        {
            await _mailGroupRepository.ForceDelete(mailGroupId);
        }

    }
}
