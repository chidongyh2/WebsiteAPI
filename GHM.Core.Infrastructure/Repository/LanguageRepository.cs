using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;

namespace GHM.Core.Infrastructure.Repository
{
    public class LanguageRepository : RepositoryBase, ILanguageRepository
    {
        private readonly IRepository<Language> _languageRepository;
        public LanguageRepository(IDbContext context) : base(context)
        {
            _languageRepository = Context.GetRepository<Language>();
        }

        public async Task<int> Insert(Language language)
        {
            _languageRepository.Create(language);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(string id, Language language)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> CheckExistsById(string id, bool isReadOnly = false)
        {
            return await _languageRepository.ExistAsync(x => x.Id == id);
        }

        public async Task<LanguageDetailViewModel> GetInfo(string id, bool isReadOnly = false)
        {
            var language = await _languageRepository.GetAsync(isReadOnly, x => x.Id == id);
            var result = new LanguageDetailViewModel()
            {
                Id = language.Id,
                Name = language.Name,
                Description = language.Description,
                IsActive = language.IsActive
            };
            return result;
        }

        public Task<List<Suggestion<string>>> Suggestion(string keyword, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Language, bool>> spec = x => x.IsActive;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim();
                spec = spec.And(x => x.Name.Contains(keyword));
            }
            totalRows = _languageRepository.Count(spec);
            return _languageRepository.GetsAsAsync(x => new Suggestion<string>
            {
                Id = x.Id,
                Name = x.Name
            }, spec);
        }
        
        public async Task<List<LanguageDetailViewModel>> GetAll(bool isReadOnly = false)
        {
            Expression<Func<Language, bool>> spec = t => t.IsActive;

            var query = from l in Context.Set<Language>().Where(spec)
                        select new LanguageDetailViewModel()
                        {
                            Id = l.Id,
                            Description = l.Description,
                            IsActive = l.IsActive,
                            Name = l.Name,
                        };

            return await query.OrderByDescending(x => x.Name)
                .ToListAsync();
        }

        //public async Task<List<T>> GetAllLanguage<T>(Expression<Func<Language, T>> projector)
        //{
        //    return await _languageRepository.GetsAsAsync(projector, x => x.IsActive);
        //}
    }
}
