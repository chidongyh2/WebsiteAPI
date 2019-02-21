using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Models;

namespace GHM.Core.Domain.IRepository
{
    public interface ILanguageRepository
    {
        Task<int> Insert(Language language);

        Task<int> Update(string id, Language language);

        Task<bool> CheckExistsById(string id, bool isReadOnly = false);

        Task<LanguageDetailViewModel> GetInfo(string id, bool isReadOnly = false);

        Task<List<Suggestion<string>>> Suggestion(string keyword, int page, int pageSize, out int totalRows);

        Task<List<LanguageDetailViewModel>> GetAll(bool isReadOnly = false);
    }
}
