using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Infrastructure.Constants;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.Resources;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.Constants;
using GHM.Infrastructure.Services;
using Microsoft.Extensions.Configuration;

namespace GHM.Website.Infrastructure.Services
{
    public class MenuService : IMenuService
    {
        private readonly IMenuRepository _menuRepository;
        private readonly IMenuItemRepository _menuItemRepository;
        private readonly IMenuItemTranslationRepository _menuItemTranslationRepository;
        private readonly ICategoryTranslationRepository _categoryTranslationRepositoryRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly INewsTranslationRepository _newsTranslationRepository;
        private readonly IResourceService<GhmWebsiteResource> _websiteResourceService;
        private readonly IConfiguration _configuration;
        public MenuService(IMenuRepository menuRepository,
            IMenuItemRepository menuItemRepository,
            IMenuItemTranslationRepository menuItemTranslationRepository,
            ICategoryTranslationRepository categoryTranslationRepositoryRepository,
            INewsTranslationRepository newsTranslationRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> websiteResourceService,
            IConfiguration configuration
        )
        {
            _menuRepository = menuRepository;
            _menuItemRepository = menuItemRepository;
            _menuItemTranslationRepository = menuItemTranslationRepository;
            _categoryTranslationRepositoryRepository = categoryTranslationRepositoryRepository;
            _sharedResourceService = sharedResourceService;
            _websiteResourceService = websiteResourceService;
            _newsTranslationRepository = newsTranslationRepository;
            _configuration = configuration;
        }

