using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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
    public class MailTempContentService : IMailTempContentService
    {
        private readonly IMailTempContentRepository _mailTempContentRepository;
        private readonly IMailTempContentTranslationRepository _mailTempContentTranslationRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _resourceService;

        public MailTempContentService(IMailTempContentRepository mailTempContentRepository,
            IMailTempContentTranslationRepository mailTempContentTranslationRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> resourceService)
        {
            _mailTempContentRepository = mailTempContentRepository;
            _mailTempContentTranslationRepository = mailTempContentTranslationRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public Task<List<MailTempContentSearchViewModel>> Search(string tenantId, string languageId, string mailTempGroupId, string keyword, bool? isActive, int page,
            int pageSize, out int totalRows)
        {
            return _mailTempContentRepository.Search(tenantId, languageId, mailTempGroupId, keyword, isActive, page,
                pageSize, out totalRows);
        }

        public async Task<ActionResultResponse> Insert(string tenantId, MailTempContentMeta mailTempContentMeta)
        {
            if (!mailTempContentMeta.MailTempContentTranslations.Any())
                return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one mailTempContentTranslation."));

            var mailTempContentId = Guid.NewGuid().ToString();
            var mailTempContent = new MailTempContent
            {
                Id = mailTempContentId,
                TenantId = tenantId,
                MailTempGroupId = mailTempContentMeta.MailTempGroupId,
                IsDelete = mailTempContentMeta.IsDelete,
                IsActive = mailTempContentMeta.IsActive,
                IsDefault = mailTempContentMeta.IsDefault,
                StartTime = mailTempContentMeta.StartTime,                                
                EndTime = mailTempContentMeta.EndTime,
            };

            var itemActive = await _mailTempContentRepository.MailTempContentActive(tenantId, mailTempContentMeta.MailTempGroupId);
            if (itemActive != null)
            {
                if (mailTempContentMeta.IsActive)
                {
                    itemActive.IsActive = false;
                    await _mailTempContentRepository.Update(itemActive.Id, itemActive);
                }
            }

            var result = await _mailTempContentRepository.Insert(mailTempContent);
            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            var mailTempContentTranslations = new List<MailTempContentTranslation>();
            foreach (var mailTempContentTranslation in mailTempContentMeta.MailTempContentTranslations)
            {
                mailTempContentTranslations.Add(new MailTempContentTranslation
                {
                    MailTempContentId = mailTempContentId,
                    TenantId = tenantId,
                    LanguageId = mailTempContentTranslation.LanguageId,
                    Title = mailTempContentTranslation.Title,
                    UnsignTitle = mailTempContentTranslation.Title.Trim().StripVietnameseChars().ToUpper(),
                    ContentMail = mailTempContentTranslation.ContentMail,
                    Description = mailTempContentTranslation.Description,
                });
            }

            var resultInsertDetail = await _mailTempContentTranslationRepository.Inserts(mailTempContentTranslations);
            if (resultInsertDetail > 0)
                return new ActionResultResponse(resultInsertDetail, _resourceService.GetString("Add new MailTempContentTranslation successful."));

            await RollbackInsert(mailTempContentId);
            return new ActionResultResponse(-5, _resourceService.GetString("Can not insert new MailTempContent. Please contact with administrator."));
        }

        public async Task<ActionResultResponse> Update(string id, string tenantId, MailTempContentMeta mailTempContentMeta)
        {
            if (!mailTempContentMeta.MailTempContentTranslations.Any())
                return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one language."));

            var mailTempContentInfo = await _mailTempContentRepository.GetInfo(id);
            if (mailTempContentInfo == null)
                return new ActionResultResponse(-2, _resourceService.GetString("MailTempContent does not exists."));

            if (mailTempContentInfo.ConcurrencyStamp != mailTempContentMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _resourceService.GetString("The MailTempContent already updated by other people. You can not update this MailTempContent."));

            var itemActive = await _mailTempContentRepository.MailTempContentActive(tenantId, mailTempContentMeta.MailTempGroupId);
            if (itemActive != null)
            {
                if (mailTempContentMeta.IsActive)
                {
                    itemActive.IsActive = false;
                    await _mailTempContentRepository.Update(itemActive.Id, itemActive);
                }
            }

            mailTempContentInfo.LastUpdate = DateTime.Now;
            mailTempContentInfo.MailTempGroupId = id;
            mailTempContentInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            mailTempContentInfo.IsDelete = mailTempContentMeta.IsDelete;
            mailTempContentInfo.IsActive = mailTempContentMeta.IsActive;
            mailTempContentInfo.IsDefault = mailTempContentMeta.IsDefault;
            mailTempContentInfo.StartTime = mailTempContentMeta.StartTime;
            mailTempContentInfo.EndTime = mailTempContentMeta.EndTime;

            await _mailTempContentRepository.Update(id, mailTempContentInfo);

            foreach (var mailTempContentTranslation in mailTempContentMeta.MailTempContentTranslations)
            {
                var mailTempContentTranslationInfo = await _mailTempContentTranslationRepository.GetInfo(id, tenantId, mailTempContentTranslation.LanguageId);
                if (mailTempContentTranslationInfo != null)
                {
                    mailTempContentTranslationInfo.MailTempContentId = id;
                    mailTempContentTranslationInfo.TenantId = tenantId;
                    mailTempContentTranslationInfo.LanguageId = mailTempContentTranslation.LanguageId;
                    mailTempContentTranslationInfo.Title = mailTempContentTranslation.Title;
                    mailTempContentTranslationInfo.UnsignTitle =
                        mailTempContentTranslation.Title.Trim().StripVietnameseChars().ToUpper();
                    mailTempContentTranslationInfo.ContentMail = mailTempContentTranslation.ContentMail;
                    mailTempContentTranslationInfo.Description = mailTempContentTranslation.Description;
                    await _mailTempContentTranslationRepository.Update(id, tenantId, mailTempContentTranslation.LanguageId, mailTempContentTranslationInfo);
                }
                else
                {
                    mailTempContentTranslationInfo = new MailTempContentTranslation()
                    {
                        MailTempContentId = id,
                        TenantId = tenantId,
                        LanguageId = mailTempContentTranslation.LanguageId,
                        Title = mailTempContentTranslation.Title,
                        UnsignTitle = mailTempContentTranslation.Title.Trim().StripVietnameseChars().ToUpper(),
                        ContentMail = mailTempContentTranslation.ContentMail,
                        Description = mailTempContentTranslation.Description,
                    };
                    await _mailTempContentTranslationRepository.Insert(mailTempContentTranslationInfo);
                }
            }

            return new ActionResultResponse(1, _resourceService.GetString("Update MailTempContent successful."));
        }

        public async Task<ActionResultResponse> Delete(string id)
        {
            var mailTempContentInfo = await _mailTempContentRepository.GetInfo(id);
            if (mailTempContentInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("MailTempContent does not exists."));

            var result = await _mailTempContentRepository.Delete(id);
            return new ActionResultResponse(result, result <= 0 ? _resourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Delete MailTempContent successful."));
        }

        public async Task<ActionResultResponse<MailTempContentDetailViewModel>> GetDetail(string tenantId, string id)
        {
            var resultMailTemp = await _mailTempContentRepository.GetInfo(id);
            var resultMailTempTrans = await _mailTempContentTranslationRepository.GetAll(tenantId, id);
            var result = new MailTempContentDetailViewModel()
            {
                Id = id,
                IsDelete = resultMailTemp.IsDelete,
                IsActive = resultMailTemp.IsActive,
                IsDefault = resultMailTemp.IsDefault,
                EndTime = resultMailTemp.EndTime,
                StartTime = resultMailTemp.StartTime,
                TempContentTranslationDetails = resultMailTempTrans.Select(x =>
                    new MailTempContentTranslationDetailViewModel()
                    {
                        Description = x.Description,
                        LanguageId = x.LanguageId,
                        Title = x.Title,
                        ContentMail = x.ContentMail,
                        MailTempContentId = id,
                    }).ToList()
            };
            return new ActionResultResponse<MailTempContentDetailViewModel>
            {
                Code = 1,
                Data = result,
            };
        }

        async Task RollbackInsert(string id)
        {
            await _mailTempContentRepository.ForceDelete(id);
        }

    }
}
