using FluentValidation;
using GHM.Website.Domain.ModelMetas;
using GHM.Website.Domain.Resources;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Website.Domain.Constants;

namespace GHM.Website.Infrastructure.Validations
{
    public class MenuItemMetaValidator : AbstractValidator<MenuItemMeta>
    {
        public MenuItemMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.IsActive)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", websiteResourceService.GetString("Active status")));

            RuleFor(x => x.Url)
                .MaximumLength(500).WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Url"), 256));

            RuleFor(x => x.MenuItemTranslations)
                .Must(x => x != null && x.Count > 0)
                .WithMessage(sharedResourceService.GetString("Please select at least one language."));

            RuleForEach(x => x.MenuItemTranslations).SetValidator(new MenuItemTranslationMetaValidator(sharedResourceService, websiteResourceService));
        }
    }

    public class MenuItemTranslationMetaValidator : AbstractValidator<MenuItemTranslationMeta>
    {
        public MenuItemTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    websiteResourceService.GetString("Menu item name")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} must not excceed {1} characters.",
                    websiteResourceService.GetString("Menu item name"), 256));
            
            RuleFor(x => x.LanguageId)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    sharedResourceService.GetString("Language code")))
                .MaximumLength(10).WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Language code"), 10));
        }
    }

    public class MenuMetaValidator : AbstractValidator<MenuMeta>
    {
        public MenuMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWebsiteResource> websiteResourceService)
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    websiteResourceService.GetString("Menu name")))
                .MaximumLength(500).WithMessage(sharedResourceService.GetString("{0} must not excceed {1} characters.",
                    websiteResourceService.GetString("Menu name"), 500));

            RuleFor(x => x.Position)
               .NotNull()
               .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                   websiteResourceService.GetString("Menu position")))
               .IsInEnum()
               .WithMessage(sharedResourceService.GetString("{0} not range.",
                    websiteResourceService.GetString("Menu position")));

            RuleFor(x => x.Description)
                .MaximumLength(500).WithMessage(sharedResourceService.GetString(
                    "{0} must not exceed {1} characters.",
                    sharedResourceService.GetString("Description"), 500));

        }
    }
}
