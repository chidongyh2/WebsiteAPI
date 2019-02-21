using System;
using System.Collections.Generic;
using System.Text;
using FluentValidation;
using GHM.Infrastructure.Constants;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Website.Domain.Constants;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Resources;

namespace GHM.Website.Infrastructure.Validations
{
    public class AlbumMetaValidator : AbstractValidator<AlbumMeta>
    {
        public AlbumMetaValidator(IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.IsActive)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Active status")));

            RuleFor(x => x.Thumbnail)
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Thumbnail"), 500));

            RuleFor(x => x.Translations)
                .Must(x => x != null && x.Count > 0)
                .WithMessage(sharedResourceService.GetString(ErrorMessage.SelectLanguage));

            RuleForEach(x => x.Translations).SetValidator(new AlbumTranslationMetaValidator(sharedResourceService, websiteResourceService));

            RuleFor(x => x.Photos)
                .Must(x => x != null && x.Count > 0)
                .When(x => x.Type == AlbumType.Photo)
                .WithMessage(websiteResourceService.GetString("Please select at least one photo."));

            RuleFor(x => x.Videos)
                .Must(x => x != null && x.Count > 0)
                .When(x => x.Type == AlbumType.Video)
                .WithMessage(websiteResourceService.GetString("Album must contain at least 1 video."));

            RuleForEach(x => x.Photos).SetValidator(new PhotoMetaValidator(sharedResourceService, websiteResourceService));
            RuleForEach(x => x.Videos).SetValidator(new VideoMetaValidator(sharedResourceService, websiteResourceService));
        }
    }

    public class AlbumTranslationMetaValidator : AbstractValidator<AlbumTranslationMeta>
    {
        public AlbumTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.Title)
                .NotNull()
                .WithMessage(websiteResourceService.GetString("Please enter {0}.", websiteResourceService.GetString("Album title")))
                .MaximumLength(256)
                .WithMessage(sharedResourceService.GetString("{0} must not exceed {1} characters.",
                websiteResourceService.GetString("Album title"), 256));

            RuleFor(x => x.MetaTitle)
                .MaximumLength(256)
                .WithMessage(sharedResourceService.GetString("{0} must not exceed {1} characters.",
                websiteResourceService.GetString("Meta title"), 256));

            RuleFor(x => x.MetaDescription)
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString("{0} must not exceed {1} characters.",
                websiteResourceService.GetString("Meta description"), 500));

            RuleFor(x => x.Description)
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Description"), 500));
        }
    }    
}
