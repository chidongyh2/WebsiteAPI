using System;
using FluentValidation;
using FluentValidation.Validators;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Resources;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;

namespace GHM.Website.Infrastructure.Validations
{

    public class CoreValueMetaValidator : AbstractValidator<CoreValueMeta>
    {
        public CoreValueMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.IsActive)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Active status")));

            RuleFor(x => x.Order)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Order")));

            RuleFor(x => x.Translations)
                .Must(x => x != null && x.Count > 0)
                .WithMessage(sharedResourceService.GetString("Please select at least one language."));

            RuleForEach(x => x.Translations).SetValidator(new CoreValueTranslationMetaValidator(sharedResourceService, websiteResourceService));
        }
    }
    public class CoreValueTranslationMetaValidator : AbstractValidator<CoreValueTranslationMeta>
    {
        public CoreValueTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    websiteResourceService.GetString("Name")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} must not excceed {1} characters.",
                    websiteResourceService.GetString("Name"), 256));

            RuleFor(x => x.Description)
                .MaximumLength(500).WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Description"), 500));

            RuleFor(x => x.LanguageId)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    sharedResourceService.GetString("Language code")))
                .MaximumLength(10).WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Language code"), 10));
        }
    }
}
