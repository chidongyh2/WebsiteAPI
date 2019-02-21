using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.Resources;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;

namespace GHM.Core.Infrastructure.Services
{
    public class PageTranslationService : IPageTranslationService
    {
        private readonly IPageTranslationRepository _pageTranslationRepository;
        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCoreResource> _resourceService;

        public PageTranslationService(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmCoreResource> resourceService, IPageTranslationRepository pageTranslationRepository)
        {
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
            _pageTranslationRepository = pageTranslationRepository;
        }

        public async Task<ActionResultResponse> Save(PageTranslation pageTranslation)
        {
            var pageInfo = await _pageTranslationRepository.GetInfo(pageTranslation.PageId, pageTranslation.LanguageId);
            if (pageInfo == null)
            {
                var resultInsert = await _pageTranslationRepository.Insert(pageTranslation);
                return new ActionResultResponse(resultInsert, resultInsert <= 0
                    ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                    : _resourceService.GetString("Add new page successful."));
            }

            pageInfo.Name = pageTranslation.Name.Trim();
            pageInfo.Description = pageTranslation.Description?.Trim();
            pageInfo.UnsignName = pageInfo.Name.StripVietnameseChars().ToUpper();
            var resultUpdate = await _pageTranslationRepository.Update(pageInfo);
            return new ActionResultResponse(resultUpdate, resultUpdate <= 0
                ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
                : _resourceService.GetString("Update page successful."));
        }

        public async Task<ActionResultResponse> Delete(int pageId)
        {
            var result = await _pageTranslationRepository.DeleteByPagesId(pageId);
           return new ActionResultResponse(result, result <= 0
               ? _sharedResourceService.GetString("Something went wrong. Please contact with administrator.")
               : _resourceService.GetString("Delete page successful."));
        }                
    }
}
