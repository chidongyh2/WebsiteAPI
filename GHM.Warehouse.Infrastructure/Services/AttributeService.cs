using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Warehouse.Domain.IRepository;
using GHM.Warehouse.Domain.IServices;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Models;
using GHM.Warehouse.Domain.Resources;
using GHM.Warehouse.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Infrastructure.Services;
using Microsoft.Extensions.Configuration;
using GHM.Events;
using GHM.Infrastructure.Helpers;
using Attribute = GHM.Warehouse.Domain.Models.Attribute;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class AttributeService : IAttributeService
    {
        private readonly IAttributeRepository _attributeRepository;
        private readonly IAttributeTranslationRepository _attributeTranslationRepository;
        private readonly IAttributeValueRepository _attributeValueRepository;
        private readonly IAttributeValueTranslationRepository _attributeValueTranslationRepository;
        private readonly IProductAttributeRepository _productAttributeRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _warehouseResourceService;
        
        public AttributeService(IAttributeRepository attributeRepository,
            IAttributeTranslationRepository attributeTranslationRepository,
            IAttributeValueRepository attributeValueRepository,
            IAttributeValueTranslationRepository attributeValueTranslationRepository,
            IProductAttributeRepository productAttributeRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> warehouseResourceService
           )
        {
            _attributeRepository = attributeRepository;
            _attributeTranslationRepository = attributeTranslationRepository;
            _attributeValueRepository = attributeValueRepository;
            _attributeValueTranslationRepository = attributeValueTranslationRepository;
            _productAttributeRepository = productAttributeRepository;
            _sharedResourceService = sharedResourceService;
            _warehouseResourceService = warehouseResourceService;
        }

        public async Task<SearchResult<AttributeViewModel>> Search(string tenantId, string languageId, string keyword,
            bool? isSelfContent, bool? isRequire, bool? isMultiple, bool? isActive, int page, int pageSize)
        {
            var items = await _attributeRepository.Search(tenantId, languageId, keyword, isSelfContent, isRequire, isMultiple, isActive, page,
                pageSize, out var totalRows);
            return new SearchResult<AttributeViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName, string creatorAvatar,
            AttributeMeta attributeMeta)
        {
            var productAttributeId = Guid.NewGuid().ToString();
            var productAttribute = new Attribute
            {
                Id = productAttributeId,
                ConcurrencyStamp = productAttributeId,
                IsActive = attributeMeta.IsActive,
                IsRequire = attributeMeta.IsRequire,
                IsMultiple = attributeMeta.IsMultiple,
                IsSelfContent = attributeMeta.IsSelfContent,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName,
                CreatorAvatar = creatorAvatar
            };

            var result = await _attributeRepository.Insert(productAttribute);

            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));


            #region insert Translation.
            if (attributeMeta.Translations.Count > 0)
            {
                var resultInsertTranslation = await InsertTranslation();
                if (resultInsertTranslation.Code <= 0)
                    return resultInsertTranslation;
            }
            #endregion

            return new ActionResultResponse<string>(1, _warehouseResourceService.GetString("Add new product attribute successful."),
                string.Empty, productAttributeId);

            #region Local functions
            async Task<ActionResultResponse<string>> InsertTranslation()
            {
                var productAttributeTranslations = new List<AttributeTranslation>();
                foreach (var productAttributeTranslation in attributeMeta.Translations)
                {
                    //  Check name exists.
                    var isNameExists = await _attributeTranslationRepository.CheckExists(productAttributeId, tenantId,
                        productAttributeTranslation.LanguageId, productAttributeTranslation.Name);
                    if (isNameExists)
                    {
                        await RollbackInsert();
                        return new ActionResultResponse<string>(-1,
                            _warehouseResourceService.GetString("Product attribute name: \"{0}\" already exists.",
                                productAttributeTranslation.Name));
                    }

                    var productAttributeTranslationInsert = new AttributeTranslation
                    {
                        AttributeId = productAttributeId,
                        TenantId = tenantId,
                        LanguageId = productAttributeTranslation.LanguageId.Trim(),
                        Name = productAttributeTranslation.Name.Trim(),
                        Description = productAttributeTranslation.Description?.Trim(),
                        UnsignName = productAttributeTranslation.Name?.StripVietnameseChars().ToUpper()
                    };

                    productAttributeTranslations.Add(productAttributeTranslationInsert);

                }

                var resultTranslation = await _attributeTranslationRepository.Inserts(productAttributeTranslations);
                if (resultTranslation > 0)
                    return new ActionResultResponse<string>(resultTranslation,
                        _warehouseResourceService.GetString("Add new product attribute translation successful."));

                await RollbackInsertTranslation();
                await RollbackInsert();

                return new ActionResultResponse<string>(-2,
                    _warehouseResourceService.GetString("Can not insert product attribute translation. Please contact with administrator."));
            }

            async Task RollbackInsert()
            {
                await _attributeRepository.ForceDelete(productAttributeId);
            }

            async Task RollbackInsertTranslation()
            {
                await _attributeTranslationRepository.ForceDelete(productAttributeId);
            }

            #endregion Local functions
        }

        public async Task<ActionResultResponse<string>> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productAttributeId, AttributeMeta attributeMeta)
        {
            var info = await _attributeRepository.GetInfo(productAttributeId);
            if (info == null)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Product attribute does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<string>(-2,
                    _warehouseResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != attributeMeta.ConcurrencyStamp)
                return new ActionResultResponse<string>(-3,
                    _warehouseResourceService.GetString(
                        "The product attribute already updated by other people. you are not allowed to edit the product attribute information."));

            // Todo Not allow update IsSelfContent if used by product.

            // Delete all attribute values when change IsSelfContent property.(IsSelfContent = true : delete )
            if (attributeMeta.IsSelfContent)
            {
                await _attributeValueTranslationRepository.DeleteByProductAttribute(productAttributeId);
                await _attributeValueRepository.DeleteByProductAttribute(productAttributeId);
            }

            info.IsActive = attributeMeta.IsActive;
            info.IsRequire = attributeMeta.IsRequire;
            info.IsMultiple = attributeMeta.IsMultiple;
            info.IsSelfContent = attributeMeta.IsSelfContent;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdateTime = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _attributeRepository.Update(info);

            #region translation.
            if (attributeMeta.Translations.Count > 0)
            {
                var resultUpdateTranslation = await UpdateTranslation();
                if (resultUpdateTranslation.Code <= 0)
                    return resultUpdateTranslation;
            }
            #endregion

            return new ActionResultResponse<string>(1, _warehouseResourceService.GetString("Update product attribute successful."),
                string.Empty, info.ConcurrencyStamp);

            async Task<ActionResultResponse<string>> UpdateTranslation()
            {
                foreach (var productAttributeTranslation in attributeMeta.Translations)
                {
                    var isNameExists = await _attributeTranslationRepository.CheckExists(info.Id, tenantId,
                        productAttributeTranslation.LanguageId, productAttributeTranslation.Name);
                    if (isNameExists)
                        return new ActionResultResponse<string>(-4, _warehouseResourceService.GetString("Product attribute name: \"{0}\" already exists."));

                    var productAttributeTranslationInfo =
                        await _attributeTranslationRepository.GetInfo(info.Id, productAttributeTranslation.LanguageId);
                    if (productAttributeTranslationInfo != null)
                    {
                        productAttributeTranslationInfo.Name = productAttributeTranslation.Name.Trim();
                        productAttributeTranslationInfo.Description = productAttributeTranslation.Description?.Trim();
                        productAttributeTranslationInfo.UnsignName = productAttributeTranslation.Name?.StripVietnameseChars().ToUpper();

                        await _attributeTranslationRepository.Update(productAttributeTranslationInfo);
                    }
                    else
                    {
                        var productAttributeTranslationInsert = new AttributeTranslation
                        {
                            AttributeId = productAttributeId,
                            TenantId = tenantId,
                            LanguageId = productAttributeTranslation.LanguageId.Trim(),
                            Name = productAttributeTranslation.Name.Trim(),
                            Description = productAttributeTranslation.Description?.Trim(),
                            UnsignName = productAttributeTranslation.Name.StripVietnameseChars().ToUpper()
                        };

                        await _attributeTranslationRepository.Insert(productAttributeTranslationInsert);
                    }
                }
                return new ActionResultResponse<string>(1,
                    _warehouseResourceService.GetString("Update product attribute translation successful."), string.Empty, info.ConcurrencyStamp);
            }
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string productAttributeId)
        {
            var info = await _attributeRepository.GetInfo(productAttributeId);
            if (info == null)
                return new ActionResultResponse(-1, _warehouseResourceService.GetString("Product attribute does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

           var isUsedInproductAttributeValue = await _attributeValueRepository.CheckExistsByProductAttributeId(productAttributeId);
            if (isUsedInproductAttributeValue)
                return new ActionResultResponse(-3,
                    _warehouseResourceService.GetString("Product attribute used by product attribute value. You can not delete product attribute."));

            var isProductValueExists = await _productAttributeRepository.CheckExistProductAttributeId(productAttributeId, tenantId);
            if (isProductValueExists)
                return new ActionResultResponse(-2, _warehouseResourceService.GetString("This product attribute has been used by product. You can not delete this product attribute."));

            var result = await _attributeRepository.Delete(productAttributeId);
            await _attributeTranslationRepository.Delete(productAttributeId);
            return new ActionResultResponse(result, _warehouseResourceService.GetString("Delete product attribute successful."));
        }

        public async Task<ActionResultResponse<ProductAttributeDetailViewModel>> GetDetail(string tenantId, string productAttributeId)
        {
            var info = await _attributeRepository.GetInfo(productAttributeId);
            if (info == null)
                return new ActionResultResponse<ProductAttributeDetailViewModel>(-1, _warehouseResourceService.GetString("Product attribute does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<ProductAttributeDetailViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var productAttributeTranslations = await _attributeTranslationRepository.GetsAttributeId(productAttributeId);

            var productAttributeDetail = new ProductAttributeDetailViewModel
            {
                Id = info.Id,
                ConcurrencyStamp = info.ConcurrencyStamp,
                IsActive = info.IsActive,
                IsRequire = info.IsRequire,
                IsMultiple = info.IsMultiple,
                IsSelfContent = info.IsSelfContent,
                Translations = productAttributeTranslations?.Select(x => new ProductAttributeTranslationViewModel
                {
                    LanguageId = x.LanguageId,
                    Name = x.Name,
                    Description = x.Description,
                    UnsignName = x.UnsignName
                }).ToList()
            };
            return new ActionResultResponse<ProductAttributeDetailViewModel>
            {
                Code = 1,
                Data = productAttributeDetail
            };
        }

        public async Task<SearchResult<AttributeSuggestionViewModel>> Suggestion(string tenantId, string languageId, string keyword, int selectTop)
        {
            var items = await _attributeRepository.Suggestion(tenantId, languageId, keyword, selectTop, out var totalRows);
            return new SearchResult<AttributeSuggestionViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<ActionResultResponse> UpdateIsActive(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productAttributeId, bool isActive)
        {
            var info = await _attributeRepository.GetInfo(productAttributeId);
            if (info == null)
                return new ActionResultResponse(-1, _warehouseResourceService.GetString("Product attribute does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2,_warehouseResourceService.GetString(ErrorMessage.NotHavePermission));
            info.IsActive = isActive;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _attributeRepository.Update(info);
            return new ActionResultResponse(1, _warehouseResourceService.GetString("Update active status successful."));
        }

        public async Task<ActionResultResponse> UpdateIsRequire(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productAttributeId, bool isRequire)
        {
            var info = await _attributeRepository.GetInfo(productAttributeId);
            if (info == null)
                return new ActionResultResponse(-1, _warehouseResourceService.GetString("Product attribute does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2,_warehouseResourceService.GetString(ErrorMessage.NotHavePermission));
            info.IsRequire = isRequire;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _attributeRepository.Update(info);
            return new ActionResultResponse(1, _warehouseResourceService.GetString("Update require status successful."));
        }

        public async Task<ActionResultResponse> UpdateIsMultiple(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productAttributeId, bool isMultiple)
        {
            var info = await _attributeRepository.GetInfo(productAttributeId);
            if (info == null)
                return new ActionResultResponse(-1, _warehouseResourceService.GetString("Product attribute does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2,_warehouseResourceService.GetString(ErrorMessage.NotHavePermission));
            info.IsMultiple = isMultiple;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;
           
            await _attributeRepository.Update(info);
            return new ActionResultResponse(1, _warehouseResourceService.GetString("Update multiple status successful."));
        }

        public async Task<ActionResultResponse> UpdateIsSelfContent(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productAttributeId, bool isSelfContent)
        {
            var info = await _attributeRepository.GetInfo(productAttributeId);
            if (info == null)
                return new ActionResultResponse(-1, _warehouseResourceService.GetString("Product attribute does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2,_warehouseResourceService.GetString(ErrorMessage.NotHavePermission));
            info.IsSelfContent = isSelfContent;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;
            await _attributeRepository.Update(info);

            // Todo Not allow update IsSelfContent if used by product.

            // Delete all attribute values when change IsSelfContent property.(IsSelfContent = true : delete )
            if (isSelfContent)
            {
                await _attributeValueTranslationRepository.DeleteByProductAttribute(productAttributeId);
                await _attributeValueRepository.DeleteByProductAttribute(productAttributeId);
            }

            return new ActionResultResponse(1, _warehouseResourceService.GetString("Update self content status successful."));
        }
    }
}
