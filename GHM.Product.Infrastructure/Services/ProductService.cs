using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Product.Domain.IRepository;
using GHM.Product.Domain.IServices;
using GHM.Product.Domain.ModelMetas;
using GHM.Product.Domain.Models;
using GHM.Product.Domain.Resources;
using GHM.Product.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Product.Domain.Constants;
using GHM.Infrastructure.Services;
using Microsoft.Extensions.Configuration;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;
        private readonly IProductTranslationRepository _productTranslationRepository;
        private readonly IProductImageRepository _productImageRepository;
        private readonly IProductsCategorieRepository _productsCategorieRepository;
        private readonly IProductValueRepository _productValueRepository;
        private readonly IProductUnitRepository _productUnitRepository;
        private readonly IProductConversionUnitRepository _productConversionUnitRepository;
        private readonly IProductCategoriesAttributeRepository _productCategoriesAttributeRepository;
        private readonly IConfiguration _configuration;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmProductResource> _productResourceService;

        public ProductService(IProductRepository productRepository,
            IProductTranslationRepository productTranslationRepository,
            IProductImageRepository productImageRepository,
            IProductsCategorieRepository productsCategorieRepository,
            IProductValueRepository productValueRepository,
            IProductUnitRepository productUnitRepository,
            IProductConversionUnitRepository productConversionUnitRepository,
            IProductCategoriesAttributeRepository productCategoriesAttributeRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmProductResource> productResourceService,
             IConfiguration configuration
        )
        {
            _productRepository = productRepository;
            _productTranslationRepository = productTranslationRepository;
            _productImageRepository = productImageRepository;
            _productsCategorieRepository = productsCategorieRepository;
            _productValueRepository = productValueRepository;
            _productUnitRepository = productUnitRepository;
            _productConversionUnitRepository = productConversionUnitRepository;
            _productCategoriesAttributeRepository = productCategoriesAttributeRepository;
            _sharedResourceService = sharedResourceService;
            _productResourceService = productResourceService;
            _configuration = configuration;
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

        public async Task<ActionResultResponse<string>> Insert(string tenantId, string creatorId, string creatorFullName,
            string creatorAvatar, ProductMeta productMeta)
        {
            //if (productMeta.ProductListUnit == null)
            //    return new ActionResultResponse<string>(-1, _productResourceService.GetString("Please select product unit"));

            var product = new Products
            {
                Id = await GenerateId(tenantId),
                IsActive = productMeta.IsActive,
                IsManagementByLot = productMeta.IsManagementByLot,
                Thumbnail = productMeta.Thumbnail,
                IsHot = productMeta.IsHot,
                IsHomePage = productMeta.IsHomePage,
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName
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

            #region insert product unit
            if (productMeta.ProductListUnit != null)
            {
                var resultProductUnit = await InsertProductUnit(tenantId, product.Id, creatorId, creatorFullName, creatorAvatar, productMeta.ProductListUnit);
                if (resultProductUnit.Code <= 0)
                {
                    await RollbackInsert();
                    await RollbackInsertTranslation();
                    await RollbackInsertImage();
                    await RollbackInsertCategorie();
                    return resultProductUnit;
                }
            }

            #endregion
            return new ActionResultResponse<string>(1, _productResourceService.GetString("Add new product successful."),
                string.Empty, product.Id);

            #region Local functions
            async Task<ActionResultResponse<string>> InsertTranslation()
            {
                var apiUrls = _configuration.GetApiUrl();
                var productTranslations = new List<ProductTranslation>();
                var productsTags = new List<TagSubjectViewModel>();
                foreach (var productTranslation in productMeta.Translations)
                {
                    //  Check name exists.
                    var isNameExists = await _productTranslationRepository.CheckExists(product.Id, tenantId,
                        productTranslation.LanguageId, productTranslation.Name);
                    if (isNameExists)
                    {
                        await RollbackInsert();
                        return new ActionResultResponse<string>(-1,
                            _productResourceService.GetString(string.Format("Product name: {0} already exists.",
                                productTranslation.Name)));
                    }

                    var productTranslationInsert = new ProductTranslation
                    {
                        ProductId = product.Id,
                        TenantId = tenantId,
                        LanguageId = productTranslation.LanguageId.Trim(),
                        Name = productTranslation.Name.Trim(),
                        MetaTitle = productTranslation.MetaTitle?.Trim(),
                        Description = productTranslation.Description?.Trim(),
                        MetaDescription = productTranslation.MetaDescription?.Trim(),
                        MetaKeyword = productTranslation.MetaKeyword?.Trim(),
                        Content = productTranslation.Content?.Trim(),
                        SeoLink = productTranslation.SeoLink?.Trim(),
                        UnsignName = productTranslation.Name?.StripVietnameseChars().ToUpper()
                    };

                    if (!string.IsNullOrEmpty(productTranslation.SeoLink))
                    {
                        productTranslationInsert.SeoLink = productTranslation.SeoLink.ToUrlString();
                    }
                    else
                    {
                        productTranslationInsert.SeoLink = productTranslation.Name.ToUrlString();
                    }

                    var isSeolinkExists = await _productTranslationRepository.CheckSeoLinkExists(tenantId, productTranslation.LanguageId,
                        product.Id, productTranslation.SeoLink);
                    if (isSeolinkExists)
                    {
                        await RollbackInsert();
                        return new ActionResultResponse<string>(-2,
                            _productResourceService.GetString("Seo link: \"{0}\" already exists.",
                                productTranslation.SeoLink));
                    }

                    var productsTagInsert = new TagSubjectViewModel
                    {
                        TenantId = tenantId,
                        CreatorId = creatorId,
                        CreatorFullName = creatorFullName,
                        CreatorAvata = creatorAvatar,
                        Type = TagType.Product,
                        SubjectId = product.Id,
                        LanguageId = productTranslation.LanguageId.Trim(),
                        Tags = productTranslation.Tags
                    };

                    productsTags.Add(productsTagInsert);

                    productTranslations.Add(productTranslationInsert);
                }

                var resultTag = await new HttpClientService()
                  .PostAsync<ActionResultResponse>($"{apiUrls.CoreApiUrl}/tags", productsTags);

                var resultTranslation = await _productTranslationRepository.Inserts(productTranslations);
                if (resultTranslation > 0)
                    return new ActionResultResponse<string>(resultTranslation,
                        _productResourceService.GetString("Add new product translation successful."));

                await RollbackInsertTranslation();
                await RollbackInsert();

                return new ActionResultResponse<string>(-2,
                    _productResourceService.GetString("Can not insert product translation. Please contact with administrator."));
            }

            async Task<ActionResultResponse<string>> InsertImage()
            {
                var productImages = new List<ProductImage>();
                foreach (var productImage in productMeta.Images)
                {
                    //  Check name exists.
                    var isExists = await _productImageRepository.CheckExists(product.Id, productImage.Url);
                    if (isExists)
                    {
                        await RollbackInsert();
                        await RollbackInsertTranslation();
                        return new ActionResultResponse<string>(-3,
                            _productResourceService.GetString("Product images url: \"{0}\" already exists.",
                                productImage.Url));
                    }

                    var productImageInsert = new ProductImage
                    {
                        ProductId = product.Id,
                        Url = productImage.Url.Trim(),
                        Description = productImage.Description?.Trim()
                    };

                    productImages.Add(productImageInsert);

                }

                var resultImage = await _productImageRepository.Inserts(productImages);
                if (resultImage > 0)
                    return new ActionResultResponse<string>(resultImage,
                        _productResourceService.GetString("Add new product images successful."));

                await RollbackInsertImage();
                await RollbackInsertTranslation();
                await RollbackInsert();

                return new ActionResultResponse<string>(-4,
                    _productResourceService.GetString("Can not insert product images. Please contact with administrator."));
            }

            async Task<ActionResultResponse<string>> InsertCategories()
            {
                var productCategories = new List<ProductsCategorie>();
                foreach (var productCategorie in productMeta.Categories)
                {

                    var productCategorieInsert = new ProductsCategorie
                    {
                        ProductId = product.Id,
                        CategoryId = productCategorie
                    };

                    productCategories.Add(productCategorieInsert);
                }

                var resultCategorie = await _productsCategorieRepository.Inserts(productCategories);
                if (resultCategorie > 0)
                    return new ActionResultResponse<string>(resultCategorie,
                        _productResourceService.GetString("Add new product categorie successful."));

                await RollbackInsertCategorie();
                await RollbackInsertImage();
                await RollbackInsertTranslation();
                await RollbackInsert();

                return new ActionResultResponse<string>(-5,
                    _productResourceService.GetString("Can not insert product categorie. Please contact with administrator."));
            }

            async Task RollbackInsert()
            {
                await _productRepository.ForceDelete(product.Id);
            }

            async Task RollbackInsertTranslation()
            {
                await _productTranslationRepository.ForceDelete(product.Id);
            }

            async Task RollbackInsertImage()
            {
                await _productImageRepository.DeleteByProductId(product.Id);
            }

            async Task RollbackInsertCategorie()
            {
                _productsCategorieRepository.DeleteByProductId(product.Id);
            }

            #endregion Local functions
        }

        public async Task<ActionResultResponse<string>> Update(string tenantId, string lastUpdateUserId,
            string lastUpdateFullName, string lastUpdateAvatar, string productId, ProductMeta productMeta)
        {
            var apiUrls = _configuration.GetApiUrl();
            var info = await _productRepository.GetInfo(productId);
            if (info == null)
                return new ActionResultResponse<string>(-1, _productResourceService.GetString("Product does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<string>(-2,
                    _productResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != productMeta.ConcurrencyStamp)
                return new ActionResultResponse<string>(-3,
                    _productResourceService.GetString(
                        "The product already updated by other people. you are not allowed to edit the product information."));

            // them cac dieu kien check
            info.IsActive = productMeta.IsActive;
            info.IsManagementByLot = productMeta.IsManagementByLot;
            info.Thumbnail = productMeta.Thumbnail;
            info.IsHot = productMeta.IsHot;
            info.IsHomePage = productMeta.IsHomePage;
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdateTime = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _productRepository.Update(info);

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
                await _productImageRepository.DeleteByProductId(productId);
            }
            #endregion

            #region Categories.
            if (productMeta.Categories.Count > 0 && productMeta.Categories.Any())
            {
                var resultUpdateCategories = await UpdateProductsCategories();
                if (resultUpdateCategories.Code <= 0)
                    return resultUpdateCategories;
            }
            #endregion

            return new ActionResultResponse<string>(1, _productResourceService.GetString("Update product successful."),
                string.Empty, info.ConcurrencyStamp);

            async Task<ActionResultResponse<string>> UpdateTranslation()
            {
                var productTags = new List<TagSubjectViewModel>();
                foreach (var productTranslation in productMeta.Translations)
                {
                    var isNameExists = await _productTranslationRepository.CheckExists(info.Id, tenantId,
                        productTranslation.LanguageId, productTranslation.Name);
                    if (isNameExists)
                        return new ActionResultResponse<string>(-4, _productResourceService.GetString("Product name: \"{0}\" already exists."));

                    var productTranslationInfo =
                        await _productTranslationRepository.GetInfo(info.Id, productTranslation.LanguageId);
                    if (productTranslationInfo != null)
                    {
                        productTranslationInfo.Name = productTranslation.Name.Trim();
                        productTranslationInfo.Description = productTranslation.Description?.Trim();
                        productTranslationInfo.UnsignName = productTranslation.Name?.StripVietnameseChars().ToUpper();
                        productTranslationInfo.Content = productTranslation.Content?.Trim();
                        productTranslationInfo.MetaDescription = productTranslation.MetaDescription?.Trim();
                        productTranslationInfo.MetaKeyword = productTranslation.MetaKeyword?.Trim();
                        productTranslationInfo.MetaTitle = productTranslation.MetaTitle?.Trim();

                        if (!string.IsNullOrEmpty(productTranslation.SeoLink))
                        {
                            productTranslation.SeoLink = productTranslation.SeoLink.ToUrlString();
                        }
                        else
                        {
                            productTranslation.SeoLink = productTranslation.Name.ToUrlString();
                        }

                        // Check Seolink exists.
                        var isSeolinkExists = await _productTranslationRepository.CheckSeoLinkExists(tenantId, productTranslation.LanguageId,
                            info.Id, productTranslation.SeoLink);
                        if (isSeolinkExists)
                        {
                            return new ActionResultResponse<string>(-5,
                                _productResourceService.GetString("Seo link: \"{0}\" already exists.", productTranslation.SeoLink));
                        }

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
                            Description = productTranslation.Description?.Trim(),
                            Content = productTranslation.Content?.Trim(),
                            MetaTitle = productTranslation.MetaTitle?.Trim(),
                            MetaKeyword = productTranslation.MetaKeyword?.Trim(),
                            MetaDescription = productTranslation.MetaDescription?.Trim(),
                            UnsignName = productTranslation.Name.StripVietnameseChars().ToUpper()
                        };

                        if (!string.IsNullOrEmpty(productTranslation.SeoLink))
                        {
                            productTranslation.SeoLink = productTranslation.SeoLink.ToUrlString();
                        }
                        else
                        {
                            productTranslation.SeoLink = productTranslation.Name.ToUrlString();
                        }

                        // Check Seolink exists.
                        var isSeolinkExists = await _productTranslationRepository.CheckSeoLinkExists(tenantId, productTranslation.LanguageId,
                            info.Id, productTranslation.SeoLink);
                        if (isSeolinkExists)
                        {
                            return new ActionResultResponse<string>(-5,
                                _productResourceService.GetString("Seo link: \"{0}\" already exists.", productTranslation.SeoLink));
                        }

                        await _productTranslationRepository.Insert(productTranslationInsert);
                    }

                    var productTagInsert = new TagSubjectViewModel
                    {
                        TenantId = tenantId,
                        CreatorId = lastUpdateUserId,
                        CreatorFullName = lastUpdateFullName,
                        CreatorAvata = lastUpdateAvatar,
                        Type = TagType.News,
                        SubjectId = info.Id,
                        LanguageId = productTranslation.LanguageId.Trim(),
                        Tags = productTranslation.Tags
                    };

                    productTags.Add(productTagInsert);

                    var resultTag = await new HttpClientService()
                   .PostAsync<ActionResultResponse>($"{apiUrls.CoreApiUrl}/tags", productTags);
                }

                return new ActionResultResponse<string>(1,
                    _productResourceService.GetString("Update product translation successful."), string.Empty, info.ConcurrencyStamp);
            }

            async Task<ActionResultResponse<string>> UpdateProductImages()
            {
                await _productImageRepository.DeleteByProductId(productId);

                var productImages = new List<ProductImage>();
                foreach (var productImage in productMeta.Images)
                {
                    //  Check name exists.
                    var isExists = await _productImageRepository.CheckExists(productId, productImage.Url);
                    if (isExists)
                    {
                        return new ActionResultResponse<string>(-5,
                            _productResourceService.GetString("Product images url: \"{0}\" already exists.",
                                productImage.Url));
                    }

                    var productImageInsert = new ProductImage
                    {
                        ProductId = productId,
                        Url = productImage.Url.Trim(),
                        Description = productImage.Description?.Trim()
                    };

                    productImages.Add(productImageInsert);
                }

                var resultImage = await _productImageRepository.Inserts(productImages);
                if (resultImage > 0)
                    return new ActionResultResponse<string>(resultImage,
                        _productResourceService.GetString("Add new product images successful."));

                return new ActionResultResponse<string>(-6,
                    _productResourceService.GetString("Can not insert product images. Please contact with administrator."));
            }

            async Task<ActionResultResponse<string>> UpdateProductsCategories()
            {
                _productsCategorieRepository.DeleteByProductId(productId);

                var productCategories = new List<ProductsCategorie>();
                foreach (var productCategorie in productMeta.Categories)
                {
                    var productCategorieInsert = new ProductsCategorie
                    {
                        ProductId = productId,
                        CategoryId = productCategorie
                    };
                    productCategories.Add(productCategorieInsert);
                }

                var resultCategorie = await _productsCategorieRepository.Inserts(productCategories);
                if (resultCategorie > 0)
                    return new ActionResultResponse<string>(resultCategorie,
                        _productResourceService.GetString("Add new product categorie successful."));

                return new ActionResultResponse<string>(-7,
                    _productResourceService.GetString("Can not insert product categorie. Please contact with administrator."));
            }
        }

        public async Task<ActionResultResponse> Delete(string tenantId, string productId)
        {
            var info = await _productRepository.GetInfo(productId);
            if (info == null)
                return new ActionResultResponse(-1, _productResourceService.GetString("Product does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            //var isGoodsExists = await _goodsReceiptNoteDetailRepository.CheckExistsByTenantIdProductId(tenantId, productId);
            //if (isGoodsExists)
            //    return new ActionResultResponse(-2, _productResourceService.GetString("This product has been used in the goods receipt note."));

            var result = await _productRepository.Delete(productId);
            await _productTranslationRepository.Delete(productId);
            return new ActionResultResponse(result, _productResourceService.GetString("Delete product successful."));
        }

        public async Task<ActionResultResponse<ProductDetailViewModel>> GetDetail(string tenantId, string productId)
        {
            var apiUrls = _configuration.GetApiUrl();
            var info = await _productRepository.GetInfo(productId);
            if (info == null)
                return new ActionResultResponse<ProductDetailViewModel>(-1, _productResourceService.GetString("Product does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<ProductDetailViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var productTranslations = await _productTranslationRepository.GetsProductId(productId);
            var productImages = await _productImageRepository.GetsProductId(productId);
            var productCategories = await _productsCategorieRepository.GetProductCategoryNameByProductId(tenantId, productId);
            var productValues = await _productValueRepository.GetProductValueByProductId(tenantId, productId);
            var productUnits = await _productUnitRepository.GetsProductId(productId);
            var productConversionUnits = await _productConversionUnitRepository.GetsProductId(productId);

            var resultTag = await new HttpClientService()
                .GetAsync<List<SubjectTagViewModel>>($"{apiUrls.CoreApiUrl}/tags/{tenantId}/{productId}");

            var productDetail = new ProductDetailViewModel
            {
                Id = info.Id,
                ConcurrencyStamp = info.ConcurrencyStamp,
                IsActive = info.IsActive,
                IsManagementByLot = info.IsManagementByLot,
                Thumbnail = info.Thumbnail,
                IsHomePage = info.IsHomePage,
                IsHot = info.IsHot,
                Translations = productTranslations?.Select(x => new ProductTranslationViewModel
                {
                    LanguageId = x.LanguageId,
                    Name = x.Name,
                    Description = x.Description,
                    UnsignName = x.UnsignName,
                    MetaDescription = x.MetaDescription,
                    MetaKeyword = x.MetaKeyword,
                    MetaTitle = x.MetaTitle,
                    Content = x.Content,
                    SeoLink = x.SeoLink,
                    Tags = resultTag?.Where(t => t.LanguageId == x.LanguageId).ToList()
                }).ToList(),

                Images = productImages?.Select(x => new ProductImageViewModel
                {
                    Url = x.Url,
                    Description = x.Description
                }).ToList(),

                Categories = productCategories,

                Values = productValues,

                Units = productUnits?.Select(x => new ProductUnitViewModel
                {
                    Id = x.Id,
                    UnitId = x.UnitId,
                    SalePrice = x.SalePrice,
                    IsDefault = x.IsDefault
                }).ToList(),

                ConversionUnits = productConversionUnits?.Select(x => new ProductConversionUnitViewModel
                {
                    ProductUnitId = x.ProductUnitId,
                    ProductUnitConversionId = x.ProductUnitConversionId,
                    Value = x.Value
                }).ToList()

            };
            return new ActionResultResponse<ProductDetailViewModel>
            {
                Code = 1,
                Data = productDetail
            };
        }

        public async Task<SearchResult<ProductUnitViewModel>> GetProductUnitByProductId(string tenantId, string productId)
        {
            var productUnits = await _productUnitRepository.GetsProductId(productId);
            return new SearchResult<ProductUnitViewModel>
            {
                Items = productUnits?.Select(x => new ProductUnitViewModel
                {
                    Id = x.Id,
                    UnitId = x.UnitId,
                    SalePrice = x.SalePrice,
                    IsDefault = x.IsDefault
                }).ToList(),
            };
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
            var info = await _productRepository.GetInfo(productId);
            if (info == null)
                return new ActionResultResponse(-1, _productResourceService.GetString("Product does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _productResourceService.GetString(ErrorMessage.NotHavePermission));
            info.IsActive = isActive;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _productRepository.Update(info);
            return new ActionResultResponse(1, _productResourceService.GetString("Update active status successful."));
        }

        public async Task<ActionResultResponse> UpdateIsManagementByLot(string tenantId, string lastUpdateUserId, string lastUpdateFullName,
            string lastUpdateAvatar, string productId, bool isManagementByLot)
        {
            var info = await _productRepository.GetInfo(productId);
            if (info == null)
                return new ActionResultResponse(-1, _productResourceService.GetString("Product does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _productResourceService.GetString(ErrorMessage.NotHavePermission));
            info.IsManagementByLot = isManagementByLot;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _productRepository.Update(info);
            return new ActionResultResponse(1, _productResourceService.GetString("Update is management by lot status successful."));
        }

        public async Task<ActionResultResponse<string>> InsertProductValue(string tenantId, string productId, string creatorId, string creatorFullName,
            string creatorAvatar, ProductValueMeta productValueMeta)
        {
            var isProductExists = await _productRepository.CheckExists(productId, tenantId);
            if (!isProductExists)
                return new ActionResultResponse<string>(-1, _productResourceService.GetString("Product does not exists."));

            var productValueId = Guid.NewGuid().ToString();
            var productValue = new ProductValue
            {
                Id = productValueId,
                ProductId = productId,
                ProductAttributeId = productValueMeta.ProductAttributeId,
                ProductAttributeValueId = productValueMeta.ProductAttributeValueId,
                Value = productValueMeta.Value,
                IsShowClient = productValueMeta.IsShowClient,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName
            };

            var result = await _productValueRepository.Insert(productValue);

            if (result <= 0)
                return new ActionResultResponse<string>(result,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse<string>(1, _productResourceService.GetString("Add new product value successful."),
                string.Empty, productValueId);
        }

        public async Task<ActionResultResponse<string>> UpdateProductValue(string tenantId, string productId, string lastUpdateUserId, string lastUpdateFullName,
            string lastUpdateAvatar, string productValueId, ProductValueMeta productValueMeta)
        {
            var isProductExists = await _productRepository.CheckExists(productId, tenantId);
            if (!isProductExists)
                return new ActionResultResponse<string>(-1, _productResourceService.GetString("Product does not exists."));

            var info = await _productValueRepository.GetInfo(productValueId);
            if (info == null)
                return new ActionResultResponse<string>(-3, _productResourceService.GetString("Product value does not exists."));

            if (info.ProductId != productId)
                return new ActionResultResponse<string>(-4,
                    _productResourceService.GetString(ErrorMessage.NotHavePermission));

            info.ProductAttributeId = productValueMeta.ProductAttributeId;
            info.ProductAttributeValueId = productValueMeta.ProductAttributeValueId;
            info.Value = productValueMeta.Value;
            info.IsShowClient = productValueMeta.IsShowClient;
            info.LastUpdateTime = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;

            await _productValueRepository.Update(info);

            return new ActionResultResponse<string>(1, _productResourceService.GetString("Update product value successful."),
                string.Empty, info.Id);
        }

        public async Task<ActionResultResponse> DeleteProductValue(string tenantId, string productId, string productValueId)
        {
            var isProductExists = await _productRepository.CheckExists(productId, tenantId);
            if (!isProductExists)
                return new ActionResultResponse(-1, _productResourceService.GetString("Product does not exists."));

            var info = await _productValueRepository.GetInfo(productValueId);
            if (info == null)
                return new ActionResultResponse(-2, _productResourceService.GetString("Product value does not exists."));

            if (info.ProductId != productId)
                return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            // bo sung dieu kien check xoa
            var result = await _productValueRepository.Delete(productValueId);
            return new ActionResultResponse(result, _productResourceService.GetString("Delete product value successful."));
        }

        public async Task<ActionResultResponse> DeleteProductValueByAttributeId(string tenantId, string productId, string productAttributeId)
        {
            var isProductExists = await _productRepository.CheckExists(productId, tenantId);
            if (!isProductExists)
                return new ActionResultResponse(-1, _productResourceService.GetString("Product does not exists."));

            var result = await _productValueRepository.DeleteByAttributeId(tenantId, productId, productAttributeId);
            return new ActionResultResponse(result, _productResourceService.GetString("Delete product value successful."));
        }

        public async Task<List<ActionResultResponse<string>>> InsertListProductValue(string tenantId, string productId, string creatorId, string creatorFullName,
            string creatorAvatar, List<ProductValueMeta> listProductValueMeta)
        {
            var listResult = new List<ActionResultResponse<string>>();
            foreach (var productValue in listProductValueMeta)
            {
                var result = await InsertProductValue(tenantId, productId, creatorId, creatorFullName, creatorAvatar,
                    productValue);
                listResult.Add(result);
            }
            return listResult;
        }

        public async Task<ActionResultResponse<string>> InsertProductUnit(string tenantId, string productId, string creatorId, string creatorFullName,
            string creatorAvatar, ProductListUnitMeta productListUnitMeta)
        {
            var isProductExists = await _productRepository.CheckExists(productId, tenantId);
            if (!isProductExists)
                return new ActionResultResponse<string>(-1, _productResourceService.GetString("Product does not exists."));

            var productUnitGroupId = Guid.NewGuid().ToString();
            var productUnits = new List<ProductUnit>();

            #region insert Unit.
            if (productListUnitMeta.ListUnit.Count > 0 && productListUnitMeta.ListUnit.Any())
            {
                var resultInsertUnit = await InsertUnit();
                if (resultInsertUnit.Code <= 0)
                    return resultInsertUnit;
            }
            #endregion

            #region insert Unit.
            if (productListUnitMeta.ListConversionUnit.Count > 0 && productListUnitMeta.ListConversionUnit.Any() && productUnits.Any())
            {
                var resultInsertConversionUnit = await InsertProductConversionUnit();
                if (resultInsertConversionUnit.Code <= 0)
                    return resultInsertConversionUnit;
            }
            #endregion

            return new ActionResultResponse<string>(1, _productResourceService.GetString("Add new product unit successful."),
                string.Empty, productUnitGroupId);

            async Task<ActionResultResponse<string>> InsertUnit()
            {
                foreach (var productUnit in productListUnitMeta.ListUnit)
                {
                    var productUnitInsert = new ProductUnit
                    {
                        Id = Guid.NewGuid().ToString(),
                        ProductId = productId,
                        UnitId = productUnit.UnitId,
                        IsDefault = productUnit.IsDefault,
                        SalePrice = productUnit.SalePrice,
                        ProductUnitGroupId = productUnitGroupId,
                        CreatorId = creatorId,
                        CreatorFullName = creatorFullName
                    };

                    productUnits.Add(productUnitInsert);
                }

                var resultUnit = await _productUnitRepository.Inserts(productUnits);
                if (resultUnit > 0)
                    return new ActionResultResponse<string>(resultUnit,
                        _productResourceService.GetString("Add new product unit successful."));

                return new ActionResultResponse<string>(-2,
                    _productResourceService.GetString("Can not insert product unit. Please contact with administrator."));
            }

            async Task<ActionResultResponse<string>> InsertProductConversionUnit()
            {
                var productConversionUnits = new List<ProductConversionUnit>();
                foreach (var productConversionUnit in productListUnitMeta.ListConversionUnit)
                {

                    var productConversionUnitInsert = new ProductConversionUnit
                    {
                        ProductUnitId = productUnits?.Where(x => x.UnitId == productConversionUnit.UnitId).Select(x => x.Id).SingleOrDefault(),
                        ProductUnitConversionId = productUnits?.Where(x => x.UnitId == productConversionUnit.UnitConversionId).Select(x => x.Id).SingleOrDefault(),
                        Value = productConversionUnit.Value
                    };

                    productConversionUnits.Add(productConversionUnitInsert);
                }

                var resultConversionUnit = await _productConversionUnitRepository.Inserts(productConversionUnits);
                if (resultConversionUnit > 0)
                    return new ActionResultResponse<string>(resultConversionUnit,
                        _productResourceService.GetString("Add new product conversion unit successful."));

                return new ActionResultResponse<string>(-2,
                    _productResourceService.GetString("Can not insert product conversion unit. Please contact with administrator."));
            }
        }


        public async Task<ActionResultResponse<string>> UpdateProductUnit(string tenantId, string productId, string creatorId, string creatorFullName,
            string creatorAvatar, string productUnitId, ProductListUnitMeta productListUnitMeta)
        {
            var isProductExists = await _productRepository.CheckExists(productId, tenantId);
            if (!isProductExists)
                return new ActionResultResponse<string>(-1, _productResourceService.GetString("Product does not exists."));

            var productUnitGroupId = Guid.NewGuid().ToString();
            var info = await _productUnitRepository.GetInfo(productUnitId);
            if (info == null)
                return new ActionResultResponse<string>(-3, _productResourceService.GetString("Product unit does not exists."));

            if (info.ProductId != productId)
                return new ActionResultResponse<string>(-4,
                    _productResourceService.GetString(ErrorMessage.NotHavePermission));

            //update het ProductUnits ProductUnitGroupId thanh co ToDate
            await _productUnitRepository.UpdateToDateByProductUnitGroupId(info.ProductUnitGroupId);

            var productUnits = new List<ProductUnit>();

            #region insert Unit.
            if (productListUnitMeta.ListUnit != null && productListUnitMeta.ListUnit.Count > 0 && productListUnitMeta.ListUnit.Any())
            {
                var resultInsertUnit = await InsertUnit();
                if (resultInsertUnit.Code <= 0)
                    return resultInsertUnit;
            }
            #endregion

            #region insert Unit.
            if (productListUnitMeta.ListConversionUnit != null && productListUnitMeta.ListConversionUnit.Count > 0
                && productListUnitMeta.ListConversionUnit.Any() && productUnits.Any())
            {
                var resultInsertConversionUnit = await InsertProductConversionUnit();
                if (resultInsertConversionUnit.Code <= 0)
                    return resultInsertConversionUnit;
            }
            #endregion

            return new ActionResultResponse<string>(1, _productResourceService.GetString("Add new product unit successful."),
                string.Empty, productUnitGroupId);

            async Task<ActionResultResponse<string>> InsertUnit()
            {
                foreach (var productUnit in productListUnitMeta.ListUnit)
                {
                    var productUnitInsert = new ProductUnit
                    {
                        Id = Guid.NewGuid().ToString(),
                        ProductId = productId,
                        UnitId = productUnit.UnitId,
                        IsDefault = productUnit.IsDefault,
                        SalePrice = productUnit.SalePrice,
                        ProductUnitGroupId = productUnitGroupId,
                        CreatorId = creatorId,
                        CreatorFullName = creatorFullName
                    };

                    productUnits.Add(productUnitInsert);
                }

                var resultUnit = await _productUnitRepository.Inserts(productUnits);
                if (resultUnit > 0)
                    return new ActionResultResponse<string>(resultUnit,
                        _productResourceService.GetString("Add new product unit successful."));

                return new ActionResultResponse<string>(-2,
                    _productResourceService.GetString("Can not insert product unit. Please contact with administrator."));
            }

            async Task<ActionResultResponse<string>> InsertProductConversionUnit()
            {
                var productConversionUnits = new List<ProductConversionUnit>();
                foreach (var productConversionUnit in productListUnitMeta.ListConversionUnit)
                {
                    var productConversionUnitInsert = new ProductConversionUnit
                    {
                        ProductUnitId = productUnits?.Where(x => x.UnitId == productConversionUnit.UnitId).Select(x => x.Id).SingleOrDefault(),
                        ProductUnitConversionId = productUnits?.Where(x => x.UnitId == productConversionUnit.UnitConversionId).Select(x => x.Id).SingleOrDefault(),
                        Value = productConversionUnit.Value
                    };

                    productConversionUnits.Add(productConversionUnitInsert);
                }

                var resultConversionUnit = await _productConversionUnitRepository.Inserts(productConversionUnits);
                if (resultConversionUnit > 0)
                    return new ActionResultResponse<string>(resultConversionUnit,
                        _productResourceService.GetString("Add new product conversion unit successful."));

                return new ActionResultResponse<string>(-2,
                    _productResourceService.GetString("Can not insert product conversion unit. Please contact with administrator."));
            }
        }

        public async Task<ActionResultResponse> DeleteProductUnit(string tenantId, string productId, string productUnitId)
        {
            var isProductExists = await _productRepository.CheckExists(productId, tenantId);
            if (!isProductExists)
                return new ActionResultResponse(-1, _productResourceService.GetString("Product does not exists."));

            var info = await _productUnitRepository.GetInfo(productUnitId);
            if (info == null)
                return new ActionResultResponse(-2, _productResourceService.GetString("Product unit does not exists."));

            if (info.ProductId != productId)
                return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            // bo sung dieu kien check xoa
            //check dieu kien conver

            var result = await _productUnitRepository.Delete(productUnitId);
            return new ActionResultResponse(result, _productResourceService.GetString("Delete product unit successful."));
        }

        public async Task<SearchResult<ProductCategoriesAttributeViewModel>> GetProductCategoryAttributeByProductId(string tenantId, string languageId, string productId)
        {
            var listProductCategory = await _productsCategorieRepository.GetByProductId(productId);
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

        public async Task<ActionResultResponse> ChangeProductIsHot(string tenantId, string productId, bool isHot)
        {
            var info = await _productRepository.GetInfo(tenantId, productId);
            if (info == null)
                return new ActionResultResponse(-1, _productResourceService.GetString("Products does not exists."));

            info.IsHot = isHot;
            var result = await _productRepository.Update(info);

            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse(result, _productResourceService.GetString("Update status news successful."));
        }

        public async Task<ActionResultResponse> ChangeProductIsHomePage(string tenantId, string productId, bool isHomePage)
        {
            var info = await _productRepository.GetInfo(tenantId, productId);
            if (info == null)
                return new ActionResultResponse(-1, _productResourceService.GetString("News does not exists."));

            info.IsHomePage = isHomePage;
            var result = await _productRepository.Update(info);

            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse(result, _productResourceService.GetString("Update status news successful."));
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
    }
}
