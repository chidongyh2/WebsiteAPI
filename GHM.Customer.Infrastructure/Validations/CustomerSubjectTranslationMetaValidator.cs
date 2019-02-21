using FluentValidation;
using GHM.Customer.Domain.ModelMetas;

namespace GHM.Customer.Infrastructure.Validations
{
    public class CustomerSubjectTranslationMetaValidator : AbstractValidator<CustomerSubjectTranslationMeta>
    {
        public CustomerSubjectTranslationMetaValidator()
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Vui lòng nhập tên đối tượng khách hàng.")
               .MaximumLength(250).WithMessage("Tên đối tượng không được phép vượt quá 250 ký tự.");

        }
           
    }
}
