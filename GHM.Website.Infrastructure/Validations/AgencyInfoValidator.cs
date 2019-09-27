using System;
using System.Collections.Generic;
using System.Text;
using FluentValidation;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.Helpers.Validations;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Resources;

namespace GHM.Website.Infrastructure.Validations
{
        public class AgencyInfoValidator : AbstractValidator<AgencyInfoMeta>
        {
            public AgencyInfoValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
            {
                RuleFor(x => x.IsActive)
                    .NotNull()
                    .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Active status")));

            RuleFor(x => x.Length)
                    .NotNull()
                    .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Length")))
                    .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.MustBeNumber, websiteResourceService.GetString("Length")));

            RuleFor(x => x.Width)
                    .NotNull()
                    .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Width")))
                    .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.MustBeNumber, websiteResourceService.GetString("Width")));

            RuleFor(x => x.Height)
                    .NotNull()
                    .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Height")))
                    .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.MustBeNumber, websiteResourceService.GetString("Height")));

            RuleFor(x => x.TotalArea)
                    .NotNull()
                    .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("TotalArea")))
                    .MustBeNumber(sharedResourceService.GetString(ValidatorMessage.MustBeNumber, websiteResourceService.GetString("TotalArea")));

            RuleFor(x => x.StartTime)
                    .NotNull()
                    .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("StartTime")))
                    .MustBeValidDate(sharedResourceService.GetString(ValidatorMessage.InValid, websiteResourceService.GetString("StartTime")));

            RuleFor(x => x.Email)
                   .NotNull()
                   .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Email")))
                   .MustBeEmail(sharedResourceService.GetString("Invalid email address."));

            RuleFor(x => x.PhoneNumber)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("PhoneNumber")))
                .WithMessage(sharedResourceService.GetString("{0} must not exceed {1} characters.", websiteResourceService.GetString("PhoneNumber"), 256))
                .Matches(@"^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$")
                .WithMessage("Invalid phone number.");

            RuleFor(x => x.IdCard)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("IdCard")));

            RuleFor(x => x.IdCardDate)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("IdCardDate")))
                .MustBeValidDate(sharedResourceService.GetString(ValidatorMessage.InValid, websiteResourceService.GetString("IdCard Date")));

            RuleFor(x => x.AgencyInfoTranslationMetas)
                    .Must(x => x != null && x.Count > 0)
                    .WithMessage(sharedResourceService.GetString("Please select at least one language."));

                RuleForEach(x => x.AgencyInfoTranslationMetas).SetValidator(new AgencyInfoTranslationValidator(sharedResourceService, websiteResourceService));
            }
        }
    public class AgencyInfoTranslationValidator : AbstractValidator<AgencyInfoTranslationMeta>
    {
        public AgencyInfoTranslationValidator(IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.Name)
                .NotNull()
                .WithMessage(websiteResourceService.GetString("Please enter {0}.", websiteResourceService.GetString("Name")))
                .MaximumLength(256)
                .WithMessage(sharedResourceService.GetString("{0} must not exceed {1} characters.",
                websiteResourceService.GetString("Album title"), 256));

            RuleFor(x => x.IdCardAddress)
                .MaximumLength(256)
                .WithMessage(sharedResourceService.GetString("{0} must not exceed {1} characters.", websiteResourceService.GetString("IdCardAddress"), 256));

            RuleFor(x => x.Address)
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString("{0} must not exceed {1} characters.", websiteResourceService.GetString("Address"), 500));

            RuleFor(x => x.AddressRegistered)
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString("{0} must not exceed {1} characters.", websiteResourceService.GetString("AddressRegistered"), 500));

        }
    }
}
