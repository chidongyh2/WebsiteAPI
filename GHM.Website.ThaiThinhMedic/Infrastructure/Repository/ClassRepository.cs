using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class ClassRepository : RepositoryBase, IClassRepository
    {
        private readonly IRepository<Classes> _classRepository;
        public ClassRepository(IDbContext context) : base(context)
        {
            _classRepository = Context.GetRepository<Classes>();
        }
       
        public async Task<Classes> GetInfo(int id, bool isReadOnly = false)
        {
            return await _classRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete);
        }

        public Task<List<ClassViewModel>> Search(string keyword, int courseId, bool? isActive, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Classes, bool>> spec = x => !x.IsDelete && x.CourseId == courseId;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim().StripVietnameseChars();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive);

            var sort = Context.Filters.Sort<Classes, int>(a => a.Id, true);
            var paging = Context.Filters.Page<Classes>(page, pageSize);
            totalRows = _classRepository.Count(spec);
            return _classRepository.GetsAsAsync(x => new ClassViewModel(x.Id, x.CourseId, x.Name, x.Description, x.StartDate, x.EndDate, x.Address, x.IsActive), spec, sort, paging);
        }
    }
}
