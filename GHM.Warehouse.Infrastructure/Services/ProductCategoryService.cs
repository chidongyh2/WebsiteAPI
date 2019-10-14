using GHM.Infrastructure.Constants;
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
using System.Threading.Tasks;

namespace GHM.Warehouse.Infrastructure.Services
{
    public class ProductCategoryService : IProductCategoryService
    {
        private readonly IProductCategoryRepository _productCategoryRepository;
        private readonly IProductCategoryTranslationRepository _productCategoryTranslationRepository;
        private readonly IProductCategoriesAttributeRepository _productCategoriesAttributeRepository;
        private readonly IAttributeRepository _attributeRepository;
        private readonly IProductsCategorieRepository _productsCategorieRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWarehouseResource> _productResourceService;

        public ProductCategoryService(IProductCategoryRepository productCategoryRepository, IProductCategoryTranslationRepository productCategoryTranslationRepository,
            IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWarehouseResource> productResourceService,
            IProductCategoriesAttributeRepository productCategoriesAttributeRepository, IAttributeRepository attributeRepository,
            IProductsCategorieRepository productsCategorieRepository)
        {
            _productCategoryRepository = productCategoryRepository;
            _productCategoryTranslationRepository = productCategoryTranslationRepository;
            _sharedResourceService = sharedResourceService;
            _productResourceService = productResourceService;
            _productCategoriesAttributeRepository = productCategoriesAttributeRepository;
            _attributeRepository = attributeRepository;
            _productsCategorieRepository = productsCategorieRepository;
        }

