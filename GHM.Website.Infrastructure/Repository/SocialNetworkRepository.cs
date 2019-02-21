using GHM.Infrastructure.SqlServer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using System.Threading.Tasks;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Website.Domain.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace GHM.Website.Infrastructure.Repository
{
    public class SocialNetworkRepository : RepositoryBase, ISocialNetworkRepository
    {
        private readonly IRepository<SocialNetwork> _socialnetworkRepository;

        public SocialNetworkRepository(IDbContext context) : base(context)
        {
            _socialnetworkRepository = Context.GetRepository<SocialNetwork>();
        }

        public async Task<bool> CheckExistsBySocialNetworkId(string socialnetworkId, string tenantId, bool isReadOnly = false)
        {
            return await _socialnetworkRepository.ExistAsync(x => x.TenantId == tenantId && x.Id == socialnetworkId && !x.IsDelete);
        }

        public async Task<int> Delete(string socialnetworkId)
        {
            var socialnetworkInfo = await GetInfo(socialnetworkId);
            if (socialnetworkInfo == null)
                return -1;

            socialnetworkInfo.IsDelete = true;
            return await Context.SaveChangesAsync();
        }

        public async Task<int> ForceDelete(string socialnetworkId)
        {
            var socialnetworkInfo = await GetInfo(socialnetworkId);
            if (socialnetworkInfo == null)
                return -1;

            _socialnetworkRepository.Delete(socialnetworkInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<List<SocialNetwork>> GetAll(string tenantId, bool isReadOnly = false)
        {
            return await _socialnetworkRepository.GetsAsync(isReadOnly, x => x.TenantId == tenantId && !x.IsDelete);
        }

        public async Task<SocialNetwork> GetInfo(string socialnetworkId, bool isReadOnly = false)
        {
            return await _socialnetworkRepository.GetAsync(isReadOnly, x => x.Id == socialnetworkId && !x.IsDelete);
        }

        public Task<List<SocialNetworkViewModel>> Search(string tenantId, string keyword, int page, int pageSize, out int totalRows)
        {
            Expression<Func<SocialNetwork, bool>> spec = t => !t.IsDelete && t.TenantId == tenantId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }
                   
            var query = Context.Set<SocialNetwork>().Where(spec)
                .Select(x => new SocialNetworkViewModel()
                {
                    Id = x.Id,
                    Name = x.Name,
                    ConcurrencyStamp = x.ConcurrencyStamp,
                    Image = x.Image,
                    Order = x.Order,
                    Url = x.Url,
                    Icon = x.Icon
                }).AsNoTracking(); 

            totalRows = _socialnetworkRepository.Count(spec);
       
            return query.OrderBy(x=> x.Order)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(SocialNetwork socialnetwork)
        {
            _socialnetworkRepository.Create(socialnetwork);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Inserts(List<SocialNetwork> socialnetworks)
        {
            _socialnetworkRepository.Creates(socialnetworks);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(SocialNetwork socialnetwork)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
