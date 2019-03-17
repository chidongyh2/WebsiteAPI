using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.ViewModels;

namespace GHM.Core.Infrastructure.Services
{
    public class AppService : IAppService
    {
        private readonly IPageRepository _pageRepository;
        private readonly IUserRoleRepository _userRoleRepository;
        private readonly IRolePageRepository _rolePageRepository;
        private readonly IUserSettingRepository _userSettingRepository;
        private readonly ITenantLanguageRepository _tenantLanguageRepository;

        public AppService(IPageRepository pageRepository, IRolePageRepository rolePageRepository, IUserSettingRepository userSettingRepository,
            ITenantLanguageRepository tenantLanguageRepository, IUserRoleRepository userRoleRepository)
        {
            _pageRepository = pageRepository;
            _rolePageRepository = rolePageRepository;
            _userSettingRepository = userSettingRepository;
            _tenantLanguageRepository = tenantLanguageRepository;
            _userRoleRepository = userRoleRepository;
        }

        public async Task<AppSettingViewModel> GetAppSettings(string userId, string tenantId, string languageId)
        {
            var appSetting = new AppSettingViewModel();
            var isSupperAdmin = await _userRoleRepository.CheckIsSupperAdmin(userId);

            appSetting.UserSettings = await _userSettingRepository.GetsByUserId(x => new UserSetting
            {
                Key = x.Key,
                Value = x.Value
            }, userId);
            appSetting.Permissions = await _rolePageRepository.GetsByUserId(userId);
            appSetting.Languages = await _tenantLanguageRepository.GetLanguageSupport(tenantId);
            appSetting.Pages = await _pageRepository.GetPagesByUserId(tenantId, userId, languageId);
            return appSetting;
        }

        public async Task<List<TenantLanguageViewModel>> GetLanguages(string tenantId)
        {
            return await _tenantLanguageRepository.GetAllLanguage(tenantId);
        }

        public async Task<List<RolesPagesViewModel>> GetPermissions(string userId)
        {
            return await _rolePageRepository.GetsByUserId(userId);
        }

        public async Task<List<UserSetting>> GetSettings(string userId)
        {
            return await _userSettingRepository.GetsByUserId(x => new UserSetting
            {
                Key = x.Key,
                Value = x.Value
            }, userId);
        }
    }
}
