using GHM.Infrastructure.Models;
using GHM.WebsiteClient.Api.Domain.ModelMetas;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface IFeedbackService
    {
        Task<ActionResultResponse<string>> Insert(string tenantId, FeedbackMeta feedbackMeta);
    }
}
