using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IServices
{
    public interface ISettingService
    {
        Task<ActionResultResponse> Save(List<SettingMeta> settingMetas);

        Task<SearchResult<SettingViewModel>> GetsByGroupId(string tenantId, string languageId, string groupId);

        Task<SearchResult<SettingViewModel>> GetWebsiteSettings(string tenantId, string languageId);
    }
}
