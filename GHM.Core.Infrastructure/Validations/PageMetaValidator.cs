using FluentValidation;
using GHM.Core.Domain.ModelMetas;

namespace GHM.Core.Infrastructure.Validations
{
    public class PageMetaValidator : AbstractValidator<PageMeta>
    {
        public PageMetaValidator()
        {
            RuleFor(x => x.Id).NotEmpty().WithMessage("Mã trang không được để trống.");
            //RuleFor(x => x.Name).NotEmpty().WithMessage("Tên trang không được để trống.");
            //RuleFor(x => x.Name).MaximumLength(50).WithMessage("Tên trang không được phép vượt quá 50 ký tự.");

        }
    }
}
