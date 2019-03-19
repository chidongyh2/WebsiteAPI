using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class UnitRepository : RepositoryBase, IUnitRepository
    {
        private readonly IRepository<Unit> _unitRepository;
        private readonly IRepository<UnitTranslation> _unitTranslationRepository;

        public UnitRepository(IDbContext context) : base(context)
        {
            _unitRepository = Context.GetRepository<Unit>();
            _unitTranslationRepository = Context.GetRepository<UnitTranslation>();
        }

        public Task<List<UnitSearchViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Unit, bool>> spec = t => !t.IsDelete && t.TenantId == tenantId;
            Expression<Func<UnitTranslation, bool>> specunitTranslation = tt => tt.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specunitTranslation = specunitTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<Unit>().Where(spec)
                .Join(Context.Set<UnitTranslation>().Where(specunitTranslation), t => t.Id, tt => tt.UnitId, (t, tt) =>
                    new UnitSearchViewModel
                    {
                        Id = t.Id,
                        IsActive = t.IsActive,
                        Abbreviation = tt.Abbreviation,
                        ConcurrencyStamp = t.ConcurrencyStamp,
                        Description = tt.Description,
                        Name = tt.Name,
                        CreateTime = t.CreateTime
                    });

            totalRows = query.Count();

            return query.OrderByDescending(x => x.CreateTime)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<bool> CheckExists(string tenantId, string id, bool? isActive)
        {
            Expression<Func<Unit, bool>> spec = x => x.TenantId == tenantId && !x.IsDelete && x.Id == id;
            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive);
            return await _unitRepository.ExistAsync(spec);
        }

        public Task<List<UnitSuggestionsViewModel>> SearchSuggestionsUnit(string tenantId, string languageId, string keyword, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Unit, bool>> spec = t => !t.IsDelete && t.TenantId == tenantId && t.IsActive;
            Expression<Func<UnitTranslation, bool>> specunitTranslation = tt => tt.LanguageId == languageId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                specunitTranslation = specunitTranslation.And(x => x.UnsignName.Contains(keyword));
            }

            var query = Context.Set<Unit>().Where(spec)
                .Join(Context.Set<UnitTranslation>().Where(specunitTranslation), t => t.Id, tt => tt.UnitId, (t, tt) =>
                    new UnitSuggestionsViewModel
                    {
                        Id = t.Id,
                        Name = tt.Name,
                    });

            totalRows = query.Count();
            return query.OrderBy(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(Unit unit)
        {
            _unitRepository.Create(unit);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string tenantId, string id)
        {
            var unitInfo = await GetInfo(tenantId, id);
            if (unitInfo == null)
                return -1;

            unitInfo.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string tenantId, string id)
        {
            var unitInfo = await GetInfo(tenantId, id);
            if (unitInfo == null)
                return -1;

            _unitRepository.Delete(unitInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<Unit> GetInfo(string tenantId, string id, bool isReadOnly = false)
        {
            return await _unitRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete && x.TenantId == tenantId);
        }

        public async Task<bool> CheckExistsById(string tenantId, string id, bool isReadOnly = false)
        {
            return await _unitRepository.ExistAsync(x => x.Id == id && !x.IsDelete && x.TenantId == tenantId);
        }

        public async Task<int> Update(string tenantId, string id, Unit unit)
        {
            return await Context.SaveChangesAsync();
        }

    }

}
