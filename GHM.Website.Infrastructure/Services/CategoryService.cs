using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.Resources;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Infrastructure.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly ICategoryTranslationRepository _categoryTranslationRepository;
        private readonly IMenuItemRepository _menuItemRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _resourceService;

        public CategoryService(ICategoryRepository categoryRepository, ICategoryTranslationRepository categoryTranslationRepository,
            IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> resourceService,
            IMenuItemRepository menuItemRepository)
        {
            _categoryRepository = categoryRepository;
            _categoryTranslationRepository = categoryTranslationRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _menuItemRepository = menuItemRepository;
        }

        public async Task<ActionResultResponse> Insert(string tenantId, CategoryMeta categoryMeta)
        {
            var category = new Category
            {
                TenantId = tenantId,
                ConcurrencyStamp = Guid.NewGuid().ToString(),
                CreatorId = categoryMeta.CreatorId,
                CreatorFullName = categoryMeta.CreatorFullName,
                IsActive = categoryMeta.IsActive,
                IdPath = "-1",
                IsHomePage = categoryMeta.IsHomePage,
                CreatorAvatar = categoryMeta.CreatorAvatar,
            };
            if (categoryMeta.ParentId.HasValue)
            {
                var parentInfo = await _categoryRepository.GetInfo(tenantId, categoryMeta.ParentId.Value);
                if (parentInfo == null)
                    return new ActionResultResponse(-1, _resourceService.GetString("Parent category does not exists."));

                category.ParentId = parentInfo.Id;
                category.IdPath = $"{parentInfo.IdPath}.-1";

                var order = await _categoryRepository.CountByParentId(categoryMeta.ParentId);
                category.Order = order;
                category.OrderPath = $"{parentInfo.OrderPath}.{order}";
            }
            else
            {
                var order = await _categoryRepository.CountByParentId(null);
                category.Order = order;
                category.OrderPath = order.ToString();
            }

            var result = await _categoryRepository.Insert(category);
            if (result <= 0)
                return new ActionResultResponse(-1, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));


            await UpdateIdPath();
            return await AddTranslation();

            async Task RollbackInsert()
            {
                await _categoryRepository.ForceDelete(tenantId, category.Id);
            }

            async Task UpdateIdPath()
            {
                category.IdPath = category.IdPath.Replace("-1", category.Id.ToString());
                await _categoryRepository.UpdateCategoryIdPath(tenantId, category.Id, category.IdPath);
            }

            async Task<ActionResultResponse> AddTranslation()
            {
                var categoryTranslations = new List<CategoryTranslation>();
                foreach (var categoryTranslation in categoryMeta.CategoryTranslations)
                {
                    var resultAddTranslation = await AddCategoryTranslation(tenantId, category.Id, categoryTranslation);
                    if (resultAddTranslation.Code <= 0)
                    {
                        await RollbackInsert();
                        return resultAddTranslation;
                    }

                    categoryTranslations.Add(resultAddTranslation.Data);
                }

                var resultInsertCategoryTranslation = await _categoryTranslationRepository.Inserts(categoryTranslations);
                if (resultInsertCategoryTranslation > 0)
                    return new ActionResultResponse(1, _resourceService.GetString("Add new category successful."));

                await RollbackInsert();
                return new ActionResultResponse(-3, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
            }
        }

        public async Task<ActionResultResponse> Update(string tenantId, int id, CategoryMeta categoryMeta)
        {
            var info = await _categoryRepository.GetInfo(tenantId, id);
            if (info == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Category does not exists."));

            if (categoryMeta.ConcurrencyStamp != info.ConcurrencyStamp)
                return new ActionResultResponse(-2,
                    _resourceService.GetString("This category already updated by another. You can not update this category."));

            var oldIdPath = info.IdPath;
            info.IsActive = categoryMeta.IsActive;
            info.Order = categoryMeta.Order;
            info.OrderPath = categoryMeta.Order.ToString();
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.LastUpdate = DateTime.Now;
            info.IsHomePage = categoryMeta.IsHomePage;
            if (info.ParentId != categoryMeta.ParentId)
            {
                if (!categoryMeta.ParentId.HasValue)
                {
                    info.ParentId = null;
                    info.IdPath = info.Id.ToString();

                    var order = await _categoryRepository.CountByParentId(null);
                    info.Order = order;
                    info.OrderPath = order.ToString();
                }
                else
                {
                    if (categoryMeta.ParentId == info.Id)
                        return new ActionResultResponse(-3, _resourceService.GetString("Parent category can not be it selft."));


                    var parentInfo = await _categoryRepository.GetInfo(tenantId, categoryMeta.ParentId.Value);
                    if (parentInfo == null)
                        return new ActionResultResponse(-3, _resourceService.GetString("Parent category does not exists."));

                    info.ParentId = parentInfo.Id;
                    info.IdPath = $"{parentInfo.IdPath}.{info.Id}";

                    var order = await _categoryRepository.CountByParentId(parentInfo.Id);
                    info.Order = order;
                    info.OrderPath = $"{parentInfo.OrderPath}.{order}";
                }
            }

            await _categoryRepository.Update(info);
            await UpdateChildrenIdPath();
            var resultUpdateTranslation = await SaveCategoryTranslation();
            if (resultUpdateTranslation.Code <= 0)
                return resultUpdateTranslation;

            return new ActionResultResponse(1, _resourceService.GetString("Update categogry successful."));

            #region Local functions
            async Task<ActionResultResponse> SaveCategoryTranslation()
            {
                var listNewCategoryTranslations = new List<CategoryTranslation>();
                foreach (var categoryTranslation in categoryMeta.CategoryTranslations)
                {
                    // Check name exists.
                    var isNameExists = await _categoryTranslationRepository.CheckExists(tenantId,
                        categoryTranslation.LanguageId, info.Id, categoryTranslation.Name);
                    if (isNameExists)
                        return new ActionResultResponse<CategoryTranslation>(-4,
                            _resourceService.GetString("Category name: \"{0}\" already exsits.", categoryTranslation.SeoLink));

                    categoryTranslation.SeoLink = !string.IsNullOrEmpty(categoryTranslation.SeoLink)
                        ? categoryTranslation.SeoLink.Trim()
                        : categoryTranslation.Name.Trim().ToUrlString().ToLower();

                    // Check seoLink exists.
                    var isSeoLinkExists = await _categoryTranslationRepository.CheckSeoLinkExists(tenantId,
                        categoryTranslation.LanguageId, info.Id, categoryTranslation.SeoLink);
                    if (isSeoLinkExists)
                        return new ActionResultResponse<CategoryTranslation>(-5,
                            _resourceService.GetString("Seolink: \"{0}\" already exsits.", categoryTranslation.SeoLink));

                    var categoryTranslationInfo =
                        await _categoryTranslationRepository.GetInfo(info.Id, categoryTranslation.LanguageId);

                    // Add new category translation.
                    if (categoryTranslationInfo == null)
                    {
                        listNewCategoryTranslations.Add(new CategoryTranslation
                        {
                            CategoryId = info.Id,
                            LanguageId = categoryTranslation.LanguageId,
                            Name = categoryTranslation.Name.Trim(),
                            MetaTitle = categoryTranslation.MetaTitle?.Trim(),
                            Description = categoryTranslation.Description?.Trim(),
                            MetaDescription = categoryTranslation.MetaDescription?.Trim(),
                            UnsignName = categoryTranslation.Name.Trim().StripVietnameseChars().ToUpper(),
                            SeoLink = categoryTranslation.SeoLink
                        });
                    }
                    else
                    {
                        categoryTranslationInfo.Name = categoryTranslation.Name.Trim();
                        categoryTranslationInfo.MetaTitle = categoryTranslation.MetaTitle?.Trim();
                        categoryTranslationInfo.Description = categoryTranslation.Description?.Trim();
                        categoryTranslationInfo.MetaDescription = categoryTranslation.MetaDescription?.Trim();
                        categoryTranslationInfo.UnsignName = categoryTranslation.Name.Trim().StripVietnameseChars().ToUpper();
                        categoryTranslationInfo.SeoLink = categoryTranslation.SeoLink;
                        await _categoryTranslationRepository.Update(categoryTranslationInfo);
                    }
                }

                return new ActionResultResponse(1);
            }

            async Task UpdateChildrenIdPath()
            {
                if (info.IdPath != oldIdPath)
                {
                    await _categoryRepository.UpdateChildrenIdPath(oldIdPath, info.IdPath);
                }
            }
            #endregion
        }

        //public async Task<ActionResultResponse> UpdateOrder(string tenantId, int id, int order, int? parentId)
        //{
        //    var categoryInfo = await _categoryRepository.GetInfo(tenantId, id);
        //    if(categoryInfo == null)
        //        return new ActionResultResponse(-1, _resourceService.GetString("Category does not exists."));            
        //}

        public async Task<ActionResultResponse> Delete(string tenantId, int id)
        {
            // Check exists in news.

            // Check exists in menu.
            var isExistsInMenu =
                await _menuItemRepository.CheckExistsBySubjectId(id.ToString(), SubjectType.NewsCategory);
            if (isExistsInMenu)
                return new ActionResultResponse(-1, _resourceService.GetString("Category are being used by news. You can not delete this category."));

            var result = await _categoryRepository.Delete(tenantId, id);
            if (result <= 0)
                return new ActionResultResponse(result, result == -1 ? _resourceService.GetString("Category doest not exists.")
                    : _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            // Delete category translation.
            await _categoryTranslationRepository.DeleteByCategoryId(id);
            return new ActionResultResponse(result, _resourceService.GetString("Delete category successful."));
        }

        public async Task<SearchResult<TreeData>> GetsTree(string tenantId, string languageId, string keyword, bool? isActive)
        {
            var categories = await _categoryRepository.SearchAll(tenantId, languageId, keyword, isActive);
            return new SearchResult<TreeData>
            {
                Items = await RenderCategoryTree(null)
            };
            #region Local functions

            async Task<List<TreeData>> RenderCategoryTree(int? parentId)
            {
                var trees = new List<TreeData>();
                var childrenCategories = categories.Where(x => x.ParentId == parentId).ToList();
                if (childrenCategories.Any())
                {
                    foreach (var category in childrenCategories.OrderBy(x => x.Order))
                    {
                        var childrens = await RenderCategoryTree(category.Id);
                        trees.Add(new TreeData
                        {
                            Id = category.Id,
                            Children = childrens,
                            ChildCount = childrens.Count,
                            Data = category,
                            ParentId = category.ParentId,
                            IdPath = category.IdPath,
                            Text = category.Name
                        });
                    }
                }
                return trees;
            }
            #endregion
        }

        public async Task<ActionResultResponse<CategoryDetailViewModel>> GetDetail(string tenantId, int id)
        {
            var categoryInfo = await _categoryRepository.GetInfo(tenantId, id, true);
            if (categoryInfo == null)
                return new ActionResultResponse<CategoryDetailViewModel>(-1, _resourceService.GetString("Category does not exists."));

            var categoryDetail = new CategoryDetailViewModel
            {
                Id = categoryInfo.Id,
                ParentId = categoryInfo.ParentId,
                ConcurrencyStamp = categoryInfo.ConcurrencyStamp,
                IsActive = categoryInfo.IsActive,
                Order = categoryInfo.Order,
                IsHomePage = categoryInfo.IsHomePage,
                CategoryTranslations = await _categoryTranslationRepository.GetByCategoryId(id)
            };
            return new ActionResultResponse<CategoryDetailViewModel>
            {
                Data = categoryDetail
            };
        }

        public async Task<SearchResult<CategoryViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive,
            int page, int pageSize)
        {
            return new SearchResult<CategoryViewModel>
            {
                Items = await _categoryRepository.Search(tenantId, languageId, keyword, isActive, page, pageSize, out var totalRows),
                TotalRows = totalRows
            };
        }

        public async Task<SearchResult<Suggestion<int>>> Suggestions(string tenantId, string languageId, string keyword, int page, int pageSize)
        {
            return new SearchResult<Suggestion<int>>
            {
                Items = await _categoryRepository.Suggestions(tenantId, languageId, keyword, page, pageSize, out var totalRows),
                TotalRows = totalRows
            };
        }

        public async Task<SearchResult<CategorySearchForSelectViewModel>> SearchForSelect(string tenantId, string languageId, string keyword, int page, int pageSize)
        {
            return new SearchResult<CategorySearchForSelectViewModel>
            {
                Items = await _categoryRepository.SearchForSelect(tenantId, languageId, keyword, page, pageSize, out var totalRows),
                TotalRows = totalRows
            };
        }


        public async Task<CategoryTranslationViewModel> GetNameByCategoryId(string tenantId, string languageId, string seoLink)
        {
            var info = await _categoryTranslationRepository.GetActiveBySeoLink(tenantId, languageId, seoLink);

            if (info == null) return new CategoryTranslationViewModel();

            var childCount = await _categoryRepository.CountByParentId(info.CategoryId);

            var categoryTranslation = new CategoryTranslationViewModel
            {
                TenantId = tenantId,
                CategoryId = info.CategoryId,
                LanguageId = languageId,
                Name = info.Name,
                MetaTitle = info.MetaTitle,
                Description = info.Description,
                MetaDescription = info.MetaDescription,
                SeoLink = seoLink,
                ChildCount = childCount,
            };

            return categoryTranslation;
        }

        public async Task<ActionResultResponse<CategoryTranslationViewModel>> GetCategoryRelations(string tenantId, string languageId, string seoLink)
        {
            var info = await _categoryTranslationRepository.GetActiveBySeoLink(tenantId, languageId, seoLink);

            if (info == null) return new ActionResultResponse<CategoryTranslationViewModel>
            {
                Data = null,
            };

            var categoryInfo = await _categoryRepository.GetInfo(tenantId, info.CategoryId, true);

            return new ActionResultResponse<CategoryTranslationViewModel>
            {
                Data = _categoryRepository.GetCategoryRelations(tenantId, languageId, categoryInfo.Id, categoryInfo?.ParentId)
            };
        }

        public async Task<SearchResult<string>> GetAllSeoLinkForSitemap(string tenantId, string languageId)
        {
            return new SearchResult<string>
            {
                Items = await _categoryRepository.GetAllSeoLinkForSitemap(tenantId, languageId)
            };
        }

        #region Private
        private async Task<ActionResultResponse<CategoryTranslation>> AddCategoryTranslation(string tenantId, int categoryId,
            CategoryTranslationMeta categoryTranslationMeta)
        {
            // Check name exists.
            var isNameExists = await _categoryTranslationRepository.CheckExists(tenantId,
                categoryTranslationMeta.LanguageId, categoryId, categoryTranslationMeta.Name);
            if (isNameExists)
                return new ActionResultResponse<CategoryTranslation>(-1,
                    _resourceService.GetString("Category name: \"{0}\" already exsits.", categoryTranslationMeta.Name));

            categoryTranslationMeta.SeoLink = !string.IsNullOrEmpty(categoryTranslationMeta.SeoLink)
                ? categoryTranslationMeta.SeoLink.Trim()
                : categoryTranslationMeta.Name.Trim().ToUrlString().ToLower();

            // Check seoLink exists.
            var isSeoLinkExists = await _categoryTranslationRepository.CheckSeoLinkExists(tenantId,
                categoryTranslationMeta.LanguageId, categoryId, categoryTranslationMeta.SeoLink);
            if (isSeoLinkExists)
                return new ActionResultResponse<CategoryTranslation>(-2,
                    _resourceService.GetString("Seolink: \"{0}\" already exsits.", categoryTranslationMeta.SeoLink));

            return new ActionResultResponse<CategoryTranslation>
            {
                Data = new CategoryTranslation
                {
                    TenantId = tenantId,
                    CategoryId = categoryId,
                    LanguageId = categoryTranslationMeta.LanguageId,
                    Name = categoryTranslationMeta.Name.Trim(),
                    MetaTitle = categoryTranslationMeta.MetaTitle?.Trim(),
                    Description = categoryTranslationMeta.Description?.Trim(),
                    MetaDescription = categoryTranslationMeta.MetaDescription?.Trim(),
                    UnsignName = categoryTranslationMeta.Name.Trim().StripVietnameseChars().ToUpper(),
                    SeoLink = categoryTranslationMeta.SeoLink
                }
            };
        }
        #endregion
    }
}
