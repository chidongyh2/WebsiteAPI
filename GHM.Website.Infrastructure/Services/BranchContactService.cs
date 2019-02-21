using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
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
using Microsoft.EntityFrameworkCore.Internal;

namespace GHM.Website.Infrastructure.Services
{
    public class BranchContactService : IBranchContactService
    {
        private readonly IBranchContactRepository _branchContactRepository;
        private readonly IBranchContactTranslationRepository _branchContactTranslationRepository;
        private readonly IBranchContactDetailRepository _branchContactDetailRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _resourceService;

        public BranchContactService(IBranchContactRepository branchContactRepository,
            IBranchContactTranslationRepository branchContactTranslationRepository,
            IBranchContactDetailRepository branchContactDetailRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> resourceService)
        {
            _branchContactRepository = branchContactRepository;
            _branchContactTranslationRepository = branchContactTranslationRepository;
            _branchContactDetailRepository = branchContactDetailRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string id)
        {
            var branchcontactInfo = await _branchContactRepository.GetInfo(id);
            if (branchcontactInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("BranchContact does not exists."));

            var result = await _branchContactRepository.Delete(id);
            return new ActionResultResponse(result, result <= 0 ? _resourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Delete BranchContact successful."));
        }

        public async Task<ActionResultResponse<BranchContactViewModel>> GetDetail(string id, string languageId)
        {
            var resultBranch = await _branchContactRepository.GetInfo(id);
            var resultTrans = await _branchContactTranslationRepository.GetAll(id, languageId);
            var resultDetail = await _branchContactDetailRepository.GetAll(id);

            var result = new BranchContactViewModel()
            {
                Id = resultBranch.Id,
                WorkTime = resultBranch.WorkTime,
                Link = resultBranch.Link,
                Order = resultBranch.Order,
                Website = resultBranch.Website,
                Logo = resultBranch.Logo,
                IsOffice = resultBranch.IsOffice,
                ConcurrencyStamp = resultBranch.ConcurrencyStamp,
                BranchContactTranslations = resultTrans,
                BranchContactDetails = resultDetail
            };

            return new ActionResultResponse<BranchContactViewModel>
            {
                Code = 1,
                Data = result,
            };
        }

        public async Task<SearchResult<BranchContactSearchViewModel>> Search(string tenantId, string languageId, string keyword, int page, int pageSize)
        {
            var result = await _branchContactRepository.Search(tenantId, languageId, keyword, page, pageSize, out int totalRows);

            return new SearchResult<BranchContactSearchViewModel>
            {
                Items = result,
                TotalRows = totalRows
            };
        }

        public async Task<SearchResult<BranchContactSearchForClientViewModel>> SearchForClient(string tenantId, string languageId)
        {
            var result = await _branchContactRepository.SearchForClient(tenantId, languageId);

            return new SearchResult<BranchContactSearchForClientViewModel>
            {
                Items = result,
            };
        }

        public async Task<ActionResultResponse> Insert(string tenantId, BranchContactMeta branchContactMeta)
        {
            if (!EnumerableExtensions.Any(branchContactMeta.BranchContactTranslations))
                return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one language."));

            var branchContactId = Guid.NewGuid().ToString();
            var branchContact = new BranchContact
            {
                Id = branchContactId,
                CreateTime = DateTime.Now,
                ConcurrencyStamp = Guid.NewGuid().ToString(),
                TenantId = tenantId,
                WorkTime = branchContactMeta.WorkTime,
                Link = branchContactMeta.Link,
                Website = branchContactMeta.Website,
                Logo = branchContactMeta.Logo,
                IsOffice = branchContactMeta.IsOffice
            };

            var result = await _branchContactRepository.Insert(branchContact);
            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            var branchContactTranslations = new List<BranchContactTranslation>();
            foreach (var branchContactTranslation in branchContactMeta.BranchContactTranslations)
            {
                branchContactTranslations.Add(new BranchContactTranslation
                {
                    TenantId = branchContact.TenantId,
                    BranchContactId = branchContact.Id,
                    LanguageId = branchContactTranslation.LanguageId,
                    Name = branchContactTranslation.Name,
                    UnsignName = branchContactTranslation.Name.Trim().StripVietnameseChars().ToUpper(),
                    Address = branchContactTranslation.Address,
                });
            }

            var resultInsertTranslations = await _branchContactTranslationRepository.Inserts(branchContactTranslations);
            if (resultInsertTranslations < 0)
            {
                await RollbackInsert(branchContact.Id);
                return new ActionResultResponse(result, _resourceService.GetString("Something went wrong. Please contact with administrator."));
            }

            if (branchContactMeta.BranchContactDetails.Any() && branchContactMeta.BranchContactDetails.Count > 0)
            {
                var branchContactDetails = new List<BranchContactDetail>();
                foreach (var branchContactDetail in branchContactMeta.BranchContactDetails)
                {
                    branchContactDetails.Add(new BranchContactDetail
                    {
                        Id = Guid.NewGuid().ToString(),
                        BranchContactId = branchContact.Id,
                        ContactType = branchContactDetail.ContactType,
                        ContactValue = branchContactDetail.ContactValue,
                    });
                }

                var resultInsertDetailContact = await _branchContactDetailRepository.Inserts(branchContactDetails);
                if (resultInsertDetailContact < 0)
                {
                    await RollbackInsert(branchContact.Id);
                    return new ActionResultResponse(-5, _resourceService.GetString("Can not insert new BranchContact. Please contact with administrator."));
                }
            }

            return new ActionResultResponse(resultInsertTranslations, _resourceService.GetString("Add new BranchContact successful."));
        }

        public async Task<ActionResultResponse> Update(string tenantId, string id, BranchContactMeta branchContactMeta)
        {
            if (!EnumerableExtensions.Any(branchContactMeta.BranchContactTranslations))
                return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one language."));

            var branchContactInfo = await _branchContactRepository.GetInfo(id);
            if (branchContactInfo == null)
                return new ActionResultResponse(-2, _resourceService.GetString("BranchContact does not exists."));

            if (branchContactInfo.ConcurrencyStamp != branchContactMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _resourceService.GetString("The BranchContact already updated by other people. You can not update this BranchContact."));

            branchContactInfo.LastUpdate = DateTime.Now;
            branchContactInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            branchContactInfo.WorkTime = branchContactMeta.WorkTime;
            branchContactInfo.Link = branchContactMeta.Link;
            branchContactInfo.Order = branchContactMeta.Order;
            branchContactInfo.Website = branchContactMeta.Website;
            branchContactInfo.Logo = branchContactMeta.Logo;
            branchContactInfo.IsOffice = branchContactMeta.IsOffice;

            await _branchContactRepository.Update(id, branchContactInfo);

            foreach (var branchContactTranslation in branchContactMeta.BranchContactTranslations)
            {
                var branchContactTranslationInfo = await _branchContactTranslationRepository.GetInfo(tenantId, id, branchContactTranslation.LanguageId);
                if (branchContactTranslationInfo != null)
                {
                    branchContactTranslationInfo.Name = branchContactTranslation.Name;
                    branchContactTranslationInfo.UnsignName = branchContactTranslation.Name.Trim().StripVietnameseChars().ToUpper();
                    branchContactTranslationInfo.Address = branchContactTranslation.Address;
                    await _branchContactTranslationRepository.Update(tenantId, id, branchContactTranslation.LanguageId, branchContactTranslationInfo);
                }
                else
                {
                    branchContactTranslationInfo = new BranchContactTranslation()
                    {
                        Name = branchContactTranslation.Name,
                        LanguageId = branchContactTranslation.LanguageId,
                        TenantId = tenantId,
                        Address = branchContactTranslation.Address,
                        BranchContactId = branchContactInfo.Id,
                        UnsignName = branchContactTranslation.Name.Trim().StripVietnameseChars().ToUpper()
                    };
                    await _branchContactTranslationRepository.Insert(branchContactTranslationInfo);
                }
            }

            var listBranchContactItem = await _branchContactDetailRepository.GetAll(id, true);
            if (listBranchContactItem != null && listBranchContactItem.Any())
            {
                foreach (var branchItem in listBranchContactItem)
                {
                    var branchItemExists = branchContactMeta.BranchContactDetails.Where(x => x.Id == branchItem.Id).ToList();
                    if (branchItemExists == null || branchItemExists.Count() == 0)
                    {
                        await _branchContactDetailRepository.ForceDelete(branchItem.Id);
                    }
                }
            }

            foreach (var branchContactDetail in branchContactMeta.BranchContactDetails)
            {
                var branchContactDetailInfo = await _branchContactDetailRepository.GetInfo(branchContactDetail.Id);
                if (branchContactDetailInfo != null)
                {
                    branchContactDetailInfo.ContactValue = branchContactDetail.ContactValue;
                    branchContactDetailInfo.ContactType = branchContactDetail.ContactType;
                    await _branchContactDetailRepository.Update(branchContactDetail.Id, branchContactDetailInfo);
                }
                else
                {
                    branchContactDetailInfo = new BranchContactDetail()
                    {
                        Id = Guid.NewGuid().ToString(),
                        BranchContactId = branchContactInfo.Id,
                        ContactType = branchContactDetail.ContactType,
                        ContactValue = branchContactDetail.ContactValue,
                    };
                    await _branchContactDetailRepository.Insert(branchContactDetailInfo);
                }
            }

            return new ActionResultResponse(1, _resourceService.GetString("Update BranchContact successful."));
        }

        async Task RollbackInsert(string branchContactId)
        {
            await _branchContactRepository.ForceDelete(branchContactId);
        }

    }
}
