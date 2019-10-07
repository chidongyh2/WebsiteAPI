using GHM.Infrastructure.Constants;
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
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Website.Infrastructure.Services
{
    public class FaqService : IFaqService
    {

        private readonly IFaqRepository _faqRepository;
        private readonly IFaqTranslationRepository _faqTranslationRepository;
        private readonly IFaqGroupRepository _faqGroupRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;
        public FaqService(IFaqRepository faqRepository,
          IFaqTranslationRepository faqTranslationRepository,
          IFaqGroupRepository faqGroupRepository,
          IResourceService<SharedResource> sharedResourceService,
          IResourceService<GhmWebsiteResource> websiteResourceService
        )
        {
            _faqRepository = faqRepository;
            _faqTranslationRepository = faqTranslationRepository;
            _faqGroupRepository = faqGroupRepository;
            _sharedResourceService = sharedResourceService;
            _websiteResourceService = websiteResourceService;

        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvata,
          FaqMeta faqMeta)
        {
            var faqId = Guid.NewGuid().ToString();
            var infoGroup = await _faqGroupRepository.GetInfo(faqMeta.FaqGroupId.Trim());
            if (infoGroup == null)
                return new ActionResultResponse<string>(-1, _websiteResourceService.GetString("Faq group does not exists."));

            // Insert new Faq.
            var resultInsertFaq = await _faqRepository.Insert(new Faq
            {
                Id = faqId,
                ConcurrencyStamp = faqId.Trim(),
                FaqGroupId = faqMeta.FaqGroupId.Trim(),
                Photo = faqMeta.Photo.Trim(),
                Order = faqMeta.Order,
                IsActive = faqMeta.IsActive,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName
            });

            if (resultInsertFaq <= 0)
                return new ActionResultResponse<string>(resultInsertFaq,
                  _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            #region insert Faq Translation.

            if (faqMeta.FaqTranslations.Count > 0)
            {
                var resultInsertTranslation = await InsertFaqTranslation();
                if (resultInsertTranslation.Code <= 0)
                    return resultInsertTranslation;
            }
            #endregion

            return new ActionResultResponse<string>(1,
              _websiteResourceService.GetString("Add new faq successful."),
              string.Empty, faqId);


            #region Local functions

            async Task<ActionResultResponse<string>> InsertFaqTranslation()
            {

                var faqTranslations = new List<FaqTranslation>();
                foreach (var faqTranslation in faqMeta.FaqTranslations)
                {
                    // Check name exists.
                    var isNameExists = await _faqTranslationRepository.CheckExists(faqId, tenantId,
                      faqTranslation.LanguageId, faqTranslation.Question);
                    if (isNameExists)
                    {
                        await RollbackInsertFaq();
                        return new ActionResultResponse<string>(-2, _websiteResourceService.GetString(
                          "Question: \"{0}\" already exists.",
                          faqTranslation.Question));
                    }

                    var faqTranslationInsert = new FaqTranslation
                    {
                        TenantId = tenantId,
                        FaqId = faqId,
                        LanguageId = faqTranslation.LanguageId.Trim(),
                        Question = faqTranslation.Question.Trim(),
                        Answer = faqTranslation.Answer?.Trim()
                    };

                    faqTranslations.Add(faqTranslationInsert);
                }

                // Insert Faq translations.
                var resultInsertTranslation = await _faqTranslationRepository.Inserts(faqTranslations);
                if (resultInsertTranslation > 0)
                    return new ActionResultResponse<string>(resultInsertFaq,
                      _websiteResourceService.GetString("Add new faq translation successful."), string.Empty,
                      faqId);

                await RollbackInsertFaqTranslation();
                await RollbackInsertFaq();
                return new ActionResultResponse<string>(-3,
                  _websiteResourceService.GetString(
                    "Can not insert new faq . Please contact with administrator."));
            }

            async Task RollbackInsertFaq()
            {
                await _faqRepository.ForceDelete(faqId);
            }

            async Task RollbackInsertFaqTranslation()
            {
                await _faqTranslationRepository.ForceDelete(faqId);
            }
            #endregion
        }

        public async Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvata,
          string faqId, FaqMeta faqMeta)
        {
            var info = await _faqRepository.GetInfo(faqId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Faq does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != faqMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _websiteResourceService.GetString("The faq already updated by other people. You can not update this Faq ."));

            var infoGroup = await _faqGroupRepository.GetInfo(faqMeta.FaqGroupId.Trim());
            if (infoGroup == null)
                return new ActionResultResponse<string>(-4, _websiteResourceService.GetString("Faq group does not exists."));

            info.IsActive = faqMeta.IsActive;
            info.FaqGroupId = faqMeta.FaqGroupId;
            info.Photo = faqMeta.Photo;
            info.Order = faqMeta.Order;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdate = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _faqRepository.Update(info);

            //udpate translate
            foreach (var faqTranslation in faqMeta.FaqTranslations)
            {
                var isNameExists = await _faqTranslationRepository.CheckExists(info.Id, tenantId,
                  faqTranslation.LanguageId, faqTranslation.Question);
                if (isNameExists)
                    return new ActionResultResponse(-5, _websiteResourceService.GetString("Question: \"{0}\" already exists.", faqTranslation.Question));

                var faqTranslationInfo =
                  await _faqTranslationRepository.GetInfo(tenantId, faqTranslation.LanguageId, faqId);
                if (faqTranslationInfo != null)
                {
                    faqTranslationInfo.Question = faqTranslation.Question.Trim();
                    faqTranslationInfo.Answer = faqTranslation.Answer?.Trim();
                    await _faqTranslationRepository.Update(faqTranslationInfo);
                }
                else
                {
                    var faqTranslationInsert = new FaqTranslation
                    {
                        FaqId = faqId,
                        LanguageId = faqTranslation.LanguageId.Trim(),
                        Question = faqTranslation.Question.Trim(),
                        Answer = faqTranslation.Answer?.Trim()
                    };
                    await _faqTranslationRepository.Insert(faqTranslationInsert);
                }
            }
            return new ActionResultResponse(1, _websiteResourceService.GetString("Update faq successful."));
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string faqId)
        {
            var info = await _faqRepository.GetInfo(faqId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Faq does not exists. Please try again."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var result = await _faqRepository.Delete(faqId);
            await _faqTranslationRepository.Delete(faqId);
            return new ActionResultResponse(result, _websiteResourceService.GetString("Delete Faq successful."));
        }

        public async Task<ActionResultResponse<FaqDetailViewModel>> GetDetail(string tenantId, string faqId)
        {
            var info = await _faqRepository.GetInfo(faqId);
            if (info == null)
                return new ActionResultResponse<FaqDetailViewModel>(-1, _websiteResourceService.GetString("Faq does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<FaqDetailViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var faqTranslations = await _faqTranslationRepository.GetsFaqId(faqId);

            var faqDetail = new FaqDetailViewModel
            {
                Id = info.Id,
                FaqGroupId = info.FaqGroupId,
                Photo = info.Photo,
                Order = info.Order,
                IsActive = info.IsActive,
                ConcurrencyStamp = info.ConcurrencyStamp,
                CreateTime = info.CreateTime,
                LastUpdate = info.LastUpdate,
                FaqTranslations = faqTranslations.Select(x => new FaqTranslationViewModel
                {
                    LanguageId = x.LanguageId,
                    Question = x.Question,
                    Answer = x.Answer
                }).ToList()
            };
            return new ActionResultResponse<FaqDetailViewModel>
            {
                Code = 1,
                Data = faqDetail
            };
        }
    }
}
