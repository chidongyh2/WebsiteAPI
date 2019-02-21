using System.Collections.Generic;
using GHM.Core.Domain.Models.ConfigViewModels;
using GHM.Infrastructure.Models;

namespace GHM.Core.Domain.ViewModels
{
    public class AppSettingViewModel
    {
        public List<PageGetByUserViewModel> Pages { get; set; }
        public List<UserSetting> UserSettings { get; set; }
        public List<RolesPagesViewModel> Permissions { get; set; }
        public List<TenantLanguageViewModel> Languages { get; set; }
        public BriefUser CurrentUser { get; set; }        
    }

    public class UserSetting
    {
        public string Key { get; set; }
        public string Value { get; set; }
    }
}
