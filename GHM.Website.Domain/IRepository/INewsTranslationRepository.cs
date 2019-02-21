using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;

namespace GHM.Website.Domain.IRepository
{
    public interface INewsTranslationRepository
    {
        Task<int> Insert(NewsTranslation newsTranslation);

        Task<int> Update(NewsTranslation newsTranslation);

        Task<int> Inserts(List<NewsTranslation> newsTranslations);

        Task<int> Delete(string newsId);

        Task<int> ForceDelete(string newsId);

        Task<NewsTranslation> GetInfo(string newsId, string languageId, bool isReadOnly = false);

        Task<string> GetNewsIdName(string newsId, string languageId);

        Task<List<NewsTranslationViewModel>> GetByNewsId(string newsId, bool isReadOnly = false);

        Task<bool> CheckExists(string tenantId, string newsId, string languageId, string title);

        Task<bool> CheckSeoLinkExists(string tenantId, string newsId, string languageId, string seolink);
        Task<string> GetNewsIdBySeoLink(string tenantId, string languageId, string seoLink);
    }
}
