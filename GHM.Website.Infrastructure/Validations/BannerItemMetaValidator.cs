using System;
using FluentValidation;
using FluentValidation.Validators;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Resources;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;

namespace GHM.Website.Infrastructure.Validations
{
    public class BannerItemMetaValidator : AbstractValidator<BannerItemMeta>
    {
        public BannerItemMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    websiteResourceService.GetString("Name")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} must not excceed {1} characters.",
                    websiteResourceService.GetString("Name"), 256));

            RuleFor(x => x.Url)
                  .Matches(@"(http(s)?://)?([\w-]+\.)+[\w-]+(/[\w- ;,./?%&=]*)?")
                   .WithMessage(sharedResourceService.GetString("{0} is not in the correct format.", websiteResourceService.GetString("Url")));
        }
    }
}
