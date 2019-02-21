using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IServices
{
    public interface IMailTypeService
    {
        Task<SearchResult<MailTypeViewModel>> Search(string tenantId, int page, int pageSize);

        Task<ActionResultResponse> Insert(string tenantId, MailTypeMeta mailtypeMeta);

        Task<ActionResultResponse> Update(string Id, MailTypeMeta mailtypeMeta);

        Task<ActionResultResponse> Delete(string tenantId, string Id);

        Task<ActionResultResponse<MailTypeViewModel>> GetInfo(string tenantId, string Id);
    }
}
