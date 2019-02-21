using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.Models;
using GHM.Infrastructure.ViewModels;
using System.Threading.Tasks;
namespace GHM.Core.Infrastructure.Services
{
    public class EthnicService : IEthnicService
    {
        private readonly IEthnicRepository _ethnicRepository;

        public EthnicService(IEthnicRepository enthnicRepository)
        {
            _ethnicRepository = enthnicRepository;
        }

        public async Task<Ethnic> GetInfo(int id)
        {
            return await _ethnicRepository.GetInfo(id, true);
        }

        public async Task<SearchResult<EthnicSearchViewModel>> SearchEthnicAll(string languageId)
        {
            var items = await _ethnicRepository.GetAll(languageId);
            return new SearchResult<EthnicSearchViewModel>
            {
                Items = items,
                TotalRows = 0,
                Code = 1,
            };
        }
    }
}
