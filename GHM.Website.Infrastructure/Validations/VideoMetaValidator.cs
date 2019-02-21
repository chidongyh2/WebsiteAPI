using System;
using FluentValidation;
using FluentValidation.Validators;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Resources;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;

namespace GHM.Website.Infrastructure.Validations
{
    public class VideoMetaValidator : AbstractValidator<VideoMeta>
    {
        public VideoMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.IsActive)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Active status")));

            RuleFor(x => x.Url)
               .Matches(@"(http(s)?://)?([\w-]+\.)+[\w-]+(/[\w- ;,./?%&=]*)?")
                .WithMessage(sharedResourceService.GetString("{0} is not in the correct format.", websiteResourceService.GetString("Url")));

            RuleFor(x => x.Translations)
                .Must(x => x != null && x.Count > 0)
                .WithMessage(sharedResourceService.GetString("Please select at least one language."));

            RuleForEach(x => x.Translations).SetValidator(new VideoTranslationMetaValidator(sharedResourceService, websiteResourceService));
        }
    }

    public class VideoTranslationMetaValidator : AbstractValidator<VideoTranslationMeta>
    {
        public VideoTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.Title)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    websiteResourceService.GetString("Video title")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} must not excceed {1} characters.",
                    websiteResourceService.GetString("Video title"), 256));

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
