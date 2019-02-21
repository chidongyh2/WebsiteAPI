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
    public class CategoryMetaValidator : AbstractValidator<CategoryMeta>
    {
        public CategoryMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.IsActive)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Active status")));

            RuleFor(x => x.CategoryTranslations)
                .Must(x => x != null && x.Count > 0)
                .WithMessage(sharedResourceService.GetString("Please select at least one language."));

            RuleForEach(x => x.CategoryTranslations).SetValidator(new CategoryTranslationMetaValidator(sharedResourceService, websiteResourceService));
        }
    }

    public class CategoryTranslationMetaValidator : AbstractValidator<CategoryTranslationMeta>
    {
        public CategoryTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.Name)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("Please enter {0}.", websiteResourceService.GetString("Category name")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} must not exceed {1} characters.", websiteResourceService.GetString("Category name"), 256));

            RuleFor(x => x.MetaTitle)
                .MaximumLength(256)
                .WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Meta title"), 256));

            RuleFor(x => x.Description)
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Description"), 500));

            RuleFor(x => x.MetaDescription)
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Meta description"), 500));

            RuleFor(x => x.SeoLink)
                .MaximumLength(500)
                .WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Seolink"), 500));
        }
    }
}
