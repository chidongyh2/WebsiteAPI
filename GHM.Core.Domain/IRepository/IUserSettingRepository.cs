using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;
using GHM.Infrastructure.Models;

namespace GHM.Core.Domain.IRepository
{
    public interface IUserSettingRepository
    {
        Task<List<UserSetting>> GetsByGroupKey(string userId, string groupKey);

        Task<ActionResultResponse> Save(UserSetting userSetting);

        Task<UserSetting> GetInfo(string userId, string key, bool isReadOnly = false);

        Task<List<T>> GetsByUserId<T>(Expression<Func<UserSetting, T>> projector, string userId);
    }
}
