using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.IServices;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.Resources;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Infrastructure.Services
{
    public class CategoryInvolveService : ICategoryInvolveService
    {
        private readonly ICategoryInvolveRepository _categoryInvolveRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmWebsiteResource> _resourceService;

        public CategoryInvolveService(ICategoryInvolveRepository categoryInvolveRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> resourceService)
        {
            _categoryInvolveRepository = categoryInvolveRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public async Task<SearchResult<CategoryInvolveNewViewModel>> SearchNews(string tenantId, string languageId, int categoryId, int page, int pageSize)
        {
            var items = await _categoryInvolveRepository.SearchNews(tenantId, languageId, categoryId, page, pageSize, out int totalRows);
            return new SearchResult<CategoryInvolveNewViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }

        public async Task<ActionResultResponse> Insert(CategoryInvolveMeta categoryInvolveMeta)
        {
            var categoryInvolve = new CategoryInvolve
            {
                CategoryId = categoryInvolveMeta.CategoryId,
                CategoryInvolveId = categoryInvolveMeta.CategoryInvolveId,
            };

            var result = await _categoryInvolveRepository.Insert(categoryInvolve);
            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            return new ActionResultResponse(-1, _resourceService.GetString("Can not insert new CategoryInvolve. Please contact with administrator."));
        }

        public async Task<ActionResultResponse> Update(CategoryInvolveMeta categoryInvolveMeta)
        {
            var checkExists = await _categoryInvolveRepository.CheckExists(categoryInvolveMeta.CategoryId, categoryInvolveMeta.CategoryInvolveId);
            if (!checkExists)
                return new ActionResultResponse(-2, _resourceService.GetString("CategoryInvolve does not exists."));

            var categoryInvolveInfo=new CategoryInvolve()
            {
                CategoryId = categoryInvolveMeta.CategoryId,
                CategoryInvolveId = categoryInvolveMeta.CategoryInvolveId,
            };

            await _categoryInvolveRepository.Update(categoryInvolveInfo);

            return new ActionResultResponse(1, _resourceService.GetString("Update CategoryInvolve successful."));
        }

        public async Task<ActionResultResponse> Delete(int categoryId, int categoryInvolveId)
        {
            var categoryInvolveInfo = await _categoryInvolveRepository.GetInfo(categoryId, categoryInvolveId);
            if (categoryInvolveInfo == null)
                return new ActionResultResponse(-1, _resourceService.GetString("CategoryInvolve does not exists."));

            var result = await _categoryInvolveRepository.Delete(categoryId, categoryInvolveId);
            return new ActionResultResponse(result, result <= 0 ? _resourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Delete CategoryInvolve successful."));
        }

        public async Task<SearchResult<CategoryInvolveCategoryViewModel>> GetListCategoryInvolveId(string tenantId, string languageId, int categoryId, int page, int pageSize)
        {
            var items = await _categoryInvolveRepository.GetListCategoryInvolveId(tenantId, languageId, categoryId, page, pageSize, out int totalRows);
            return new SearchResult<CategoryInvolveCategoryViewModel>
            {
                Items = items,
                TotalRows = totalRows
            };
        }
    }
}
