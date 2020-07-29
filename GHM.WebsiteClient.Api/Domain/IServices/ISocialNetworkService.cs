using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface ISocialNetworkService
    {
        Task<List<SocialNetworkViewModel>> SearchAsync(string tenantId);
    }
}
