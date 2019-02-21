using GHM.Core.Domain.IServices;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.Resources;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.Resources;
using GHM.Infrastructure.ViewModels;

namespace GHM.Core.Infrastructure.Services
{
    public class LanguageService : ILanguageService
    {
        private readonly ILanguageRepository _languageRepository;

        private readonly IResourceService<SharedResource> _sharedResourceService;
        private readonly IResourceService<GhmCoreResource> _resourceService;

        public LanguageService(ILanguageRepository languageRepository,
            IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmCoreResource> resourceService)
        {
            _languageRepository = languageRepository;
            _sharedResourceService = sharedResourceService;
            _resourceService = resourceService;
        }

        public async Task<ActionResultResponse> Insert(LanguageMeta languageMeta)
        {
            var languageId = Guid.NewGuid().ToString();
            var language = new Language
            {
                Id = languageId,
                Description = languageMeta.Description,
                IsActive = languageMeta.IsActive,
                Name = languageMeta.Name,
            };

            var result = await _languageRepository.Insert(language);
            if (result <= 0)
                return new ActionResultResponse(result, _sharedResourceService.GetString("Something went wrong. Please contact with administrator."));

            return new ActionResultResponse(-5, _resourceService.GetString("Can not insert new Language. Please contact with administrator."));
        }

        public async Task<ActionResultResponse> Update(string id, LanguageMeta languageMeta)
        {
            var checkExists = await _languageRepository.CheckExistsById(id);
            if (!checkExists)
                return new ActionResultResponse(-1, _resourceService.GetString("Language does not exists."));

            var languageDetailInfo = await _languageRepository.GetInfo(id);
            var languageInfo = new Language()
            {
                Id = languageDetailInfo.Id,
                Name = languageMeta.Name,
                Description = languageMeta.Description,
                IsActive = languageMeta.IsActive
            };

            await _languageRepository.Update(id, languageInfo);

            return new ActionResultResponse(1, _resourceService.GetString("Update Language successful."));
        }

        public async Task<ActionResultResponse<LanguageDetailViewModel>> GetInfo(string id)
        {
            var languageDetailInfo = await _languageRepository.GetInfo(id);

            var languageViewModel = new LanguageDetailViewModel()
            {
                Id = languageDetailInfo.Id,
                Description = languageDetailInfo.Description,
                IsActive = languageDetailInfo.IsActive,
                Name = languageDetailInfo.Name,
            };

            return new ActionResultResponse<LanguageDetailViewModel>
            {
                Code = 1,
                Data = languageViewModel
            };
        }

        public async Task<SearchResult<Suggestion<string>>> Suggestion(string keyword, int page, int pageSize)
        {
            var items = await _languageRepository.Suggestion(keyword, page, pageSize, out var totalRows);
            return new SearchResult<Suggestion<string>>(items, totalRows);
        }

        public async Task<SearchResult<LanguageDetailViewModel>> GetAll()
        {
            var items = await _languageRepository.GetAll();
            return new SearchResult<LanguageDetailViewModel>
            {
                Items = items,
                TotalRows = items.Count
            };
        }
    }
}
