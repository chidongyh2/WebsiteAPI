using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Repository
{
    public class CourseRegisterRepository : RepositoryBase, ICourseRegisterRepository
    {
        private readonly IRepository<CourseRegister> _courseRegisterRepository;
        public CourseRegisterRepository(IDbContext context) : base(context)
        {
            _courseRegisterRepository = Context.GetRepository<CourseRegister>();
        }

        public async Task<ActionResultResponse> Insert(CourseRegister courseRegister)
        {
            var isPhoneExists = await CheckExistsByPhone(courseRegister.CourseId, courseRegister.ClassId,
                courseRegister.PhoneNumber);
            if (isPhoneExists)
                return new ActionResultResponse(-1, $"Số điện thoại: \"{courseRegister.PhoneNumber}\" đã được sử dụng để đăng ký cho lớp học này. Vui lòng kiểm tra lại.");

            var isEmailExists = await CheckExistsByEmail(courseRegister.CourseId, courseRegister.ClassId,
                courseRegister.Email);
            if (isEmailExists)
                return new ActionResultResponse(-2, $"Email \"{courseRegister.Email}\" đã được sử dụng để đăng ký cho lớp học này. Vui lòng kiểm tra lại.");

            _courseRegisterRepository.Create(courseRegister);
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? $"Thêm mới học viên: \"{courseRegister.FullName}\" thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
        }

        public async Task<ActionResultResponse> Update(CourseRegister courseRegister)
        {
            var info = await GetInfo(courseRegister.Id);
            if (info == null)
                return new ActionResultResponse(-1, "Thông tin học viên đăng ký cần xóa không tồn tại. Vui lòng kiểm tra lại.");

            info.FullName = courseRegister.FullName.Trim();
            info.Email = courseRegister.Email.Trim();
            info.PhoneNumber = courseRegister.Email.Trim();
            info.Address = courseRegister.Address.Trim();
            info.Note = courseRegister.Note;
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? $"Cập nhậ thông tin học viên: \"{info.FullName}\" thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên.");
        }

        public async Task<ActionResultResponse> Delete(int id)
        {
            var info = await GetInfo(id);
            if (info == null)
                return new ActionResultResponse(-1, "Thông tin học viên đăng ký cần xóa không tồn tại. Vui lòng kiểm tra lại.");

            info.IsDelete = true;
            var result = await Context.SaveChangesAsync();
            return new ActionResultResponse(result, result > 0 ? $"Xóa học viên: \"{info.FullName}\" thành công." : "Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với Quản trị viên");
        }

        public async Task<bool> CheckExists(int courseId, int classId, string phoneNumber)
        {
            phoneNumber = phoneNumber.Trim();
            return await _courseRegisterRepository.ExistAsync(x => x.CourseId == courseId && x.ClassId == classId && x.PhoneNumber.Equals(phoneNumber) && !x.IsDelete);
        }

        public async Task<CourseRegister> GetInfo(int id, bool isReadOnly = false)
        {
            return await _courseRegisterRepository.GetAsync(isReadOnly, x => x.Id == id && !x.IsDelete);
        }

        public Task<List<CourseRegisterViewModel>> Search(string keyword, int courseId, int classId, CourseRegisterStatus? status, int page, int pageSize, out int totalRows)
        {
            Expression<Func<CourseRegister, bool>> spec = x =>
                !x.IsDelete && x.CourseId == courseId && x.ClassId == classId;

            if (!string.IsNullOrEmpty(keyword))
            {
                keyword = keyword.Trim();
                spec = spec.And(x =>
                    x.FullName.Contains(keyword) || x.PhoneNumber.Equals(keyword) || x.Email.Contains(keyword));
            }

            if (status.HasValue)
            {
                spec = spec.And(x => x.Status == status);
            }

            var sort = Context.Filters.Sort<CourseRegister, int>(a => a.Id, true);
            var paging = Context.Filters.Page<CourseRegister>(page, pageSize);
            totalRows = _courseRegisterRepository.Count(spec);
            return _courseRegisterRepository.GetsAsAsync(x => new CourseRegisterViewModel
            {
                Id = x.Id,
                FullName = x.FullName,
                Address = x.Address,
                PhoneNumber = x.PhoneNumber,
                Email = x.Email,
                UserId = x.UserId,
                Status = x.Status,
                CreateTime = x.CreateTime
            }, spec, sort, paging);
        }

        private async Task<bool> CheckExistsByPhone(int courseId, int classId, string phoneNumber)
        {
            phoneNumber = phoneNumber.Trim();
            return await _courseRegisterRepository.ExistAsync(x =>
                x.CourseId == courseId && x.ClassId == classId && x.PhoneNumber.Equals(phoneNumber));
        }

        private async Task<bool> CheckExistsByEmail(int courseId, int classId, string email)
        {
            email = email.Trim();
            return await _courseRegisterRepository.ExistAsync(x =>
                x.CourseId == courseId && x.ClassId == classId && x.Email.Equals(email));
        }
    }
}
