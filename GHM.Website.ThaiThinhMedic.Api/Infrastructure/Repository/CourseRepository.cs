using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ModelMetas;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Repository
{
    public class CourseRepository : RepositoryBase, ICourseRepository
    {
        private readonly IRepository<Course> _courseRepository;
        public CourseRepository(IDbContext context) : base(context)
        {
            _courseRepository = Context.GetRepository<Course>();
        }

        public async Task<ActionResultResponse<int>> Insert(Course course)
        {
            var isExists = await CheckExists(course.Id, course.Name);
            if (isExists)
                return new ActionResultResponse<int>(-1,
                    $"Tên khóa học: \"{course.Name}\" đã tồn tại. Vui lòng kiểm tra lại.");

            course.Name = course.Name.Trim();
            course.UnsignName = course.Name.StripVietnameseChars().ToUpper();
            course.SeoLink = course.Name.ToUrlString();
            _courseRepository.Create(course);
            var result = await Context.SaveChangesAsync();
            var message = result > 0
                ? $"Thêm mới khóa học: \"{course.Name}\" thành công."
                : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.";
            return new ActionResultResponse<int>
            {
                Code = result,
                Message = message,
                Data = course.Id
            };
        }

        public async Task<ActionResultResponse> Update(CourseMeta courseMeta)
        {
            var info = await GetInfo(courseMeta.Id.Value);
            if (info == null)
                return new ActionResultResponse(-2, "Thông tin khóa học cần chỉnh sửa không tồn tại. Vui lòng kiểm tra lại.");

            var isExists = await CheckExists(courseMeta.Id.Value, courseMeta.Name);
            if (isExists)
                return new ActionResultResponse(-1, $"Tên khóa học: \"{courseMeta.Name}\" đã tồn tại. Vui lòng kiểm tra lại.");

            info.Name = courseMeta.Name.Trim();
            info.Description = courseMeta.Description.Trim();
            info.Content = courseMeta.Content;
            info.IsActive = courseMeta.IsActive;
            info.UnsignName = info.Name.StripVietnameseChars().ToUpper();
            info.SeoLink = info.Name.ToUrlString();
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? $"Cập nhật thông tin khóa học: \"{courseMeta.Name}\" thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
        }

        public async Task<ActionResultResponse> Delete(string id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return new ActionResultResponse(-1, "Thông tin khóa học cần xóa sửa không tồn tại. Vui lòng kiểm tra lại.");

            info.IsDelete = true;
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? $"Xóa khóa học: \"{info.Name}\" thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên");
        }

        public async Task<bool> CheckExists(string id, string name)
        {
            name = name.Trim();
            return await _courseRepository.ExistAsync(x => x.Id != id && x.Name == name && !x.IsDelete);
        }

        public async Task<Course> GetInfo(string id, bool isReadOnly = false)
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
