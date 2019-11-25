using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface IFeedbackService
    {
        Task<ActionResultResponse<string>> Insert(string tenantId, FeedbackMeta feedbackMeta);

        Task<int> InsertComment(CommentMeta commentMeta);

        Task<SearchResult<CommentViewModel>> GetComment(string tenantId, string objectId, int objectType, int page,
            int pageSize);
    }
}
