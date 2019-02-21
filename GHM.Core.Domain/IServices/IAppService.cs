using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Models.ConfigViewModels;
using GHM.Core.Domain.ViewModels;

namespace GHM.Core.Domain.IServices
{
    public interface IAppService
    {
        Task<AppSettingViewModel> GetAppSettings(string userId, string tenantId, string languageId);

        Task<List<TenantLanguageViewModel>> GetLanguages(string tenantId);

        Task<List<RolesPagesViewModel>> GetPermissions(string userId);

        Task<List<UserSetting>> GetSettings(string userId);
    }
}
