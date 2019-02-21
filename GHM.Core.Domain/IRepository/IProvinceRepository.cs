using System.Collections.Generic;
using System.Threading.Tasks;
using GHM.Core.Domain.Models;

namespace GHM.Core.Domain.IRepository
{
    public interface IProvinceRepository
    {
        Task<List<National>> GetAllNational(string languageId);

        Task<National> GetNationById(int nationalId);

        Task<List<Province>> GetProvinceByNational(int nationalId);

        Task<List<Province>> GetAllProvince();

        Task<List<District>> GetAllDistrict();

        Task<List<District>> GetDistrictByProvinceId(int provinceId);

        Task<Province> GetProvinceInfo(int provinceId);

        Task<District> GetDistrictInfo(int districtId);
    }
}
