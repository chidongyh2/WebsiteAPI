using System;
using System.Collections.Generic;
using System.Drawing;
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
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Warehouse.Domain.Constants;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;
        private readonly IProductTranslationRepository _productTranslationRepository;
        private readonly IProductImageRepository _productImageRepository;
        private readonly IProductsCategorieRepository _productsCategorieRepository;
        private readonly IProductAttributeRepository _productAttributeRepository;
        private readonly IUnitRepository _unitRepository;
        private readonly IProductUnitRepository _productUnitRepository;
        private readonly IProductConversionUnitRepository _productConversionUnitRepository;
        private readonly IProductCategoriesAttributeRepository _productCategoriesAttributeRepository;
        private readonly IGoodsReceiptNoteDetailRepository _goodsReceiptNoteDetailRepository;
        private readonly IProductCategoryRepository _productCategoryRepository;
        private readonly IAttributeValueRepository _attributeValueRepository;
        private readonly IAttributeRepository _attributeRepository;
        private readonly IInventoryReportRepository _inventoryReportRepository;
        private readonly IProductAttributeValueRepository _productAttributeValueRepository;
        private readonly IProductConversionUnitGroupRepository _productConversionUnitGroupRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _resourceService;

        public ProductService(IProductRepository productRepository,
            IProductTranslationRepository productTranslationRepository,
            IProductImageRepository productImageRepository,
            IProductsCategorieRepository productsCategorieRepository,
            IProductAttributeRepository productAttributeRepository,
            IProductUnitRepository productUnitRepository,
            IProductConversionUnitRepository productConversionUnitRepository,
            IProductCategoriesAttributeRepository productCategoriesAttributeRepository,
            IGoodsReceiptNoteDetailRepository goodsReceiptNoteDetailRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWarehouseResource> resourceService, IProductCategoryRepository productCategoryRepository,
            IUnitRepository unitRepository, IAttributeRepository attributeRepository, IAttributeValueRepository attributeValueRepository,
            IProductAttributeValueRepository productAttributeValueRepository, IInventoryReportRepository inventoryReportRepository,
            IProductConversionUnitGroupRepository productConversionUnitGroupRepository)
        {
            _productRepository = productRepository;
            _productTranslationRepository = productTranslationRepository;
            _productImageRepository = productImageRepository;
            _productsCategorieRepository = productsCategorieRepository;
            _productAttributeRepository = productAttributeRepository;
            _productUnitRepository = productUnitRepository;
            _productConversionUnitRepository = productConversionUnitRepository;
            _productCategoriesAttributeRepository = productCategoriesAttributeRepository;
            _goodsReceiptNoteDetailRepository = goodsReceiptNoteDetailRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _productCategoryRepository = productCategoryRepository;
            _unitRepository = unitRepository;
            _attributeRepository = attributeRepository;
            _attributeValueRepository = attributeValueRepository;
            _productAttributeValueRepository = productAttributeValueRepository;
            _inventoryReportRepository = inventoryReportRepository;
            _productConversionUnitGroupRepository = productConversionUnitGroupRepository;
        }

        public async Task<SearchResult<ProductSearchViewModel>> Search(string tenantId, string languageId, string keyword, int? categoryId, bool? isManagementByLot,
            bool? isActive, int page, int pageSize)
        {
            var items = await _productRepository.Search(tenantId, languageId, keyword, categoryId, isManagementByLot, isActive, page,
                pageSize, out var totalRows);
            return new SearchResult<ProductSearchViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId,
            string creatorFullName,
            string creatorAvatar, ProductMeta productMeta)
        {
            var productId = !string.IsNullOrEmpty(productMeta.Id) ? productMeta.Id : await GenerateId(tenantId);
            var info = await _productRepository.GetInfo(tenantId, productId);
            if (info != null)
                return new ActionResultResponse<string>(-1, _resourceService.GetString("Product Id already exists."));

            var product = new Product
            {
                Id = !string.IsNullOrEmpty(productMeta.Id) ? productMeta.Id : await GenerateId(tenantId),
                IsActive = productMeta.IsActive,
                IsManagementByLot = productMeta.IsManagementByLot,
                Thumbnail = productMeta.Thumbnail,
                TenantId = tenantId,
                CreatorId = creatorId,
                Status = productMeta.Status,
                Source = productMeta.Source,
                IsHot = productMeta.IsHot,
                IsHomePage = productMeta.IsHomePage,
                CreatorFullName = creatorFullName,
                LastUpdateTime = DateTime.Now
            };

            var result = await _productRepository.Insert(product);
            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            #region insert Translation.
            if (productMeta.Translations.Count > 0 && productMeta.Translations.Any())
            {
                var resultInsertTranslation = await InsertTranslation();
                if (resultInsertTranslation.Code <= 0)
                {
                    await RollbackInsert();
                    await RollbackInsertTranslation();
                    return resultInsertTranslation;
                }
            }

            #endregion

            #region insert Images.
            if (productMeta.Images != null && productMeta.Images.Count > 0 && productMeta.Images.Any())
            {
                var resultInsertImage = await InsertImage();
                if (resultInsertImage.Code <= 0)
                {
                    await RollbackInsert();
                    await RollbackInsertTranslation();
                    await RollbackInsertImage();
                    return resultInsertImage;
                }
            }
            #endregion

            #region insert Categories.
            if (productMeta.Categories != null && productMeta.Categories.Count > 0 && productMeta.Categories.Any())
            {
                var resultInsertCategorie = await InsertCategories();
                if (resultInsertCategorie.Code <= 0)
                {
                    await RollbackInsert();
                    await RollbackInsertTranslation();
                    await RollbackInsertImage();
                    await RollbackInsertCategorie();
                    return resultInsertCategorie;
                }
            }
            #endregion

            var resultInsert = await InsertProductUnit();
            if (resultInsert.Code <= 0)
            {
                await RollbackInsertTranslation();
                await RollbackInsertImage();
                await RollbackInsertCategorie();
                await RollbackInsertProductUnit();
                await RollbackInsertProductConversionUnit();
                await RollbackInsert();
                return resultInsert;
            }

            if (productMeta.Attributes != null && productMeta.Attributes.Any())
            {
                resultInsert = await InsertProductAttribute(tenantId, product.Id, creatorId, creatorFullName, productMeta.Attributes);
                if (resultInsert.Code <= 0)
                {
                    await RollbackInsertTranslation();
                    await RollbackInsertImage();
                    await RollbackInsertCategorie();
                    await RollbackInsertProductUnit();
                    await RollbackInsertProductValues();
                    await RollbackInsertProductConversionUnit();
                    await RollbackInsert();
                    return resultInsert;
                }
            }

            return new ActionResultResponse<string>(1, _sharedResourceService.GetString(SuccessMessage.AddSuccessful,
                    _resourceService.GetString("Add new product successful.")),
                string.Empty, product.Id);
            #region Local functions

            async Task<ActionResultResponse<string>> InsertTranslation()
            {
                var productTranslations = new List<ProductTranslation>();
                foreach (var productTranslation in productMeta.Translations)
                {
                    //  Check name exists.
                    var isNameExists = await _productTranslationRepository.CheckExists(product.Id, tenantId,
                        productTranslation.LanguageId, productTranslation.Name);

                    var isSeoLinkExits = await _productTranslationRepository.CheckExistsSeoLink(product.Id, tenantId,
                        productTranslation.LanguageId, productTranslation.SeoLink);

                    if (isNameExists)
                    {
                        await RollbackInsert();
                        return new ActionResultResponse<string>(-1,
                            _resourceService.GetString($"Product name: {productTranslation.Name} already exists."));
                    }

                    if (isSeoLinkExits)
                    {
                        await RollbackInsert();
                        return new ActionResultResponse<string>(-1,
                            _resourceService.GetString($"Product seolink: {productTranslation.SeoLink} already exists."));
                    }

                    var productTranslationInsert = new ProductTranslation
                    {
                        ProductId = product.Id,
                        TenantId = tenantId,
                        LanguageId = productTranslation.LanguageId.Trim(),
                        Name = productTranslation.Name.Trim(),
                        Description = productTranslation.Description?.Trim(),
                        MetaDescription = productTranslation.MetaDescription?.Trim(),
                        MetaKeyword = productTranslation.MetaKeyword?.Trim(),
                        Content = productTranslation.Content,
                        SeoLink = !string.IsNullOrEmpty(productTranslation.SeoLink) ? productTranslation.SeoLink.ToUrlString() : productTranslation.Name.ToUrlString(),
                        UnsignName = $"{product.Id }{productTranslation.Name?.StripVietnameseChars().ToUpper()}"
                    };
                    productTranslations.Add(productTranslationInsert);
                }

                var resultTranslation = await _productTranslationRepository.Inserts(productTranslations);
                if (resultTranslation > 0)
                    return new ActionResultResponse<string>(resultTranslation,
                        _resourceService.GetString("Add new product translation successful."));

                await RollbackInsertTranslation();
                await RollbackInsert();

                return new ActionResultResponse<string>(-2,
                    _resourceService.GetString(
                        "Can not insert product translation. Please contact with administrator."));
            }

            async Task<ActionResultResponse<string>> InsertImage()
            {
                var productImages = new List<ProductImage>();
                foreach (var productImage in productMeta.Images)
                {
                    //  Check name exists.
                    var isExists = await _productImageRepository.CheckExists(product.Id, productImage.Url, tenantId);
                    if (isExists)
                    {
                        await RollbackInsert();
                        await RollbackInsertTranslation();
                        return new ActionResultResponse<string>(-3,
                            _resourceService.GetString("Product images url: \"{0}\" already exists.",
                                productImage.Url));
                    }

                    var productImageInsert = new ProductImage
                    {
                        ProductId = product.Id,
                        Url = productImage.Url.Trim(),
                        Description = productImage.Description?.Trim(),
                        TenantId = tenantId
                    };

                    productImages.Add(productImageInsert);

                }

                var resultImage = await _productImageRepository.Inserts(productImages);
                if (resultImage > 0)
                    return new ActionResultResponse<string>(resultImage,
                        _resourceService.GetString("Add new product images successful."));

                await RollbackInsertImage();
                await RollbackInsertTranslation();
                await RollbackInsert();

                return new ActionResultResponse<string>(-4,
                    _resourceService.GetString("Can not insert product images. Please contact with administrator."));
            }

            async Task<ActionResultResponse<string>> InsertCategories()
            {
                var productCategories = new List<ProductsCategory>();
                foreach (var categoryId in productMeta.Categories)
                {
                    // Kiểm tra tồn tại.
                    var isExists = await _productCategoryRepository.CheckExists(tenantId, categoryId);
                    if (!isExists)
                        return new ActionResultResponse<string>(-1,
                            _sharedResourceService.GetString(ErrorMessage.NotExists,
                                _resourceService.GetString("category")));

                    var productCategorieInsert = new ProductsCategory
                    {
                        ProductId = product.Id,
                        CategoryId = categoryId,
                        TenantId = tenantId
                    };

                    productCategories.Add(productCategorieInsert);
                }

                var resultCategorie = await _productsCategorieRepository.Inserts(productCategories);
                if (resultCategorie > 0)
                    return new ActionResultResponse<string>(resultCategorie,
                        _resourceService.GetString("Add new product categorie successful."));

                await RollbackInsertCategorie();
                await RollbackInsertImage();
                await RollbackInsertTranslation();
                await RollbackInsert();

                return new ActionResultResponse<string>(-5,
                    _resourceService.GetString("Can not insert product categorie. Please contact with administrator."));
            }

            async Task<ActionResultResponse<string>> InsertProductUnit()
            {
                foreach (var conversionUnit in productMeta.ConversionUnits)
                {
                    if (conversionUnit.Value <= 0)
                        return new ActionResultResponse<string>(-1, _sharedResourceService.GetString(ValidatorMessage.InValid,
                            _resourceService.GetString("conversion value")));
                }

                // Kiểm tra đơn vị mặc định có tồn tại không.
                var isDefaultUnitExists = await _unitRepository.CheckExists(tenantId, productMeta.UnitId, true);
                if (!isDefaultUnitExists)
                    return new ActionResultResponse<string>(-2,
                        _sharedResourceService.GetString(ErrorMessage.NotExists, _resourceService.GetString("Unit")));

                // Thêm mới đơn vị mặc định.
                var defaultProductUnit = new ProductUnit
                {
                    TenantId = tenantId,
                    ProductId = product.Id,
                    CreatorId = creatorId,
                    CreatorFullName = creatorFullName,
                    IsDefault = true,
                    UnitId = productMeta.UnitId,
                    SalePrice = productMeta.SalePrice
                };
                var resultInsertDefaultProductUnit = await _productUnitRepository.Insert(defaultProductUnit);
                if (resultInsertDefaultProductUnit <= 0)
                    return new ActionResultResponse<string>(-3,
                        _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

                // Thêm đơn vị chuyển đổi.
                if (productMeta.ConversionUnits.Any())
                {
                    var conversionUnitGroupId = Guid.NewGuid().ToString();
                    foreach (var conversionUnit in productMeta.ConversionUnits)
                    {
                        var isUnitExists = await _unitRepository.CheckExists(tenantId, conversionUnit.UnitId, true);
                        if (!isUnitExists)
                            return new ActionResultResponse<string>(-2,
                                _sharedResourceService.GetString(ErrorMessage.NotExists,
                                    _resourceService.GetString("Unit")));


                        // Thêm đơn vị.
                        var productUnit = new ProductUnit
                        {
                            TenantId = tenantId,
                            ProductId = product.Id,
                            CreatorId = creatorId,
                            CreatorFullName = creatorFullName,
                            IsDefault = false,
                            UnitId = conversionUnit.UnitId,
                            SalePrice = conversionUnit.SalePrice ?? 0
                        };
                        var resultInsertProductUnit = await _productUnitRepository.Insert(productUnit);
                        if (resultInsertProductUnit <= 0)
                        {
                            return new ActionResultResponse<string>(-4,
                                _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
                        }

                        // Thêm đơn vị chuyển đổi.
                        var resultInsertConversion = await _productConversionUnitRepository.Insert(
                            new ProductConversionUnit
                            {
                                TenantId = tenantId,
                                UnitId = productUnit.UnitId,
                                ConversionUnitId = defaultProductUnit.UnitId,
                                Value = conversionUnit.Value,
                                ProductId = product.Id,
                                ConversionUnitGroupId = conversionUnitGroupId
                            });

                        if (resultInsertConversion <= 0)
                        {
                            return new ActionResultResponse<string>(-5,
                                _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
                        }
                    }
                }

                return new ActionResultResponse<string>(1, _sharedResourceService.GetString(SuccessMessage.AddSuccessful, _resourceService.GetString("product")),
                    string.Empty, product.Id);
            }

            async Task RollbackInsert()
            {
                await _productRepository.ForceDelete(product.Id, tenantId);
            }

            async Task RollbackInsertTranslation()
            {
                await _productTranslationRepository.ForceDelete(product.Id, tenantId);
            }

            async Task RollbackInsertImage()
            {
                await _productImageRepository.DeleteByProductId(product.Id, tenantId);
            }

            async Task RollbackInsertCategorie()
            {
                await _productsCategorieRepository.DeleteByProductId(product.Id, tenantId);
            }

            async Task RollbackInsertProductUnit()
            {
                await _productUnitRepository.ForceDeleteByProductId(product.Id, tenantId);
            }

            async Task RollbackInsertProductConversionUnit()
            {
                await _productConversionUnitRepository.ForceDeleteByProductId(tenantId, product.Id);
            }

            async Task RollbackInsertProductValues()
            {
                await _productAttributeRepository.ForceDelete(product.Id, tenantId);
            }
            #endregion Local functions
        }

        public async Task<ActionResultResponse<string>> Update(string tenantId, string lastUpdateUserId,
            string lastUpdateFullName, string lastUpdateAvatar, string productId, ProductMeta productMeta)
        {
            var info = await _productRepository.GetInfo(tenantId, productId);
            if (info == null)
                return new ActionResultResponse<string>(-1, _resourceService.GetString("Product does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<string>(-2,
                    _resourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != productMeta.ConcurrencyStamp)
                return new ActionResultResponse<string>(-3,
                    _resourceService.GetString(
                        "The product already updated by other people. you are not allowed to edit the product information."));

            #region translation.
            if (productMeta.Translations.Count > 0 && productMeta.Translations.Any())
            {
                var resultUpdateTranslation = await UpdateTranslation();
                if (resultUpdateTranslation.Code <= 0)
                    return resultUpdateTranslation;
            }
            #endregion

            #region Images.
            if (productMeta.Images.Count > 0 && productMeta.Images.Any())
            {
                var resultUpdateImages = await UpdateProductImages();
                if (resultUpdateImages.Code <= 0)
                    return resultUpdateImages;
            }
            else
            {
                await _productImageRepository.DeleteByProductId(productId, tenantId);
            }
            #endregion

            // Cập nhật đơn vị chuyển đổi.
            productMeta.ConversionUnits.Add(new ProductConversionUnitMeta
            {
                UnitId = productMeta.UnitId,
                Value = 1,
                ConversionUnitId = productMeta.UnitId,
                SalePrice = productMeta.SalePrice,
                IsDefault = true
            });
            var result = await UpdateConversionUnit(tenantId, productId, lastUpdateUserId, lastUpdateFullName, productMeta.ConversionUnits);
            if (result.Code < 0)
                return result;

            // Cập nhật thuộc tính sản phẩm.
            result = await UpdateProductAttribute(tenantId, productId, lastUpdateUserId, lastUpdateFullName, productMeta.Attributes);
            if (result.Code < 0)
                return result;

            #region Categories.
            if (productMeta.Categories.Count > 0 && productMeta.Categories.Any())
            {
                var resultUpdateCategories = await UpdateProductsCategories();
                if (resultUpdateCategories.Code <= 0)
                    return resultUpdateCategories;
            }
            #endregion

            info.IsActive = productMeta.IsActive;
            info.IsHot = productMeta.IsHot;
            info.IsHomePage = productMeta.IsHomePage;
            info.IsManagementByLot = productMeta.IsManagementByLot;
            info.Thumbnail = productMeta.Thumbnail;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdateTime = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;
            await _productRepository.Update(info);
            return new ActionResultResponse<string>(1, _resourceService.GetString("Update product successful."),
                string.Empty, info.ConcurrencyStamp);

            async Task<ActionResultResponse<string>> UpdateTranslation()
            {
                foreach (var productTranslation in productMeta.Translations)
                {
                    var isNameExists = await _productTranslationRepository.CheckExists(info.Id, tenantId,
                        productTranslation.LanguageId, productTranslation.Name);
                    if (isNameExists)
                        return new ActionResultResponse<string>(-4, _resourceService.GetString("Product name: \"{0}\" already exists.", productTranslation.Name));

                    var isSeoLinkExists = await _productTranslationRepository.CheckExistsSeoLink(info.Id, tenantId,
                       productTranslation.LanguageId, productTranslation.SeoLink);

                    if (isSeoLinkExists)
                        return new ActionResultResponse<string>(-4, _resourceService.GetString("Product seolink: \"{0}\" already exists.", productTranslation.SeoLink));

                    var productTranslationInfo =
                        await _productTranslationRepository.GetInfo(info.Id, productTranslation.LanguageId, tenantId);
                    if (productTranslationInfo != null)
                    {
                        productTranslationInfo.Name = productTranslation.Name.Trim();
                        productTranslationInfo.Description = productTranslation.Description?.Trim();
                        productTranslationInfo.UnsignName = $"{info.Id }{productTranslation.Name?.StripVietnameseChars().ToUpper()}";
                        productTranslationInfo.SeoLink = !string.IsNullOrEmpty(productTranslation.SeoLink) ? productTranslation.SeoLink.ToUrlString() : productTranslation.Name.ToUrlString();

                        await _productTranslationRepository.Update(productTranslationInfo);
                    }
                    else
                    {
                        var productTranslationInsert = new ProductTranslation
                        {
                            ProductId = productId,
                            TenantId = tenantId,
                            LanguageId = productTranslation.LanguageId.Trim(),
                            Name = productTranslation.Name.Trim(),
                            SeoLink = !string.IsNullOrEmpty(productTranslation.SeoLink) ? productTranslation.SeoLink.ToUrlString() : productTranslation.Name.ToUrlString(),
                            Description = productTranslation.Description?.Trim(),
                            UnsignName = $"{info.Id }{productTranslation.Name?.StripVietnameseChars().ToUpper()}"
                        };

                        await _productTranslationRepository.Insert(productTranslationInsert);
                    }
                }
                return new ActionResultResponse<string>(1,
                    _resourceService.GetString("Update product translation successful."), string.Empty, info.ConcurrencyStamp);
            }

            async Task<ActionResultResponse<string>> UpdateProductImages()
            {
                await _productImageRepository.DeleteByProductId(productId, tenantId);

                var productImages = new List<ProductImage>();
                foreach (var productImage in productMeta.Images)
                {
                    //  Check name exists.
                    var isExists = await _productImageRepository.CheckExists(productId, productImage.Url, tenantId);
                    if (isExists)
                    {
                        return new ActionResultResponse<string>(-5,
                            _resourceService.GetString("Product images url: \"{0}\" already exists.",
                                productImage.Url));
                    }

                    var productImageInsert = new ProductImage
                    {
                        ProductId = productId,
                        Url = productImage.Url.Trim(),
                        Description = productImage.Description?.Trim(),
                        TenantId = tenantId
                    };

                    productImages.Add(productImageInsert);

                }

                var resultImage = await _productImageRepository.Inserts(productImages);
                if (resultImage > 0)
                    return new ActionResultResponse<string>(resultImage,
                        _resourceService.GetString("Add new product images successful."));

                return new ActionResultResponse<string>(-6,
                    _resourceService.GetString("Can not insert product images. Please contact with administrator."));
            }

            async Task<ActionResultResponse<string>> UpdateProductsCategories()
            {
                await _productsCategorieRepository.DeleteByProductId(productId, tenantId);

                var productCategories = new List<ProductsCategory>();
                foreach (var productCategorie in productMeta.Categories)
                {
                    var productCategorieInsert = new ProductsCategory
                    {
                        ProductId = productId,
                        CategoryId = productCategorie,
                        TenantId = tenantId
                    };
                    productCategories.Add(productCategorieInsert);
                }

                var resultCategorie = await _productsCategorieRepository.Inserts(productCategories);
                if (resultCategorie > 0)
                    return new ActionResultResponse<string>(resultCategorie,
                        _resourceService.GetString("Add new product categorie successful."));

                return new ActionResultResponse<string>(-7,
                    _resourceService.GetString("Can not insert product categorie. Please contact with administrator."));
            }
        }

        private async Task<ActionResultResponse<string>> UpdateProductAttribute(string tenantId, string productId, string lastUpdateUserId, string lastUpdateFullName,
            List<ProductAttributeMeta> productAttributeMetas)
        {
            var productAttributes = await _productAttributeRepository.GetsByProductId(productId, tenantId);
            var productAttributeIds = productAttributes.Select(x => x.AttributeId).ToList();
            var productAttributeMetaIds = productAttributeMetas.Select(x => x.AttributeId).ToList();
            //foreach (var productAttributeMeta in productAttributeMetas)
            //{
            //    productAttributeMetas.AddRange(productAttributeMeta.AttributeValues.Select(x => new ProductAttribute
            //    {
            //        AttributeId = productAttributeMeta.AttributeId,
            //        //ProductAttributeValueId = x.Id
            //    }));
            //}

            if (!productAttributes.Any())
            {
                await InsertProductAttribute(tenantId, productId, lastUpdateUserId, lastUpdateFullName,
                    productAttributeMetas);
            }
            else
            {
                #region Thêm mới
                var listNewAttribute = productAttributeMetaIds.Except(productAttributeIds).ToList();
                if (listNewAttribute.Any())
                {
                    await InsertProductAttribute(tenantId, productId, lastUpdateUserId, lastUpdateFullName,
                        productAttributeMetas.Where(x => listNewAttribute.Contains(x.AttributeId)).ToList());
                }
                #endregion

                #region Sửa.
                // Lấy về danh sách chỉnh sửa.                
                var listEdit = productAttributeIds.Intersect(productAttributeMetaIds).ToList();
                if (listEdit.Any())
                {
                    //var listUpdateProductAttribute = .ToList();
                    foreach (var productAttribute in productAttributes.Where(x => listEdit.Contains(x.AttributeId)))
                    {
                        var productAttributeMeta =
                            productAttributeMetas.FirstOrDefault(x => x.AttributeId == productAttribute.AttributeId);
                        if (productAttributeMeta == null)
                            continue;

                        var attributeInfo =
                            await _attributeRepository.GetInfo(tenantId, productAttributeMeta.AttributeId, true);
                        if (attributeInfo == null)
                            return new ActionResultResponse<string>(-1, _sharedResourceService.GetString(ErrorMessage.NotExists,
                                _resourceService.GetString("Attribute")));

                        productAttribute.IsShowClient = productAttributeMeta.IsShowClient;
                        if (attributeInfo.IsSelfContent)
                        {
                            // Kiểm tra giá trị nhập vào.
                            if (string.IsNullOrEmpty(productAttributeMeta.Value))
                                return new ActionResultResponse<string>(-2, _sharedResourceService.GetString(ValidatorMessage.PleaseEnter,
                                    _resourceService.GetString("attribute value")));

                            productAttribute.Value = productAttributeMeta.Value;
                        }

                        // Lưu thay đổi.
                        await _productAttributeRepository.Update(productAttribute);

                        // Nếu là chọn giá và không cho phép chọn nhiều.
                        if (!attributeInfo.IsMultiple && productAttributeMeta.AttributeValues.Count() > 1)
                        {
                            return new ActionResultResponse<string>(-3,
                                _resourceService.GetString("Attribute: {0} just accept only one value.", productAttributeMeta.AttributeName));
                        }

                        // Xóa giá trị cũ.
                        var result = await _productAttributeValueRepository.DeleteByProductAttributeId(productAttribute.Id, tenantId);
                        if (result < 0 && result != -1)
                            return new ActionResultResponse<string>(-4,
                                _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

                        // Thêm giá trị mới.
                        var productAttributeValues = new List<ProductAttributeValue>();
                        foreach (var attributeValue in productAttributeMeta.AttributeValues)
                        {
                            var isAttributeValueExists = await _attributeValueRepository.CheckExists(tenantId,
                                attributeInfo.Id,
                                attributeValue.Id, true);
                            if (!isAttributeValueExists)
                                return new ActionResultResponse<string>(-5, _sharedResourceService.GetString(ErrorMessage.NotExists,
                                    _resourceService.GetString("attribute value")));

                            productAttributeValues.Add(new ProductAttributeValue
                            {
                                ProductAttributeId = productAttribute.Id,
                                AttributeValueId = attributeValue.Id
                            });
                        }

                        await _productAttributeValueRepository.Inserts(productAttributeValues);
                    }
                }
                #endregion
                #region Xóa

                var listDeletes = productAttributeIds.Except(productAttributeMetaIds).ToList();
                foreach (var productAttributeId in listDeletes)
                {
                    await _productAttributeRepository.Delete(tenantId, productId, productAttributeId);
                }
                #endregion
            }
            return new ActionResultResponse<string>(1, _resourceService.GetString("Update product attribute value successful."));
        }

        private async Task<ActionResultResponse<string>> UpdateConversionUnit(string tenantId, string productId, string creatorId,
            string creatorFullName, List<ProductConversionUnitMeta> productConversionUnitMetas)
        {
            var groupByUnitId = productConversionUnitMetas.GroupBy(x => x.UnitId);
            foreach (var groupUnitId in groupByUnitId)
            {
                if (groupUnitId.Count() > 1)
                    return new ActionResultResponse<string>(-1, _sharedResourceService.GetString(ErrorMessage.AlreadyExists,
                        _resourceService.GetString("Product unit")));
            }

            // Lấy về danh sách đơn vị sản phẩm.
            var productUnits = await _productUnitRepository.GetsAll(tenantId, productId);
            var productUnitIds = productUnits.Select(x => x.UnitId).ToList();
            var productUnitMetaIds = productConversionUnitMetas.Select(x => x.UnitId).ToList();

            // Cập nhật thông tin đơn vị.
            var listNewUnitIds = productUnitMetaIds.Except(productUnitIds).ToList();
            var listUpdateUnitIds = productUnitMetaIds.Intersect(productUnitIds).ToList();
            var listDeleteUnitIds = productUnitIds.Except(productUnitMetaIds).ToList();

            // Lấy về đơn vị mặc định.
            var defaultUnit = productUnits.FirstOrDefault(x => x.IsDefault);
            if (defaultUnit == null)
                return new ActionResultResponse<string>(-1,
                    _sharedResourceService.GetString(ErrorMessage.NotExists, _resourceService.GetString("Default unit")));

            var defaultUnitMeta = productConversionUnitMetas.FirstOrDefault(x => x.IsDefault);
            if (defaultUnitMeta == null)
                return new ActionResultResponse<string>(-2,
                    _sharedResourceService.GetString(ValidatorMessage.PleaseSelect, _resourceService.GetString("Default unit")));

            var productConversionUnits = await _productConversionUnitRepository.GetsAll(tenantId, productId);
            var defaultUnitId = defaultUnit.UnitId;
            #region Thay đổi đơn vị mặc định.
            if (defaultUnit.UnitId != defaultUnitMeta.UnitId)
            {
                var productUnit = await _productUnitRepository.GetInfo(defaultUnit.Id, tenantId);
                productUnit.ToDate = DateTime.Now;
                var resultUpdateDefaultUnit = await _productUnitRepository.Update(productUnit);
                if (resultUpdateDefaultUnit <= 0)
                    return new ActionResultResponse<string>(-3, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

                // Thêm đơn vị mặc định mới.
                var newDefaultUnit = new ProductUnit
                {
                    TenantId = tenantId,
                    ProductId = productId,
                    UnitId = defaultUnitMeta.UnitId,
                    SalePrice = defaultUnitMeta.SalePrice,
                    IsDefault = true,
                    CreatorId = creatorId,
                    CreatorFullName = creatorFullName
                };
                var resutlInsertNewDefaultProductUnit = await _productUnitRepository.Insert(newDefaultUnit);
                if (resutlInsertNewDefaultProductUnit < 0)
                    return new ActionResultResponse<string>(-4, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

                defaultUnitId = newDefaultUnit.UnitId;
            }
            #endregion

            #region Thay đổi giá đơn vị mặc định.

            if (defaultUnit.SalePrice != defaultUnitMeta.SalePrice)
            {
                // Cập nhật ngày hết hạn của đơn vị.
                defaultUnit.ToDate = DateTime.Now;

                // Thêm đơn vị mới.
                await _productUnitRepository.Insert(new ProductUnit
                {
                    ProductId = productId,
                    UnitId = defaultUnitId,
                    TenantId = tenantId,
                    CreatorId = creatorId,
                    CreatorFullName = creatorFullName,
                    IsDefault = true,
                    SalePrice = defaultUnitMeta.SalePrice
                });
            }
            #endregion

            #region Thêm mới đơn vị.
            var listNewProductUnitMeta = productConversionUnitMetas.Where(x => listNewUnitIds.Contains(x.UnitId) && !x.IsDefault).ToList();
            if (listNewProductUnitMeta.Any())
            {
                var listNewProductUnit = new List<ProductUnit>();
                foreach (var productUnitMeta in listNewProductUnitMeta)
                {
                    // Kiểm tra đơn vị có tồn tại không.
                    var isUnitExists = await _unitRepository.CheckExists(tenantId, productUnitMeta.UnitId, true);
                    if (!isUnitExists)
                        return new ActionResultResponse<string>(-1,
                            _sharedResourceService.GetString(ErrorMessage.NotExists, _resourceService.GetString("Product unit")));

                    listNewProductUnit.Add(new ProductUnit
                    {
                        TenantId = tenantId,
                        ProductId = productId,
                        UnitId = productUnitMeta.UnitId,
                        CreatorId = creatorId,
                        CreatorFullName = creatorFullName,
                        SalePrice = productUnitMeta.SalePrice,
                        IsDefault = false
                    });
                }

                if (listNewProductUnit.Any())
                    await _productUnitRepository.Inserts(listNewProductUnit);
            }
            #endregion

            #region Cập nhật đơn vị.
            var listUpdateProductUnitMeta = productConversionUnitMetas
                .Where(x => listUpdateUnitIds.Contains(x.UnitId) && !x.IsDefault).ToList();
            foreach (var productUnitMeta in listUpdateProductUnitMeta)
            {
                var productUnit = await _productUnitRepository.GetInfo(tenantId, productId, productUnitMeta.UnitId);
                if (productUnit == null)
                    return new ActionResultResponse<string>(-6,
                        _sharedResourceService.GetString(ErrorMessage.NotExists, _resourceService.GetString("Product unit")));

                if (productUnit.SalePrice == productUnitMeta.SalePrice)
                    continue;

                productUnit.ToDate = DateTime.Now;
                var resultUpdateProductUnit = await _productUnitRepository.Update(productUnit);
                if (resultUpdateProductUnit <= 0)
                    return new ActionResultResponse<string>(-7, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

                // Thêm mới đơn vị tính.
                await _productUnitRepository.Insert(new ProductUnit
                {
                    TenantId = tenantId,
                    ProductId = productId,
                    UnitId = productUnitMeta.UnitId,
                    CreatorId = creatorId,
                    CreatorFullName = creatorFullName,
                    SalePrice = productUnitMeta.SalePrice,
                    IsDefault = false
                });
            }
            #endregion

            #region Xóa đơn vị.
            var listDeleteProductUnitMeta = productConversionUnitMetas
                .Where(x => listDeleteUnitIds.Contains(x.UnitId) && !x.IsDefault).ToList();
            foreach (var productUnitMeta in listDeleteProductUnitMeta)
            {
                var productUnit = await _productUnitRepository.GetInfo(tenantId, productId, productUnitMeta.UnitId);
                if (productUnit == null)
                    return new ActionResultResponse<string>(-6,
                        _sharedResourceService.GetString(ErrorMessage.NotExists, _resourceService.GetString("Product unit")));

                productUnit.ToDate = DateTime.Now;
                productUnit.IsDelete = true;
                await _productUnitRepository.Update(productUnit);
            }
            #endregion

            // Lấy về đơn vị quy đổi theo mã sản phẩm.            
            var conversionUnitGroupId = Guid.NewGuid().ToString();

            /* Kiểm tra nếu có thêm, sửa, xóa đơn vị chuyển đổi. Update toàn bộ đơn vị chuyển đổi cũ về trạng thái không sử dụng và 
             thêm đơn vị chuyển đổi mới */
            var productConversionUnitIds = productConversionUnits.Select(x => x.UnitId).ToList();
            var hasChange = productConversionUnitIds.Count != productUnitMetaIds.Count
                || listNewUnitIds.Count > 0
                || listDeleteUnitIds.Count > 0;
            foreach (var productConversionUnit in productConversionUnits)
            {
                var productConversionUnitMeta = productConversionUnitMetas.FirstOrDefault(x =>
                    x.UnitId == productConversionUnit.UnitId
                    && !x.IsDefault);
                if (productConversionUnitMeta == null)
                {
                    continue;
                }

                if (productConversionUnitMeta.Value != productConversionUnit.Value)
                    hasChange = true;
            }
            if (hasChange)
            {
                // Cập nhật lại toàn bộ đơn vị chuyển đổi cũ về trạng thái không sử dụng.
                if (productConversionUnits.Any())
                {
                    foreach (var productCovnersionUnit in productConversionUnits)
                    {
                        productCovnersionUnit.ToDate = DateTime.Now;
                    }
                    var result = await _productConversionUnitRepository.Updates(productConversionUnits);
                    if (result <= 0)
                        return new ActionResultResponse<string>(-8, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
                }

                // Thêm đơn vị chuyển đổi mới.
                if (productConversionUnitMetas.Any())
                {
                    var listNewConversionUnits = new List<ProductConversionUnit>();
                    foreach (var productConversionUnitMeta in productConversionUnitMetas.Where(x => !x.IsDefault))
                    {
                        var isUnitExists =
                            await _unitRepository.CheckExists(tenantId, productConversionUnitMeta.UnitId, true);
                        if (!isUnitExists)
                            continue;

                        listNewConversionUnits.Add(new ProductConversionUnit
                        {
                            TenantId = tenantId,
                            ProductId = productId,
                            Value = productConversionUnitMeta.Value,
                            UnitId = productConversionUnitMeta.UnitId,
                            ConversionUnitId = defaultUnitId,
                            ConversionUnitGroupId = conversionUnitGroupId
                        });
                    }

                    if (listNewConversionUnits.Any())
                    {
                        await _productConversionUnitRepository.Inserts(listNewConversionUnits);
                    }
                }
            }

            return new ActionResultResponse<string>(1,
                _sharedResourceService.GetString(SuccessMessage.UpdateSuccessful,
                    _resourceService.GetString("conversion unit")));
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string productId)
        {
            var info = await _productRepository.GetInfo(tenantId, productId);
            if (info == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Product does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var isGoodsExists = await _goodsReceiptNoteDetailRepository.CheckExistsByTenantIdProductId(tenantId, productId);
            if (isGoodsExists)
                return new ActionResultResponse(-2, _resourceService.GetString("This product has been used in the goods receipt note."));

            var result = await _productRepository.Delete(productId, tenantId);
            await _productTranslationRepository.Delete(productId, tenantId);
            return new ActionResultResponse(result, _resourceService.GetString("Delete product successful."));
        }

        public async Task<ActionResultResponse<ProductDetailViewModel>> GetDetail(string tenantId, string productId)
        {
            var info = await _productRepository.GetInfo(tenantId, productId);
            if (info == null)
                return new ActionResultResponse<ProductDetailViewModel>(-1, _resourceService.GetString("Product does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<ProductDetailViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var productTranslations = await _productTranslationRepository.GetsProductId(productId, tenantId);
            var productImages = await _productImageRepository.GetsProductId(productId, tenantId);
            var productCategories = await _productsCategorieRepository.GetProductCategoryNameByProductId(tenantId, productId);
            var productAttributes = await _productAttributeRepository.GetProductValueByProductId(tenantId, productId);
            //var productUnits = await _productUnitRepository.GetsByProductId(productId);
            var productConversionUnits = await _productConversionUnitRepository.GetsByProductId(tenantId, productId);
            var defaultUnit = await _productUnitRepository.GetDefaultUnit(tenantId, info.Id);

            var productDetail = new ProductDetailViewModel
            {
                Id = info.Id,
                ConcurrencyStamp = info.ConcurrencyStamp,
                IsActive = info.IsActive,
                IsManagementByLot = info.IsManagementByLot,
                Thumbnail = info.Thumbnail,
                LikeCount = info.LikeCount,
                CommentCount = info.CommentCount,
                ViewCount = info.ViewCount,
                ApprovedTime = info.ApprovedTime,
                ApproverAvartar = info.ApproverAvartar,
                ApproverComment = info.ApproverComment,
                ApproverFullName = info.ApproverFullName,
                ApproverUserId = info.ApproverUserId,
                IsHomePage = info.IsHomePage,
                IsHot = info.IsHot,
                LastUpdateHomePage = info.LastUpdateHomePage,
                LastUpdateHot = info.LastUpdateHomePage,
                SentTime = info.SentTime,
                Source = info.Source,
                Status = info.Status,
                Translations = productTranslations?.Select(x => new ProductTranslationViewModel
                {
                    LanguageId = x.LanguageId,
                    Name = x.Name,
                    Description = x.Description,
                    UnsignName = x.UnsignName,
                    Content = x.Content,
                    MetaDescription = x.MetaDescription,
                    MetaKeyword = x.MetaKeyword,
                    SeoLink = x.SeoLink,
                    TenantId = tenantId
                }).ToList(),
                Images = productImages?.Select(x => new ProductImageViewModel
                {
                    Url = x.Url,
                    Description = x.Description,
                    TenantId = tenantId
                }).ToList(),
                Categories = productCategories,
                Attributes = productAttributes,
                //Units = productUnits,
                UnitId = defaultUnit.UnitId,
                UnitName = defaultUnit.Name,
                SalePrice = defaultUnit.SalePrice,
                ConversionUnits = productConversionUnits

            };
            return new ActionResultResponse<ProductDetailViewModel>
            {
                Code = 1,
                Data = productDetail
            };
        }

        public async Task<SearchResult<ProductUnitViewModel>> GetProductUnitByProductId(string tenantId, string productId)
        {
            // TODO: Check
            //var productUnits = await _productUnitRepository.GetsProductId(productId);
            //return new SearchResult<ProductUnitViewModel>
            //{
            //    Items = productUnits?.Select(x => new ProductUnitViewModel
            //    {
            //        Id = x.Id,
            //        ProductUnitId = x.ProductUnitId,
            //        SalePrice = x.SalePrice,
            //        IsDefault = x.IsDefault
            //    }).ToList(),
            //};
            return null;
        }

        public async Task<SearchResult<ProductSuggestionViewModel>> Suggestion(string tenantId, string languageId, string keyword, int page, int pageSize)
        {
            var items = await _productRepository.Suggestion(tenantId, languageId, keyword, page, pageSize, out var totalRows);
            return new SearchResult<ProductSuggestionViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<ActionResultResponse> UpdateIsActive(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string lastUpdateAvatar,
            string productId, bool isActive)
        {
            var info = await _productRepository.GetInfo(tenantId, productId);
            if (info == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Product does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _resourceService.GetString(ErrorMessage.NotHavePermission));
            info.IsActive = isActive;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _productRepository.Update(info);
            return new ActionResultResponse(1, _resourceService.GetString("Update active status successful."));
        }

        public async Task<ActionResultResponse> UpdateIsManagementByLot(string tenantId, string lastUpdateUserId, string lastUpdateFullName,
            string lastUpdateAvatar, string productId, bool isManagementByLot)
        {
            var info = await _productRepository.GetInfo(tenantId, productId);
            if (info == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Product does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _resourceService.GetString(ErrorMessage.NotHavePermission));
            info.IsManagementByLot = isManagementByLot;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _productRepository.Update(info);
            return new ActionResultResponse(1, _resourceService.GetString("Update is management by lot status successful."));
        }

        public async Task<ActionResultResponse<string>> UpdateProductValue(string tenantId, string productId, string lastUpdateUserId, string lastUpdateFullName,
            string lastUpdateAvatar, string productValueId, ProductAttributeMeta productAttributeMeta)
        {
            var isProductExists = await _productRepository.CheckExists(productId, tenantId);
            if (!isProductExists)
                return new ActionResultResponse<string>(-1, _resourceService.GetString("Product does not exists."));

            var info = await _productAttributeRepository.GetInfo(productValueId, tenantId);
            if (info == null)
                return new ActionResultResponse<string>(-3, _resourceService.GetString("Product value does not exists."));

            if (info.ProductId != productId)
                return new ActionResultResponse<string>(-4,
                    _resourceService.GetString(ErrorMessage.NotHavePermission));

            info.AttributeId = productAttributeMeta.AttributeId;
            //info.AttributeValueId = productAttributeMeta.AttributeValueId;
            info.Value = productAttributeMeta.Value;
            info.IsShowClient = productAttributeMeta.IsShowClient;
            info.LastUpdateTime = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _productAttributeRepository.Update(info);

            return new ActionResultResponse<string>(1, _resourceService.GetString("Update product value successful."),
                string.Empty, info.Id);
        }

        //public async Task<ActionResultResponse> DeleteProductValue(string tenantId, string productId, string productValueId)
        //{
        //    var isProductExists = await _productRepository.CheckExists(productId, tenantId);
        //    if (!isProductExists)
        //        return new ActionResultResponse(-1, _resourceService.GetString("Product does not exists."));

        //    var info = await _productAttributeRepository.GetInfo(productValueId);
        //    if (info == null)
        //        return new ActionResultResponse(-2, _resourceService.GetString("Product value does not exists."));

        //    if (info.ProductId != productId)
        //        return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

        //    // bo sung dieu kien check xoa
        //    var result = await _productAttributeRepository.Delete(productValueId);
        //    return new ActionResultResponse(result, _resourceService.GetString("Delete product value successful."));
        //}

        public async Task<ActionResultResponse> DeleteProductValueByAttributeId(string tenantId, string productId, string productAttributeId)
        {
            var isProductExists = await _productRepository.CheckExists(productId, tenantId);
            if (!isProductExists)
                return new ActionResultResponse(-1, _resourceService.GetString("Product does not exists."));

            var result = await _productAttributeRepository.DeleteByAttributeId(tenantId, productId, productAttributeId);
            return new ActionResultResponse(result, _resourceService.GetString("Delete product value successful."));
        }

        //public async Task<ActionResultResponse<string>> UpdateProductUnit(string tenantId, string productId, string creatorId, string creatorFullName,
        //    string creatorAvatar, string productUnitId, ProductListUnitMeta productListUnitMeta)
        //{
        //    var isProductExists = await _productRepository.CheckExists(productId, tenantId);
        //    if (!isProductExists)
        //        return new ActionResultResponse<string>(-1, _resourceService.GetString("Product does not exists."));

        //    var productUnitGroupId = Guid.NewGuid().ToString();
        //    var info = await _productUnitRepository.GetInfo(productUnitId);
        //    if (info == null)
        //        return new ActionResultResponse<string>(-3, _resourceService.GetString("Product unit does not exists."));

        //    if (info.ProductId != productId)
        //        return new ActionResultResponse<string>(-4,
        //            _resourceService.GetString(ErrorMessage.NotHavePermission));

        //    //update het ProductUnits ProductUnitGroupId thanh co ToDate
        //    //await _productUnitRepository.UpdateToDateByProductUnitGroupId(info.ProductUnitGroupId);

        //    var productUnits = new List<ProductUnit>();

        //    #region insert Unit.
        //    if (productListUnitMeta.ListUnit != null && productListUnitMeta.ListUnit.Count > 0 && productListUnitMeta.ListUnit.Any())
        //    {
        //        var resultInsertUnit = await InsertUnit();
        //        if (resultInsertUnit.Code <= 0)
        //            return resultInsertUnit;
        //    }
        //    #endregion

        //    #region insert Unit.
        //    //if (productListUnitMeta.ListConversionUnit != null && productListUnitMeta.ListConversionUnit.Count > 0
        //    //    && productListUnitMeta.ListConversionUnit.Any() && productUnits.Any())
        //    //{
        //    //    var resultInsertConversionUnit = await InsertProductConversionUnit();
        //    //    if (resultInsertConversionUnit.Code <= 0)
        //    //        return resultInsertConversionUnit;
        //    //}
        //    #endregion

        //    return new ActionResultResponse<string>(1, _resourceService.GetString("Add new product unit successful."),
        //        string.Empty, productUnitGroupId);

        //    async Task<ActionResultResponse<string>> InsertUnit()
        //    {
        //        foreach (var productUnit in productListUnitMeta.ListUnit)
        //        {
        //            var productUnitInsert = new ProductUnit
        //            {
        //                Id = Guid.NewGuid().ToString(),
        //                ProductId = productId,
        //                UnitId = productUnit.UnitId,
        //                IsDefault = productUnit.IsDefault,
        //                SalePrice = productUnit.SalePrice,
        //                //ProductUnitGroupId = productUnitGroupId,
        //                CreatorId = creatorId,
        //                CreatorFullName = creatorFullName
        //            };

        //            productUnits.Add(productUnitInsert);
        //        }

        //        var resultUnit = await _productUnitRepository.Inserts(productUnits);
        //        if (resultUnit > 0)
        //            return new ActionResultResponse<string>(resultUnit,
        //                _resourceService.GetString("Add new product unit successful."));

        //        return new ActionResultResponse<string>(-2,
        //            _resourceService.GetString("Can not insert product unit. Please contact with administrator."));
        //    }

        //    async Task<ActionResultResponse<string>> InsertProductConversionUnit()
        //    {
        //        var productConversionUnits = new List<ProductConversionUnit>();
        //        foreach (var productConversionUnit in productListUnitMeta.ListConversionUnit)
        //        {
        //            var productConversionUnitInsert = new ProductConversionUnit
        //            {
        //                UnitId = productUnits?.FirstOrDefault(x => x.UnitId == productConversionUnit.UnitId)?.UnitId,
        //                ConversionUnitId = productUnits?.FirstOrDefault(x => x.UnitId == productConversionUnit.ConversionUnitId)?.UnitId,
        //                Value = productConversionUnit.Value,

        //            };

        //            productConversionUnits.Add(productConversionUnitInsert);
        //        }

        //        var resultConversionUnit = await _productConversionUnitRepository.Inserts(productConversionUnits);
        //        if (resultConversionUnit > 0)
        //            return new ActionResultResponse<string>(resultConversionUnit,
        //                _resourceService.GetString("Add new product conversion unit successful."));

        //        return new ActionResultResponse<string>(-2,
        //            _resourceService.GetString("Can not insert product conversion unit. Please contact with administrator."));
        //    }
        //}

        public async Task<ActionResultResponse> DeleteProductUnit(string tenantId, string productId, string productUnitId)
        {
            var isProductExists = await _productRepository.CheckExists(productId, tenantId);
            if (!isProductExists)
                return new ActionResultResponse(-1, _resourceService.GetString("Product does not exists."));

            var info = await _productUnitRepository.GetInfo(productUnitId, tenantId);
            if (info == null)
                return new ActionResultResponse(-2, _resourceService.GetString("Product unit does not exists."));

            if (info.ProductId != productId)
                return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            // bo sung dieu kien check xoa
            //check dieu kien conver

            var result = await _productUnitRepository.Delete(productUnitId, tenantId);
            return new ActionResultResponse(result, _resourceService.GetString("Delete product unit successful."));
        }

        public async Task<SearchResult<ProductCategoriesAttributeViewModel>> GetProductCategoryAttributeByProductId(string tenantId, string languageId, string productId)
        {
            var listProductCategory = await _productsCategorieRepository.GetByProductId(productId, tenantId);
            if (listProductCategory != null && listProductCategory.Any())
            {
                var categoriyIds = listProductCategory.Select(x => x.CategoryId).ToList();
                return new SearchResult<ProductCategoriesAttributeViewModel>
                {
                    Items = await _productCategoriesAttributeRepository.GetProductAttributeParentByListCategoryId(tenantId, languageId, categoriyIds)
                };
            }
            else
            {
                return new SearchResult<ProductCategoriesAttributeViewModel>();
            }
        }

        public async Task<SearchResult<UnitSuggestionsViewModel>> GetUnitByProductId(string tenantId, string languageId, string productId, int page, int pageSize)
        {
            return new SearchResult<UnitSuggestionsViewModel>
            {
                Items = await _productUnitRepository.SearchSuggestionsUnitByProduct(tenantId, languageId, productId, page, pageSize, out int totalRows),
                TotalRows = totalRows,
            };
        }

        private async Task<string> GenerateId(string tenantId)
        {
            while (true)
            {
                var totalItem = await _productRepository.GetTotal(tenantId);
                var id = totalItem.ToAlphabetId(2, 5);

                // Check id exists.
                var isIdExists = await _productRepository.CheckExistsByProductId(tenantId, id);
                if (!isIdExists) return id;
            }
        }

        private async Task<ActionResultResponse<string>> InsertProductAttribute(string tenantId, string productId, string creatorId, string creatorFullName,
            List<ProductAttributeMeta> productAttributeMetas)
        {
            var listProductAttributes = new List<ProductAttribute>();
            // Kiểm tra giá trị tồn tại không.
            foreach (var productAttributeMeta in productAttributeMetas)
            {
                var attributeInfo =
                    await _attributeRepository.GetInfo(tenantId, productAttributeMeta.AttributeId, true);
                if (attributeInfo == null || !attributeInfo.IsActive || attributeInfo.IsDelete)
                    return new ActionResultResponse<string>(-1, _sharedResourceService.GetString(ErrorMessage.NotExists, _resourceService.GetString("Attribute")));

                var productAttribute = new ProductAttribute
                {
                    TenantId = tenantId,
                    ProductId = productId,
                    CreatorId = creatorId,
                    CreatorFullName = creatorFullName,
                    IsShowClient = productAttributeMeta.IsShowClient,
                    AttributeId = productAttributeMeta.AttributeId
                };
                if (attributeInfo.IsSelfContent)
                {
                    if (string.IsNullOrEmpty(productAttributeMeta.Value))
                        return new ActionResultResponse<string>(-2, _sharedResourceService.GetString(ValidatorMessage.PleaseEnter,
                            _resourceService.GetString("attrubute value")));

                    productAttribute.Value = productAttributeMeta.Value;
                    listProductAttributes.Add(productAttribute);
                    var result = await _productAttributeRepository.Insert(productAttribute);
                    if (result <= 0)
                        return new ActionResultResponse<string>(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
                }
                else
                {
                    if (productAttributeMeta.AttributeValues == null ||
                        !productAttributeMeta.AttributeValues.Any())
                        return new ActionResultResponse<string>(-2, _sharedResourceService.GetString(ValidatorMessage.PleaseSelect,
                            _resourceService.GetString("attrubute value")));

                    productAttribute.ProductAttributeValues = new List<ProductAttributeValue>();
                    var result = await _productAttributeRepository.Insert(productAttribute);
                    if (result <= 0)
                        return new ActionResultResponse<string>(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

                    var listProductAttributeValues = new List<ProductAttributeValue>();
                    // Kiểm tra giá trị thuộc tính.
                    foreach (var attributeValue in productAttributeMeta.AttributeValues)
                    {
                        var isAttributeValueExists = await _attributeValueRepository.CheckExists(tenantId,
                            productAttributeMeta.AttributeId, attributeValue.Id, true);

                        if (isAttributeValueExists)
                        {
                            listProductAttributeValues.Add(new ProductAttributeValue
                            {
                                ProductAttributeId = productAttribute.Id,
                                AttributeValueId = attributeValue.Id
                            });
                        }
                    }

                    var resultInsertValues = await _productAttributeValueRepository.Inserts(listProductAttributeValues);
                    if (resultInsertValues <= 0)
                    {
                        await _productAttributeValueRepository.DeleteByProductAttributeId(productAttribute.Id, tenantId);
                        return new ActionResultResponse<string>(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
                    }
                }
            }

            //var result = await _productAttributeRepository.Inserts(listProductAttributes);
            return new ActionResultResponse<string>(1,
                _sharedResourceService.GetString(SuccessMessage.AddSuccessful, _resourceService.GetString("product value")));
        }

        public async Task<ActionResultResponse> UpdateAprrove(string tenantId, string id, ApproverStatus status)
        {
            var productInfo = await _productRepository.GetInfo(tenantId, id, false);
            if (productInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Product does not exist"));

            productInfo.Status = status;

            var result = await _productRepository.Update(productInfo);
            return new ActionResultResponse(result, result < 0 ? ErrorMessage.SomethingWentWrong : _resourceService.GetString("Update prove successfully"));
        }

        public async Task<List<ProductTranslationViewModel>> GetProductTranslationById(string tenantId, string id)
        {
            var result = await _productTranslationRepository.GetAllById(tenantId, id);
            return result;
        }

        //private async Task<ActionResultResponse<string>> SaveProductConversionUnit(string tenantId, string productId, string unitId,
        //                string conversionUnitId, string conversionUnitGroupId, decimal value)
        //{
        //    // Thêm đơn vị chuyển đổi.
        //    var productConversionUnit = new ProductConversionUnit
        //    {
        //        Value = value,
        //        UnitId = unitId,
        //        ConversionUnitId = conversionUnitId,
        //        ProductId = productId,
        //        TenantId = tenantId,
        //    };
        //    var resutlInsertConversionUnit = await _productConversionUnitRepository.Insert(productConversionUnit);
        //    if (resutlInsertConversionUnit <= 0)
        //        return new ActionResultResponse<string>(-6,
        //            _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

        //    // Thêm đơn vị vào nhóm đơn vị.
        //    var result = await _productConversionUnitGroupRepository.Insert(conversionUnitGroupId, productConversionUnit.Id);
        //    return new ActionResultResponse<string>(result, result > 0
        //        ? _sharedResourceService.GetString(SuccessMessage.AddSuccessful, _resourceService.GetString("conversion unit."))
        //        : _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
        //}
    }
}

