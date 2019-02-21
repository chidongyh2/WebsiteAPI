using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.ViewModels;

namespace GHM.Core.Domain.IServices
{
    public interface ILanguageService
    {
        Task<ActionResultResponse> Insert(LanguageMeta languageMeta);

        Task<ActionResultResponse> Update(string id, LanguageMeta languageMeta);

        Task<ActionResultResponse<LanguageDetailViewModel>> GetInfo(string id);

        Task<SearchResult<Suggestion<string>>> Suggestion(string keyword, int page, int pageSize);

        Task<SearchResult<LanguageDetailViewModel>> GetAll();      
    }
}
