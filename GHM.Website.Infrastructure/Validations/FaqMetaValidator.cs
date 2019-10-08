using System;
using FluentValidation;
using FluentValidation.Validators;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Resources;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;

namespace GHM.Website.Infrastructure.Validations
{
    public class FaqMetaValidator : AbstractValidator<FaqMeta>
    {
        public FaqMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            //RuleFor(x => x.FaqGroupId)
            //    .NotEmpty()
            //    .WithMessage(sharedResourceService.GetString("{0} can not be null.",
            //        websiteResourceService.GetString("Faq Group")));

            RuleFor(x => x.IsActive)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Active status")));

            RuleFor(x => x.Translations)
                .Must(x => x != null && x.Count > 0)                
                .WithMessage(sharedResourceService.GetString("Please select at least one language."));

            RuleForEach(x => x.Translations).SetValidator(new FaqTranslationMetaValidator(sharedResourceService, websiteResourceService));
        }
    }
    public class FaqTranslationMetaValidator : AbstractValidator<FaqTranslationMeta>
    {
        public FaqTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.Question)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    websiteResourceService.GetString("Question")));

            RuleFor(x => x.Answer)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    websiteResourceService.GetString("Answer")));

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
