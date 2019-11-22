using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.Domain.IRepository;
using GHM.Website.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace GHM.Website.Infrastructure.Repository
{
    public class CommentRepository : RepositoryBase, ICommentRepository
    {
        private readonly IRepository<Comment> _commentRepository;
        public CommentRepository(IDbContext context) : base(context)
        {
            _commentRepository = Context.GetRepository<Comment>();
        }

        public Task<List<Comment>> Search(string tenantId, bool? isShow, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Comment, bool>> spec = x => x.TenantId == tenantId;

            if (isShow.HasValue)
            {
                spec = spec.And(x => x.IsShow == isShow);
            }
            var query = Context.Set<Comment>().Where(spec).AsNoTracking();

            totalRows = query.Count();

            return query
                .OrderByDescending(x => x.CreateTime)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }
    }
}
