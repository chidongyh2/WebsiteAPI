using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;

namespace GHM.Core.Infrastructure.Repository
{
    public class PageTranslationRepository : RepositoryBase, IPageTranslationRepository
    {
        private readonly IRepository<PageTranslation> _pageTranslationRepository;

        public PageTranslationRepository(IDbContext context) : base(context)
        {
            _pageTranslationRepository = Context.GetRepository<PageTranslation>();
        }

        public async Task<int> Insert(PageTranslation pageTranslation)
        {
            _pageTranslationRepository.Create(pageTranslation);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(PageTranslation pageTranslation)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> DeleteByPagesId(int pageId)
        {
            var pages = await _pageTranslationRepository.GetsAsync(false, x => x.PageId == pageId && !x.IsDelete);
            if (pages == null)
                return -1;

            foreach (var page in pages)
            {
                page.IsDelete = true;
            }
            return await Context.SaveChangesAsync();
        }

        public async Task<PageTranslation> GetInfo(int pageId, string languageId, bool isReadOnly = false)
        {
            return await _pageTranslationRepository.GetAsync(isReadOnly, x => x.PageId == pageId && x.LanguageId == languageId && !x.IsDelete);
        }

        public async Task<List<PageTranslation>> GetByPageId(int pageId)
        {
            return await _pageTranslationRepository.GetsAsync(true, x => x.PageId == pageId && !x.IsDelete);
        }

        public async Task<List<PageTranslationSearchViewModel>> SearchByPageId(int pageId)
        {
            return await _pageTranslationRepository.GetsAsAsync(x => new PageTranslationSearchViewModel
            {
                Name = x.Name,
                Description = x.Description,
                LanguageId = x.LanguageId
            }, x => x.PageId == pageId && !x.IsDelete);
        }

        public async Task<bool> CheckExists(int pageId, string languageId, string name)
        {
            return await _pageTranslationRepository.ExistAsync(x => x.PageId != pageId && x.LanguageId == languageId && x.Name.Equals(name.Trim()) && !x.IsDelete);
        }
    }
}
