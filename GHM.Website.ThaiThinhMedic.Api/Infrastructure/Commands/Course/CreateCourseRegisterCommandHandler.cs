using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using MediatR;
using MongoDB.Bson;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Course
{
    public class CreateCourseRegisterCommand : IRequest<ActionResultResponse>
    {
        public int CourseId { get; set; }
        public int ClassId { get; set; }
        public string UserId { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Note { get; set; }
    }
    public class CreateCourseRegisterCommandHandler : IRequestHandler<CreateCourseRegisterCommand, ActionResultResponse>
    {
        private readonly ICourseRegisterRepository _courseRegisterRepository;
        private readonly IClassRepository _classRepository;
        private readonly ICourseRepository _courseRepository;

        public CreateCourseRegisterCommandHandler(ICourseRegisterRepository courseRegisterRepository, IClassRepository classRepository, ICourseRepository courseRepository)
        {
            _courseRegisterRepository = courseRegisterRepository;
            _classRepository = classRepository;
            _courseRepository = courseRepository;
        }

        public async Task<ActionResultResponse> Handle(CreateCourseRegisterCommand request, CancellationToken cancellationToken)
        {
            var courseInfo = await _courseRepository.GetInfo(request.CourseId);
            if (courseInfo == null)
                return new ActionResultResponse(-1, "Thông tin khóa học không tồn tại. Vui lòng kiểm tra lại.");

            var classInfo = await _classRepository.GetInfo(request.ClassId);
            if (classInfo == null)
                return new ActionResultResponse(-2, "Thông tin lớp học không tồn tại. Vui lòng kiểm tra lại.");

            return await _courseRegisterRepository.Insert(new CourseRegister
            {
                UserId = request.UserId,
                FullName = request.FullName.Trim(),
                PhoneNumber = request.PhoneNumber.Trim(),
                Email = request.Email?.Trim(),
                Address = request.Address?.Trim(),
                CourseId = courseInfo.Id,
                ClassId = classInfo.Id,
                Note = request.Note?.Trim()
            });
        }
    }
}
