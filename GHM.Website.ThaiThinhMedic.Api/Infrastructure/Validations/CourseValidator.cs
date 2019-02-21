using FluentValidation;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Validations
{
    public class CourseValidator : AbstractValidator<Course>
    {
        public CourseValidator()
        {            
            RuleFor(x => x.Name).NotEmpty().WithMessage("Vui lòng nhập tên khóa học.")
                .MaximumLength(256).WithMessage("Tên khóa học không được phép vượt quá 256 ký tự.");
            RuleFor(x => x.Description).MaximumLength(500).WithMessage("Mô tả khóa học không được phép vượt quá 500 ký tự.");            
        }
    }
}
