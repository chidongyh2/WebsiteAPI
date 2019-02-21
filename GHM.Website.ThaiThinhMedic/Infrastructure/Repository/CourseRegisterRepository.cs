using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.SqlServer;
using GHM.Website.ThaiThinhMedic.Infrastructure.Constants;
using GHM.Website.ThaiThinhMedic.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Infrastructure.ViewModels;

namespace GHM.Website.ThaiThinhMedic.Infrastructure.Repository
{
    public class CourseRegisterRepository : RepositoryBase, ICourseRegisterRepository
    {
        private readonly IRepository<CourseRegister> _courseRegisterRepository;
        public CourseRegisterRepository(IDbContext context) : base(context)
        {
            _courseRegisterRepository = Context.GetRepository<CourseRegister>();
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
