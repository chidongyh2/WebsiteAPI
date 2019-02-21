using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Core.Domain.IRepository;
using GHM.Core.Domain.Models;
using GHM.Core.Domain.ViewModels;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;

namespace GHM.Core.Infrastructure.Repository
{
    public class ApproverConfigRepository : RepositoryBase, IApproverConfigRepository
    {
        private readonly IRepository<ApproverConfig> _approverConfigRepository;

        public ApproverConfigRepository(IDbContext context) : base(context)
        {
            _approverConfigRepository = Context.GetRepository<ApproverConfig>();
        }

        public async Task<bool> CheckExistsUserId(string userId, ApproverConfigType type)
        {
            return await _approverConfigRepository.ExistAsync(x => x.UserId == userId && x.Type == type);
        }

        public async Task<bool> CheckExistsUserId(string tenantId, string userId, ApproverConfigType type)
        {
            return await _approverConfigRepository.ExistAsync(x => x.TenantId == tenantId && x.UserId == userId && x.Type == type);
        }

        public async Task<int> ForceDelete(string userId, ApproverConfigType type)
        {
            var approverconfigInfo = await GetInfo(userId, type);
            if (approverconfigInfo == null)
                return -1;

            _approverConfigRepository.Delete(approverconfigInfo);
            return await Context.SaveChangesAsync();
        }

        public async Task<ApproverConfig> GetInfo(string userId, ApproverConfigType type)
        {
            return await _approverConfigRepository.GetAsync(false, x => x.UserId == userId && x.Type == type);
        }

        public async Task<int> Insert(ApproverConfig approverConfig)
        {
            _approverConfigRepository.Create(approverConfig);
            return await Context.SaveChangesAsync();
        }

        public Task<List<ApproverConfigSearchViewModel>> Search(string tenantId, string keyword, ApproverConfigType? type, int page, int pageSize, out int totalRows)
        {
            Expression<Func<ApproverConfig, bool>> spec = x => x.TenantId == tenantId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (type.HasValue)
            {
                spec = spec.And(x => x.Type == type);
            }

            var query = Context.Set<ApproverConfig>()
                .Where(spec)
                .Select(x => new ApproverConfigSearchViewModel
                {
                    UserId = x.UserId,
                    FullName = x.FullName,
                    Avatar = x.Avatar,
                    UserName = x.UserName,
                    Type = x.Type
                }).AsNoTracking();

            totalRows = query.Count();
            return query
                .OrderByDescending(x => x.FullName)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Update(ApproverConfig approverConfig)
        {
            return await Context.SaveChangesAsync();
        }
    }
}
