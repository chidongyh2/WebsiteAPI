using System;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.Resources;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
namespace GHM.Website.Infrastructure.Services
{
    public class FeedbackService : IFeedbackService
    {
        private readonly IFeedbackRepository _feedbackRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;
        public FeedbackService(IFeedbackRepository feedbackRepository,
         IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> websiteResourceService
        )
        {
            _feedbackRepository = feedbackRepository;
            _sharedResourceService = sharedResourceService;
            _websiteResourceService = websiteResourceService;
        }
        public async Task<SearchResult<Feedback>> Search(string tenantId, string keyword, DateTime? startDate, DateTime? endDate, int page, int pageSize)
        {
            var items = await _feedbackRepository.Search(tenantId, keyword, startDate, endDate, page, pageSize, out var totalRows);
            return new SearchResult<Feedback>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, FeedbackMeta feedbackMeta)
        {
            var feedbackId = Guid.NewGuid().ToString();
            var unsignNameMeta = feedbackMeta.FullName + " " + feedbackMeta.PhoneNumber + " " + feedbackMeta.Email + " " +
                             feedbackMeta.Title;

            var result = await _feedbackRepository.Insert(new Feedback
            {
                Id = feedbackId,
                Email = feedbackMeta.Email,
                PhoneNumber = feedbackMeta.PhoneNumber,
                FullName = feedbackMeta.FullName,
                Title = feedbackMeta.Title,
                Content = feedbackMeta.Content,
                UnsignName = unsignNameMeta.StripVietnameseChars(),
                TenantId = tenantId
            });

            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse<string>(1,
                _websiteResourceService.GetString("Add new feedback successful."),
                string.Empty, feedbackId);
        }

        public async Task<ActionResultResponse<Feedback>> GetDetail(string tenantId, string feedbackId)
        {
            var info = await _feedbackRepository.GetInfo(feedbackId);
            if (info == null)
                return new ActionResultResponse<Feedback>(-1, _websiteResourceService.GetString("Feedback does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<Feedback>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var feedbackDetail = new Feedback
            {
                Id = info.Id,
                TenantId = info.TenantId,
                FullName = info.FullName,
                Email = info.Email,
                PhoneNumber = info.PhoneNumber,
                Title = info.Title,
                Content = info.Content,
                UnsignName = info.UnsignName,
                CreateTime = info.CreateTime
            };
            return new ActionResultResponse<Feedback>
            {
                Code = 1,
                Data = feedbackDetail
            };
        }
    }
}
