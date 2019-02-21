using FluentValidation;
using GHM.Product.Domain.ModelMetas;
using GHM.Product.Domain.Resources;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;

namespace GHM.Warehouse.Infrastructure.Validations
{
  public  class ProductAttributeMetaValidator : AbstractValidator<ProductAttributeMeta>
    {
        public ProductAttributeMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmProductResource> productResourceService)
        {
          RuleFor(x => x.IsActive)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", productResourceService.GetString("Active status")));

            RuleFor(x => x.IsRequire)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", productResourceService.GetString("Require status")));

            RuleFor(x => x.IsMultiple)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", productResourceService.GetString("Multiple status")));

            RuleFor(x => x.IsSelfContent)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", productResourceService.GetString("SelfContent status")));

            RuleFor(x => x.Translations)
                .Must(x => x.Count > 0)
                .WithMessage(sharedResourceService.GetString("Please select at least one language."));

            RuleForEach(x => x.Translations).SetValidator(new ProductAttributeTranslationMetaValidator(sharedResourceService, productResourceService));
        }
    }

    public class ProductAttributeTranslationMetaValidator : AbstractValidator<ProductAttributeTranslationMeta>
    {
        public ProductAttributeTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmProductResource> productResourceService)
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    productResourceService.GetString("Product attribute name")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} is not allowed over {1} characters.",
                    productResourceService.GetString("Product attribute name"), 256));

            //RuleFor(x => x.Description)
            //    .MaximumLength(500).WithMessage(sharedResourceService.GetString(
            //        "{0} is not allowed over {1} characters.",
            //        sharedResourceService.GetString("Description"), 500));

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
