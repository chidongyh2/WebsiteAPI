using System;
using System.Threading;
using System.Threading.Tasks;
using GHM.Infrastructure.Helpers;
using GHM.Infrastructure.Models;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.IRepository;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;
using MediatR;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Course
{
    public class CreateClassCommand : IRequest<ActionResultResponse>
    {
        public string CourseId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Address { get; set; }
    }

    public class CreateClassCommandHandler : IRequestHandler<CreateClassCommand, ActionResultResponse>
    {
        private readonly ICourseRepository _courseRepository;
        private readonly IClassRepository _classRepository;

        public CreateClassCommandHandler(ICourseRepository courseRepository, IClassRepository classRepository)
        {
            _courseRepository = courseRepository;
            _classRepository = classRepository;
        }

        public async Task<ActionResultResponse> Handle(CreateClassCommand request, CancellationToken cancellationToken)
        {
            var courseInfo = await _courseRepository.GetInfo(request.CourseId);
            if (courseInfo == null)
                return new ActionResultResponse(-1, "Thông tin khóa học không tồn tại. Vui lòng kiểm tra lại hoặc liên hệ với Quản trị viên.");

            var classes = new Classes
            {
                CourseId = courseInfo.Id,
                Address = request.Address?.Trim(),
                Name = request.Name.Trim(),
                Description = request.Description,
                StartDate = request.StartDate,
                EndDate = request.EndDate,
                IsActive = request.IsActive,
                UnsignName = request.Name.Trim().StripVietnameseChars().ToUpper()
            };
            return await _classRepository.Insert(classes);
        }
    }
}