        public async Task<ActionResultResponse> Delete(string tenantId, int productCategoryId)
        {
            var productCategoryInfo = await _productCategoryRepository.GetInfo(productCategoryId);
            if (productCategoryInfo == null)
                return new ActionResultResponse(-1, _productResourceService.GetString("Product category does not exists. Please try again."));

            if (productCategoryInfo.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            // Check is has child.
            var productCategoryChildCount = await _productCategoryRepository.GetChildCount(productCategoryInfo.Id);
            if (productCategoryChildCount > 0)
                return new ActionResultResponse(-3,
                    _productResourceService.GetString("This Product category has children product category. You can not delete this Product category."));

            // Check is has product.
            var isExistsProduct = await _productsCategorieRepository.CheckCategoryHasProduct(productCategoryId);
            if (isExistsProduct)
                return new ActionResultResponse(-4,
                  _productResourceService.GetString("This Product category has product. You can not delete this Product category."));

            //Check in ProductsCategories -- if exists return message
            var result = await _productCategoryRepository.Delete(productCategoryInfo.Id);
            if (result > 0 && productCategoryInfo.ParentId.HasValue)
            {
                //Update parent product category child count.
                var childCount = await _productCategoryRepository.GetChildCount(productCategoryInfo.ParentId.Value);
                await _productCategoryRepository.UpdateChildCount(productCategoryInfo.ParentId.Value, childCount);
            }

            var childTrans = await _productCategoryTranslationRepository.GetAllByProductCategoryId(productCategoryInfo.Id);

            foreach (ProductCategoryTranslation childTran in childTrans)
            {
                childTran.IsDelete = productCategoryInfo.IsDelete;
                await _productCategoryTranslationRepository.Update(childTran);
            }

            return new ActionResultResponse(result, result > 0
                ? _productResourceService.GetString("Delete product category successful.")
                : _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
        }

        public async Task<ActionResultResponse<ProductCategoryDetailViewModel>> GetDetail(string tenantId, string languageId, int id)
        {
            var productCategoryInfo = await _productCategoryRepository.GetInfo(id, true);
            if (productCategoryInfo == null)
                return new ActionResultResponse<ProductCategoryDetailViewModel>(-1,
                    _productResourceService.GetString("Product category does not exists."));

            if (productCategoryInfo.TenantId != tenantId)
                return new ActionResultResponse<ProductCategoryDetailViewModel>(-2,
                    _productResourceService.GetString(ErrorMessage.SomethingWentWrong));

            var productCategoryDetail = new ProductCategoryDetailViewModel
            {
                IsActive = productCategoryInfo.IsActive,
                IsHomePage = productCategoryInfo.IsHomePage,
                Image = productCategoryInfo.Image,
                IsHot = productCategoryInfo.IsHot,
                IsSolution = productCategoryInfo.IsSolution,
                ParentId = productCategoryInfo.ParentId,
                Order = productCategoryInfo.Order,
                ConcurrencyStamp = productCategoryInfo.ConcurrencyStamp,
                ChildCount = productCategoryInfo.ChildCount,
                Translations = await _productCategoryTranslationRepository.GetsByProductCategoryId(productCategoryInfo.Id),
                ProductCategoryAttributes = await _productCategoriesAttributeRepository.GetDetailAttributeValues(tenantId, languageId, productCategoryInfo.Id)
            };

            return new ActionResultResponse<ProductCategoryDetailViewModel>
            {
                Code = 1,
                Data = productCategoryDetail
            };
        }

        public async Task<List<TreeData>> GetFullProductCategoryTree(string tenantId, string languageId)
        {
            var infoProductCategorys = await _productCategoryRepository.GetAllActivatedProductCategory(tenantId, languageId);
            if (infoProductCategorys == null || !infoProductCategorys.Any())
                return null;

            return RenderTree(infoProductCategorys, null);

            List<TreeData> RenderTree(List<ProductCategorySearchViewModel> productCategorys, int? parentId)
            {
                var tree = new List<TreeData>();
                var parents = infoProductCategorys.Where(x => x.ParentId == parentId).ToList();
                if (parents.Any())
                {
                    parents.ForEach(parent =>
                    {
                        var treeData = new TreeData
                        {
                            Id = parent.Id,
                            Text = parent.Name,
                            ParentId = parent.ParentId,
                            IdPath = parent.IdPath,
                            Data = parent,
                            ChildCount = parent.ChildCount,
                            Icon = string.Empty,
                            State = new GHM.Infrastructure.Models.State(),
                            Children =  RenderTree(parents, parent.Id)
                        };
                        tree.Add(treeData);
                    });
                }
                return tree;
            }
        }

        public async Task<SearchResult<ProductCategoryForSelectViewModel>> GetProductCategoryForSelect(string tenantId, string languageId,
            string keyword, int page, int pageSize)
        {
            return new SearchResult<ProductCategoryForSelectViewModel>
            {
                Items = await _productCategoryRepository.GetAllProductCategoryForSelect(tenantId, languageId, keyword, page, pageSize, out var totalRows)
            };
        }

        public async Task<List<ProductCategorySearchViewModel>> GetsAll(string tenantId, string languageId)
        {
            return await _productCategoryRepository.GetAllActivatedProductCategory(tenantId, languageId);
        }

        public async Task<ActionResultResponse<int>> Insert(string tenantId, string creatorId,
            string creatorFullName, ProductCategoryMeta productCategoryMeta)
        {
            var productCategory = new ProductCategory
            {
                IdPath = "-1",
                IsActive = productCategoryMeta.IsActive,
                IsHot = productCategoryMeta.IsHot,
                IsHomePage = productCategoryMeta.IsHomePage,
                Order = productCategoryMeta.Order,
                TenantId = tenantId,
                Image = productCategoryMeta.Image,
                OrderPath = productCategoryMeta.Order.ToString(),
                CreatorId = creatorId,
                CreatorFullName = creatorFullName,
                ConcurrencyStamp = Guid.NewGuid().ToString(),
                IsSolution = productCategoryMeta.IsSolution
            };

            if (productCategoryMeta.ParentId.HasValue)
            {
                var parentInfo = await _productCategoryRepository.GetInfo(productCategoryMeta.ParentId.Value);
                if (parentInfo == null)
                    return new ActionResultResponse<int>(-2,
                        _productResourceService.GetString("Parent product category does not exists. Please try again."));                
                productCategory.ParentId = parentInfo.Id;
                productCategory.IdPath = $"{parentInfo.IdPath}.-1";
            }

            var result = await _productCategoryRepository.Insert(productCategory);
            if (result <= 0)
                return new ActionResultResponse<int>(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            #region Update current product category idPath.
            productCategory.IdPath = productCategory.IdPath.Replace("-1", productCategory.Id.ToString());
            await _productCategoryRepository.UpdateProductCategoryIdPath(productCategory.Id, productCategory.IdPath);
            #endregion

            #region Update parent product category child count.
            if (productCategory.ParentId.HasValue)
            {
                var childCount = await _productCategoryRepository.GetChildCount(productCategory.ParentId.Value);
                await _productCategoryRepository.UpdateChildCount(productCategory.ParentId.Value, childCount);
            }
            #endregion

            #region Insert product category translation.
            var productCategoryTranslations = new List<ProductCategoryTranslation>();
            foreach (var productCategoryTranslationMeta in productCategoryMeta.Translations)
            {
                // check name exists.
                var isNameExists = await _productCategoryTranslationRepository.CheckExistsByName(productCategory.Id, productCategory.TenantId,
                                                                productCategoryTranslationMeta.LanguageId, productCategoryTranslationMeta.Name);
                if (isNameExists)
                {
                    await RollbackInsert();
                    return new ActionResultResponse<int>(-3,
                        _productResourceService.GetString("Procuct category name: \"{0}\" already taken by another procuct category. Please try again.",
                        productCategoryTranslationMeta.Name));
                }

                var productCategoryTranslation = new ProductCategoryTranslation
                {
                    Name = productCategoryTranslationMeta.Name.Trim(),
                    SeoLink = !string.IsNullOrEmpty(productCategoryTranslationMeta.SeoLink) ? productCategoryTranslationMeta.SeoLink.ToUrlString() : productCategoryTranslationMeta.Name.ToUrlString(),
                    Description = productCategoryTranslationMeta.Description?.Trim(),
                    UnsignName = productCategoryTranslationMeta.Name.Trim().StripVietnameseChars().ToUpper(),
                    LanguageId = productCategoryTranslationMeta.LanguageId,
                    ProductCategoryId = productCategory.Id,
                    TenantId = productCategory.TenantId,
                };
                if (productCategoryMeta.ParentId.HasValue)
                {
                    var parentName = await _productCategoryTranslationRepository.GetProductCategoryName(productCategoryMeta.ParentId.Value, productCategoryTranslationMeta.LanguageId);
                    if (!string.IsNullOrEmpty(parentName))
                    {
                        productCategoryTranslation.ParentName = parentName;
                    }
                }
                productCategoryTranslations.Add(productCategoryTranslation);
            }

            var resultInsertTranslation = await _productCategoryTranslationRepository.Inserts(productCategoryTranslations);
            if (resultInsertTranslation <= 0)
            {
                await RollbackInsert();
                return new ActionResultResponse<int>(resultInsertTranslation,
                    _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
            }

            // Insert product category attribute
            if (productCategoryMeta.ProductCategoryAttributes != null && productCategoryMeta.ProductCategoryAttributes.Any())
            {
                var listProductCategoriesAttributes = new List<ProductCategoriesAttribute>();

                foreach (var item in productCategoryMeta.ProductCategoryAttributes)
                {
                    var isExistsAttribute = await _attributeRepository.CheckExists(item.AttributeId, tenantId);
                    if (!isExistsAttribute)
                        return new ActionResultResponse<int>(-1, _productResourceService.GetString("Attribute not exists"));

                    if (!(await _productCategoriesAttributeRepository.CheckExistsById(item.CategoryId, item.AttributeId)))
                    {
                        listProductCategoriesAttributes.Add(new ProductCategoriesAttribute()
                        {
                            CategoryId = productCategory.Id,
                            AttributeId = item.AttributeId,
                        });
                    }
                }

                var resultInsertProductCategoryAttribute = await _productCategoriesAttributeRepository.Inserts(listProductCategoriesAttributes);
                if (result <= 0)
                {
                    await RollbackInsert();
                    return new ActionResultResponse<int>(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));
                }
            }
            #endregion

            return new ActionResultResponse<int>(result, _productResourceService.GetString("Add new product category successful."), string.Empty, productCategory.Id);

            async Task RollbackInsert()
            {
                await _productCategoryRepository.ForceDelete(productCategory.Id);
            }
        }

        public async Task<SearchResult<ProductCategorySearchViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize)
        {
            var items = await _productCategoryRepository.Search(tenantId, languageId, keyword, isActive, page, pageSize,
                out var totalRows);
            return new SearchResult<ProductCategorySearchViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<SearchResult<ProductCategorySearchViewModel>> SearchTree(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize)
        {
            var items = await _productCategoryRepository.Search(tenantId, languageId, keyword, isActive, page, pageSize, out var totalRows);
            return new SearchResult<ProductCategorySearchViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<ActionResultResponse> Update(string tenantId, string lastUpdateUserId, string lastUpdateFullName, int productCategoryId, ProductCategoryMeta productCategoryMeta)
        {
            var productCategoryInfo = await _productCategoryRepository.GetInfo(productCategoryId);
            if (productCategoryInfo == null)
                return new ActionResultResponse(-2, _productResourceService.GetString("Product category info does not exists. Please try again."));

            if (productCategoryInfo.TenantId != tenantId)
                return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (productCategoryInfo.ConcurrencyStamp != productCategoryMeta.ConcurrencyStamp)
                return new ActionResultResponse(-4,
                    _sharedResourceService.GetString("The product category already updated by other people. You can not update this product category."));

            if (productCategoryMeta.ParentId.HasValue && productCategoryInfo.Id == productCategoryMeta.ParentId.Value)
                return new ActionResultResponse(-5, _productResourceService.GetString("Product Category and parent product category can not be the same."));

            var oldParentId = productCategoryInfo.ParentId;
            var oldIdPath = productCategoryInfo.IdPath;

            productCategoryInfo.IsActive = productCategoryMeta.IsActive;
            productCategoryInfo.IsHomePage = productCategoryMeta.IsHomePage;
            productCategoryInfo.Image = productCategoryMeta.Image;
            productCategoryInfo.IsHot = productCategoryMeta.IsHot;
            productCategoryInfo.IsSolution = productCategoryMeta.IsSolution;
            productCategoryInfo.Order = productCategoryMeta.Order;
            productCategoryInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            productCategoryInfo.LastUpdate = DateTime.Now;
            productCategoryInfo.LastUpdateUserId = lastUpdateUserId;
            productCategoryInfo.LastUpdateFullName = lastUpdateFullName;

            if (productCategoryInfo.ParentId.HasValue && !productCategoryMeta.ParentId.HasValue)
            {
                productCategoryInfo.ParentId = null;
                productCategoryInfo.IdPath = productCategoryInfo.Id.ToString();
                productCategoryInfo.OrderPath = productCategoryInfo.Order.ToString();
            }
            else if (productCategoryMeta.ParentId.HasValue && productCategoryMeta.ParentId != productCategoryInfo.ParentId)
            {
                var parentInfo = await _productCategoryRepository.GetInfo(productCategoryMeta.ParentId.Value);
                if (parentInfo == null)
                    return new ActionResultResponse(-6, _productResourceService.GetString("Parent product category does not exists. Please try again."));

                productCategoryInfo.IdPath = $"{parentInfo.IdPath}.{productCategoryInfo.Id}";
                productCategoryInfo.ParentId = parentInfo.Id;
                productCategoryInfo.OrderPath = $"{parentInfo.OrderPath}.{productCategoryInfo.Order}";
            }

            await _productCategoryRepository.Update(productCategoryInfo);
            var childs = await _productCategoryRepository.GetAllChild(productCategoryInfo.Id, true);

            if (!productCategoryInfo.IsActive)
            {
                foreach (ProductCategory child in childs)
                {
                    child.IsActive = productCategoryInfo.IsActive;
                    await _productCategoryRepository.Update(child);
                }
            }

            // Update children IdPath and RootInfo
            if (productCategoryInfo.IdPath != oldIdPath)
            {
                await _productCategoryRepository.UpdateChildrenIdPath(oldIdPath, productCategoryInfo.IdPath);
            }

            // Update parent product category child count.
            if (oldParentId.HasValue)
            {
                // Update old parent product category child count.
                var oldChildCount = await _productCategoryRepository.GetChildCount(oldParentId.Value);
                await _productCategoryRepository.UpdateChildCount(oldParentId.Value, oldChildCount);
            }

            // Update new parent product category child count.
            if (productCategoryInfo.ParentId.HasValue && productCategoryInfo.ParentId != oldParentId)
            {
                var newParentId = productCategoryInfo.ParentId.Value;
                var newChildCount = await _productCategoryRepository.GetChildCount(newParentId);
                await _productCategoryRepository.UpdateChildCount(newParentId, newChildCount);
            }

            //update lai product category child by Id
            var childCountid = await _productCategoryRepository.GetChildCount(productCategoryInfo.Id);
            await _productCategoryRepository.UpdateChildCount(productCategoryInfo.Id, childCountid);

            // Update product category name translation in product category translation.
            //if (productCategoryMeta.ProductCategoryTranslations.Any())
            //    await UpdateSurveyTranslations();

            // Update product category translation.
            var resultUpdateTranslation = await UpdateTranslation();

            if (productCategoryMeta.ProductCategoryAttributes != null && productCategoryMeta.ProductCategoryAttributes.Any())
            {
                await UpdateProductCategoryAttribute();
            }

            return new ActionResultResponse(resultUpdateTranslation.Code <= 0
                ? resultUpdateTranslation.Code
                : 1,
                resultUpdateTranslation.Code <= 0
                ? resultUpdateTranslation.Message
                : _productResourceService.GetString("Update product category successful."));

            async Task<ActionResultResponse> UpdateTranslation()
            {
                foreach (var productCategoryTranslationMeta in productCategoryMeta.Translations)
                {
                    // check name exists.
                    var isNameExists = await _productCategoryTranslationRepository.CheckExistsByName(productCategoryInfo.Id, productCategoryInfo.TenantId,
                        productCategoryTranslationMeta.LanguageId, productCategoryTranslationMeta.Name);
                    if (isNameExists)
                    {
                        return new ActionResultResponse(-6,
                            _productResourceService.GetString("Survey group name: \"{0}\" already taken by another survey group. Please try again.",
                            productCategoryTranslationMeta.Name));
                    }

                    var productCategoryTranslationInfo =
                        await _productCategoryTranslationRepository.GetInfo(productCategoryInfo.Id, productCategoryTranslationMeta.LanguageId);
                    if (productCategoryTranslationInfo == null)
                    {
                        productCategoryTranslationInfo = new ProductCategoryTranslation
                        {
                            Name = productCategoryTranslationMeta.Name.Trim(),
                            SeoLink = !string.IsNullOrEmpty(productCategoryTranslationMeta.SeoLink) ? productCategoryTranslationMeta.SeoLink.ToUrlString() : productCategoryTranslationMeta.Name.ToUrlString(),
                            Description = productCategoryTranslationMeta.Description?.Trim(),
                            UnsignName = productCategoryTranslationMeta.Name.Trim().StripVietnameseChars().ToUpper(),
                            LanguageId = productCategoryTranslationMeta.LanguageId,
                            ProductCategoryId = productCategoryInfo.Id,
                        };

                        if (productCategoryMeta.ParentId.HasValue)
                        {
                            var parentName = await _productCategoryTranslationRepository.GetProductCategoryName(productCategoryMeta.ParentId.Value,
                                                                                 productCategoryTranslationMeta.LanguageId);
                            if (!string.IsNullOrEmpty(parentName))
                            {
                                productCategoryTranslationInfo.ParentName = parentName;
                            }
                        }

                        await _productCategoryTranslationRepository.Insert(productCategoryTranslationInfo);
                    }
                    else
                    {
                        productCategoryTranslationInfo.SeoLink = productCategoryTranslationMeta?.SeoLink.Trim();
                        productCategoryTranslationInfo.Name = productCategoryTranslationMeta.Name.Trim();
                        productCategoryTranslationInfo.Description = productCategoryTranslationMeta.Description?.Trim();
                        productCategoryTranslationInfo.UnsignName = productCategoryTranslationMeta.Name.StripVietnameseChars().ToUpper();
                        productCategoryTranslationInfo.SeoLink = !string.IsNullOrEmpty(productCategoryTranslationMeta.SeoLink) ? productCategoryTranslationMeta.SeoLink.ToUrlString() : productCategoryTranslationMeta.Name.ToUrlString();

                        if (productCategoryMeta.ParentId.HasValue)
                        {
                            var parentName = await _productCategoryTranslationRepository.GetProductCategoryName(productCategoryMeta.ParentId.Value,
                                                             productCategoryTranslationMeta.LanguageId);
                            if (!string.IsNullOrEmpty(parentName))
                            {
                                productCategoryTranslationInfo.ParentName = parentName;
                            }
                        }

                        await _productCategoryTranslationRepository.Update(productCategoryTranslationInfo);
                    }
                }

                return new ActionResultResponse(1,
                    _productResourceService.GetString("Update product category successful."));
            }

            async Task<ActionResultResponse> UpdateProductCategoryAttribute()
            {
                var resultDeleteProductCategoryAttribute = await _productCategoriesAttributeRepository.DeleteByCategoryId(tenantId, productCategoryId);
                if (resultDeleteProductCategoryAttribute < 0)
                    return new ActionResultResponse<int>(resultDeleteProductCategoryAttribute,
                        _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

                var listProductCategoriesAttributes = new List<ProductCategoriesAttribute>();

                foreach (var item in productCategoryMeta.ProductCategoryAttributes)
                {
                    var isExistsProductAttribute = await _attributeRepository.CheckExists(item.AttributeId, tenantId);
                    if (!isExistsProductAttribute)
                        return new ActionResultResponse<int>(-1, _productResourceService.GetString("Attribute not exists"));

                    var isExistsAttribute = await _productCategoriesAttributeRepository.CheckExistsById(item.CategoryId, item.AttributeId);
                    if (!isExistsAttribute)
                    {
                        listProductCategoriesAttributes.Add(new ProductCategoriesAttribute()
                        {
                            CategoryId = productCategoryId,
                            AttributeId = item.AttributeId,
                        });
                    }
                }

                var resultInsertCategoryAttribute = await _productCategoriesAttributeRepository.Inserts(listProductCategoriesAttributes);
                if (resultInsertCategoryAttribute <= 0)
                    return new ActionResultResponse<int>(resultDeleteProductCategoryAttribute,
                       _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

                return new ActionResultResponse<int>(resultDeleteProductCategoryAttribute,
                      _productResourceService.GetString("Update success."));

            }
        }

        public async Task<ActionResultResponse> UpdateStatus(string tenantId, int productCategoryId, bool isActive)
        {
            var productCategoryInfo = await _productCategoryRepository.GetInfo(productCategoryId);
            if (productCategoryInfo == null)
                return new ActionResultResponse(-2, _productResourceService.GetString("Product category info does not exists. Please try again."));

            if (productCategoryInfo.TenantId != tenantId)
                return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            productCategoryInfo.IsActive = isActive;
            var result = await _productCategoryRepository.Update(productCategoryInfo);

            if (result <= 0)
                return new ActionResultResponse<string>(result,
                  _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            await _productCategoryRepository.UpdateStatusInListCategory(tenantId, productCategoryInfo.IdPath, isActive);
            return new ActionResultResponse(result,
                       _productResourceService.GetString("Update product category status successful."));
        }
    }
}
