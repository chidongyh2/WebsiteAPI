using FluentValidation;
using GHM.Core.Domain.ModelMetas;
using GHM.Core.Domain.Resources;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;

namespace GHM.Core.Infrastructure.Validations
{
    public class UserAccountMetaValidator : AbstractValidator<UserAccountMeta>
    {
        public UserAccountMetaValidator(IResourceService<GhmCoreResource> resourceService,
            IResourceService<SharedResource> sharedResourceService)
        {
            RuleFor(x => x.FullName).NotEmpty().WithMessage(resourceService.GetString("Please enter fullname."))
                .MaximumLength(50).WithMessage("Fullname must not exceed 50 characters.");
            RuleFor(x => x.PhoneNumber).NotEmpty().WithMessage(resourceService.GetString("Please enter phone number."))
                .MaximumLength(50).WithMessage("Fullname must not exceed 50 characters.")
                .Matches(@"^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$")
                .WithMessage("Invalid phone number.");
            RuleFor(x => x.Email).NotEmpty().WithMessage(resourceService.GetString("Please enter email."))
                .MaximumLength(50).WithMessage("Email must not exceed 50 characters.")
                .Must(x => x.IsEmailAddress())
                .WithMessage("Invalid email.");

        }
    }
}
