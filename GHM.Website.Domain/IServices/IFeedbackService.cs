using System;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Models;
namespace GHM.Website.Domain.IServices
{
    public interface IFeedbackService
    {
        Task<SearchResult<Feedback>> Search(string tenantId, string keyword,
            DateTime? startDate, DateTime? endDate, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, FeedbackMeta feedbackMeta);

        Task<ActionResultResponse<Feedback>> GetDetail(string tenantId, string feedbackId);
    }
}
