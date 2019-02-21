using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.Resources;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Infrastructure.Services
{
    public class MailTypeService : IMailTypeService
    {
        private readonly IMailTypeRepository _mailTypeRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _resourceService;

        public MailTypeService(IMailTypeRepository mailTypeRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> resourceService)
        {
            _mailTypeRepository = mailTypeRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public async Task<SearchResult<MailTypeViewModel>> Search(string tenantId, int page, int pageSize)
        {
            return new SearchResult<MailTypeViewModel>
            {
                Items = await _mailTypeRepository.SearchAll(tenantId, page, pageSize, out int totalRows),
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse> Insert(string tenantId, MailTypeMeta mailtypeMeta)
        {
            var mailTypeId = Guid.NewGuid().ToString();
            var mailtype = new MailType
            {
                Id = mailTypeId,
                CreateTime = DateTime.Now,
                ConcurrencyStamp = Guid.NewGuid().ToString(),
                TenantId = tenantId,
                Name = mailtypeMeta.Name,
                Ssl = mailtypeMeta.Ssl,
                Host = mailtypeMeta.Host,
                Port = mailtypeMeta.Port,
            };

            var result = await _mailTypeRepository.Insert(mailtype);
            if (result > 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString("Add MailType successful."));

            await RollbackInsert(mailTypeId);
            return new ActionResultResponse(-5, _resourceService.GetString("Can not insert new MailType. Please contact with administrator."));

        }

        public async Task<ActionResultResponse> Update(string Id, MailTypeMeta mailtypeMeta)
        {
            var mailtypeInfo = await _mailTypeRepository.GetInfo(Id);
            if (mailtypeInfo == null)
                return new ActionResultResponse(-2, _resourceService.GetString("MailType does not exists."));

            if (mailtypeInfo.ConcurrencyStamp != mailtypeMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _resourceService.GetString("The MailType already updated by other people. You can not update this MailType."));

            mailtypeInfo.LastUpdate = DateTime.Now;
            mailtypeInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            mailtypeInfo.Name = mailtypeMeta.Name;
            mailtypeInfo.Ssl = mailtypeMeta.Ssl;
            mailtypeInfo.Host = mailtypeMeta.Host;
            mailtypeInfo.Port = mailtypeMeta.Port;

            await _mailTypeRepository.Update(mailtypeInfo);

            return new ActionResultResponse(1, _resourceService.GetString("Update MailType successful."));
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string Id)
        {
            var mailtypeinfo = await _mailTypeRepository.GetInfo(Id);
            if (mailtypeinfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("MailType does not exists."));

            var result = await _mailTypeRepository.Delete(Id);
            return new ActionResultResponse(result, result <= 0 ? _resourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Delete MailType successful."));
        }

        public async Task<ActionResultResponse<MailTypeViewModel>> GetInfo(string tenantId, string Id)
        {
            var mailtypeInfo = await _mailTypeRepository.GetInfo(Id);

            var mailtypeViewModel = new MailTypeViewModel()
            {
                Id = mailtypeInfo.Id,
                Name = mailtypeInfo.Name,
                Ssl = mailtypeInfo.Ssl,
                Host = mailtypeInfo.Host,
                Port = mailtypeInfo.Port,
            };

            return new ActionResultResponse<MailTypeViewModel>
            {
                Code = 1,
                Data = mailtypeViewModel
            };
        }

        async Task RollbackInsert(string mailTypeId)
        {
            await _mailTypeRepository.ForceDelete(mailTypeId);
        }
    }
}
