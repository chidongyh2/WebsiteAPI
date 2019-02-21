using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using Microsoft.EntityFrameworkCore;
namespace GHM.Website.Infrastructure.Repository
{
    public class FeedbackRepository : RepositoryBase, IFeedbackRepository
    {
        private readonly IRepository<Feedback> _feedbackRepository;
        public FeedbackRepository(IDbContext context) : base(context)
        {
            _feedbackRepository = Context.GetRepository<Feedback>();
        }

        public Task<List<Feedback>> Search(string tenantId, string keyword, DateTime? startDate, DateTime? endDate, int page, int pageSize,
            out int totalRows)
        {
            Expression<Func<Feedback, bool>> spec = x => x.TenantId == tenantId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars().ToUpper();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (startDate.HasValue)
            {
                spec = spec.And(x => x.CreateTime >= startDate.Value);
            }

            if (endDate.HasValue)
            {
                spec = spec.And(x => x.CreateTime <= endDate.Value.Date.AddDays(1).AddMinutes(-1));
            }

            var query = Context.Set<Feedback>().Where(spec)
                .Select(x => new Feedback
                {
                    Id = x.Id,
                    Email = x.Email,
                    PhoneNumber = x.PhoneNumber,
                    FullName = x.FullName,
                    Title = x.Title,
                    Content = x.Content,
                    CreateTime = x.CreateTime
                }).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.CreateTime)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<int> Insert(Feedback feedback)
        {
            _feedbackRepository.Create(feedback);
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Update(Feedback feedback)
        {
            return await Context.SaveChangesAsync();
        }

        public async Task<int> Delete(string feedbackId)
        {
            var info = await GetInfo(feedbackId);
            if (info == null)
                return -1;

            _feedbackRepository.Delete(info);
            return await Context.SaveChangesAsync();
        }

        public async Task<Feedback> GetInfo(string feedbackId, bool isReadonly = false)
        {
            return await _feedbackRepository.GetAsync(isReadonly, x => x.Id == feedbackId);
        }

        public async Task<Feedback> GetInfo(string tenantId, string feedbackId, bool isReadonly = false)
        {
            return await _feedbackRepository.GetAsync(isReadonly, x => x.TenantId == tenantId && x.Id == feedbackId);
        }
    }
}
