using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Infrastructure.Repository
{
    public class SettingRepository : RepositoryBase, ISettingRepository
    {
        private readonly IRepository<Setting> _settingRepository;

        public SettingRepository(IDbContext context) : base(context)
        {
            _settingRepository = Context.GetRepository<Setting>();
        }

        public async Task<int> Insert(Setting setting)
        {
            _settingRepository.Create(setting);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<Setting> settings)
        {
            _settingRepository.Creates(settings);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Setting setting)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<Setting> GetInfo(string tenantId, string languageId, string groupId, string key, bool isReadOnly = false)
        {
            return await _settingRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.LanguageId == languageId
                && x.GroupId == groupId && x.Key == key);
        }

        public async Task<List<SettingViewModel>> GetsByGroupId(string tenantId, string languageId, string groupId)
        {
            return await _settingRepository.GetsAsAsync(x => new SettingViewModel
            {
                Value = x.Value,
                LanguageId = x.LanguageId,
                Key = x.Key,
                GroupId = x.GroupId,
                DisplayName = x.DisplayName,
                ConcurrencyStamp = x.ConcurrencyStamp
            }, x => x.GroupId == groupId && x.TenantId == tenantId && x.LanguageId == languageId);
        }

        public async Task<bool> CheckKeyExists(string tenantId, string languageId, string key)
        {
            return await _settingRepository.ExistAsync(x => x.TenantId == tenantId && x.LanguageId == languageId
                                                            && x.Key == key);
        }
    }
}
