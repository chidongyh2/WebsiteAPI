using FluentValidation;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
using GHM.Product.Domain.ModelMetas;
using GHM.Product.Domain.Resources;

namespace GHM.Product.Infrastructure.Validations
{
    public class ProductCategoryMetaValidator : AbstractValidator<ProductCategoryMeta>
    {
        public ProductCategoryMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmProductResource> productResourceService)
        {
            RuleFor(x => x.IsActive)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", productResourceService.GetString("Active status")));

            RuleFor(x => x.Translations)
                .Must(x => x?.Count > 0)
                .WithMessage(sharedResourceService.GetString("Please select at least one language."));

            RuleForEach(x => x.Translations).SetValidator(new ProductCategoryTranslationMetaValidator(sharedResourceService, productResourceService));
        }
    }

    public class ProductCategoryTranslationMetaValidator : AbstractValidator<ProductCategoryTranslationMeta>
    {
        public ProductCategoryTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmProductResource> surveyResourceService)
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    surveyResourceService.GetString("product category name")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} is not allowed over {1} characters.",
                    surveyResourceService.GetString("product category name"), 256));

            RuleFor(x => x.LanguageId)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    sharedResourceService.GetString("Language code")))
                .MaximumLength(10).WithMessage(sharedResourceService.GetString(
                    "{0} is not allowed over {1} characters.",
                    sharedResourceService.GetString("Language code"), 10));
        }
    }
}
