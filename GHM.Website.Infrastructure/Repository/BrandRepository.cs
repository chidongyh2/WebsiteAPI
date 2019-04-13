using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Website.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Website.Infrastructure.Repository
{
    public class BrandRepository : RepositoryBase, IBrandRepository
    {
        private readonly IRepository<Brand> _brandRepository;

        public BrandRepository(IDbContext context) : base(context)
        {
            _brandRepository = Context.GetRepository<Brand>();
        }

        public Task<List<BrandSearchViewModel>> Search(string tenantId, string keyword, bool? isActive, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Brand, bool>> spec = t => !t.IsDelete && t.TenantId == tenantId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
            {
                spec = spec.And(x => x.IsActive == isActive.Value);
            }

            var query = Context.Set<Brand>().Where(spec)
                .Select(t => new BrandSearchViewModel
                {
                    Id = t.Id,
                    Name = t.Name,
                    IsActive = t.IsActive,
                    Description = t.Description,
                    Address = t.Address,
                    Email = t.Email,
                    PhoneNumber = t.PhoneNumber,
                    Website = t.Website,
                    Logo = t.Logo
                });

            totalRows = _brandRepository.Count(spec);

            return query.OrderBy(x => x.Name)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(Brand brand)
        {
            _brandRepository.Create(brand);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(string id, Brand brand)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string tenantId, string id)
        {
            var brandInfo = await GetInfo(tenantId, id);
            if (brandInfo == null)
                return -1;

            brandInfo.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string tenantId, string id)
        {
            var brandInfo = await GetInfo(tenantId, id);
            if (brandInfo == null)
                return -1;

            _brandRepository.Delete(brandInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<Brand> GetInfo(string tenantId, string id, bool isReadOnly = false)
        {
            return await _brandRepository.GetAsync(isReadOnly, x => x.TenantId == tenantId && x.Id == id && !x.IsDelete);
        }        

        public async Task<bool> CheckExistsById(string id, bool isReadOnly = false)
        {
            return await _brandRepository.ExistAsync(x => x.Id == id && !x.IsDelete);
        }

        public async Task<List<Brand>> GetAll(string tenantId, bool isReadOnly = false)
        {
            return await _brandRepository.GetsAsync(isReadOnly, x => x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<bool> CheckExistsByName(string tenantId, string name)
        {
            name = name.Trim().StripVietnameseChars().ToUpper();
            return await _brandRepository.ExistAsync(x => x.TenantId == tenantId && !x.IsDelete && x.UnsignName == name);
        }
    }

}
