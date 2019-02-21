using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;

namespace GHM.Core.Infrastructure.Repository
{
    public class TenantLanguageRepository : RepositoryBase, ITenantLanguageRepository
    {
        private readonly IRepository<TenantLanguage> _tenantLanguage;
        public TenantLanguageRepository(IDbContext context) : base(context)
        {
            _tenantLanguage = Context.GetRepository<TenantLanguage>();
        }

        public async Task<TenantLanguage> GetInfo(string tenantId, string languageId)
        {
            return await _tenantLanguage.GetAsync(false, x => x.TenantId == tenantId && x.LanguageId == languageId);
        }

        public async Task<int> Insert(TenantLanguage tenantLanguage)
        {
            var isExists = await CheckExists(tenantLanguage.TenantId, tenantLanguage.LanguageId);
            if (isExists)
                return -1;

            _tenantLanguage.Create(tenantLanguage);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(TenantLanguage tenantLanguage)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string tenantId, string languageId)
        {
            var tenantLanguage = await GetInfo(tenantId, languageId);
            if (tenantLanguage == null)
                return -1;

            if (tenantLanguage.IsDefault)
                return -2;

            tenantLanguage.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDeleteByTenantId(string tenantId)
        {
            var tenantLangugages = await _tenantLanguage.GetsAsync(false, x => x.TenantId == tenantId);
            if (tenantLangugages == null || !tenantLangugages.Any())
                return -1;

            _tenantLanguage.Deletes(tenantLangugages);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeactiveLanguages(List<TenantLanguage> tenantLanguages)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateActiveStatus(string tenantId, string languageId, bool isActive)
        {
            var info = await _tenantLanguage.GetAsync(false,
                x => x.TenantId == tenantId && x.LanguageId == languageId);
            if (info == null)
                return -1;

            info.IsActive = isActive;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> UpdateDefaultStatus(string tenantId, string languageId, bool isDefault)
        {
            var languages = await GetLanguageByTenantId(tenantId);
            if (languages == null || !languages.Any())
                return -1;

            var currentLanguageInfo = await GetInfo(tenantId, languageId);
            if (currentLanguageInfo == null)
                return -2;
            foreach (var tenantLanguage in languages)
            {
                tenantLanguage.IsDefault = false;
            }
            await Context.SaveChangesAsync();

            currentLanguageInfo.IsDefault = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<List<TenantLanguage>> GetLanguageByTenantId(string tenantId)
        {
            return await _tenantLanguage.GetsAsync(false, x => x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<List<TenantLanguageViewModel>> GetAllLanguage(string tenantId)
        {
            return await _tenantLanguage.GetsAsAsync(x => new TenantLanguageViewModel
            {
                LanguageId = x.LanguageId,
                Name = x.Name,
                IsDefault = x.IsDefault,
                IsActive = x.IsActive
            }, x => x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<List<TenantLanguageViewModel>> GetLanguageSupport(string tenantId)
        {
            return await _tenantLanguage.GetsAsAsync(x => new TenantLanguageViewModel
            {
                LanguageId = x.LanguageId,
                Name = x.Name,
                IsDefault = x.IsDefault,
                IsActive = x.IsActive
            }, x => x.TenantId == tenantId && !x.IsDelete && x.IsActive);
        }

        private async Task<bool> CheckExists(string tenantId, string languageId)
        {
            return await _tenantLanguage.ExistAsync(x => x.TenantId == tenantId && x.LanguageId == languageId);
        }
    }
}
