using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface ISettingRepository
    {
        Task<int> Insert(Setting setting);

        Task<int> Inserts(List<Setting> settings);

        Task<int> Update(Setting setting);

        Task<Setting> GetInfo(string tenantId, string languageId, string groupId, string key, bool isReadOnly = false);

        Task<List<SettingViewModel>> GetsByGroupId(string tenantId, string languageId, string groupId);

        Task<bool> CheckKeyExists(string tenantId, string languageId, string key);        
    }
}
