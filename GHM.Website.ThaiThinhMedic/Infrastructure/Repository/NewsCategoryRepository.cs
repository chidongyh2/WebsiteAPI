using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;

using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class NewsCategoryRepository : RepositoryBase, INewsCategoryRepository
    {
        private readonly IRepository<NewsCategory> _newsCategoryRepository;
        public NewsCategoryRepository(IDbContext context) : base(context)
        {
            _newsCategoryRepository = Context.GetRepository<NewsCategory>();
        }
       
        public async Task<List<int>> GetListCategoryIdsByNewsId(int newsId)
        {
            return await _newsCategoryRepository.GetsAsAsync(x => x.CategoryId, x => x.NewsId == newsId);
        }    
    }
}
