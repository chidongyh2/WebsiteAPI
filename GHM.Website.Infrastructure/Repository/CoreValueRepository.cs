using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.Constants;
using Microsoft.EntityFrameworkCore;
namespace GHM.Website.Infrastructure.Repository
{
    public class CoreValueRepository : RepositoryBase, ICoreValueRepository
    {
        private readonly IRepository<CoreValue> _coreValueRepository;
        public CoreValueRepository(IDbContext context) : base(context)
        {
            _coreValueRepository = Context.GetRepository<CoreValue>();
        }

        public Task<List<CoreValueViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize,
            out int totalRows)
        {
            Expression<Func<CoreValue, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<CoreValueTranslation, bool>> specTranslation = xt => xt.LanguageId == languageId && !xt.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specTranslation = specTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<CoreValue>().Where(spec)
                .Join(Context.Set<CoreValueTranslation>().Where(specTranslation), x => x.Id, xt => xt.CoreValueId, (x, xt) =>
                    new CoreValueViewModel
                    {
                        Id = x.Id,
                        //TenantId = x.TenantId,
                        IsActive = x.IsActive,
                        Order = x.Order,
                        //ConcurrencyStamp = x.ConcurrencyStamp,
                        //CreateTime = x.CreateTime,
                        //LastUpdate = x.LastUpdate.Value,
                        //LanguageId = xt.LanguageId,
                        Name = xt.Name,
                        Description = xt.Description,
                        //UnsignName = xt.UnsignName
                    }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderBy(x => x.Order)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(CoreValue coreValue)
        {
            _coreValueRepository.Create(coreValue);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(CoreValue coreValue)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string coreValueId)
        {
            var info = await GetInfo(coreValueId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string coreValueId)
        {
            var info = await GetInfo(coreValueId);
            if (info == null)
                return -1;

            _coreValueRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<CoreValue> GetInfo(string coreValueId, bool isReadonly = false)
        {
            return await _coreValueRepository.GetAsync(isReadonly, x => x.Id == coreValueId && !x.IsDelete);
        }

        public async Task<CoreValue> GetInfo(string tenantId, string coreValueId, bool isReadonly = false)
        {
            return await _coreValueRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == coreValueId && !x.IsDelete);
        }

        public async Task<List<ValueViewModel>> GetAllActivatedCoreValue(string tenantId, string languageId)
        {
            Expression<Func<CoreValue, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId &&x.IsActive;
            Expression<Func<CoreValueTranslation, bool>> specTranslation = xt => xt.LanguageId == languageId && !xt.IsDelete && xt.TenantId == tenantId;
            var query = Context.Set<CoreValue>().Where(spec)
                .Join(Context.Set<CoreValueTranslation>().Where(specTranslation), x => x.Id, xt => xt.CoreValueId, (x, xt) =>
                    new ValueViewModel
                    {
                        Id = x.Id,
                        Order = x.Order,
                        Title = xt.Name,
                        Description = xt.Description
                    }).AsNoTracking();

            return await query
                .OrderBy(x => x.Order)
                .ToListAsync();
        }
    }
}
