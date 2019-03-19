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
namespace GHM.Warehouse.Infrastructure.Services
{
    public class AttributeValueService : IAttributeValueService
    {
        private readonly IAttributeValueRepository _attributeValueRepository;
        private readonly IAttributeValueTranslationRepository _attributeValueTranslationRepository;
        private readonly IAttributeRepository _attributeRepository;
        private readonly IProductAttributeRepository _productAttributeRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _warehouseResourceService;

        public AttributeValueService(IAttributeValueRepository attributeValueRepository,
            IAttributeValueTranslationRepository attributeValueTranslationRepository,
            IAttributeRepository attributeRepository,
            IProductAttributeRepository productAttributeRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> warehouseResourceService
        )
        {
            _attributeValueRepository = attributeValueRepository;
            _attributeValueTranslationRepository = attributeValueTranslationRepository;
            _attributeRepository = attributeRepository;
            _productAttributeRepository = productAttributeRepository;
            _sharedResourceService = sharedResourceService;
            _warehouseResourceService = warehouseResourceService;
        }

        public async Task<SearchResult<AttributeValueViewModel>> Search(string tenantId, string productAttributeId,
            string languageId, string keyword, bool? isActive, int page, int pageSize)
        {
            var items = await _attributeValueRepository.Search(tenantId, languageId, keyword, productAttributeId, isActive, page,
                pageSize, out var totalRows);
            return new SearchResult<AttributeValueViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string productAttributeId,
            string creatorId, string creatorFullName, string creatorAvatar, AttributeValueMeta attributeValueMeta)
        {
            var infoProductAttribute = await _attributeRepository.GetInfo(productAttributeId);
            if (infoProductAttribute == null)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Product attribute does not exists."));
            // IsSelfContent = false : join voi bang value
            // IsSelfContent = true : tu nhap noi dung
            if (infoProductAttribute.IsSelfContent)
                return new ActionResultResponse<string>(-2, _warehouseResourceService.GetString("Product attribute is not self content."));

            var productAttributeValueId = Guid.NewGuid().ToString();
            var productAttributeValue = new AttributeValue
            {
                Id = productAttributeValueId,
                AttributeId = productAttributeId,
                ConcurrencyStamp = productAttributeValueId,
                IsActive = attributeValueMeta.IsActive,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName
            };

            var result = await _attributeValueRepository.Insert(productAttributeValue);

            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));


            #region insert Translation.
            if (attributeValueMeta.Translations.Count > 0)
            {
                var resultInsertTranslation = await InsertTranslation();
                if (resultInsertTranslation.Code <= 0)
                    return resultInsertTranslation;
            }
            #endregion

            return new ActionResultResponse<string>(1, _warehouseResourceService.GetString("Add new product attribute value successful."),
                string.Empty, productAttributeValueId);

            #region Local functions
            async Task<ActionResultResponse<string>> InsertTranslation()
            {
                var productAttributeValueTranslations = new List<AttributeValueTranslation>();
                foreach (var productAttributeValueTranslation in attributeValueMeta.Translations)
                {
                    //  Check name exists.
                    var isNameExists = await _attributeValueTranslationRepository.CheckExists(productAttributeValueId, tenantId,productAttributeId,
                        productAttributeValueTranslation.LanguageId, productAttributeValueTranslation.Name);
                    if (isNameExists)
                    {
                        await RollbackInsert();
                        return new ActionResultResponse<string>(-3,
                            _warehouseResourceService.GetString("Product attribute value name: \"{0}\" already exists.",
                                productAttributeValueTranslation.Name));
                    }

                    var productAttributeValueTranslationInsert = new AttributeValueTranslation
                    {
                        AttributeValueId = productAttributeValueId,
                        TenantId = tenantId,
                        ProductAttributeId = productAttributeId,
                        LanguageId = productAttributeValueTranslation.LanguageId.Trim(),
                        Name = productAttributeValueTranslation.Name.Trim(),
                        Description = productAttributeValueTranslation.Description?.Trim(),
                        UnsignName = productAttributeValueTranslation.Name?.StripVietnameseChars().ToUpper()
                    };

                    productAttributeValueTranslations.Add(productAttributeValueTranslationInsert);

                }

                var resultTranslation = await _attributeValueTranslationRepository.Inserts(productAttributeValueTranslations);
                if (resultTranslation > 0)
                    return new ActionResultResponse<string>(resultTranslation,
                        _warehouseResourceService.GetString("Add new product attribute value translation successful."));

                await RollbackInsertTranslation();
                await RollbackInsert();

                return new ActionResultResponse<string>(-4,
                    _warehouseResourceService.GetString("Can not insert product attribute value translation. Please contact with administrator."));
            }

