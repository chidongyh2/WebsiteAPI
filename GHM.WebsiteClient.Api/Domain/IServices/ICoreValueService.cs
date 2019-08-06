using GHM.WebsiteClient.Api.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface ICoreValueService
    {
        Task<List<ValueViewModel>> GetAllActivatedCoreValueAsync(string tenantId, string languageId);
    }
}
