using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
    public class ConfigMailTempService : IConfigMailTempService
    {
        private readonly IConfigMailTempRepository _configMailTempRepository;
        private readonly IConfigMailTempDetailRepository _configMailTempDetailRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _resourceService;

        public ConfigMailTempService(IConfigMailTempRepository configMailTempRepository,
            IConfigMailTempDetailRepository configMailTempDetailRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> resourceService)
        {
            _configMailTempRepository = configMailTempRepository;
            _configMailTempDetailRepository = configMailTempDetailRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public Task<List<MapMailTempViewModel>> Search(string tenantId, string languageId, string mailTempGroupId, string title, string mail, int page,
            int pageSize, out int totalRows)
        {
            throw new NotImplementedException();
        }

        public async Task<ActionResultResponse> Insert(string tenantId, ConfigMailTempMeta configMailTempMeta)
        {
            if (!configMailTempMeta.ConfigMailTempDetailMetas.Any())
                return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one mail."));

            var configMailTempId = Guid.NewGuid().ToString();
            var configMailTemp = new ConfigMailTemp
            {
                Id = configMailTempId,
                TenantId = tenantId,
                MailTempGroupId = configMailTempMeta.MailTempGroupId,
                Description = configMailTempMeta.Description,
                IsActive = configMailTempMeta.IsActive,
                IsDelete = configMailTempMeta.IsDelete,
                Type = configMailTempMeta.Type,
            };

            var result = await _configMailTempRepository.Insert(configMailTemp);
            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            var configMailTempDetails = new List<ConfigMailTempDetail>();

            foreach (var configMailTempDetailMeta in configMailTempMeta.ConfigMailTempDetailMetas)
            {
                configMailTempDetails.Add(new ConfigMailTempDetail
                {
                    Id = Guid.NewGuid().ToString(),
                    TenantId = tenantId,
                    ConfigMailTempId = configMailTemp.Id,
                    MailId = configMailTempDetailMeta.MailId,
                    Type = configMailTempDetailMeta.Type,
                });
            }

            var resultInsertDetailSender = await _configMailTempDetailRepository.Inserts(configMailTempDetails);
            if (resultInsertDetailSender > 0)
                return new ActionResultResponse(resultInsertDetailSender, _resourceService.GetString("Add new ConfigMailTempDetail successful."));

            await RollbackInsert(configMailTempId);
            return new ActionResultResponse(-5, _resourceService.GetString("Can not insert new ConfigMailTemp. Please contact with administrator."));
        }

        public async Task<ActionResultResponse> Update(string tenantId, string id, ConfigMailTempMeta configMailTempMeta)
        {
            if (!configMailTempMeta.ConfigMailTempDetailMetas.Any())
                return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one mail."));

            var configMailTempInfo = await _configMailTempRepository.GetInfo(id);
            if (configMailTempInfo == null)
                return new ActionResultResponse(-2, _resourceService.GetString("ConfigMailTemp does not exists."));

            if (configMailTempInfo.ConcurrencyStamp != configMailTempMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _resourceService.GetString("The ConfigMailTemp already updated by other people. You can not update this ConfigMailTemp."));

            configMailTempInfo.MailTempGroupId = configMailTempMeta.MailTempGroupId;
            configMailTempInfo.Description = configMailTempMeta.Description;
            configMailTempInfo.IsActive = configMailTempMeta.IsActive;
            configMailTempInfo.IsDelete = configMailTempMeta.IsDelete;
            configMailTempInfo.Type = configMailTempMeta.Type;

            await _configMailTempRepository.Update(id, configMailTempInfo);

            foreach (var configMailTempDetailMeta in configMailTempMeta.ConfigMailTempDetailMetas)
            {
                var configMailTempDetailInfo = await _configMailTempDetailRepository.GetInfo(configMailTempDetailMeta.Id);
                if (configMailTempDetailInfo != null)
                {
                    configMailTempDetailInfo.Id = configMailTempDetailMeta.Id;
                    configMailTempDetailInfo.TenantId = tenantId;
                    configMailTempDetailInfo.ConfigMailTempId = configMailTempInfo.Id;
                    configMailTempDetailInfo.MailId = configMailTempDetailMeta.MailId;
                    configMailTempDetailInfo.Type = configMailTempDetailMeta.Type;
                    await _configMailTempDetailRepository.Update(configMailTempDetailInfo.Id, configMailTempDetailInfo);
                }
                else
                {
                    configMailTempDetailInfo = new ConfigMailTempDetail()
                    {
                        TenantId = tenantId,
                        Type = configMailTempDetailMeta.Type,
                        ConfigMailTempId = configMailTempInfo.Id,
                        MailId = configMailTempDetailMeta.MailId

                    };
                    await _configMailTempDetailRepository.Insert(configMailTempDetailInfo);
                }
            }

            return new ActionResultResponse(1, _resourceService.GetString("Update ConfigMailTemp successful."));

        }

        public async Task<ActionResultResponse> Delete(string tenantId, string id)
        {
            var configMailTempInfo = await _configMailTempRepository.GetInfo(id);
            if (configMailTempInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("ConfigMailTemp does not exists."));

            var result = await _configMailTempRepository.Delete(id);
            return new ActionResultResponse(result, result <= 0 ? _resourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Delete ConfigMailTemp successful."));

        }

        async Task RollbackInsert(string configMailTempId)
        {
            await _configMailTempRepository.ForceDelete(configMailTempId);
        }

    }
}
