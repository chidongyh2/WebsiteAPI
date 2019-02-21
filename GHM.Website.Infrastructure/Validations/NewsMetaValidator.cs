using FluentValidation;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Resources;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;

namespace GHM.Website.Infrastructure.Validations
{
    public class NewsMetaValidator : AbstractValidator<NewsMeta>
    {
        public NewsMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.IsActive)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Active status")));

            RuleFor(x => x.Status)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Approver status")));


            RuleFor(x => x.NewsTranslations)
                .Must(x => x != null && x.Count > 0)
                .WithMessage(sharedResourceService.GetString("Please select at least one language."));

            RuleForEach(x => x.NewsTranslations).SetValidator(new NewsTranslationMetaValidator(sharedResourceService, websiteResourceService));
        }
    }

    public class NewsTranslationMetaValidator : AbstractValidator<NewsTranslationMeta>
    {
        public NewsTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.Title)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    websiteResourceService.GetString("News title")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} must not excceed {1} characters.",
                    websiteResourceService.GetString("News title"), 256));

            RuleFor(x => x.Description)
                .MaximumLength(1000).WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Description"), 1000));

            RuleFor(x => x.SeoLink)
                .MaximumLength(500).WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("SeoLink"), 500));

            //RuleFor(x => x.Content)
            //    .MaximumLength(4000).WithMessage(sharedResourceService.GetString(
            //        "{0} must not exceed {1} characters.",
            //        sharedResourceService.GetString("Content"), 4000));

            RuleFor(x => x.MetaKeyword)
                .MaximumLength(500).WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Meta keyword"), 500));

            RuleFor(x => x.MetaDescription)
                .MaximumLength(1000).WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Meta description"), 1000));

            RuleFor(x => x.MetaTitle)
                .MaximumLength(256).WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Meta title"), 256));

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
