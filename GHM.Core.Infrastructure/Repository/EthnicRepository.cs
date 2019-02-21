using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.SqlServer;
using GHM.Infrastructure.ViewModels;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GHM.Core.Infrastructure.Repository
{
    public class EthnicRepository : RepositoryBase, IEthnicRepository
    {
        private readonly IRepository<Ethnic> _ethnicRepository;
        public EthnicRepository(IDbContext context) : base(context)
        {
            _ethnicRepository = Context.GetRepository<Ethnic>();
        }

        public async Task<Ethnic> GetInfo(int id, bool isReadonly)
        {
            return await _ethnicRepository.GetAsync(isReadonly, c => c.Id == id);
        }

        public Task<List<EthnicSearchViewModel>> GetAll(string languageId)
        {
            var query = Context.Set<Ethnic>().AsNoTracking().Where(c => c.LanguageId == languageId)
                .Select(c => new EthnicSearchViewModel
                {
                    Id = c.Id,
                    Name = c.Name,
                });

            return query.ToListAsync();
        }
    }
}
