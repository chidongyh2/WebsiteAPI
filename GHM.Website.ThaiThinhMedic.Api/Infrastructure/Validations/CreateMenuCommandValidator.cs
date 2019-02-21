using FluentValidation;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Menu;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Constants;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Models;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Validations
{
    public class CreateMenuCommandValidator : AbstractValidator<CreateMenuCommand>
    {
        public CreateMenuCommandValidator()
        {
            RuleFor(x => x.Name).NotEmpty().When(x => x.ReferenceType == ReferenceType.Custom).WithMessage("Vui lòng nhập tên lớp học.")
                .MaximumLength(256).WithMessage("Tên lớp học không được phép vượt quá 256 ký tự.");
            RuleFor(x => x.Url).NotEmpty().When(x => x.ReferenceType == ReferenceType.Custom).WithMessage("Vui lòng nhập được dẫn.")
                .MaximumLength(500).WithMessage("Đường dẫn không được phép vượt quá 256 ký tự.");
        }
    }
}
