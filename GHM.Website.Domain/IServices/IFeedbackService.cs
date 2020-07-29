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
            DateTime? startDate, DateTime? endDate,bool? isResolve, int page, int pageSize);

        Task<SearchResult<Comment>> SearchComment(string tenantId, bool? isShow, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, FeedbackMeta feedbackMeta);

        Task<ActionResultResponse<Feedback>> GetDetail(string tenantId, string feedbackId);

        Task<ActionResultResponse<string>> Update(string tenantId, string id, FeedbackMeta feedbackMeta);

        Task<ActionResultResponse<int>> UpdateIsShowComment(string tenantId, int id, bool isShow);

        Task<ActionResultResponse<int>> DeleteComment(string tenantId, int id);
    }
}
