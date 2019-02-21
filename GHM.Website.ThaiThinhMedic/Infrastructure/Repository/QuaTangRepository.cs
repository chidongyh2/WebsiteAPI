using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class QuaTangRepository : RepositoryBase, IQuaTangRepository
    {
        private readonly IRepository<QuaTang> _quaTangRepository;
        public QuaTangRepository(IDbContext context) : base(context)
        {
            _quaTangRepository = Context.GetRepository<QuaTang>();
        }

        public async Task<List<QuaTang>> GetList()
        {
            return await _quaTangRepository.GetsAsync(true, x => x.Dung.HasValue && x.Dung.Value && !string.IsNullOrEmpty(x.Nhom));
        }

        public async Task<bool> CheckExists(string id)
        {
            return await _quaTangRepository.ExistAsync(x => x.MaQuaTang == id && x.Dung.HasValue && x.Dung.Value && !string.IsNullOrEmpty(x.Nhom));
        }
    }
}
