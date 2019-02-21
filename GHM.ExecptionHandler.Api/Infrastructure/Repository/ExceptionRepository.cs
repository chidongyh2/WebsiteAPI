using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.ExecptionHandler.Api.Infrastructure.IRepository;
using GHM.ExecptionHandler.Api.Infrastructure.Models;
using GHM.ExecptionHandler.Api.Infrastructure.ViewModels;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;

namespace GHM.ExecptionHandler.Api.Infrastructure.Repository
{
    public class ExceptionRepository : RepositoryBase, IExceptionRepository
    {
        private readonly IRepository<CustomException> _exceptionRepository;
        public ExceptionRepository(IDbContext context) : base(context)
        {
            _exceptionRepository = Context.GetRepository<CustomException>();
        }

        public async Task<int> Insert(CustomException exception)
        {
            _exceptionRepository.Create(exception);
            return await Context.SaveChangesAsync();
        }

        public Task<List<ExceptionSearchViewModel>> Search(bool? isRead, int page, int pageSize, out int totalRows)
        {
            Expression<Func<CustomException, bool>> spec = x => true;            
            if (isRead.HasValue)
            {
                spec = spec.And(x => x.IsRead == isRead.Value);
            }

            var sort = Context.Filters.Sort<CustomException, DateTime>(x => x.CreateTime);
            var paging = Context.Filters.Page<CustomException>(page, pageSize);

            totalRows = _exceptionRepository.Count(spec);
            return _exceptionRepository.GetsAsAsync(x => new ExceptionSearchViewModel
            {               
                IsRead = x.IsRead,
                CreateTime = x.CreateTime
            }, spec, sort, paging);
        }

        public async Task<CustomException> GetInfo(string id)
        {
            return await _exceptionRepository.GetAsync(true, x => x.Id == id);
        }
    }
}