        #region Menus
        public async Task<SearchResult<MenuViewModel>> Search(string tenantId, string keyword, bool? isActive, int page, int pageSize)
        {
            var items = await _menuRepository.Search(tenantId, keyword, isActive, page, pageSize, out var totalRows);
            return new SearchResult<MenuViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse<string>> InsertMenu(string tenantId, string creatorId, string creatorFullName, MenuMeta menuMeta)
        {
            var menuId = Guid.NewGuid().ToString();

            var isNameExists = await _menuRepository.CheckExistsByName(tenantId, menuMeta.Name);
            if (isNameExists)
            {
                return new ActionResultResponse<string>(-1, _websiteResourceService.GetString("Menu name: \"{0}\" already exists.",
                    menuMeta.Name));
            }

            var resultInsertMenu = await _menuRepository.Insert(new Menu
            {
                Id = menuId,
                ConcurrencyStamp = menuId,
                Name = menuMeta.Name,
                Description = menuMeta.Description,
                Icon = menuMeta.Icon,
                EffectType = menuMeta.EffectType,
                Order = menuMeta.Order,
                IsActive = menuMeta.IsActive,
                Position = menuMeta.Position,
                UnsignName = menuMeta.Name.StripVietnameseChars(),
                TenantId = tenantId,
                CreatorId = creatorId,
                CreatorFullName = creatorFullName
            });

            if (resultInsertMenu <= 0)
                return new ActionResultResponse<string>(resultInsertMenu, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse<string>(1, _websiteResourceService.GetString("Add new menu successful."),
                string.Empty, menuId);
        }

        public async Task<ActionResultResponse> UpdateMenu(string tenantId, string lastUpdateUserId, string lastUpdateFullName, string menuId, MenuMeta menuMeta)
        {
            var info = await _menuRepository.GetInfo(menuId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Menu does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (info.ConcurrencyStamp != menuMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3, _websiteResourceService.GetString("The menu already updated by other people. You can not update this menu."));

            var isNameExists = await _menuRepository.CheckExistsByName(tenantId, menuMeta.Name);
            if (isNameExists && info.Name != menuMeta.Name)
            {
                return new ActionResultResponse<string>(-1, _websiteResourceService.GetString("Menu name: \"{0}\" already exists.",
                    menuMeta.Name));
            }
            info.ConcurrencyStamp = Guid.NewGuid().ToString();
            info.Name = menuMeta.Name;
            info.Description = menuMeta.Description;
            info.Icon = menuMeta.Icon;
            info.EffectType = menuMeta.EffectType;
            info.Order = menuMeta.Order;
            info.IsActive = menuMeta.IsActive;
            info.UnsignName = menuMeta.Name.StripVietnameseChars();
            info.LastUpdate = DateTime.Now;
            info.LastUpdateUserId = lastUpdateUserId;
            info.LastUpdateFullName = lastUpdateFullName;
            info.Position = menuMeta.Position;

            var result = await _menuRepository.Update(info);

            if (result < 0)
                return new ActionResultResponse<string>(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

            return new ActionResultResponse(result, _websiteResourceService.GetString("Update menu successful."));
        }

        public async Task<ActionResultResponse> DeleteMenu(string tenantId, string menuId)
        {
            var info = await _menuRepository.GetInfo(menuId);
            if (info == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Menu does not exists. Please try again."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var isUsedInMenuItem = await _menuItemRepository.CheckExistsByMenuId(menuId);
            if (isUsedInMenuItem)
                return new ActionResultResponse(-3,
                    _websiteResourceService.GetString("This menu used by menu item. You can not delete this menu."));

            var result = await _menuRepository.Delete(menuId);
            return new ActionResultResponse(result, _websiteResourceService.GetString("Delete menu successful."));
        }

        public async Task<ActionResultResponse<MenuDetailViewModel>> GetDetailMenu(string tenantId, string menuId)
        {
            var info = await _menuRepository.GetInfo(menuId);
            if (info == null)
                return new ActionResultResponse<MenuDetailViewModel>(-1, _websiteResourceService.GetString("Menu does not exists."));

            if (info.TenantId != tenantId)
                return new ActionResultResponse<MenuDetailViewModel>(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            var menuDetail = new MenuDetailViewModel
            {
                Id = info.Id,
                Name = info.Name,
                Description = info.Description,
                Icon = info.Icon,
                EffectType = info.EffectType,
                Order = info.Order,
                IsActive = info.IsActive,
                Position = info.Position,
                ConcurrencyStamp = info.ConcurrencyStamp,
            };

            return new ActionResultResponse<MenuDetailViewModel>
            {
                Code = 1,
                Data = menuDetail
            };
        }

        #endregion Menu

        #region MenuItems
        public async Task<ActionResultResponse<int>> InsertMenuItem(string tenantId, string creatorId, string creatorFullName, string menuId, MenuItemMeta menuItemMeta)
        {
            if (menuItemMeta.SubjectType == SubjectType.Custom)
            {
                var menuItem = new MenuItem
                {
                    MenuId = menuId,
                    SubjectId = menuItemMeta.SubjectId,
                    SubjectType = menuItemMeta.SubjectType,
                    Icon = menuItemMeta.Icon,
                    Image = menuItemMeta.Image,
                    Url = menuItemMeta.Url,
                    IsActive = menuItemMeta.IsActive,
                    IdPath = "-1",
                    Order = menuItemMeta.Order,
                    OrderPath = menuItemMeta.Order.ToString(),
                    TenantId = tenantId,
                    CreatorId = creatorId,
                    CreatorFullName = creatorFullName
                };

                if (menuItemMeta.ParentId.HasValue)
                {
                    var parentInfo = await _menuItemRepository.GetInfo(menuItemMeta.ParentId.Value);
                    if (parentInfo == null)
                        return new ActionResultResponse<int>(-1,
                            _websiteResourceService.GetString("Parent menu item does not exists. Please try again."));

                    menuItem.ParentId = parentInfo.Id;
                    menuItem.IdPath = $"{parentInfo.IdPath}.-1";

                    var order = await _menuItemRepository.CountByParentId(menuItemMeta.ParentId);
                    menuItem.Order = order;
                    menuItem.OrderPath = $"{parentInfo.OrderPath}.{order}";
                }
                else
                {
                    var order = menuItemMeta.Order > 0 ? menuItemMeta.Order : await _menuItemRepository.CountByParentId(null);
                    menuItem.Order = order;
                    menuItem.OrderPath = order.ToString();
                }

                var result = await _menuItemRepository.Insert(menuItem);
                if (result <= 0)
                    return new ActionResultResponse<int>(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

                #region Update current menu item idPath.
                menuItem.Level = !string.IsNullOrEmpty(menuItem.IdPath) ? menuItem.IdPath.Split(".").Length : 1;
                menuItem.IdPath = menuItem.IdPath.Replace("-1", menuItem.Id.ToString());
                await _menuItemRepository.UpdateMenuItemIdPath(menuItem.Id, menuItem.IdPath);
                #endregion

                #region Update parent menu item child count.
                if (menuItem.ParentId.HasValue)
                {
                    var childCount = await _menuItemRepository.GetChildCount(menuItem.ParentId.Value);
                    await _menuItemRepository.UpdateChildCount(menuItem.ParentId.Value, childCount);
                }
                #endregion

                #region insert MenuItem Translation.
                if (menuItemMeta.MenuItemTranslations.Count > 0)
                {
                    var resultInsertTranslation = await InsertMenuItemTranslation(menuItem, menuItemMeta.MenuItemTranslations);
                    if (resultInsertTranslation.Code <= 0)
                        return resultInsertTranslation;
                }
                #endregion

                return new ActionResultResponse<int>(result, _websiteResourceService.GetString("Add new menu item successful."),
                    string.Empty, menuItem.Id);

            }

            if (menuItemMeta.SubjectType != SubjectType.Custom && menuItemMeta.ListMenuItemSelected != null && menuItemMeta.ListMenuItemSelected.Any())
            {
                foreach (var menuItemSelect in menuItemMeta.ListMenuItemSelected)
                {
                    var menuItem = new MenuItem
                    {
                        MenuId = menuId,
                        SubjectId = menuItemSelect.Id,
                        SubjectType = menuItemMeta.SubjectType,
                        Icon = menuItemSelect.Icon,
                        Image = menuItemSelect.Image,
                        //Url = menuItemMeta.Url,
                        IsActive = true,
                        IdPath = "-1",
                        Order = menuItemSelect.Order,
                        OrderPath = menuItemSelect.Order.ToString(),
                        TenantId = tenantId,
                        CreatorId = creatorId,
                        CreatorFullName = creatorFullName
                    };

                    if (menuItemMeta.ParentId.HasValue)
                    {
                        var parentInfo = await _menuItemRepository.GetInfo(menuItemMeta.ParentId.Value);
                        if (parentInfo == null)
                            return new ActionResultResponse<int>(-1,
                                _websiteResourceService.GetString("Parent menu item does not exists. Please try again."));

                        menuItem.ParentId = parentInfo.Id;
                        menuItem.IdPath = $"{parentInfo.IdPath}.-1";

                        var order = await _menuItemRepository.CountByParentId(menuItemMeta.ParentId);
                        menuItem.Order = order;
                        menuItem.OrderPath = $"{parentInfo.OrderPath}.{order}";
                    }
                    else
                    {
                        var order = await _menuItemRepository.CountByParentId(null);
                        menuItem.Order = order;
                        menuItem.OrderPath = order.ToString();
                    }

                    var result = await _menuItemRepository.Insert(menuItem);
                    if (result <= 0)
                        return new ActionResultResponse<int>(result, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

                    #region Update current menu item idPath.
                    menuItem.Level = !string.IsNullOrEmpty(menuItem.IdPath) ? menuItem.IdPath.Split(".").Length : 1;
                    menuItem.IdPath = menuItem.IdPath.Replace("-1", menuItem.Id.ToString());
                    await _menuItemRepository.UpdateMenuItemIdPath(menuItem.Id, menuItem.IdPath);
                    #endregion

                    #region Update parent menu item child count.
                    if (menuItem.ParentId.HasValue)
                    {
                        var childCount = await _menuItemRepository.GetChildCount(menuItem.ParentId.Value);
                        await _menuItemRepository.UpdateChildCount(menuItem.ParentId.Value, childCount);
                    }
                    #endregion
                    var apiUrls = _configuration.GetApiUrl();
                    if (apiUrls == null)
                        return new ActionResultResponse<int>(-1, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));

                    var httpClient = new HttpClientService();

                    #region insert MenuItem Translation ItemSelect.
                    switch (menuItemMeta.SubjectType)
                    {
                        case SubjectType.News:
                            var listNewsTranslation = await _newsTranslationRepository.GetByNewsId(menuItemSelect.Id);
                            var listMenuItemTranslationInsert = new List<MenuItemTranslationMeta>();
                            if (listNewsTranslation != null && listNewsTranslation.Any())
                            {
                                foreach (var menuItemTranslation in listNewsTranslation)
                                {
                                    listMenuItemTranslationInsert.Add(new MenuItemTranslationMeta
                                    {
                                        LanguageId = menuItemTranslation.LanguageId,
                                        Name = menuItemTranslation.Title,
                                        NamePath = $"{menuItemTranslation.SeoLink}.html",
                                    });
                                }

                                var resultInsertTranslation = await InsertMenuItemTranslation(menuItem, listMenuItemTranslationInsert);
                                if (resultInsertTranslation.Code <= 0)
                                    return resultInsertTranslation;
                            }
                            break;

                        case SubjectType.NewsCategory:
                            var listCategoryTranslation = await _categoryTranslationRepositoryRepository.GetByCategoryId(int.Parse(menuItemSelect.Id));
                            var listMenuItemTranslationCategoryInsert = new List<MenuItemTranslationMeta>();
                            if (listCategoryTranslation != null && listCategoryTranslation.Any())
                            {
                                foreach (var menuItemTranslation in listCategoryTranslation)
                                {
                                    listMenuItemTranslationCategoryInsert.Add(new MenuItemTranslationMeta
                                    {
                                        LanguageId = menuItemTranslation.LanguageId,
                                        Name = menuItemTranslation.Name,
                                        NamePath = menuItemTranslation.SeoLink,
                                    });
                                }

                                var resultInsertTranslation = await InsertMenuItemTranslation(menuItem, listMenuItemTranslationCategoryInsert);
                                if (resultInsertTranslation.Code <= 0)
                                    return resultInsertTranslation;
                            }
                            break;
                        case SubjectType.Product:
                            var listProductTranslation = await httpClient.GetAsync<List<ProductTranslationViewModel>>($"{apiUrls.WarehouseApiUrl}/products/translation/{menuItem.Id}");
                            var listMenuItemTranslationProduct = new List<MenuItemTranslationMeta>();
                            if (listProductTranslation != null && listProductTranslation.Any())
                            {
                                foreach (var productTranslationItem in listProductTranslation)
                                {
                                    listMenuItemTranslationProduct.Add(new MenuItemTranslationMeta
                                    {
                                        LanguageId = productTranslationItem.LanguageId,
                                        Name = productTranslationItem.Name,
                                        NamePath = $"{productTranslationItem.SeoLink}.html",
                                    });
                                }

                                var resultInsertTranslation = await InsertMenuItemTranslation(menuItem, listMenuItemTranslationProduct);
                                if (resultInsertTranslation.Code <= 0)
                                    return resultInsertTranslation;
                            }
                            break;
                        case SubjectType.ProductCategory:
                            var listProductCategoryTranslation = await httpClient.GetAsync<List<ProductTranslationViewModel>>($"{apiUrls.WarehouseApiUrl}/product-categories/{menuItem.Id}, true, 1, 10000"); ;
                            var listMenuItemProductCategoryTranslationInsert = new List<MenuItemTranslationMeta>();
                            if (listProductCategoryTranslation != null && listProductCategoryTranslation.Any())
                            {
                                foreach (var menuItemTranslation in listProductCategoryTranslation)
                                {
                                    listMenuItemProductCategoryTranslationInsert.Add(new MenuItemTranslationMeta
                                    {
                                        LanguageId = menuItemTranslation.LanguageId,
                                        Name = menuItemTranslation.Name,
                                        NamePath = menuItemTranslation.SeoLink,
                                    });
                                }

                                var resultInsertTranslation = await InsertMenuItemTranslation(menuItem, listMenuItemProductCategoryTranslationInsert);
                                if (resultInsertTranslation.Code <= 0)
                                    return resultInsertTranslation;
                            }
                            break;
                    }
                    #endregion
                }
            }

            #region Local functions  
            async Task<ActionResultResponse<int>> InsertMenuItemTranslation(MenuItem menuItem, List<MenuItemTranslationMeta> listMenuItemTranslations)
            {
                var menuItemTranslations = new List<MenuItemTranslation>();
                foreach (var menuItemTranslation in listMenuItemTranslations)
                {
                    // Check name exists.
                    var isNameExists = await _menuItemTranslationRepository.CheckExistsByName(menuItem.MenuId, menuItem.Id, tenantId,
                        menuItemTranslation.LanguageId, menuItemTranslation.Name);
                    if (isNameExists)
                    {
                        await RollbackInsertMenuItem(menuItem.Id);
                        return new ActionResultResponse<int>(-2, _websiteResourceService.GetString("Menu item name: \"{0}\" already exists.",
                            menuItemTranslation.Name));
                    }

                    var menuItemTranslationInsert = new MenuItemTranslation
                    {
                        TenantId = tenantId,
                        MenuItemId = menuItem.Id,
                        LanguageId = menuItemTranslation.LanguageId.Trim(),
                        Name = menuItemTranslation.Name.Trim(),
                        Description = menuItemTranslation.Description?.Trim(),
                        UnsignName = menuItemTranslation.Name.StripVietnameseChars().ToUpper()
                    };

                    if (!string.IsNullOrEmpty(menuItemTranslation.NamePath))
                    {
                        menuItemTranslationInsert.NamePath = menuItemTranslation.NamePath;
                    }
                    else
                    {
                        menuItemTranslationInsert.NamePath = menuItemTranslation.Name.ToUrlString();
                    }

                    // Check Seolink exists.
                    var isNamePathExists = await _menuItemTranslationRepository.CheckExistsByNamePath(menuItem.MenuId, menuItem.Id, tenantId,
                        menuItemTranslation.LanguageId, menuItemTranslationInsert.NamePath);
                    if (isNamePathExists)
                    {
                        await RollbackInsertMenuItem(menuItem.Id);
                        return new ActionResultResponse<int>(-3, _websiteResourceService.GetString("Menu item seo link: \"{0}\" already exists.",
                            menuItemTranslationInsert.NamePath));
                    }

                    if (menuItem.ParentId.HasValue)
                    {
                        var parentName = await _menuItemTranslationRepository.GetMenuItemGroupName(menuItem.ParentId.Value,
                            menuItemTranslation.LanguageId);
                        if (!string.IsNullOrEmpty(parentName))
                        {
                            menuItemTranslationInsert.ParentName = parentName;
                        }
                    }

                    if (!string.IsNullOrEmpty(menuItemTranslationInsert.NamePath))
                    {
                        menuItemTranslations.Add(menuItemTranslationInsert);
                    }
                }

                // Insert Menu Item translations.
                var resultInsertTranslation = await _menuItemTranslationRepository.Inserts(menuItemTranslations);
                if (resultInsertTranslation > 0)
                    return new ActionResultResponse<int>(resultInsertTranslation,
                        _websiteResourceService.GetString("Add new menu item translation successful."), string.Empty, menuItem.Id);

                await RollbackInsertMenuItemTranslation(menuItem.Id);
                await RollbackInsertMenuItem(menuItem.Id);
                return new ActionResultResponse<int>(-4, _websiteResourceService.GetString("Can not insert new menu item. Please contact with administrator."));
            }
            #endregion

            return new ActionResultResponse<int>(1,
                    _websiteResourceService.GetString("Add new menu item translation successful."));
        }

        public async Task<ActionResultResponse> UpdateMenuItem(string tenantId, string lastUpdateUserId,
            string lastUpdateFullName, string menuId, int menuItemId,
            MenuItemMeta menuItemMeta)
        {
            var menuItemInfo = await _menuItemRepository.GetInfo(menuItemId);
            if (menuItemInfo == null)
                return new ActionResultResponse(-1,
                    _websiteResourceService.GetString("Menu item info does not exists. Please try again."));

            if (menuItemInfo.TenantId != tenantId)
                return new ActionResultResponse(-2,
                    _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (menuItemInfo.ConcurrencyStamp != menuItemMeta.ConcurrencyStamp)
                return new ActionResultResponse(-3,
                    _sharedResourceService.GetString(
                        "The menu item already updated by other people. You can not update this menu item."));

            if (menuItemMeta.ParentId.HasValue && menuItemInfo.Id == menuItemMeta.ParentId.Value)
                return new ActionResultResponse(-4,
                    _websiteResourceService.GetString("Menu item and parent menu item can not be the same."));

            var oldParentId = menuItemInfo.ParentId;
            var oldIdPath = menuItemInfo.IdPath;

            menuItemInfo.Icon = menuItemMeta.Icon;
            menuItemInfo.Order = menuItemMeta.Order;
            menuItemInfo.Image = menuItemMeta.Image;
            menuItemInfo.Url = menuItemMeta.Url;
            menuItemInfo.IsActive = menuItemMeta.IsActive;
            menuItemInfo.ConcurrencyStamp = Guid.NewGuid().ToString();
            menuItemInfo.LastUpdate = DateTime.Now;
            menuItemInfo.LastUpdateUserId = lastUpdateUserId;
            menuItemInfo.LastUpdateFullName = lastUpdateFullName;

            if (menuItemInfo.ParentId.HasValue && !menuItemMeta.ParentId.HasValue)
            {
                menuItemInfo.ParentId = null;
                menuItemInfo.IdPath = menuItemInfo.Id.ToString();
                menuItemInfo.Level = !string.IsNullOrEmpty(menuItemInfo.IdPath) ? menuItemInfo.IdPath.Split(".").Length : 1;

                var order = await _menuItemRepository.CountByParentId(null);
                menuItemInfo.Order = order;
                menuItemInfo.OrderPath = order.ToString();
            }
            else if (menuItemMeta.ParentId.HasValue && menuItemMeta.ParentId != menuItemInfo.ParentId)
            {
                var parentInfo = await _menuItemRepository.GetInfo(menuItemMeta.ParentId.Value);
                if (parentInfo == null)
                    return new ActionResultResponse(-5,
                        _websiteResourceService.GetString("Parent menu item does not exists. Please try again."));

                menuItemInfo.IdPath = $"{parentInfo.IdPath}.{menuItemInfo.Id}";
                menuItemInfo.ParentId = parentInfo.Id;
                menuItemInfo.Level = !string.IsNullOrEmpty(menuItemInfo.IdPath) ? menuItemInfo.IdPath.Split(".").Length : 1;

                var order = await _menuItemRepository.CountByParentId(parentInfo.Id);
                menuItemInfo.Order = order;
                menuItemInfo.OrderPath = $"{parentInfo.OrderPath}.{order}";
            }

            await _menuItemRepository.Update(menuItemInfo);

            // Update children IdPath and RootInfo
            if (menuItemInfo.IdPath != oldIdPath)
            {
                await _menuItemRepository.UpdateChildrenIdPath(oldIdPath, menuItemInfo.IdPath);
            }

            // Update parent menu item child count.
            if (oldParentId.HasValue)
            {
                // Update old parent menu item child count.
                var oldChildCount = await _menuItemRepository.GetChildCount(oldParentId.Value);
                await _menuItemRepository.UpdateChildCount(oldParentId.Value, oldChildCount);
            }

            if (menuItemInfo.ParentId.HasValue)
            {
                // Update new parent menu item child count.
                var newParentId = menuItemInfo.ParentId.Value;
                var newChildCount = await _menuItemRepository.GetChildCount(newParentId);
                await _menuItemRepository.UpdateChildCount(newParentId, newChildCount);
            }

            //update lai menu item child by Id
            var childCountid = await _menuItemRepository.GetChildCount(menuItemInfo.Id);
            await _menuItemRepository.UpdateChildCount(menuItemInfo.Id, childCountid);

            #region insert MenuItem Translation ItemSelect.
            //switch (menuItemMeta.SubjectType)
            //{
            //    case SubjectType.News:

            //        var listMenuItemTranslationInsert = new List<MenuItemTranslationMeta>();
            //        if (menuItemMeta.ListMenuItemSelected != null && menuItemMeta.ListMenuItemSelected.Any())
            //        {
            //            foreach (var menuItem in menuItemMeta.ListMenuItemSelected)
            //            {
            //                var checkMenuExistBySubjectId = await _menuItemRepository.CheckExistsBySubjectId(tenantId, menuItem.Id, SubjectType.News, menuId);
            //                if(!checkMenuExistBySubjectId)
            //                {
            //                    var listNewsTranslation = await _newsTranslationRepository.GetInfo(menuItem.Id, menuItem.LanguageId, true);
            //                    var menuItemInsert = new MenuItem();
            //                    menuItemInsert.MenuId = menuId;
            //                    menuItemInsert.SubjectId = menuItem.Id;
            //                    menuItemInsert.Icon = menuItem.Icon;
            //                    menuItemInsert.Image = menuItem.Image;
            //                    menuItemInsert.IsActive = menuItemMeta.IsActive;
            //                    menuItemInsert.ParentId = menuItemInfo.ParentId;
            //                    menuItemInsert.IdPath = menuItemInfo.IdPath.Replace(menuItemInfo.Id.ToString(), menuItemInsert.Id.ToString());
            //                    menuItemInsert.Url = listNewsTranslation.SeoLink;
            //                    menuItemInsert.Order = menuItemMeta.Order;
            //                    menuItemInsert.OrderPath = menuItemInfo.OrderPath.Replace(menuItem.Order.ToString(), menuItemMeta.Order.ToString());
            //                    menuItemInsert.Level = menuItemInfo.Level;
            //                    menuItemInsert.ChildCount = menuItemInfo.ChildCount;
            //                    menuItemInsert.CreatorId = lastUpdateUserId;
            //                    menuItemInsert.CreatorFullName = lastUpdateFullName;
            //                    var insertMenu = await _menuItemRepository.Insert(menuItemInsert);

            //                    var listNewsTranslation = await _newsTranslationRepository.GetByNewsId(menuItemMeta.ListMenuItemSelected);
            //                    listMenuItemTranslationInsert.Add(new MenuItemTranslationMeta
            //                    {
            //                        LanguageId = menuItemTranslation.LanguageId,
            //                        Name = menuItemTranslation.Title,
            //                        NamePath = $"{menuItemTranslation.SeoLink}.html",
            //                    });
            //                }

            //            }

            //            var resultInsertTranslation = await InsertMenuItemTranslation(menuItem, listMenuItemTranslationInsert);
            //            if (resultInsertTranslation.Code <= 0)
            //                return resultInsertTranslation;
            //        }
            //        break;

            //    case SubjectType.NewsCategory:
            //        var listCategoryTranslation = await _categoryTranslationRepositoryRepository.GetByCategoryId(int.Parse(menuItemSelect.Id));
            //        var listMenuItemTranslationCategoryInsert = new List<MenuItemTranslationMeta>();
            //        if (listCategoryTranslation != null && listCategoryTranslation.Any())
            //        {
            //            foreach (var menuItemTranslation in listCategoryTranslation)
            //            {
            //                listMenuItemTranslationCategoryInsert.Add(new MenuItemTranslationMeta
            //                {
            //                    LanguageId = menuItemTranslation.LanguageId,
            //                    Name = menuItemTranslation.Name,
            //                    NamePath = menuItemTranslation.SeoLink,
            //                });
            //            }

            //            var resultInsertTranslation = await InsertMenuItemTranslation(menuItem, listMenuItemTranslationCategoryInsert);
            //            if (resultInsertTranslation.Code <= 0)
            //                return resultInsertTranslation;
            //        }
            //        break;
            //    case SubjectType.Product:
            //        var listProductTranslation = await httpClient.GetAsync<List<ProductTranslationViewModel>>($"{apiUrls.WarehouseApiUrl}/products/translation/{menuItem.Id}");
            //        var listMenuItemTranslationProduct = new List<MenuItemTranslationMeta>();
            //        if (listProductTranslation != null && listProductTranslation.Any())
            //        {
            //            foreach (var productTranslationItem in listProductTranslation)
            //            {
            //                listMenuItemTranslationProduct.Add(new MenuItemTranslationMeta
            //                {
            //                    LanguageId = productTranslationItem.LanguageId,
            //                    Name = productTranslationItem.Name,
            //                    NamePath = $"{productTranslationItem.SeoLink}.html",
            //                });
            //            }

            //            var resultInsertTranslation = await InsertMenuItemTranslation(menuItem, listMenuItemTranslationProduct);
            //            if (resultInsertTranslation.Code <= 0)
            //                return resultInsertTranslation;
            //        }
            //        break;
            //    case SubjectType.ProductCategory:
            //        var listProductCategoryTranslation = await httpClient.GetAsync<List<ProductTranslationViewModel>>($"{apiUrls.WarehouseApiUrl}/product-categories/{menuItem.Id}, true, 1, 10000"); ;
            //        var listMenuItemProductCategoryTranslationInsert = new List<MenuItemTranslationMeta>();
            //        if (listProductCategoryTranslation != null && listProductCategoryTranslation.Any())
            //        {
            //            foreach (var menuItemTranslation in listProductCategoryTranslation)
            //            {
            //                listMenuItemProductCategoryTranslationInsert.Add(new MenuItemTranslationMeta
            //                {
            //                    LanguageId = menuItemTranslation.LanguageId,
            //                    Name = menuItemTranslation.Name,
            //                    NamePath = menuItemTranslation.SeoLink,
            //                });
            //            }

            //            var resultInsertTranslation = await InsertMenuItemTranslation(menuItem, listMenuItemProductCategoryTranslationInsert);
            //            if (resultInsertTranslation.Code <= 0)
            //                return resultInsertTranslation;
            //        }
            //        break;
            //}
            #endregion
            // Update menu item translation.
            var resultUpdateTranslation = await UpdateMenuItemTranslation();
            return new ActionResultResponse(resultUpdateTranslation.Code <= 0
                    ? resultUpdateTranslation.Code
                    : 1,
                resultUpdateTranslation.Code <= 0
                    ? resultUpdateTranslation.Message
                    : _websiteResourceService.GetString("Update menu item successful."));

            async Task<ActionResultResponse> UpdateMenuItemTranslation()
            {

                foreach (var menuItemTranslationMeta in menuItemMeta.MenuItemTranslations)
                {
                    var menuItemTranslationInfo =
                       await _menuItemTranslationRepository.GetInfo(menuItemInfo.Id,
                           menuItemTranslationMeta.LanguageId);

                    // check name exists.
                    var isNameExists = await _menuItemTranslationRepository.CheckExistsByName(menuItemInfo.MenuId, menuItemInfo.Id,
                        menuItemInfo.TenantId,
                        menuItemTranslationMeta.LanguageId, menuItemTranslationMeta.Name);
                    if (isNameExists && menuItemTranslationInfo?.Name != menuItemTranslationMeta.Name)
                    {
                        return new ActionResultResponse(-6,
                            _websiteResourceService.GetString(
                                "Menu item name: \"{0}\" already taken by another menu item. Please try again.",
                                menuItemTranslationMeta.Name));
                    }

                    // Check Seolink exists.
                    if (!string.IsNullOrEmpty(menuItemTranslationMeta.NamePath))
                    {
                        var isNamePathExists = await _menuItemTranslationRepository.CheckExistsByNamePath(menuItemInfo.MenuId, menuItemInfo.Id, tenantId,
                            menuItemTranslationMeta.LanguageId, menuItemTranslationMeta.NamePath);
                        if (isNamePathExists)
                        {
                            return new ActionResultResponse(-7,
                                _websiteResourceService.GetString(
                                    "Menu item seo link: \"{0}\" already taken by another menu item. Please try again.",
                                    menuItemTranslationMeta.NamePath));
                        }
                    }
                   
                    if (menuItemTranslationInfo == null)
                    {
                        menuItemTranslationInfo = new MenuItemTranslation
                        {
                            Name = menuItemTranslationMeta.Name.Trim(),
                            UnsignName = menuItemTranslationMeta.Name.Trim().StripVietnameseChars().ToUpper(),
                            Description = menuItemTranslationMeta.Description?.Trim(),
                            LanguageId = menuItemTranslationMeta.LanguageId,
                            ParentName = null
                        };

                        if (!string.IsNullOrEmpty(menuItemTranslationMeta.NamePath))
                        {
                            menuItemTranslationInfo.NamePath = menuItemTranslationMeta.NamePath;
                        }
                        else
                        {
                            menuItemTranslationInfo.NamePath = menuItemTranslationMeta.Name.ToUrlString();
                        }

                        if (menuItemMeta.ParentId.HasValue)
                        {
                            var parentName = await _menuItemTranslationRepository.GetMenuItemGroupName(
                                menuItemMeta.ParentId.Value,
                                menuItemTranslationMeta.LanguageId);
                            if (!string.IsNullOrEmpty(parentName))
                            {
                                menuItemTranslationInfo.ParentName = parentName;
                            }
                        }

                        await _menuItemTranslationRepository.Insert(menuItemTranslationInfo);
                    }
                    else
                    {
                        menuItemTranslationInfo.Name = menuItemTranslationMeta.Name.Trim();
                        menuItemTranslationInfo.Description = menuItemTranslationMeta.Description?.Trim();
                        menuItemTranslationInfo.UnsignName =
                            menuItemTranslationMeta.Name.StripVietnameseChars().ToUpper();

                        if (!string.IsNullOrEmpty(menuItemTranslationMeta.NamePath))
                        {
                            menuItemTranslationInfo.NamePath = menuItemTranslationMeta.NamePath;
                        }
                        else
                        {
                            menuItemTranslationInfo.NamePath = menuItemTranslationMeta.Name.ToUrlString();
                        }

                        menuItemTranslationInfo.ParentName = null;

                        if (menuItemMeta.ParentId.HasValue)
                        {
                            var parentName = await _menuItemTranslationRepository.GetMenuItemGroupName(
                                menuItemMeta.ParentId.Value,
                                menuItemTranslationMeta.LanguageId);
                            if (!string.IsNullOrEmpty(parentName))
                            {
                                menuItemTranslationInfo.ParentName = parentName;
                            }
                        }

                        await _menuItemTranslationRepository.Update(menuItemTranslationInfo);
                    }
                }
                return new ActionResultResponse(1,
                    _websiteResourceService.GetString("Update menu item successful."));
            }
        }

        public async Task<ActionResultResponse> DeleteMenuItem(string tenantId, string menuId, int menuItemId)
        {
            var menuItemInfo = await _menuItemRepository.GetInfo(menuItemId);
            if (menuItemInfo == null)
                return new ActionResultResponse(-1, _websiteResourceService.GetString("Menu item does not exists. Please try again."));

            if (menuItemInfo.TenantId != tenantId)
                return new ActionResultResponse(-2, _sharedResourceService.GetString(ErrorMessage.NotHavePermission));

            if (menuItemInfo.MenuId != menuId)
                return new ActionResultResponse<MenuItemDetailViewModel>(-2,
                    _websiteResourceService.GetString(ErrorMessage.SomethingWentWrong));

            // Check is has child.
            var menuItemChildCount = await _menuItemRepository.GetChildCount(menuItemInfo.Id);
            if (menuItemChildCount > 0)
                return new ActionResultResponse(-3,
                    _websiteResourceService.GetString("This menu item has children menu item. You can not delete this menu item."));

            // Delete menu item translate
            await _menuItemTranslationRepository.ForceDelete(menuItemInfo.Id);

            // Delete memu item
            var result = await _menuItemRepository.ForceDelete(menuItemInfo.Id);
            if (result > 0 && menuItemInfo.ParentId.HasValue)
            {
                //Update parent menu item child count.
                var childCount = await _menuItemRepository.GetChildCount(menuItemInfo.ParentId.Value);
                await _menuItemRepository.UpdateChildCount(menuItemInfo.ParentId.Value, childCount);
            }
            return new ActionResultResponse(result, result > 0
                ? _websiteResourceService.GetString("Delete menu item successful.")
                : _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong));
        }

        public async Task<ActionResultResponse<MenuItemDetailViewModel>> GetDetailMenuItem(string tenantId, string menuId, int menuItemId)
        {
            var menuItemInfo = await _menuItemRepository.GetInfo(menuItemId, true);
            if (menuItemInfo == null)
                return new ActionResultResponse<MenuItemDetailViewModel>(-1,
                    _websiteResourceService.GetString("Menu item does not exists."));

            if (menuItemInfo.TenantId != tenantId)
                return new ActionResultResponse<MenuItemDetailViewModel>(-2,
                    _websiteResourceService.GetString(ErrorMessage.NotHavePermission));

            if (menuItemInfo.MenuId != menuId)
                return new ActionResultResponse<MenuItemDetailViewModel>(-3,
                    _websiteResourceService.GetString(ErrorMessage.SomethingWentWrong));

            var menuItemDetail = new MenuItemDetailViewModel
            {
                MenuId = menuItemInfo.MenuId,
                SubjectId = menuItemInfo.SubjectId,
                SubjectType = menuItemInfo.SubjectType,
                Icon = menuItemInfo.Icon,
                Image = menuItemInfo.Image,
                Url = menuItemInfo.Url,
                IsActive = menuItemInfo.IsActive,
                ParentId = menuItemInfo.ParentId,
                Order = menuItemInfo.Order,
                ConcurrencyStamp = menuItemInfo.ConcurrencyStamp,
                Level = menuItemInfo.Level,
                ChildCount = menuItemInfo.ChildCount,
                MenuItemTranslations = await _menuItemTranslationRepository.GetsByMenuItemId(menuItemInfo.Id)
            };
            return new ActionResultResponse<MenuItemDetailViewModel>
            {
                Code = 1,
                Data = menuItemDetail
            };
        }

        public async Task<SearchResult<MenuItemSearchViewModel>> SearchMenuItem(string tenantId, string languageId, string keyword, string menuId, bool? isActive, int page,
            int pageSize)
        {
            var items = await _menuItemRepository.SearchMenuItem(tenantId, languageId, keyword, menuId, isActive, page, pageSize,
                out var totalRows);
            return new SearchResult<MenuItemSearchViewModel>
            {
                TotalRows = totalRows,
                Items = items
            };
        }

        public async Task<List<MenuItemForSelectViewModel>> GetMenuItemForSelect(string tenantId, string languageId, string keyword, string menuId, int page, int pageSize)
        {
            return await _menuItemRepository.GetAllMenuItemForSelect(tenantId, languageId, keyword, menuId, page, pageSize, out var totalRows);
        }

        public async Task<List<TreeData>> GetFullMenuItemTree(string tenantId, string languageId, string menuId)
        {
            var infoMenuItem = await _menuItemRepository.GetAllActivatedMenuItem(tenantId, menuId, languageId);
            if (infoMenuItem == null || !infoMenuItem.Any())
                return null;

            var trees = RenderTree(infoMenuItem, null);
            return trees;

            List<TreeData> RenderTree(List<MenuItemSearchViewModel> menuItems, int? parentId)
            {
                var tree = new List<TreeData>();
                var parentMenuItems = menuItems.Where(x => x.ParentId == parentId).ToList();
                if (parentMenuItems.Any())
                {
                    parentMenuItems.ForEach(x =>
                    {
                        var treeData = new TreeData
                        {
                            Id = x.Id,
                            Text = x.Name,
                            ParentId = x.ParentId,
                            IdPath = x.IdPath,
                            Data = x,
                            ChildCount = x.ChildCount,
                            Icon = String.Empty,
                            State = new GHM.Infrastructure.Models.State(),
                            Children = RenderTree(menuItems, x.Id)
                        };
                        tree.Add(treeData);
                    });
                }
                return tree;
            }
        }

        public async Task<ActionResultResponse> UpdateOrderAndParentId(string tenantId, string lastUpdateUserId,
            string lastUpdateFullName, string menuId,
            MenuItemUpdate menuItem)
        {
            return new ActionResultResponse(1,
                _websiteResourceService.GetString("Update menu item successful."));
        }

        public async Task<List<MenuItemSearchViewModel>> GetAllActivatedMenuItem(string tenantId, string languageId, string menuId)
        {
            return await _menuItemRepository.GetAllActivatedMenuItemForClient(tenantId, menuId, languageId);
        }

        public async Task<List<MenuItemSearchViewModel>> GetAllActivatedMenuItemByPosition(string tenantId, string languageId, Position position)
        {
            var menuInfo = await _menuRepository.GetInfoByPosition(tenantId, position);
            if (menuInfo == null)
                return null;

            return await _menuItemRepository.GetAllActivatedMenuItemForClient(tenantId, menuInfo.Id, languageId);
        }
        #endregion MenuItems

        #region private
        private async Task RollbackInsertMenuItem(int menuItemId)
        {
            await _menuItemRepository.ForceDelete(menuItemId);
        }

        private async Task RollbackInsertMenuItemTranslation(int menuItemId)
        {
            await _menuItemTranslationRepository.ForceDelete(menuItemId);
        }

        public async Task<MenuItemViewModel> GetDetailBySeoLink(string tenantId, string seoLink, string languageId)
        {
           return  await _menuItemTranslationRepository.GetInfoBySeoLink(tenantId, seoLink, languageId);
        }

        public async Task<MenuDetailViewModel> GetAllActivatedMenuByPosition(string tenantId, string languageId, Position position)
        {
            var menuInfo = await _menuRepository.GetInfoByPosition(tenantId, position);

            if (menuInfo == null)
                return null;
            var listMenuItems = await _menuItemRepository.GetAllActivatedMenuItem(tenantId, menuInfo.Id, languageId);

            return new MenuDetailViewModel
            {
                Id = menuInfo.Id,
                Position = menuInfo.Position,
                ConcurrencyStamp = menuInfo.ConcurrencyStamp,
                Description = menuInfo.Description,
                EffectType = menuInfo.EffectType,
                Icon = menuInfo.Icon,
                Name = menuInfo.Name,
                Order = menuInfo.Order,
                IsActive = menuInfo.IsActive,
                MenuItems = listMenuItems
            };
        }

        public async Task<ActionResultResponse<MenuItemSelectedViewModel>> ItemSelected(string tenantId, int subjectType, string subjectId, string languageId)
        {
            if ((SubjectType)subjectType == SubjectType.News)
            {
                var item = await _newsTranslationRepository.GetNewsDetailForMenu(tenantId, subjectId, languageId, true);
                if (item == null)
                    return new ActionResultResponse<MenuItemSelectedViewModel>(-1, _websiteResourceService.GetString("News does not exist"));
                return new ActionResultResponse<MenuItemSelectedViewModel>
                {
                    Code = 1,
                    Data = item
                };
            }
            else if ((SubjectType)subjectType == SubjectType.NewsCategory)
            {
                var item = await _categoryTranslationRepositoryRepository.GetCategoryDetailForMenu(tenantId, subjectId, languageId, true);
                if (item == null)
                    return new ActionResultResponse<MenuItemSelectedViewModel>(-1, _websiteResourceService.GetString("Category does not exist"));

                return new ActionResultResponse<MenuItemSelectedViewModel>
                {
                    Code = 1,
                    Data = item
                };
            }
            else
            {
                return new ActionResultResponse<MenuItemSelectedViewModel>
                {
                    Code = -1,
                    Message = _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong)
                };
            }
        }

        public async Task<ActionResultResponse<bool>> CheckExistBySubJectId(string tenantId, string id, SubjectType subjectType)
        {
            var isExistsInMenu =
                await _menuItemRepository.CheckExistsBySubjectId(id.ToString(), subjectType);

            return isExistsInMenu ? new ActionResultResponse<bool>(-5, _sharedResourceService.GetString(ErrorMessage.SomethingWentWrong)) : new ActionResultResponse<bool>
            {
                Code = 1,
                Data = isExistsInMenu
            };
        }
        #endregion

    }
}
