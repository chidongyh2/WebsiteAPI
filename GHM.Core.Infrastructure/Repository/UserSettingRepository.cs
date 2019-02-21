using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.Resources;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.SqlServer;

namespace GHM.Core.Infrastructure.Repository
{
    public class UserSettingRepository : RepositoryBase, IUserSettingRepository
    {
        private readonly IRepository<UserSetting> _userSettingRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCoreResource> _resourceService;

        public UserSettingRepository(IDbContext context, IResourceService<GhmCoreResource> resourceService,
            IResourceService<SharedResource> sharedResourceService) : base(context)
        {
            _userSettingRepository = Context.GetRepository<UserSetting>();
            _resourceService = resourceService;
            _sharedResourceService = sharedResourceService;
        }

        public async Task<List<UserSetting>> GetsByGroupKey(string userId, string groupKey)
        {
            return await _userSettingRepository.GetsAsync(true, x => x.UserId == userId && x.GroupKey == groupKey);
        }

        public async Task<ActionResultResponse> Save(UserSetting userSetting)
        {
            var info = await GetInfo(userSetting.UserId, userSetting.Key);
            if (info == null)
            {
                // Insert new settings.
                _userSettingRepository.Create(userSetting);
                var resultInsert = await Context.SaveChangesAsync();
                return new ActionResultResponse(resultInsert, resultInsert > 0 ? _resourceService.GetString("Save setting successful.")
                    : _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));
            }

            info.Value = userSetting.Value;
            var resultUpdate = await Context.SaveChangesAsync();
            return new ActionResultResponse(resultUpdate, resultUpdate > 0
                ? _resourceService.GetString("Save setting successful.")
                : resultUpdate == 0
                ? _sharedResourceService.GetString(ErrorMessage.NothingChanges)
                : _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));
        }

        public async Task<UserSetting> GetInfo(string userId, string key, bool isReadOnly = false)
        {
            return await _userSettingRepository.GetAsync(isReadOnly, x => x.UserId == userId && x.Key == key);
        }

        public async Task<List<T>> GetsByUserId<T>(Expression<Func<UserSetting, T>> projector, string userId)
        {
            return await _userSettingRepository.GetsAsAsync(projector, x => x.UserId == userId);
        }
    }
}
