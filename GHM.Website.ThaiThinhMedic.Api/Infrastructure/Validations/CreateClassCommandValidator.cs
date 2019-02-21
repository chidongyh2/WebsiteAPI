using FluentValidation;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Course;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Validations
{
    public class CreateClassCommandValidator : AbstractValidator<CreateClassCommand>
    {
        public CreateClassCommandValidator()
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Vui lòng nhập tên khóa học.")
                .MaximumLength(256).WithMessage("Tên khóa học không được phép vượt quá 256 ký tự.");
            RuleFor(x => x.Description).MaximumLength(500).WithMessage("Mô tả khóa học không được phép vượt quá 500 ký tự.");
            RuleFor(x => x.Address).NotEmpty().WithMessage("Vui lòng nhập địa chỉ.").MaximumLength(500).WithMessage("Địa chỉ không được phép vượt quá 500 ký tự.");
        }
    }
}
