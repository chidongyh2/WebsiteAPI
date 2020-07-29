using GHM.Infrastructure.ViewModels;
using GHM.WebsiteClient.Api.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.WebsiteClient.Api.Domain.IServices
{
    public interface IBranchContactService
    {
        Task<SearchResult<BranchContactSearchForClientViewModel>> SearchForClientAsync(string tenantId, string languageId);
    }
}
