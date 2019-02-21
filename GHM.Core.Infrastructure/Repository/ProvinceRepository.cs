﻿using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Infrastructure.SqlServer;

namespace GHM.Core.Infrastructure.Repository
{
    public class ProvinceRepository : RepositoryBase, IProvinceRepository
    {
        private readonly IRepository<Province> _provinceRepository;
        private readonly IRepository<District> _districtRepository;
        private readonly IRepository<National> _nationalRepository;

        public ProvinceRepository(IDbContext context) : base(context)
        {
            _provinceRepository = Context.GetRepository<Province>();
            _districtRepository = Context.GetRepository<District>();
            _nationalRepository = Context.GetRepository<National>();
        }

        public async Task<List<National>> GetAllNational(string languageId)
        {
            Expression<Func<National, bool>> spec = x => x.LanguageId == languageId;
            return await _nationalRepository.GetsAsync(true, spec);
        }

        public async Task<List<Province>> GetProvinceByNational(int nationalId)
        {
            return await _provinceRepository.GetsAsync(true, c => c.NationalId == nationalId);
        }

        public async Task<List<Province>> GetAllProvince()
        {
            return await _provinceRepository.GetsAsync(true);
        }

        public async Task<List<District>> GetAllDistrict()
        {
            return await _districtRepository.GetsAsync(true);
        }

        public async Task<List<District>> GetDistrictByProvinceId(int provinceId)
        {
            return await _districtRepository.GetsAsync(true, x => x.ProvinceId == provinceId);
        }

        public async Task<Province> GetProvinceInfo(int provinceId)
        {
            return await _provinceRepository.GetAsync(true, x => x.Id == provinceId);
        }

        public async Task<District> GetDistrictInfo(int districtId)
        {
            return await _districtRepository.GetAsync(true, x => x.Id == districtId);
        }

        public async Task<National> GetNationById(int nationalId)
        {
            return await _nationalRepository.GetAsync(true, c => c.Id == nationalId);
        }
    }
}
