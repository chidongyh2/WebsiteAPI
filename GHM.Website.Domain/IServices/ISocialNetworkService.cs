using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;

namespace GHM.Website.Domain.IServices
{
    public interface ISocialNetworkService
    {
        Task<SearchResult<SocialNetworkViewModel>> Search(string tenantId,  string keyword, int page, int pageSize);

        Task<ActionResultResponse<string>> Insert(string tenantId, SocialNetworkMeta socialnetworkMeta);

        Task<ActionResultResponse> Update(string socialnetworkId, SocialNetworkMeta socialnetworkMeta);

        Task<ActionResultResponse> Delete(string socialnetworkId);

        Task<ActionResultResponse<SocialNetworkViewModel>> GetDetail(string socialnetworkId);
    }
}
