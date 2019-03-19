using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.SqlServer;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Infrastructure.Repository
{
    public class UnitTranslationRepository : RepositoryBase, IUnitTranslationRepository
    {
        private readonly IRepository<UnitTranslation> _unitTranslationRepository;

        public UnitTranslationRepository(IDbContext context) : base(context)
        {
            _unitTranslationRepository = Context.GetRepository<UnitTranslation>();
        }

        public async Task<bool> CheckExistsByAbbreviation(string tenantId, string unitId, string abbreviation)
        {
            return await _unitTranslationRepository.ExistAsync(x => x.TenantId == tenantId && x.UnitId != unitId
            && !x.IsDelete && x.Abbreviation == abbreviation);
        }

        public async Task<bool> CheckExistsById(string unitId, string languageId, string tenantId, bool isReadOnly = false)
        {
            return await _unitTranslationRepository.ExistAsync(x => x.UnitId == unitId && x.LanguageId == languageId
            && x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<bool> CheckExistsByName(string tenantId, string unitId, string name)
        {
            name = name.Trim().StripVietnameseChars().ToUpper();

            return await _unitTranslationRepository.ExistAsync(x => x.TenantId == tenantId && x.UnitId != unitId
            && !x.IsDelete && x.UnsignName.Equals(name));
        }

        public async Task<int> Delete(string unitId, string languageId, string tenantId)
        {
            var unitTranslationInfo = await GetInfo(unitId, languageId, tenantId);
            if (unitTranslationInfo == null)
                return -1;

            unitTranslationInfo.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string unitId, string languageId, string tenantId)
        {
            var unitTranslationInfo = await GetInfo(unitId, languageId, tenantId);
            if (unitTranslationInfo == null)
                return -1;

            _unitTranslationRepository.Delete(unitTranslationInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<UnitTranslationViewModel>> GetAll(string tenantId, string unitId, bool isReadOnly = false)
        {
            var query = Context.Set<UnitTranslation>().Where(x => x.TenantId == tenantId && x.UnitId == unitId && !x.IsDelete)
                .Select(x => new UnitTranslationViewModel()
                {
                    Abbreviation = x.Abbreviation,
                    Description = x.Description,
                    LanguageId = x.LanguageId,
                    Name = x.Name,
                    UnitId = x.UnitId,
                });

            return await query
                .ToListAsync();
        }

        public async Task<List<UnitTranslation>> GetAllUnitTranslation(string tenantId, string unitId)
        {
            return await _unitTranslationRepository.GetsAsync(true, x => x.TenantId == tenantId && x.UnitId == unitId && !x.IsDelete);
        }

        public async Task<UnitTranslation> GetInfo(string unitId, string languageId, string tenantId, bool isReadOnly = false)
        {
            return await _unitTranslationRepository.GetAsync(isReadOnly, x => x.UnitId == unitId && x.LanguageId == languageId
            && x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<int> Insert(UnitTranslation unitTranslation)
        {
            _unitTranslationRepository.Create(unitTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<UnitTranslation> unitTranslations)
        {
            _unitTranslationRepository.Creates(unitTranslations);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(string unitId, string languageId, string tenantId, UnitTranslation unitTranslation)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
