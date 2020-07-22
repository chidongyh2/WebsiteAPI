using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.Resources;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using State = GHM.Infrastructure.Models.State;

namespace GHM.Core.Infrastructure.Services
{
    public class PageService : IPageService
    {
        private readonly IPageRepository _pageRepository;
        private readonly IPageTranslationService _pageTranslationService;
        private readonly IPageTranslationRepository _pageTranslationRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCoreResource> _resourceService;

        public PageService(IPageRepository pageRepository, IResourceService<SharedResource> sharedResourceService, IResourceService<GhmCoreResource> resourceService,
            IPageTranslationService pageTranslationService, IPageTranslationRepository pageTranslationRepository)
        {
            _pageRepository = pageRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _pageTranslationService = pageTranslationService;
            _pageTranslationRepository = pageTranslationRepository;
        }

        public async Task<ActionResultResponse> Insert(PageMeta pageMeta)
        {
            // Check Id exists.
            var isIdExists = await _pageRepository.CheckExists(pageMeta.Id);
            if (isIdExists)
                return new ActionResultResponse(-1, _resourceService.GetString("Page already exists."));

            if (pageMeta.PageTranslations == null || !pageMeta.PageTranslations.Any())
                return new ActionResultResponse(-2, _resourceService.GetString("Please add at least one language."));

            var page = new Page
            {
                Id = pageMeta.Id,
                BgColor = pageMeta.BgColor?.Trim(),
                Icon = pageMeta.Icon?.Trim(),
                IsActive = pageMeta.IsActive,
                ParentId = pageMeta.ParentId,
                OrderItem = pageMeta.Order,
                Url = pageMeta.Url?.Trim(),
                IdPath = "-1"
            };

            if (pageMeta.ParentId.HasValue)
            {
                var parentInfo = await _pageRepository.GetInfo(pageMeta.ParentId.Value);
                if (parentInfo == null)
                    return new ActionResultResponse(-3, _resourceService.GetString("Parent page does not exists."));

                page.ParentId = parentInfo.Id;
                page.IdPath = $"{parentInfo.IdPath}.-1";
            }

            var resultInsertPage = await _pageRepository.Insert(page);
            if (resultInsertPage <= 0)
                return new ActionResultResponse(resultInsertPage, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            #region Update page idPath.

            page.IdPath = page.IdPath.Replace("-1", page.Id.ToString());
            await _pageRepository.Update(page);
            #endregion

            // Insert page translation.
            foreach (var pageTranslation in pageMeta.PageTranslations)
            {
                var pageTranslate = new PageTranslation
                {
                    PageId = page.Id,
                    Description = pageTranslation.Description?.Trim(),
                    LanguageId = pageTranslation.LanguageId?.Trim(),
                    Name = pageTranslation.Name.Trim(),
                    UnsignName = pageTranslation.Name.Trim().StripVietnameseChars().ToUpper()
                };
                var resultPageTranslation = await _pageTranslationService.Save(pageTranslate);
                if (resultPageTranslation.Code <= 0)
                {
                    // Roleback insert.
                    await RollbackInsert(page.Id);
                }
            }

            return new ActionResultResponse(resultInsertPage, _resourceService.GetString("Add new page successful."));
        }

        public async Task<ActionResultResponse> Update(PageMeta pageMeta)
        {
            if (pageMeta.PageTranslations == null || !pageMeta.PageTranslations.Any())
                return new ActionResultResponse(-2, _resourceService.GetString("Please add at least one language."));

            var pageInfo = await _pageRepository.GetInfo(pageMeta.Id);
            if (pageInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("Page not found."));

            var oldIdPath = pageInfo.IdPath;

            if (pageMeta.ParentId.HasValue && pageMeta.ParentId != pageInfo.ParentId)
            {
                var parentInfo = await _pageRepository.GetInfo(pageMeta.ParentId.Value);
                if (parentInfo == null)
                    return new ActionResultResponse(-3, _resourceService.GetString("Parent page does not exists."));

                pageInfo.ParentId = parentInfo.Id;
                pageInfo.IdPath = $"{parentInfo.IdPath}.{pageInfo.Id}";
            }
            if (!pageMeta.ParentId.HasValue)
            {
                pageInfo.ParentId = null;
                pageInfo.IdPath = pageInfo.Id.ToString();
            }

            pageInfo.BgColor = pageMeta.BgColor;
            pageInfo.Icon = pageMeta.Icon;
            pageInfo.IsActive = pageMeta.IsActive;
            pageInfo.OrderItem = pageMeta.Order;
            pageInfo.ParentId = pageMeta.ParentId;
            pageInfo.Url = pageMeta.Url;
            var resultUpdatePage = await _pageRepository.Update(pageInfo);
            if (resultUpdatePage < 0)
                return new ActionResultResponse(resultUpdatePage, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            #region update children idPath
            await _pageRepository.UpdateIdPath(oldIdPath, pageInfo.IdPath);
            #endregion

            foreach (var pageTranslation in pageMeta.PageTranslations)
            {
                var pageTran = new PageTranslation(pageInfo.Id, pageTranslation.LanguageId, pageTranslation.Name, pageTranslation.Description);
                await _pageTranslationService.Save(pageTran);
            }

            return new ActionResultResponse(1, _resourceService.GetString("Update page successful."));
        }

        public async Task<ActionResultResponse> Delete(int id)
        {
            var result = await _pageRepository.Delete(id);
            if (result <= 0)
                return new ActionResultResponse(result, result == -1 ?
                    _resourceService.GetString("Page not found.")
                    : _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            return new ActionResultResponse(result, _resourceService.GetString("Delete page successful."));
        }

        public async Task<ActionResultResponse<PageDetailViewModel>> Detail(int id)
        {
            var pageDetailViewModel = new PageDetailViewModel();
            var pageInfo = await _pageRepository.GetInfo(id, true);
            if (pageInfo == null)
                return new ActionResultResponse<PageDetailViewModel>(-1, _resourceService.GetString("Page not found."));

            pageDetailViewModel.Id = pageInfo.Id;
            pageDetailViewModel.BgColor = pageInfo.BgColor;
            pageDetailViewModel.ChildCount = pageInfo.ChildCount;
            pageDetailViewModel.Icon = pageInfo.Icon;
            pageDetailViewModel.IsActive = pageInfo.IsActive;
            pageDetailViewModel.Order = pageInfo.OrderItem;
            pageDetailViewModel.ParentId = pageInfo.ParentId;
            pageDetailViewModel.Url = pageInfo.Url;
            pageDetailViewModel.PageTranslation = await _pageTranslationRepository.SearchByPageId(id);
            return new ActionResultResponse<PageDetailViewModel>
            {
                Data = pageDetailViewModel
            };
        }

        public async Task<SearchResult<PageSearchViewModel>> Search(string languageId, string keyword, bool? isActive)
        {
            var items = await
                _pageRepository.Search(keyword, isActive, languageId);
            return new SearchResult<PageSearchViewModel>
            {
                Items = items
            };
        }

        public async Task<List<PageSearchActivatedViewModel>> SearchActivatedPages(string languageId, string tenantId, string keyword)
        {
            return await _pageRepository.SearchActivatedPages(languageId, tenantId, keyword);
        }

        public async Task<List<TreeData>> GetFullPagesTree(string languageId)
        {
            var tree = new List<TreeData>();
            var pages = await _pageRepository.Search(string.Empty, true, languageId);
            if (pages == null || !pages.Any())
                return tree;

            tree = RenderPageTree(pages, null);
            return tree;
        }

        private async Task RollbackInsert(int pageId)
        {
            await _pageRepository.ForceDelete(pageId);
            await _pageTranslationService.Delete(pageId);
        }

        private List<TreeData> RenderPageTree(List<PageSearchViewModel> pages, int? parentId)
        {
            var pageTree = new List<TreeData>();
            var listPages = pages.Where(x => x.ParentId == parentId).ToList();
            if (!listPages.Any()) return pageTree;

            pageTree.AddRange(listPages.Select(page => new TreeData
            {
                Id = page.Id,
                Text = page.Name,
                Icon = page.Icon,
                ParentId = parentId,
                IdPath = page.IdPath,
                Data = page,
                Children = RenderPageTree(pages, page.Id),
                State = new State()
            }));
            return pageTree;
        }
    }
}
