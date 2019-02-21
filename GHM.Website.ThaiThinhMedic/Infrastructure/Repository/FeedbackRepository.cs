using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class FeedbackRepository : RepositoryBase, IFeedbackReposiroty
    {
        private readonly IRepository<Feedback> _feedbackRepository;
        public FeedbackRepository(IDbContext context) : base(context)
        {
            _feedbackRepository = Context.GetRepository<Feedback>();
        }

        public async Task<int> Insert(Feedback feedback)
        {
            feedback.UnsignName = string.Format("{0} {1} {2}", feedback.FullName.StripVietnameseChars(), feedback.PhoneNumber, feedback.Email);
            _feedbackRepository.Create(feedback);
            return await Context.SaveChangesAsync();
        }

        public Task<List<Feedback>> Search(string keyword, DateTime? fromDate, DateTime? toDate, int page, int pageSize, out long totalRows)
        {
            Expression<Func<Feedback, bool>> spec = p => true;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.StripVietnameseChars();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (fromDate.HasValue)
            {
                spec = spec.And(x => x.CreateTime >= fromDate.Value);
            }

            if (toDate.HasValue)
            {
                spec = spec.And(x => x.CreateTime <= toDate.Value);
            }

            var sort = Context.Filters.Sort<Feedback, long>(a => a.Id, true);
            var paging = Context.Filters.Page<Feedback>(page, pageSize);

            totalRows = _feedbackRepository.CountLong(spec);
            return _feedbackRepository.GetsAsync(true, spec, sort, paging);
        }
    }
}
