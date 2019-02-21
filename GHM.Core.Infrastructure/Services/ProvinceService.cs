using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.IServices;
using GHM.Core.Domain.Models;
using GHM.Infrastructure.ViewModels;
using System.Threading.Tasks;

namespace GHM.Core.Infrastructure.Services
{
    public class ProvinceService : IProvinceService
    {
        private readonly IProvinceRepository _provinceRepository;
        public ProvinceService(IProvinceRepository provinceRepository)
        {
            _provinceRepository = provinceRepository;
        }

        public async Task<SearchResult<National>> GetAllNational(string languageId)
        {
            var items = await _provinceRepository.GetAllNational(languageId);
            return new SearchResult<National>
            {
                Items = items
            };
        }

        public async Task<SearchResult<Province>> GetProvinceByNational(int nationalId)
        {
            var items = await _provinceRepository.GetProvinceByNational(nationalId);
            return new SearchResult<Province>
            {
                Items = items,
            };
        }

        public async Task<SearchResult<Province>> GetAllProvince()
        {
            var items = await _provinceRepository.GetAllProvince();
            return new SearchResult<Province>
            {
                Items = items,
            };
        }

        public async Task<SearchResult<District>> GetAllDistrict()
        {
            var items = await _provinceRepository.GetAllDistrict();
            return new SearchResult<District>
            {
                Items = items,
            };
        }

        public async Task<SearchResult<District>> GetDistrictByProvinceId(int provinceId)
        {
            var items = await _provinceRepository.GetDistrictByProvinceId(provinceId);
            return new SearchResult<District>
            {
                Items = items
            };
        }

        public async Task<Province> GetProvinceInfo(int provinceId)
        {
            return await _provinceRepository.GetProvinceInfo(provinceId);
        }

        public async Task<District> GetDistrictInfo(int districtId)
        {
            return await _provinceRepository.GetDistrictInfo(districtId);
        }

        public async Task<National> GetNationalById(int nationalId)
        {
            return await _provinceRepository.GetNationById(nationalId);
        }
    }
}
