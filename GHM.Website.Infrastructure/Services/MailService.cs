using GHM.Website.Domain.IRepository;
using System;
using System.Collections.Generic;
using System.Text;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.Resources;
using GHM.Infrastructure.Models;
using GHM.Website.Domain.ModelMetas;
using System.Threading.Tasks;
using System.Linq;
using GHM.Infrastructure.Extensions;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.ViewModels;

namespace GHM.Website.Infrastructure.Services
{
    public class MailService : IMailService
    {
        private readonly IMailRepository _mailRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _resourceService;

        public MailService(IMailRepository mailRepository,
            IMailTempContentTranslationRepository mailTranslationRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> resourceService)
        {
            _mailRepository = mailRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string id)
        {
            var mailInfo = await _mailRepository.GetInfo(tenantId, id);
            if (mailInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Mail does not exists."));

            var result = await _mailRepository.Delete(tenantId, id);
            return new ActionResultResponse(result, result <= 0 ? _resourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Delete Mail successful."));
        }

        public async Task<ActionResultResponse<MailDetailViewModel>> GetDetail(string tenantId, string id)
        {
            var mailInfo = await _mailRepository.GetInfo(tenantId, id);

            var mailViewModel = new MailDetailViewModel()
            {
                Id = mailInfo.Id,
                Email = mailInfo.Email,
                MailTypeId = mailInfo.MailTypeId,
                Password = mailInfo.Password,
                Owner = mailInfo.Owner,
                IsActive = mailInfo.IsActive,
                ConcurrencyStamp = mailInfo.ConcurrencyStamp
            };

            return new ActionResultResponse<MailDetailViewModel>
            {
                Code = 1,
                Data = mailViewModel
            };
        }

        public async Task<SearchResult<MailViewModel>> Search(string tenantId, int page, int pageSize)
        {
            var result = await _mailRepository.Search(tenantId, page, pageSize, out int totalRows);
            return new SearchResult<MailViewModel> {
                Items = result,
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse> Insert(string tenantId, string creatorId, string creatorFullName, MailMeta mailMeta)
        {
            var mailId = Guid.NewGuid().ToString();
            var mail = new Mail
            {
                Id = mailId,
                TenantId = tenantId,
                Email = mailMeta.Email,
                Password = mailMeta.Password,
                MailTypeId = mailMeta.MailTypeId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName,
                Owner = mailMeta.Owner,
                IsActive = mailMeta.IsActive
            };

            var result = await _mailRepository.Insert(mail);
            if (result <= 0)
            {
                await RollbackInsert(tenantId, mailId);
                return new ActionResultResponse(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));               
            }

            return new ActionResultResponse(result, _resourceService.GetString("Insert mail success."));
        }

        public async Task<ActionResultResponse> Update(string tenantId, string id, string lastUpdateUserId, string lastUpdateFullName, MailMeta mailMeta)
        {

            var mailInfo = await _mailRepository.GetInfo(tenantId, id);
            if (mailInfo == null)
                return new ActionResultResponse(-2, _resourceService.GetString("Mail does not exists."));

            if (mailInfo.ConcurrencyStamp != mailMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _resourceService.GetString("The Mail already updated by other people. You can not update this Mail."));

            mailInfo.LastUpdate = DateTime.Now;
            mailInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            mailInfo.Email = mailMeta.Email;
            mailInfo.Password = mailMeta.Password;
            mailInfo.MailTypeId = mailMeta.MailTypeId;
            mailInfo.LastUpdateUserId = lastUpdateUserId;
            mailInfo.LastUpdateFullName = lastUpdateFullName;
            mailInfo.Owner = mailMeta.Owner;
            mailInfo.IsActive = mailMeta.IsActive;

            await _mailRepository.Update(tenantId, mailInfo);

            return new ActionResultResponse(1, _resourceService.GetString("Update Mail successful."));
        }

        async Task RollbackInsert(string tenantId, string mailId)
        {
            await _mailRepository.ForceDelete(tenantId, mailId);
        }
    }
}
