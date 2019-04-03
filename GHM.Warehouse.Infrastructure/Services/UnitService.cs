using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.Resources;
using GHM.Warehouse.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class UnitService : IUnitService
    {
        private readonly IUnitRepository _unitRepository;
        private readonly IUnitTranslationRepository _unitTranslationRepository;
        private readonly IProductUnitRepository _productUnitRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _resourceService;

        public UnitService(IUnitRepository unitRepository,
                IUnitTranslationRepository unitTranslationRepository,
                IProductUnitRepository productUnitRepository,
        IResourceService<SharedResource> sharedResourceService,
                IResourceService<GhmWarehouseResource> resourceService)
        {
            _unitRepository = unitRepository;
            _unitTranslationRepository = unitTranslationRepository;
            _productUnitRepository = productUnitRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string id)
        {
            var unitInfo = await _unitRepository.GetInfo(tenantId, id);
            if (unitInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Unit does not exists."));

            var isExistsProductUnit = await _productUnitRepository.CheckExists(id, tenantId);
            if(isExistsProductUnit)
                return new ActionResultResponse(-1, _resourceService.GetString("Unit already use."));

            var result = await _unitRepository.Delete(tenantId, id);

            var unitTranslations = await _unitTranslationRepository.GetAllUnitTranslation(tenantId, id);
            foreach (var unitTranslation in unitTranslations)
            {
                await _unitTranslationRepository.Delete(unitTranslation.UnitId, unitTranslation.LanguageId, tenantId);
            }

            return new ActionResultResponse(result, result <= 0 ? _resourceService.GetString("Something went wrong. Please contact with administrator.")
                    : _resourceService.GetString("Delete Unit successful."));
        }

        public async Task<ActionResultResponse> Insert(string tenantId, string creatorId, string creatorFullName, UnitMeta unitMeta)
        {
            if (!unitMeta.Translations.Any())
                return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one unitTranslation."));

            var unitId = Guid.NewGuid().ToString();
            var unit = new Unit
            {
                Id = unitId,
                IsActive = unitMeta.IsActive,
                ConcurrencyStamp = Guid.NewGuid().ToString(),
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName,
                CreateTime = DateTime.Now,
            };

            var result = await _unitRepository.Insert(unit);
            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            var unitTranslations = new List<UnitTranslation>();
            foreach (var unitTranslation in unitMeta.Translations)
            {
                unitTranslations.Add(new UnitTranslation
                {
                    UnitId = unit.Id,
                    LanguageId = unitTranslation.LanguageId,
                    Name = unitTranslation.Name.Trim(),
                    Description = unitTranslation.Description?.Trim(),
                    Abbreviation = unitTranslation.Abbreviation?.Trim(),
                    UnsignName = unitTranslation.Name.Trim().StripVietnameseChars().ToUpper(),
                    IsDelete = unit.IsDelete,
                    TenantId = tenantId,
                });

                var isExistsName = await _unitTranslationRepository.CheckExistsByName(tenantId, unit.Id, unitTranslation.Name);
                if (isExistsName)
                {
                    await RollbackInsert(tenantId, unitId);
                    return new ActionResultResponse(-5, _resourceService.GetString("Unit name already exists."));
                }

                if (!string.IsNullOrEmpty(unitTranslation.Abbreviation))
                {
                    var isExistsAbbreviation = await _unitTranslationRepository.CheckExistsByAbbreviation(tenantId, unit.Id, unitTranslation.Abbreviation);
                    if (isExistsAbbreviation)
                    {
                        await RollbackInsert(tenantId, unitId);
                        return new ActionResultResponse(-6, _resourceService.GetString("Unit abbreviation already exists"));
                    }
                }
            }

            var resultInsertDetail = await _unitTranslationRepository.Inserts(unitTranslations);
            if (resultInsertDetail > 0)
                return new ActionResultResponse(resultInsertDetail, _resourceService.GetString("Add new unit successful."));

            await RollbackInsert(tenantId, unitId);
            return new ActionResultResponse(-5, _resourceService.GetString("Can not insert new Unit. Please contact with administrator."));
        }

        async Task RollbackInsert(string tenantId, string unitId)
        {
            await _unitRepository.ForceDelete(tenantId, unitId);
        }

        public async Task<SearchResult<UnitSearchViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize)
        {
            var items = await _unitRepository.Search(tenantId, languageId, keyword, isActive, page, pageSize, out var totalRows);
            return new SearchResult<UnitSearchViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse> Update(string tenantId, string id, string lastUpdateUserId, string lastUpdateFullName, UnitMeta unitMeta)
        {
            if (!unitMeta.Translations.Any())
                return new ActionResultResponse(-1, _sharedResourceService.GetString("Please enter at least one language."));

            var unitInfo = await _unitRepository.GetInfo(tenantId, id);
            if (unitInfo == null)
                return new ActionResultResponse(-2, _resourceService.GetString("Unit does not exists."));

            if (unitInfo.ConcurrencyStamp != unitMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _resourceService.GetString("The Unit already updated by other people. You can not update this Unit."));

            unitInfo.IsActive = unitMeta.IsActive;
            unitInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            unitInfo.LastUpdateUserId = lastUpdateUserId;
            unitInfo.LastUpdateFullName = lastUpdateFullName;
            unitInfo.LastUpdate = DateTime.Now;

            await _unitRepository.Update(tenantId, id, unitInfo);

            foreach (var unitTranslation in unitMeta.Translations)
            {
                var unitTranslationInfo = await _unitTranslationRepository.GetInfo(unitInfo.Id, unitTranslation.LanguageId, unitInfo.TenantId);

                if (unitTranslation.Name != unitTranslationInfo.Name)
                {
                    var isExistsName = await _unitTranslationRepository.CheckExistsByName(tenantId, unitInfo.Id, unitTranslation.Name);
                    if (isExistsName)
                        return new ActionResultResponse(-5, _resourceService.GetString("Can not insert new Unit. Please contact with administrator."));
                }

                if (!string.IsNullOrEmpty(unitTranslation.Abbreviation) && unitTranslation.Abbreviation != unitTranslationInfo.Abbreviation)
                {
                    var isExistsAbbeviation = await _unitTranslationRepository.CheckExistsByAbbreviation(tenantId, unitInfo.Id, unitTranslation.Abbreviation);
                    if (isExistsAbbeviation)
                    {
                        return new ActionResultResponse(-6, _resourceService.GetString("Can not insert new Unit. Please contact with administrator."));
                    }
                }

                if (unitTranslationInfo != null)
                {
                    //unitTranslationInfo.ProductUnitId = unitTranslation.ProductUnitId;
                    //unitTranslationInfo.LanguageId = unitTranslation.LanguageId;
                    unitTranslationInfo.Name = unitTranslation.Name;
                    unitTranslationInfo.Description = unitTranslation.Description;
                    unitTranslationInfo.Abbreviation = unitTranslation.Abbreviation;
                    unitTranslationInfo.UnsignName = unitTranslation.Name.Trim().StripVietnameseChars().ToUpper();

                    await _unitTranslationRepository.Update(unitInfo.Id, unitTranslation.LanguageId, unitInfo.TenantId, unitTranslationInfo);
                }
                else
                {
                    unitTranslationInfo = new UnitTranslation()
                    {
                        Abbreviation = unitTranslation.Abbreviation,
                        Description = unitTranslation.Description,
                        LanguageId = unitTranslation.LanguageId,
                        Name = unitTranslation.Name,
                        TenantId = unitInfo.TenantId,
                        UnitId = id,
                        UnsignName = unitTranslation.Name.Trim().StripVietnameseChars().ToUpper()
                    };

                    await _unitTranslationRepository.Insert(unitTranslationInfo);
                }
            }

            return new ActionResultResponse(1, _resourceService.GetString("Update Unit successful."));
        }

        public async Task<ActionResultResponse<UnitDetailViewModel>> GetInfo(string tenantId, string id)
        {
            var unitInfo = await _unitRepository.GetInfo(tenantId, id);

            var unitTranslations = await _unitTranslationRepository.GetAll(tenantId, id);

            var result = new UnitDetailViewModel()
            {
                ConcurrencyStamp = unitInfo.ConcurrencyStamp,
                Id = unitInfo.Id,
                IsActive = unitInfo.IsActive,
                Translations = unitTranslations,
            };

            return new ActionResultResponse<UnitDetailViewModel>
            {
                Code = 1,
                Data = result
            };
        }

        public async Task<ActionResultResponse> Update(string tenantId, string id, string lastUpdateUserId, string lastUpdateFullName, bool isActive)
        {
            var unitInfo = await _unitRepository.GetInfo(tenantId, id);
            if (unitInfo == null)
                return new ActionResultResponse(-2, _resourceService.GetString("Unit does not exists."));

            unitInfo.IsActive = isActive;
            unitInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            unitInfo.LastUpdateUserId = lastUpdateUserId;
            unitInfo.LastUpdateFullName = lastUpdateFullName;
            unitInfo.LastUpdate = DateTime.Now;

            await _unitRepository.Update(tenantId, id, unitInfo);

            return new ActionResultResponse(1, _resourceService.GetString("Update Unit successful."));
        }

        public async Task<SearchResult<UnitSuggestionsViewModel>> Suggestions(string tenantId, string languageId, string keyword, int page, int pageSize)
        {
            return new SearchResult<UnitSuggestionsViewModel>
            {
                Items = await _unitRepository.SearchSuggestionsUnit(tenantId, languageId, keyword, page, pageSize, out int totalRows),
                TotalRows = totalRows,
            };
        }
    }
}
