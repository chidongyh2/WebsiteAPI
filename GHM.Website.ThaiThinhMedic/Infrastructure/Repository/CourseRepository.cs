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
    public class CourseRepository : RepositoryBase, ICourseRepository
    {
        private readonly IRepository<Course> _courseRepository;
        public CourseRepository(IDbContext context) : base(context)
        {
            _courseRepository = Context.GetRepository<Course>();
        }
              
        public async Task<Course> GetInfo(int id, bool isReadOnly = false)
        {
            return await _courseRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete);
        }

        public Task<List<CourseViewModel>> Search(string keyword, bool? isActive, int page, int pageSize, out int totalRows)
        {
            Expression<Func<Course, bool>> spec = x => !x.IsDelete;
            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.StripVietnameseChars().Trim();
                spec = spec.And(x => x.UnsignName.Contains(keyword));
            }

            if (isActive.HasValue)
                spec = spec.And(x => x.IsActive == isActive);

            var sort = Context.Filters.Sort<Course, int>(a => a.Id, true);
            var paging = Context.Filters.Page<Course>(page, pageSize);
            totalRows = _courseRepository.Count(spec);
            return _courseRepository.GetsAsAsync(x => new CourseViewModel
            {
                Name = x.Name,
                Content = x.Content,
                CreateTime = x.CreateTime,
                Description = x.Description,
                IsActive = x.IsActive,
                Id = x.Id
            }, spec, sort, paging);
        }
    }
}
