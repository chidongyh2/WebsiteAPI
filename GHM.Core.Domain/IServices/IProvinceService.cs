using GHM.Core.Domain.Models;
using GHM.Infrastructure.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Core.Domain.IServices
{
    public interface IProvinceService
    {
        Task<SearchResult<National>> GetAllNational(string languageId);

        Task<National> GetNationalById(int nationalId);

        Task<SearchResult<Province>> GetProvinceByNational(int nationalId);

        Task<SearchResult<Province>> GetAllProvince();

        Task<SearchResult<District>> GetAllDistrict();

        Task<SearchResult<District>> GetDistrictByProvinceId(int provinceId);

        Task<Province> GetProvinceInfo(int provinceId);

        Task<District> GetDistrictInfo(int districtId);
    }
}
