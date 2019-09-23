using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.Constants;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Infrastructure.Repository
{
  public  class AgencyInfoRepository : RepositoryBase, IAgencyInfoRepository
    {
        private readonly IRepository<AgencyInfo> _agencyInfoRepository;
        public AgencyInfoRepository(IDbContext context) : base(context)
        {
            _agencyInfoRepository = Context.GetRepository<AgencyInfo>();
        }

        public Task<List<AgencyInfoViewModel>> Search(string tenantId, string languageId, string keyword, bool? isActive, int page, int pageSize,
          out int totalRows)
        {
            Expression<Func<AgencyInfo, bool>> spec = x => !x.IsDelete && x.TenantId == tenantId;
            Expression<Func<AgencyInfoTranslation, bool>> specTranslation = xt => xt.LanguageId == languageId && !xt.IsDelete;

            if (!string.IsNullOrEmpty(keyword))
            {
                specTranslation = specTranslation.And(x => x.Name.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<AgencyInfo>().Where(spec)
                .Join(Context.Set<AgencyInfoTranslation>().Where(specTranslation), x => x.Id, xt => xt.AgencyInfoId, (x, xt) =>
                    new AgencyInfoViewModel
                    {
                        Id = x.Id,
                        TenantId = x.TenantId,
                        Email = x.Email,
                        PhoneNumber = x.PhoneNumber,
                        IdCard = x.IdCard,
                        IdCardDate = x.IdCardDate,
                        NationalId = x.NationalId,
                        ProvinceId = x.ProvinceId,
                        DistrictId = x.DistrictId,
                        Length = x.Length,
                        Width = x.Width,
                        Height = x.Height,
                        TotalArea = x.TotalArea,
                        StartTime = x.StartTime,
                        GoogleMap = x.GoogleMap,
                        Order = x.Order,
                        IsShow = x.IsShow,
                        IsActive = x.IsActive,
                        ConcurrencyStamp = x.ConcurrencyStamp,
                        CreateTime = x.CreateTime,
                        LastUpdate = x.LastUpdate.Value,
                        LanguageId = xt.LanguageId,
                        Name = xt.Name,
                        IdCardAddress = xt.IdCardAddress,
                        Address = xt.Address,
                        AddressRegistered = xt.AddressRegistered,
                        NationalName = xt.NationalName,
                        ProvinceName = xt.ProvinceName,
                        DistrictName = xt.DistrictName
                    }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.CreateTime)
                .ThenByDescending(x => x.LastUpdate)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(AgencyInfo agencyInfo)
        {
            _agencyInfoRepository.Create(agencyInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(AgencyInfo agencyInfo)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string agencyInfoId)
        {
            var info = await GetInfo(agencyInfoId);
            if (info == null)
                return -1;

            info.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string agencyInfoId)
        {
            var info = await GetInfo(agencyInfoId);
            if (info == null)
                return -1;

            _agencyInfoRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<AgencyInfo> GetInfo(string agencyInfoId, bool isReadonly = false)
        {
            return await _agencyInfoRepository.GetAsync(isReadonly, x => x.Id == agencyInfoId && !x.IsDelete);
        }

        public async Task<AgencyInfo> GetInfo(string tenantId, string agencyInfoId, bool isReadonly = false)
        {
            return await _agencyInfoRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == agencyInfoId && !x.IsDelete);
        }
    }
}
