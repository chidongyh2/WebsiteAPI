using System;
using System.Collections.Generic;
using System.Text;
using FluentValidation;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Resources;

namespace GHM.Website.Infrastructure.Validations
{
    public class PhotoMetaValidator : AbstractValidator<PhotoMeta>
    {
        public PhotoMetaValidator(IResourceService<SharedResource> sharedResourceService,
            IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.Url)
                .NotNull()
                .WithMessage(websiteResourceService.GetString("Please enter {0}.", websiteResourceService.GetString("Photo url")))
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Photo url"), 500));

            RuleFor(x => x.Title)
                .MaximumLength(256)
                .WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Title"), 256));

            RuleFor(x => x.Description)
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Description"), 500));
        }
    }
}
