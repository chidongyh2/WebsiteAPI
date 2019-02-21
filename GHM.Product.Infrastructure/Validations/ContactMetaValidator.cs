using FluentValidation;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Extensions;
using GHM.Infrastructure.Helpers.Validations;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Product.Domain.ModelMetas;
using GHM.Product.Domain.Resources;

namespace GHM.Product.Infrastructure.Validations
{
    public class ContactMetaValidator : AbstractValidator<ContactMeta>
    {
        public ContactMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmProductResource> productResourceService)
        {
            RuleFor(x => x.SubjectId)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", productResourceService.GetString("SubjectId")));

            RuleFor(x => x.FullName)
               .NotNull()
               .WithMessage(sharedResourceService.GetString("{0} can not be null.", productResourceService.GetString("FullName")));

            RuleFor(x => x.PhoneNumber)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    sharedResourceService.GetString("Phone number")))
                .MustBePhoneNumber(sharedResourceService.GetString(ValidatorMessage.InValidPhoneNumber));

            RuleFor(x => x.Email)
                .MustBeEmail(sharedResourceService.GetString("Invalid email address."));

            // RuleFor(x => x.PositionName)
            //.NotNull()
            //.WithMessage(sharedResourceService.GetString("{0} can not be null.", productResourceService.GetString("PositionName")));
        }

    }
}
