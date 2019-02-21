using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.ViewModels;
using System.Threading.Tasks;

namespace GHM.Core.Infrastructure.Services
{
    public class ReligionService : IReligionService
    {
        private readonly IReligionRepository _religionRepository;

        public ReligionService(IReligionRepository religionRepository)
        {
            _religionRepository = religionRepository;
        }

        public async Task<SearchResult<ReligionSearchViewModel>> GetForSelect(string languageId)
        {
            var items = await _religionRepository.GetForSelect(x => new ReligionSearchViewModel
            {
                Id = x.Id,
                Name = x.Name,
            }, languageId);

            return new SearchResult<ReligionSearchViewModel>
            {
                Items = items,
            };
        }

        public async Task<Religion> GetInfo(int id)
        {
            return await _religionRepository.GetInfo(id, true);
        }
    }
}
