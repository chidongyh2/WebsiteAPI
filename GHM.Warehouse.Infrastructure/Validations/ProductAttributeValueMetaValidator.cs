using FluentValidation;
using GHM.Warehouse.Domain.ModelMetas;
using GHM.Warehouse.Domain.Resources;
using GHM.Infrastructure.IServices;
using GHM.Infrastructure.Resources;
namespace GHM.Warehouse.Infrastructure.Validations
{
  public  class ProductAttributeValueMetaValidator : AbstractValidator<AttributeValueMeta>
    {
        public ProductAttributeValueMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWarehouseResource> warehouseResourceService)
        {
            RuleFor(x => x.IsActive)
                .NotNull()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.", warehouseResourceService.GetString("Active status")));

            RuleFor(x => x.Translations)
                .Must(x => x.Count > 0)
                .WithMessage(sharedResourceService.GetString("Please select at least one language."));

            RuleForEach(x => x.Translations).SetValidator(new ProductAttributeValueTranslationMetaValidator(sharedResourceService, warehouseResourceService));
        }
    }

    public class ProductAttributeValueTranslationMetaValidator : AbstractValidator<AttributeValueTranslationMeta>
    {
        public ProductAttributeValueTranslationMetaValidator(IResourceService<SharedResource> sharedResourceService, IResourceService<GhmWarehouseResource> warehouseResourceService)
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage(sharedResourceService.GetString("{0} can not be null.",
                    warehouseResourceService.GetString("Product attribute value name")))
                .MaximumLength(256).WithMessage(sharedResourceService.GetString("{0} is not allowed over {1} characters.",
                    warehouseResourceService.GetString("Product attribute value name"), 256));

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
