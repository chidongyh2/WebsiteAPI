using GHM.Infrastructure.Models;
using System.Threading.Tasks;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.ViewModels;

namespace GHM.Website.Domain.IServices
{
    public interface IMailService
    {
        Task<SearchResult<MailViewModel>> Search(string tenantId, int page, int pageSize);

        Task<ActionResultResponse> Insert(string tenantId, string creatorId, string creatorFullName, MailMeta mailMeta);

        Task<ActionResultResponse> Update(string tenantId, string id, string lastUpdateUserId, string lastUpdateFullName, MailMeta mailMeta);

        Task<ActionResultResponse> Delete(string tenantId, string id);

        Task<ActionResultResponse<MailDetailViewModel>> GetDetail(string tenantId, string Id);

    }

}