            async Task RollbackInsert()
            {
                await _attributeValueRepository.ForceDelete(productAttributeValueId);
            }

            async Task RollbackInsertTranslation()
            {
                await _attributeValueTranslationRepository.ForceDelete(productAttributeValueId);
            }

            #endregion Local functions
        }

        public async Task<ActionResultResponse<string>> Update(string tenantId, string productAttributeId, string lastUpdateUserId,
            string lastUpdateFullName, string lastUpdateAvatar, string productAttributeValueId, AttributeValueMeta attributeValueMeta)
        {
            var infoProductAttribute = await _attributeRepository.GetInfo(productAttributeId);
            if (infoProductAttribute == null)
                return new ActionResultResponse<string>(-1, _warehouseResourceService.GetString("Product attribute does not exists."));
            // IsSelfContent = false : join voi bang value
            // IsSelfContent = true : tu nhap noi dung
            if (infoProductAttribute.IsSelfContent)
                return new ActionResultResponse<string>(-2, _warehouseResourceService.GetString("Product attribute is not self content."));

            var info = await _attributeValueRepository.GetInfo(productAttributeValueId);
            if (info == null)
                return new ActionResultResponse<string>(-3, _warehouseResourceService.GetString("Product attribute value does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<string>(-4,
                    _warehouseResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != attributeValueMeta.ConcurrencyStamp)
                return new ActionResultResponse<string>(-5,
                    _warehouseResourceService.GetString(
                        "The product attribute value already updated by other people. you are not allowed to edit the product attribute value information."));

            info.IsActive = attributeValueMeta.IsActive;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdateTime = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _attributeValueRepository.Update(info);

            #region translation.
            if (attributeValueMeta.Translations.Count > 0)
            {
                var resultUpdateTranslation = await UpdateTranslation();
                if (resultUpdateTranslation.Code <= 0)
                    return resultUpdateTranslation;
            }
            #endregion

            return new ActionResultResponse<string>(1, _warehouseResourceService.GetString("Update product attribute value successful."),
                string.Empty, info.ConcurrencyStamp);

            async Task<ActionResultResponse<string>> UpdateTranslation()
            {
                foreach (var productAttributeValueTranslation in attributeValueMeta.Translations)
                {
                    var isNameExists = await _attributeValueTranslationRepository.CheckExists(info.Id, tenantId, productAttributeId,
                        productAttributeValueTranslation.LanguageId, productAttributeValueTranslation.Name);
                    if (isNameExists)
                        return new ActionResultResponse<string>(-6, _warehouseResourceService.GetString("Product attribute value name: \"{0}\" already exists."));

                    var productAttributeValueTranslationInfo =
                        await _attributeValueTranslationRepository.GetInfo(info.Id, productAttributeValueTranslation.LanguageId);
                    if (productAttributeValueTranslationInfo != null)
                    {
                        productAttributeValueTranslationInfo.Name = productAttributeValueTranslation.Name.Trim();
                        productAttributeValueTranslationInfo.Description = productAttributeValueTranslation.Description?.Trim();
                        productAttributeValueTranslationInfo.UnsignName = productAttributeValueTranslation.Name?.StripVietnameseChars().ToUpper();

                        await _attributeValueTranslationRepository.Update(productAttributeValueTranslationInfo);
                    }
                    else
                    {
                        var productAttributeValueTranslationInsert = new AttributeValueTranslation
                        {
                            AttributeValueId = productAttributeValueId,
                            TenantId = tenantId,
                            ProductAttributeId = productAttributeId,
                            LanguageId = productAttributeValueTranslation.LanguageId.Trim(),
                            Name = productAttributeValueTranslation.Name.Trim(),
                            Description = productAttributeValueTranslation.Description?.Trim(),
                            UnsignName = productAttributeValueTranslation.Name.StripVietnameseChars().ToUpper()
                        };

                        await _attributeValueTranslationRepository.Insert(productAttributeValueTranslationInsert);
                    }
                }
                return new ActionResultResponse<string>(1,
                    _warehouseResourceService.GetString("Update product attribute value translation successful."), string.Empty, info.ConcurrencyStamp);
            }
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string productAttributeId, string productAttributeValueId)
        {
            var isProductAttributeExists = await _attributeRepository.CheckExists(productAttributeId, tenantId);
            if (!isProductAttributeExists)
                return new ActionResultResponse(-1, _warehouseResourceService.GetString("Product attribute does not exists."));

            var info = await _attributeValueRepository.GetInfo(productAttributeValueId);
            if (info == null)
                return new ActionResultResponse(-2, _warehouseResourceService.GetString("Product attribute value does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.AttributeId != productAttributeId)
                return new ActionResultResponse(-4, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var isProductValueExists = await _productAttributeRepository.CheckExistProductAttributeValueId(productAttributeId);
            if (isProductValueExists)
                return new ActionResultResponse(-2, _warehouseResourceService.GetString
                    ("This product attribute value has been used by product.You can not delete this product attribute value."));

            var result = await _attributeValueRepository.Delete(productAttributeValueId);
            await _attributeValueTranslationRepository.Delete(productAttributeValueId);
            return new ActionResultResponse(result, _warehouseResourceService.GetString("Delete product attribute value successful."));
        }

        public async Task<ActionResultResponse<ProductAttributeValueDetailViewModel>> GetDetail(string tenantId, string productAttributeId, string productAttributeValueId)
        {
            var isProductAttributeExists = await _attributeRepository.CheckExists(productAttributeId, tenantId);
            if (!isProductAttributeExists)
                return new ActionResultResponse<ProductAttributeValueDetailViewModel>(-1, _warehouseResourceService.GetString("Product attribute does not exists."));

            var info = await _attributeValueRepository.GetInfo(productAttributeValueId);
            if (info == null)
                return new ActionResultResponse<ProductAttributeValueDetailViewModel>(-2, _warehouseResourceService.GetString("Product attribute value does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<ProductAttributeValueDetailViewModel>(-3, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.AttributeId != productAttributeId)
                return new ActionResultResponse<ProductAttributeValueDetailViewModel>(-4, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var productAttributeValueTranslations = await _attributeValueTranslationRepository.GetsProductAttributeValueId(productAttributeValueId);

            var productAttributeValueDetail = new ProductAttributeValueDetailViewModel
            {
                Id = info.Id,
                ProductAttributeId = productAttributeId,
                ConcurrencyStamp = info.ConcurrencyStamp,
                IsActive = info.IsActive,
                Translations = productAttributeValueTranslations?.Select(x => new ProductAttributeValueTranslationViewModel
                {
                    LanguageId = x.LanguageId,
                    Name = x.Name,
                    Description = x.Description,
                    UnsignName = x.UnsignName
                }).ToList()
            };
            return new ActionResultResponse<ProductAttributeValueDetailViewModel>
            {
                Code = 1,
                Data = productAttributeValueDetail
            };
        }

        public async Task<SearchResult<ProductAttributeValueSuggestionViewModel>> Suggestion(string tenantId, string productAttributeId,
            string languageId, string keyword, int selectTop)
        {
            var items = await _attributeValueRepository.Suggestion(tenantId, languageId, keyword, productAttributeId, selectTop, out var totalRows);
            return new SearchResult<ProductAttributeValueSuggestionViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<ActionResultResponse> UpdateIsActive(string tenantId, string productAttributeId, string lastUpdateUserId,
            string lastUpdateFullName, string lastUpdateAvatar, string productAttributeValueId, bool isActive)
        {
            var isProductAttributeExists = await _attributeRepository.CheckExists(productAttributeId, tenantId);
            if (!isProductAttributeExists)
                return new ActionResultResponse(-1, _warehouseResourceService.GetString("Product attribute does not exists."));

            var info = await _attributeValueRepository.GetInfo(productAttributeValueId);
            if (info == null)
                return new ActionResultResponse(-2, _warehouseResourceService.GetString("Product attribute value does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-3, _warehouseResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.AttributeId != productAttributeId)
                return new ActionResultResponse(-4, _warehouseResourceService.GetString(ErrorMessage.NotHavePermission));
            info.IsActive = isActive;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _attributeValueRepository.Update(info);
            return new ActionResultResponse(1, _warehouseResourceService.GetString("Update active status successful."));
        }
    }
}
