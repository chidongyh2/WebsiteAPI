using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Repository
{
    public class ClassRepository : RepositoryBase, IClassRepository
    {
        private readonly IRepository<Classes> _classRepository;
        public ClassRepository(IDbContext context) : base(context)
        {
            _classRepository = Context.GetRepository<Classes>();
        }

        public async Task<ActionResultResponse> Insert(Classes classes)
        {
            _classRepository.Create(classes);
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? $"Thêm mới lớp hợc: \"{classes.Name}\" thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng kiểm tra lại");
        }

        public async Task<ActionResultResponse> Update(Classes classes)
        {
            var info = await GetInfo(classes.Id);
            if (info == null)
                return new ActionResultResponse(-1, $"Thông tin lớp học: \"{classes.Name}\" cần cập nhật không tồn tại. Vui lòng kiểm tra lại.");

            info.Name = classes.Name.Trim();
            info.UnsignName = info.Name.StripVietnameseChars();
            info.IsActive = classes.IsActive;
            info.StartDate = classes.StartDate;
            info.EndDate = classes.EndDate;
            info.Description = classes.Description;
            info.Address = classes.Address;
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? $"Cập nhật thông tin lớp học: \"{info.Name}\" thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
        }

        public async Task<ActionResultResponse> Delete(int id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return new ActionResultResponse(-1, "Thông tin lớp học cần xóa không tồn tại. Vui lòng kiểm tra lại.");

            _classRepository.Delete(info);
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? "Xóa lớp học thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
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
