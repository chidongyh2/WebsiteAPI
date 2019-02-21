using FluentValidation;
using GHM.Website.ThaiThinhMedic.Api.Infrastructure.Commands.Category;

namespace GHM.Website.ThaiThinhMedic.Api.Infrastructure.Validations
{
    public class UpdateCategoryCommandValidator : AbstractValidator<CategoryCommand>
    {
        public UpdateCategoryCommandValidator()
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Tên chuyên mục không được để trống.")
                .MaximumLength(250).WithMessage("Tên chuyên mục không được phép vượt quá 250 ký tự.");
            RuleFor(x => x.Description).MaximumLength(500).WithMessage("Chuyên mục không được phép vượt quá 500 ký tự.");            
        }
    }
}
